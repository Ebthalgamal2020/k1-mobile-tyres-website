/* Version switcher for the Road Max concept prototypes (navigation only).
   Four pairs: V1, V3, V4, V5 — each with Current (vN-prototype.html) and Previous (vN-prototype-previous.html).
   Self-contained: its own markup and styles live in a shadow root, so it cannot affect the page design.
   It places itself where it covers none of the page's own header, headings, buttons or fixed bars. */
(function () {
  'use strict';
  if (window.self !== window.top) return;            // not inside the board / before-after frames
  var VERSIONS = ['v1', 'v3', 'v4', 'v5'];
  var m = location.pathname.match(/(v[1345])-prototype(-previous)?\.html$/i);
  if (!m) return;
  var v = m[1].toLowerCase(), prev = !!m[2];
  function href(ver, isPrev) { return ver + '-prototype' + (isPrev ? '-previous' : '') + '.html'; }

  var host = document.createElement('div');
  host.id = 'rm-version-bar';
  host.style.cssText = 'position:fixed;left:0;top:0;z-index:2147483000;visibility:hidden;';
  var root = host.attachShadow({ mode: 'open' });

  root.innerHTML =
    '<style>' +
    ':host{all:initial}' +
    '*{box-sizing:border-box}' +
    '.bar{position:relative;display:flex;align-items:center;gap:4px;padding:4px;background:rgba(10,14,20,.94);color:#fff;border:1px solid rgba(255,255,255,.2);' +
      'border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.35);font:600 12px/1 system-ui,-apple-system,"Segoe UI",sans-serif;letter-spacing:.02em}' +
    '.grp{display:flex;background:rgba(255,255,255,.08);border-radius:6px;padding:2px}' +
    'a,button{display:flex;align-items:center;justify-content:center;gap:6px;min-width:40px;height:40px;padding:0 10px;border:0;border-radius:5px;' +
      'background:none;color:#d5dbe3;font:inherit;text-decoration:none;white-space:nowrap;cursor:pointer}' +
    'a:hover,button:hover{color:#fff;background:rgba(255,255,255,.1)}' +
    'a[aria-current="page"]{background:#fff;color:#0b0e14}' +
    '.st a.p[aria-current="page"]{background:#ffb800;color:#0b0e14}' +
    'a:focus-visible,button:focus-visible{outline:2px solid #ffb800;outline-offset:2px}' +
    '.lab{padding:0 6px 0 6px;color:#9aa5b1;font-weight:500}' +
    '.pick{display:none}' +
    '.menu{display:none;position:absolute;left:4px;flex-direction:column;gap:2px;padding:4px;background:#0a0e14;box-shadow:0 14px 34px rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.2);border-radius:8px}' +
    '.menu.up{bottom:calc(100% + 6px)} .menu.down{top:calc(100% + 6px)} .menu.side{left:calc(100% + 6px) !important;bottom:0;top:auto}' +
    '.menu a{justify-content:flex-start;width:120px}' +
    '.menu.open{display:flex}' +
    '.caret{width:10px;height:10px}' +
    '.chip{display:none}' +
    '@media (max-width:700px){' +
      '.bar{padding:0;border-radius:24px;overflow:visible}' +
      '.lab,.vers,.pick,.bar>.st{display:none}' +
      '.bar{border-radius:0 8px 8px 0;border-left:0}' +
      '.chip{display:flex;flex-direction:column;width:20px;height:auto;min-width:0;padding:10px 0;border-radius:0 8px 8px 0;color:#fff;gap:6px;font-size:11px}' +
      '.chip i{font-style:normal;writing-mode:vertical-rl;transform:rotate(180deg);padding:6px 1px;border-radius:3px;background:#fff;color:#0b0e14;font-size:10px;letter-spacing:.06em}' +
      '.chip .caret{transform:rotate(-90deg)}' +
      '.chip{position:relative}' +
      '.chip::before{content:"";position:absolute;left:0;top:0;bottom:0;width:var(--hit,20px)}' +
      '.chip i.p{background:#ffb800}' +
      '.menu{width:max-content;padding:8px;gap:8px}' +
      '.menu .row{display:flex;gap:4px}' +
      '.menu a{width:auto;height:48px;min-width:52px;justify-content:center}' +
      '.menu .row.st2 a{min-width:110px}' +
    '}' +
    '</style>' +
    '<nav class="bar" aria-label="Concept versions">' +
      '<span class="lab">Version</span>' +
      '<div class="grp vers">' + VERSIONS.map(function (x) {
        return '<a href="' + href(x, prev) + '"' + (x === v ? ' aria-current="page"' : '') + '>' + x.toUpperCase() + '</a>';
      }).join('') + '</div>' +
      '<button type="button" class="chip" id="pick" aria-expanded="false" aria-controls="menu" aria-label="Switch version: now ' + v.toUpperCase() + (prev ? ' previous' : ' current') + '">' +
        v.toUpperCase() + '<i class="' + (prev ? 'p' : '') + '">' + (prev ? 'Previous' : 'Current') + '</i>' +
        '<svg class="caret" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>' +
      '<div class="menu" id="menu">' +
        '<div class="row grp">' + VERSIONS.map(function (x) {
          return '<a href="' + href(x, prev) + '"' + (x === v ? ' aria-current="page"' : '') + '>' + x.toUpperCase() + '</a>';
        }).join('') + '</div>' +
        '<div class="row grp st st2"><a href="' + href(v, false) + '"' + (!prev ? ' aria-current="page"' : '') + '>Current</a>' +
          '<a class="p" href="' + href(v, true) + '"' + (prev ? ' aria-current="page"' : '') + '>Previous</a></div>' +
      '</div>' +
      '<div class="grp st" role="group" aria-label="' + v.toUpperCase() + ': current or previous">' +
        '<a href="' + href(v, false) + '"' + (!prev ? ' aria-current="page"' : '') + '>Current</a>' +
        '<a class="p" href="' + href(v, true) + '"' + (prev ? ' aria-current="page"' : '') + '>Previous</a>' +
      '</div>' +
    '</nav>';

  var pick = root.getElementById('pick'), menu = root.getElementById('menu');
  pick.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = !menu.classList.contains('open');
    menu.classList.toggle('open', open); pick.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function () { menu.classList.remove('open'); pick.setAttribute('aria-expanded', 'false'); });

  /* ---------- placement: first spot that covers nothing important ---------- */
  function boxes() {
    var out = [], sel = 'a,button,input,select,textarea,h1,h2,h3,h4,p,li,label,blockquote,figcaption,img,svg,[role="button"]';
    var els = document.body.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el === host) continue;
      var cs = getComputedStyle(el), fixed = cs.position === 'fixed' || cs.position === 'sticky';
      if (!fixed && !el.matches(sel)) continue;
      if (cs.display === 'none' || cs.visibility === 'hidden' || (+cs.opacity === 0 && !fixed)) continue;   // fixed docks that are still fading in still count
      var r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2 || r.bottom < 0 || r.top > innerHeight) continue;
      if (!fixed && r.width > innerWidth * .9 && r.height > innerHeight * .6) continue;   // full-bleed backgrounds
      var k = fixed ? 4 : 1;
      if (el.matches('a,button,input,select,textarea,[role="button"]')) k *= 25;
      out.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom, k: k });
    }
    return out;
  }
  function overlap(a, list) {
    var n = 0;
    for (var i = 0; i < list.length; i++) {
      var b = list[i];
      var w = Math.min(a.r, b.right) - Math.max(a.l, b.left), h = Math.min(a.b, b.bottom) - Math.max(a.t, b.top);
      if (w > 0 && h > 0) n += w * h * b.k;
    }
    return n;
  }
  var phone = window.matchMedia('(max-width:700px)');
  function dock() {
    var H = innerHeight, lift = 12, els = document.body.getElementsByTagName('*');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el === host) continue;
      var cs = getComputedStyle(el);
      if (cs.position !== 'fixed' || cs.display === 'none' || cs.visibility === 'hidden') continue;
      var r = el.getBoundingClientRect();
      if (r.bottom >= H - 2 && r.top > H * .6 && r.width > innerWidth * .4) lift = Math.max(lift, H - r.top + 12);
    }
    host.style.left = '0px'; host.style.top = 'auto';
    // slide up the left edge from just above the bottom bar to the first spot touching no text or buttons
    host.style.bottom = Math.round(lift) + 'px'; host.style.visibility = 'hidden';
    var hh = host.offsetHeight, hw = host.offsetWidth, best = lift, bestHit = Infinity, rects = edgeRects(hw + 2);
    for (var b = lift; b <= H * .86 - hh; b += 8) {
      var t = H - b - hh, n = 0;
      for (var k = 0; k < rects.length; k++) { var q = rects[k]; if (q.top < t + hh && q.bottom > t) n += q.w; }
      if (n < bestHit) { bestHit = n; best = b; if (!n) break; }
    }
    host.style.bottom = Math.round(best) + 'px';
    // widen the invisible tap area to 44px only if no page link/button lies in that wider strip
    var top = H - best - hh, wide = true, ctl = document.body.querySelectorAll('a,button,input,select,textarea,label,[role="button"]');
    for (var c = 0; c < ctl.length; c++) {
      if (host.contains(ctl[c])) continue;
      var cr = ctl[c].getBoundingClientRect();
      if (cr.width && cr.left < 46 && cr.top < top + hh && cr.bottom > top) { wide = false; break; }
    }
    host.style.setProperty('--hit', wide ? '44px' : '20px');
    menu.classList.remove('up', 'down'); menu.classList.add('side');
    menu.style.left = ''; menu.style.right = '';
    host.style.visibility = 'visible';
  }
  // text and buttons that reach into the left strip of the screen
  function edgeRects(x) {
    var out = [], tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), rg = document.createRange();
    while (tw.nextNode()) {
      var n = tw.currentNode;
      if (!n.textContent.trim() || host.contains(n.parentElement)) continue;
      var cs = getComputedStyle(n.parentElement);
      if (cs.visibility === 'hidden' || +cs.opacity === 0) continue;
      rg.selectNodeContents(n);
      var rs = rg.getClientRects();
      for (var i = 0; i < rs.length; i++) if (rs[i].left < x && rs[i].width && rs[i].bottom > 0 && rs[i].top < innerHeight) out.push({ top: rs[i].top, bottom: rs[i].bottom, w: 1 });
    }
    var els = document.body.querySelectorAll('a,button,input,select,textarea');
    for (var j = 0; j < els.length; j++) {
      if (host.contains(els[j])) continue;
      var r = els[j].getBoundingClientRect();
      if (r.width && r.left < x && r.bottom > 0 && r.top < innerHeight) out.push({ top: r.top, bottom: r.bottom, w: 25 });
    }
    return out;
  }
  function place() {
    if (phone.matches) return dock();
    host.style.bottom = 'auto'; menu.classList.remove('side');
    var bw = host.offsetWidth, bh = host.offsetHeight, W = innerWidth, H = innerHeight, g = 10;
    var list = boxes();
    var c = [];
    for (var y = g; y <= H * .4; y += 8) c.push([(W - bw) / 2, y]);                 // top centre, stepping down below headers
    for (var y2 = H - bh - g; y2 >= H * .55; y2 -= 8) c.push([(W - bw) / 2, y2]);   // bottom centre, stepping up above bars
    for (var y3 = g; y3 <= H - bh - g; y3 += 12) { c.push([g, y3]); c.push([W - bw - g, y3]); }  // edges, full height
    var best = null, bestScore = Infinity;
    for (var i = 0; i < c.length; i++) {
      var a = { l: c[i][0], t: c[i][1], r: c[i][0] + bw, b: c[i][1] + bh };
      var s = overlap(a, list);
      if (s < bestScore) { bestScore = s; best = c[i]; if (s === 0) break; }
    }
    host.style.left = Math.round(best[0]) + 'px';
    host.style.top = Math.round(best[1]) + 'px';
    var up = best[1] > H / 2;
    menu.classList.toggle('up', up); menu.classList.toggle('down', !up);
    menu.style.left = best[0] > W / 2 ? 'auto' : '0'; menu.style.right = best[0] > W / 2 ? '0' : 'auto';
    host.style.visibility = 'visible';
  }
  function mount() {
    document.body.appendChild(host);
    if (window.scrollY < 4) place(); else { host.style.visibility = 'visible'; place(); }
    var t; addEventListener('resize', function () { clearTimeout(t); t = setTimeout(place, 150); });
    setTimeout(place, 900); setTimeout(place, 2500);
  }
  if (document.readyState === 'complete') mount(); else addEventListener('load', mount);
})();
