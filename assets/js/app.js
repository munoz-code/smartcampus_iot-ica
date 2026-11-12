/* Lógica de la documentación. Los datos del equipo están en datos.js */
(function () {
  "use strict";
  const P = window.PROYECTO || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} }
  };

  const AREAS = {
    pm: "Project Manager", hardware: "Lab. Hardware", so: "Lab. Sistemas Operativos",
    desarrollo: "Desarrollo de Software", aplicaciones: "Lab. Aplicaciones",
    io: "Investigación Operativa", seginfo: "Seguridad Informática"
  };

  const ROLES = {
    pm: { titulo: "Project Manager", clase: "a-pm", taller: "Coordina a todo el equipo · Scrum Master",
      tareas: ["Planifica los sprints y actualiza la carta Gantt", "Reporta los avances al auditor de los proyectos", "Mantiene la documentación y el control de cambios"] },
    desarrollo: { titulo: "Desarrollo", clase: "a-desarrollo", taller: "Desarrollo de Software",
      tareas: ["Programa el firmware del ESP32", "Lectura y calibración de sensores", "Publicación MQTT y reconexión automática"] },
    aplicaciones: { titulo: "Aplicaciones", clase: "a-aplicaciones", taller: "Laboratorio de Aplicaciones",
      tareas: ["Diseña el dashboard y la experiencia de usuario", "Gráficos en tiempo real e históricos", "Alertas visuales e identidad del proyecto"] },
    infraestructura: { titulo: "Infraestructura", clase: "a-so", taller: "Lab. de Sistemas Operativos y Lab. de Hardware",
      tareas: ["Instala y administra el servidor Linux y la red", "Broker MQTT, base de datos y backups", "Montaje físico, alimentación y gabinete del nodo"] }
  };

  /* ---------------------------------------------------------------- bindings */
  const nodo = { nombre: "Calidad de aire (ICA), temperatura y humedad" };
  // "Apellido, Nombre" -> "Apellido"
  const apellidos = [...new Set((P.integrantes || []).map((m) => String(m.nombre).split(",")[0].trim()).filter(Boolean))].join(" · ");
  const valores = Object.assign({}, P, { nodoNombre: nodo.nombre, semanasPorSprint: P.semanasPorSprint || 3, apellidos: apellidos || "A completar" });
  $$("[data-bind]").forEach((el) => { el.textContent = valores[el.dataset.bind] ?? ""; });
  document.title = (P.nombre || "Smart Campus IoT") + " · Documentación";

  /* ---------------------------------------------------------------- navegación */
  const pages = $$("main > section.page");
  const navList = $("#navList");
  function buildNav(filter = "") {
    const f = filter.trim().toLowerCase();
    const groups = new Map();
    pages.forEach((p) => {
      const txt = (p.dataset.num + " " + p.dataset.title + " " + p.textContent).toLowerCase();
      if (f && !txt.includes(f)) return;
      if (!groups.has(p.dataset.group)) groups.set(p.dataset.group, []);
      groups.get(p.dataset.group).push(p);
    });
    navList.innerHTML = groups.size ? [...groups].map(([g, ps], i) =>
      `<div class="nav-group${g === "Guía de uso" ? " nav-guia" : ""}"><button type="button" class="nav-toggle" aria-expanded="true" aria-controls="ng${i}"><span>${g === "Guía de uso" ? '<svg class="book" aria-hidden="true"><use href="#i-book"/></svg>' : ""}${esc(g)}</span><svg class="chev" aria-hidden="true"><use href="#i-chev"/></svg></button>` +
      `<div class="nav-items" id="ng${i}"><div>${ps.map((p) =>
        `<a href="#${p.id}"><span class="n">${esc(p.dataset.num)}</span><span>${esc(p.dataset.title)}</span></a>`).join("")}</div></div></div>`
    ).join("") : `<p class="nav-empty">No hay apartados con “${esc(filter)}”.</p>`;
    // Mientras se busca, todos los grupos con resultados quedan abiertos
    if (!f) collapseGroups();
    markCurrent();
  }
  function setGroup(btn, open) {
    btn.setAttribute("aria-expanded", String(open));
    $("#" + btn.getAttribute("aria-controls")).toggleAttribute("data-closed", !open);
  }
  // Solo queda desplegado el grupo del apartado que se está viendo
  function collapseGroups() {
    const id = currentId();
    $$(".nav-group", navList).forEach((g) => setGroup($(".nav-toggle", g), !!$(`a[href="#${id}"]`, g)));
  }
  navList.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-toggle");
    if (btn) setGroup(btn, btn.getAttribute("aria-expanded") !== "true");
  });
  function markCurrent() {
    const id = currentId();
    $$("a", navList).forEach((a) => {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }
  function currentId() {
    const h = decodeURIComponent(location.hash.slice(1));
    return pages.some((p) => p.id === h) ? h : "inicio";
  }
  function show() {
    const id = currentId();
    const idx = pages.findIndex((p) => p.id === id);
    pages.forEach((p) => (p.hidden = p.id !== id));
    const page = pages[idx];
    if (!$(".crumbs", page)) {
      const c = document.createElement("div");
      c.className = "crumbs";
      c.innerHTML = `<span>${esc(P.nombre)}</span><span>/</span><span>${esc(page.dataset.group)}</span><span>/</span><span>${esc((page.dataset.num ? page.dataset.num + ". " : "") + page.dataset.title)}</span>`;
      page.prepend(c);
    }
    const prev = pages[idx - 1], next = pages[idx + 1];
    $("#pager").innerHTML =
      (prev ? `<a href="#${prev.id}"><small>← Anterior</small>${esc((prev.dataset.num ? prev.dataset.num + ". " : "") + prev.dataset.title)}</a>` : "") +
      (next ? `<a class="next" href="#${next.id}"><small>Siguiente →</small>${esc((next.dataset.num ? next.dataset.num + ". " : "") + next.dataset.title)}</a>` : "");
    if (!$("#navSearch").value.trim()) collapseGroups();
    markCurrent();
    document.body.classList.remove("nav-open");
    $("#menuBtn").setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
    // Reinicia las animaciones de los gráficos cada vez que se entra al apartado
    pages.forEach((p) => p.classList.remove("mg-run"));
    void page.offsetWidth;
    page.classList.add("mg-run");
  }
  window.addEventListener("hashchange", () => { show(); $("#contenido").focus({ preventScroll: true }); });
  $("#navSearch").addEventListener("input", (e) => buildNav(e.target.value));

  $("#menuBtn").addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    $("#menuBtn").setAttribute("aria-expanded", String(open));
  });
  $("#scrim").addEventListener("click", () => { document.body.classList.remove("nav-open"); $("#menuBtn").setAttribute("aria-expanded", "false"); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.body.classList.remove("nav-open"); });

  /* ---------------------------------------------------------------- tema */
  const themeBtn = $("#themeBtn");
  function isDark() {
    const t = document.documentElement.dataset.theme;
    return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function paintThemeIcon() { $("use", themeBtn).setAttribute("href", isDark() ? "#i-sun" : "#i-moon"); }
  themeBtn.addEventListener("click", () => {
    const t = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    store.set("sc-theme", t);
    paintThemeIcon();
  });
  paintThemeIcon();

  /* ---------------------------------------------------------------- tablas simples */
  $("#tablaCambios").innerHTML = (P.cambios || []).map((c) =>
    `<tr><td class="mono">${esc(c.version)}</td><td>${esc(c.fecha || "Pendiente")}</td><td>${esc(c.responsable)}</td><td>${esc(c.detalle)}</td></tr>`).join("");

  $("#tablaDocentes").innerHTML = (P.docentes || []).map((d) => `<tr><td>${esc(d.asignatura)}</td><td>${esc(d.nombre)}</td></tr>`).join("");

  const pesos = (n) => "$ " + Number(n || 0).toLocaleString("es-AR");
  let total = 0;
  $("#tablaBOM").innerHTML = (P.bom || []).map((b) => {
    const sub = (b.cant || 0) * (b.unit || 0); total += sub;
    return `<tr><td>${esc(b.item)}</td><td class="num">${esc(b.cant)}</td><td class="num">${b.unit ? pesos(b.unit) : "—"}</td><td class="num">${sub ? pesos(sub) : "—"}</td></tr>`;
  }).join("") + `<tr><td><b>Total de la lista de precios</b></td><td></td><td></td><td class="num"><b>${total ? pesos(total) : "a completar"}</b></td></tr>`;

  const ESTADOS = { ok: ["lvl-bajo", "OK"], falla: ["lvl-alto", "Falla"], pendiente: ["lvl-medio", "Pendiente"] };
  $("#tablaPruebas").innerHTML = (P.pruebas || []).map((t) => {
    const [cls, txt] = ESTADOS[t.estado] || ESTADOS.pendiente;
    return `<tr><td>${esc(t.fecha || "—")}</td><td>${esc(t.prueba)}</td><td>${esc(t.esperado)}</td><td>${esc(t.resultado || "—")}</td><td><span class="lvl ${cls}">${txt}</span></td></tr>`;
  }).join("");

  /* ---------------------------------------------------------------- equipo */
  const iniciales = (n) => {
    const partes = String(n).replace(",", " ").split(/\s+/).filter(Boolean);
    return partes.length ? (partes[0][0] + (partes[1] ? partes[1][0] : "")).toUpperCase() : "?";
  };
  $("#listaIntegrantes").innerHTML = (P.integrantes || []).map((m) => {
    const r = ROLES[m.rol] || ROLES.pm;
    const foto = m.foto ? `<img src="${esc(m.foto)}" alt="" loading="lazy">` : esc(iniciales(m.nombre));
    const gh = m.github ? `<p><a href="https://github.com/${esc(m.github)}" target="_blank" rel="noopener">@${esc(m.github)}</a></p>` : "";
    return `<div class="card member ${r.clase}"><div class="avatar" aria-hidden="true">${foto}</div><div><h3>${esc(m.nombre)}</h3><span class="tag ${r.clase}">${esc(r.titulo)}</span><p>${esc(m.cargo || "")}</p>${gh}</div></div>`;
  }).join("");

  /* ---------------------------------------------------------------- Gantt en Google Sheets */
  const sheetUrl = (() => {
    try {
      const u = new URL(P.ganttSheetUrl || "");
      return u.protocol === "https:" && u.hostname === "docs.google.com" ? u.href : "";
    } catch (e) { return ""; }
  })();
  if (sheetUrl) {
    // widget=true y headers=false muestran la hoja limpia, sin el encabezado de Google
    const embed = new URL(sheetUrl);
    if (/\/pubhtml/.test(embed.pathname)) { embed.searchParams.set("widget", "true"); embed.searchParams.set("headers", "false"); }
    $("#sheetFrame").src = embed.href;
    $("#sheetFrame").hidden = false;
    $("#sheetEmpty").hidden = true;
    $("#sheetOpen").href = sheetUrl;
    $("#sheetOpen").hidden = false;
    $("#sheetEstado").className = "status on";
    $("#sheetEstado").textContent = "Planilla conectada";
  } else if (P.ganttSheetUrl) {
    $("#sheetEstado").textContent = "Enlace no válido: debe ser de docs.google.com";
  }

  /* ---------------------------------------------------------------- visor del proyecto */
  const frame = $("#viewerFrame"), empty = $("#viewerEmpty"), input = $("#viewerInput"), open = $("#viewerOpen");
  const validUrl = (u) => { try { const x = new URL(u); return /^https?:$/.test(x.protocol) ? x.href : ""; } catch (e) { return ""; } };
  function load(url) {
    const u = validUrl(url);
    if (!u) {
      frame.hidden = true; frame.removeAttribute("src"); empty.hidden = false;
      open.setAttribute("aria-disabled", "true"); open.removeAttribute("href"); open.style.opacity = ".5";
      return;
    }
    input.value = u; frame.src = u; frame.hidden = false; empty.hidden = true;
    open.href = u; open.removeAttribute("aria-disabled"); open.style.opacity = "";
  }
  const oficial = validUrl(P.previewUrl || "");
  load(oficial || store.get("sc-preview-test") || "");
  $("#viewerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const u = validUrl(input.value.trim());
    if (!oficial) store.set("sc-preview-test", u || null);
    load(u);
  });
  $("#viewerReload").addEventListener("click", () => { if (frame.src) frame.src = frame.src; });
  $$(".seg button").forEach((b) => b.addEventListener("click", () => {
    $$(".seg button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    frame.style.width = b.dataset.w;
    frame.style.maxWidth = "100%";
  }));

  const link = (u, txt) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(txt || u)}</a>`;
  $("#accesoPreview").innerHTML = oficial ? link(oficial) : 'Sin publicar todavía.';
  $("#accesoRepo").innerHTML = validUrl(P.repoUrl || "") ? link(P.repoUrl) : 'Sin cargar.';
  $("#estadoPublicacion").innerHTML = oficial ? '<span class="status on">Publicado</span>' : '<span class="status off">Sin publicar</span>';

  /* ---------------------------------------------------------------- motion graphics */
  const sinMovimiento = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (sinMovimiento) $$(".mg-packets").forEach((g) => g.remove());

  // Cada diagrama SVG aparece por partes: las cajas suben, las líneas se dibujan
  $$("figure.diagram svg").forEach((svg) => {
    let i = 0;
    $$("rect.d-box, rect.d-accent, rect.d-dash, circle.d-box, circle.d-accent, text, path.d-line, .d-line path, .resp path, path.mg-line", svg)
      .forEach((el) => {
        if (el.hasAttribute("transform") || el.closest("g[transform], .mg-packets")) return;
        const linea = el.tagName === "path" && !el.classList.contains("d-dash") && !el.closest("#enlaces");
        el.classList.add(linea ? "mg-draw" : "mg-el");
        if (linea) el.setAttribute("pathLength", "1");
        el.style.setProperty("--i", Math.min(i++, 40));
      });
  });
  $$(".flow span").forEach((el, k) => el.style.setProperty("--i", k));
  $$(".g-sprint").forEach((el, k) => el.style.setProperty("--i", k));

  /* ---------------------------------------------------------------- inicio */
  buildNav();
  show();
})();