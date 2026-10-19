(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const nf = new Intl.NumberFormat("en-US");
  const money = n => nf.format(n) + "\u00a0" + SHOP.currency;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = id => PRODUCTS.find(p => p.id === id);
  const uniq = a => [...new Set(a)];
  const KEY = "merch-cart-v1";

  // fandom and character may be a string or a list of strings
  const arr = v => Array.isArray(v) ? v.filter(Boolean) : v ? [v] : [];
  const meta = p => [arr(p.fandom).join(" / "), arr(p.character).join(" / ")].filter(Boolean).join(", ");
  // inside the admin preview (an iframe) items get a data-cfg attribute so a click can open them in the editor
  const ED = window.parent !== window;
  const cf = p => ED ? ` data-cfg="${p}"` : "";

  const FANDOMS = uniq(PRODUCTS.flatMap(p => arr(p.fandom)));
  const tint = p => "tint-" + Math.max(0, FANDOMS.indexOf(arr(p.fandom)[0])) % 5;
  const letter = p => esc((arr(p.character)[0] || p.name).trim().charAt(0).toUpperCase());

  /* ---------- state ---------- */
  const filters = { fandom: "", character: "", type: "" };
  let cart = {};
  const buyer = { zone: SHOP.zones[0].id, name: "", address: "" };

  try {
    const d = JSON.parse(localStorage.getItem(KEY) || "{}");
    cart = d.cart || {};
    Object.assign(buyer, d.buyer || {});
  } catch (e) { /* storage unavailable, work without it */ }

  for (const id in cart) {
    const p = byId(id);
    if (!p || p.soldOut || !(cart[id] > 0)) delete cart[id];
  }
  if (!SHOP.zones.some(z => z.id === buyer.zone)) buyer.zone = SHOP.zones[0].id;

  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify({ cart, buyer })); } catch (e) { /* ignore */ }
  };

  /* ---------- shared pieces ---------- */
  let toastTimer;
  function toast(text) {
    const t = $("#toast");
    t.textContent = text;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
  }

  /* ---------- filters ---------- */
  function chipRow(sel, values, key) {
    $(sel).innerHTML = ["", ...values].map(v =>
      `<button type="button" class="chip" data-key="${key}" data-val="${esc(v)}" aria-pressed="${filters[key] === v}">${v ? esc(v) : "all"}</button>`
    ).join("");
  }

  function renderFilters() {
    const chars = uniq(PRODUCTS.filter(p => !filters.fandom || arr(p.fandom).includes(filters.fandom)).flatMap(p => arr(p.character)));
    if (filters.character && !chars.includes(filters.character)) filters.character = "";
    chipRow("#f-type", uniq(PRODUCTS.map(p => p.type)), "type");
    chipRow("#f-fandom", FANDOMS, "fandom");
    chipRow("#f-character", chars, "character");
  }

  /* ---------- shop ---------- */
  const addLabel = q => q ? `In cart: ${q}` : "Add to cart";

  function card(p) {
    const q = cart[p.id] || 0;
    const art = p.img
      ? `<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">`
      : `<span class="mono" aria-hidden="true">${letter(p)}</span>`;
    return `<article class="item${p.soldOut ? " sold" : ""}"${cf("PRODUCTS." + PRODUCTS.indexOf(p))}>
      <div class="shot ${tint(p)}">
        ${art}
        <div class="pills"><span class="pill">${esc(p.type)}</span>${p.isNew ? '<span class="pill rose">new</span>' : ""}${p.soldOut ? '<span class="pill dark">sold out</span>' : ""}</div>
        <span class="sticker">${money(p.price)}</span>
      </div>
      <h3>${esc(p.name)}</h3>
      ${meta(p) ? `<p class="meta">${esc(meta(p))}</p>` : ""}
      ${p.desc ? `<p class="desc">${esc(p.desc)}</p>` : ""}
      <div class="actions">
        <button type="button" class="btn${q ? "" : " ghost"}" data-add="${esc(p.id)}"${p.soldOut ? " disabled" : ""}>${p.soldOut ? "Sold out" : addLabel(q)}</button>
        ${p.soldOut ? "" : `<button type="button" class="x" data-rm="${esc(p.id)}" aria-label="Remove from cart" title="Remove from cart"${q ? "" : " hidden"}>✕</button>`}
      </div>
    </article>`;
  }

  function renderShop() {
    const list = PRODUCTS.filter(p =>
      (!filters.fandom || arr(p.fandom).includes(filters.fandom)) &&
      (!filters.character || arr(p.character).includes(filters.character)) &&
      (!filters.type || p.type === filters.type));
    const active = Object.values(filters).filter(Boolean).length;
    $("#count").textContent = list.length ? `Found: ${list.length}` : "";
    $("#reset").hidden = !active;
    $("#f-badge").hidden = !active;
    $("#f-badge").textContent = active;
    $("#grid").innerHTML = list.length
      ? list.map(card).join("")
      : `<p class="empty">Nothing found. Try a different combination of filters.</p>`;
  }

  function renderNew() {
    const fresh = PRODUCTS.filter(p => p.isNew);
    $("#new-block").hidden = !fresh.length;
    $("#all-title").hidden = !fresh.length;
    $("#new-grid").innerHTML = fresh.map(card).join("");
  }

  function refreshAddButtons() {
    document.querySelectorAll("[data-add]").forEach(b => {
      if (b.disabled) return;
      const q = cart[b.dataset.add] || 0;
      b.textContent = addLabel(q);
      b.classList.toggle("ghost", !q);
    });
    document.querySelectorAll("[data-rm]").forEach(b => { b.hidden = !(cart[b.dataset.rm] > 0); });
  }

  /* ---------- cart: calculations ---------- */
  function totals() {
    const rows = Object.entries(cart).map(([id, q]) => ({ p: byId(id), q })).filter(r => r.p);
    const sub = rows.reduce((s, r) => s + r.p.price * r.q, 0);
    const count = rows.reduce((s, r) => s + r.q, 0);
    const z = SHOP.zones.find(z => z.id === buyer.zone) || SHOP.zones[0];
    let ship = 0, free = false;
    if (rows.length) {
      ship = z.base;
      if (z.freeFrom && sub >= z.freeFrom) { ship = 0; free = true; }
    }
    return { rows, sub, count, z, ship, free, total: sub + ship };
  }

  function template(t) {
    const lines = t.rows.map((r, i) =>
      `${i + 1}. ${r.p.name}${meta(r.p) ? " (" + meta(r.p) + ")" : ""}: ${r.q} × ${money(r.p.price)} = ${money(r.p.price * r.q)}`);
    return [
      "Hi! I'd like to place an order.",
      "",
      "Order:",
      ...lines,
      "",
      `Items: ${money(t.sub)}`,
      `Shipping (${t.z.name}): ${t.free ? "free" : money(t.ship)}`,
      `Total: ${money(t.total)}`,
      "",
      "Recipient details:",
      `Full name: ${buyer.name.trim() || "—"}`,
      `Address and postal code: ${buyer.address.trim() || "—"}`,
      "",
      "I have read the terms.",
    ].join("\n").replace(/\u00a0/g, " ");
  }

  function renderTemplate(t = totals()) {
    $("#tpl").value = t.rows.length ? template(t) : "";
  }

  /* ---------- cart: rendering ---------- */
  function renderCart() {
    const t = totals();
    $("#cart-count").textContent = t.count;
    $("#cart-empty").hidden = t.rows.length > 0;
    $("#cart-body").hidden = t.rows.length === 0;

    $("#cart-items").innerHTML = t.rows.map(({ p, q }) => `
      <li class="line">
        <div class="th ${tint(p)}">${p.img ? `<img src="${esc(p.img)}" alt="" loading="lazy">` : letter(p)}</div>
        <div class="info">
          <strong>${esc(p.name)}</strong>
          <span class="sub">${esc(meta(p))}</span>
          <span class="step">
            <button type="button" data-dec="${esc(p.id)}" aria-label="Decrease">−</button>
            <output>${q}</output>
            <button type="button" data-inc="${esc(p.id)}" aria-label="Increase">+</button>
          </span>
        </div>
        <div class="end">
          <span class="lp">${money(p.price * q)}</span>
          <button type="button" class="x" data-del="${esc(p.id)}" aria-label="Remove: ${esc(p.name)}">✕</button>
        </div>
      </li>`).join("");

    $("#sum-items").textContent = money(t.sub);
    $("#sum-ship-label").textContent = `Shipping (${t.z.days})`;
    $("#sum-ship").textContent = t.free ? "free" : money(t.ship);
    $("#sum-total").textContent = money(t.total);

    const left = t.z.freeFrom ? t.z.freeFrom - t.sub : 0;
    $("#ship-hint").textContent = t.rows.length && t.z.freeFrom && !t.free
      ? `${money(left)} more for free shipping to this destination.`
      : "I'll confirm the final shipping cost in my reply.";

    renderTemplate(t);
    refreshAddButtons();
  }

  function setQty(id, q) {
    const p = byId(id);
    if (!p || p.soldOut) return;
    if (q <= 0) delete cart[id]; else cart[id] = Math.min(q, 99);
    save();
    renderCart();
  }

  /* ---------- open and close the cart ---------- */
  const cartEl = $("#cart");
  let lastFocus = null;
  function openCart() {
    lastFocus = document.activeElement;
    cartEl.inert = false;
    cartEl.classList.add("open");
    $("#overlay").classList.add("show");
    document.body.classList.add("lock");
    $("#cart-close").focus();
  }
  function closeCart() {
    cartEl.classList.remove("open");
    $("#overlay").classList.remove("show");
    document.body.classList.remove("lock");
    cartEl.inert = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------- copying ---------- */
  async function copyText(ta, btn, label) {
    let ok = false;
    try { await navigator.clipboard.writeText(ta.value); ok = true; } catch (e) {
      ta.select();
      try { ok = document.execCommand("copy"); } catch (e2) { ok = false; }
    }
    toast(ok ? "Copied. Send it to the author" : "Couldn't copy, select the text manually");
    if (ok) {
      btn.textContent = "Copied";
      setTimeout(() => { btn.textContent = label; }, 2000);
    }
  }

  /* ---------- events ---------- */
  $("#filters").addEventListener("click", e => {
    const c = e.target.closest(".chip");
    if (!c) return;
    filters[c.dataset.key] = c.dataset.val;
    renderFilters();
    renderShop();
  });

  $("#reset").addEventListener("click", () => {
    filters.fandom = filters.character = filters.type = "";
    renderFilters();
    renderShop();
  });

  $("#f-toggle").addEventListener("click", e => {
    const open = $("#filters").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });

  const shopClick = e => {
    const rm = e.target.closest("[data-rm]");
    if (rm) {
      setQty(rm.dataset.rm, 0);
      toast("Removed from cart");
      return;
    }
    const b = e.target.closest("[data-add]");
    if (!b || b.disabled) return;
    const id = b.dataset.add;
    setQty(id, (cart[id] || 0) + 1);
    toast("Added to cart");
  };
  $("#grid").addEventListener("click", shopClick);
  $("#new-grid").addEventListener("click", shopClick);

  $("#cart-items").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.inc) setQty(b.dataset.inc, (cart[b.dataset.inc] || 0) + 1);
    else if (b.dataset.dec) setQty(b.dataset.dec, (cart[b.dataset.dec] || 0) - 1);
    else if (b.dataset.del) setQty(b.dataset.del, 0);
  });

  $("#cart-open").addEventListener("click", openCart);
  $("#cart-close").addEventListener("click", closeCart);
  $("#cart-shop").addEventListener("click", () => { closeCart(); location.hash = "#shop"; });
  $("#overlay").addEventListener("click", closeCart);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && cartEl.classList.contains("open")) closeCart(); });
  $("#copy").addEventListener("click", () => copyText($("#tpl"), $("#copy"), "Copy template"));

  $("#zone").addEventListener("change", e => { buyer.zone = e.target.value; save(); renderCart(); });
  [["#b-name", "name"], ["#b-address", "address"]].forEach(([sel, key]) => {
    const el = $(sel);
    el.value = buyer[key] || "";
    el.addEventListener("input", () => { buyer[key] = el.value; save(); renderTemplate(); });
  });

  /* ---------- start ---------- */
  $("#zone").innerHTML = SHOP.zones.map(z => `<option value="${esc(z.id)}">${esc(z.name)}</option>`).join("");
  $("#zone").value = buyer.zone;

  /* ---------- terms and how it works: texts may contain HTML, e.g. a link ---------- */
  const tableHtml = t => {
    const rows = (t.rows || []).filter(r => r && r.length), head = t.header !== false && rows.length > 1;
    const tr = (r, tag) => `<tr>${r.map(c => `<${tag}${tag === "th" ? ' scope="col"' : ""}>${c}</${tag}>`).join("")}</tr>`;
    return `<div class="table-scroll"><table>${head ? `<thead>${tr(rows[0], "th")}</thead>` : ""}<tbody>${rows.slice(head ? 1 : 0).map(r => tr(r, "td")).join("")}</tbody></table></div>`;
  };
  const blockHtml = b =>
    b.type === "ol" || b.type === "ul" ? `<${b.type}>${(b.items || []).map(t => `<li>${t}</li>`).join("")}</${b.type}>` :
    b.type === "table" ? tableHtml(b) :
    `<p>${b.text || ""}</p>`;
  $("#faq").innerHTML = TERMS.items.map((it, i) =>
    `<details${it.expanded ? " open" : ""}><summary>${esc(it.title)}</summary><div class="ans"${cf("TERMS.items." + i)}>${(it.blocks || []).map(blockHtml).join("")}</div></details>`).join("");
  $("#how").innerHTML = CUSTOM.how.map(t => `<li>${t}</li>`).join("");

  document.querySelectorAll("[data-contact]").forEach(a => {
    a.href = SHOP.contact.url;
    a.textContent = SHOP.contact.name + " " + SHOP.contact.text;
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* ---------- home: links ---------- */
  $("#artist-name").textContent = ARTIST.name;
  $("#artist-tagline").textContent = ARTIST.tagline;
  if (ED) { $("#artist-name").dataset.cfg = "ARTIST.name"; $("#artist-tagline").dataset.cfg = "ARTIST.tagline"; }
  const ICONS = {
    telegram:  '<path d="M21.5 3.5 2.5 10.8l5.6 2.1 2 6.1 3.2-3.7 4.9 3.6z"/><path d="M8.1 12.9 21.5 3.5"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6"/>',
    x:         '<path d="M4 4l16 16M20 4 4 20"/>',
    boosty:    '<path d="M12 20.5s-8-4.7-8-10.6A4.4 4.4 0 0 1 12 7.4a4.4 4.4 0 0 1 8 2.5c0 5.9-8 10.6-8 10.6z"/>',
    email:     '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6.5L20.5 7"/>',
  };
  $("#links-list").innerHTML = LINKS.map((l, i) => {
    const label = esc(l.name + (l.text ? ": " + l.text : ""));
    const art = ICONS[l.icon]
      ? `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[l.icon]}</svg>`
      : `<span class="ltr" aria-hidden="true">${esc(l.name.trim().charAt(0).toUpperCase())}</span>`;
    return `<a class="link-card"${cf("LINKS." + i)} href="${esc(l.url)}" aria-label="${label}" title="${label}"${/^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : ""}>${art}</a>`;
  }).join("");

  /* ---------- custom merch and commissions ---------- */
  function setStatus(sel, cfg) {
    const el = $(sel);
    el.textContent = (cfg.open ? "● " : "○ ") + (cfg.open ? cfg.status : cfg.closedStatus);
    el.classList.toggle("closed", !cfg.open);
  }

  // custom merch
  setStatus("#custom-status", CUSTOM);
  $("#custom-cta").hidden = !CUSTOM.open;
  $("#custom-types").innerHTML = CUSTOM.types.map((t, i) => `
    <article class="offer tint-${i % 5}"${cf("CUSTOM.types." + i)}>
      <h3>${esc(t.name)}</h3>
      <p class="price">${t.from == null ? "ask me" : "from " + money(t.from)}</p>
      <p class="meta">Minimum: ${t.minQty} pcs</p>
      ${t.img ? `<img class="ex" src="${esc(t.img)}" alt="${esc(t.name)} example" loading="lazy">` : ""}
    </article>`).join("");

  // digital commissions: status and price list
  setStatus("#comm-status", COMMISSIONS);
  $("#comm-cta").hidden = !COMMISSIONS.open;
  $("#comm-types").innerHTML = COMMISSIONS.types.map((t, i) => `
    <article class="offer tint-${(i + 2) % 5}"${cf("COMMISSIONS.types." + i)}>
      <h3>${esc(t.name)}</h3>
      <p class="price">${money(t.price)}</p>
      ${t.img ? `<img class="ex" src="${esc(t.img)}" alt="${esc(t.name)} example" loading="lazy">` : ""}
    </article>`).join("");
  $("#comm-addons").innerHTML = COMMISSIONS.addons.map((x, i) =>
    `<li${cf("COMMISSIONS.addons." + i)}><span>${esc(x.name)}</span><b>+${x.percent ? nf.format(x.price) + "%" : money(x.price)}</b></li>`).join("");
  $("#comm-note").textContent = COMMISSIONS.note || "";
  if (ED) $("#comm-note").dataset.cfg = "COMMISSIONS.note";

  // gallery
  $("#gallery-title").hidden = !GALLERY.length;
  $("#gallery").innerHTML = GALLERY.map((g, i) => g.img
    ? `<div class="art"${cf("GALLERY." + i)}><img src="${esc(g.img)}" alt="${esc(g.alt || "")}" loading="lazy" decoding="async"></div>`
    : `<div class="art tint-${i % 5}"${cf("GALLERY." + i)} style="aspect-ratio:${Number(g.ratio) || 1}" role="img" aria-label="${esc(g.alt || "Artwork placeholder")}"></div>`
  ).join("");

  /* ---------- cards: one visible at a time ---------- */
  const stage = $("#stage");
  const panels = [...document.querySelectorAll(".panel")];
  const tabs = [...document.querySelectorAll("[data-tab]")];

  function showPanel(id, scroll) {
    if (!panels.some(p => p.id === id)) id = panels[0].id;
    panels.forEach(p => { p.hidden = p.id !== id; });
    tabs.forEach(t => {
      const on = t.dataset.tab === id;
      t.classList.toggle("on", on);
      if (on) t.setAttribute("aria-current", "page"); else t.removeAttribute("aria-current");
    });
    if (scroll && stage.getBoundingClientRect().top < 0) stage.scrollIntoView();
  }

  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!panels.some(p => p.id === id)) return;
    e.preventDefault();
    showPanel(id, true);
    history.pushState(null, "", "#" + id);
  });
  window.addEventListener("popstate", () => showPanel(location.hash.slice(1), true));
  window.addEventListener("hashchange", () => showPanel(location.hash.slice(1), true));
  showPanel(location.hash.slice(1), false);

  renderFilters();
  renderShop();
  renderNew();
  renderCart();

  /* ---------- twinkling stars in the side margins ---------- */
  const sky = document.createElement("div");
  sky.className = "stars";
  sky.setAttribute("aria-hidden", "true");
  const rnd = (a, b) => a + Math.random() * (b - a);
  for (let i = 0; i < 28; i++) {
    const s = document.createElement("span");
    s.className = "star " + (i % 2 ? "r" : "l");
    s.style.cssText = `--x:${rnd(.1, .8).toFixed(2)};--y:${rnd(2, 96).toFixed(1)};--s:${Math.round(rnd(8, 22))};--d:${rnd(2.4, 5.5).toFixed(1)}s;--delay:-${rnd(0, 5).toFixed(1)}s`;
    sky.append(s);
  }
  document.body.prepend(sky);
})();
