/* Road Max logo motion: one ident, tuned per version.

   The artwork is the official compact logo (assets/images/roadmax/roadmax-logo-compact-white.svg),
   split into layers without changing a single coordinate or colour: speed lines, wheel, wordmark.
   Only the wheel and the speed lines ever move; ROAD MAX never moves or distorts. Every animation
   finishes on the exact official pose (the wheel always comes to rest on a whole turn).

   Usage: <img class="rm-logo" data-rm-logo="v3" src="assets/images/roadmax/roadmax-logo-compact-white.svg" alt="Road Max">
     data-rm-logo  v1 | v3 | v4 | v5          which behaviour to use
     data-rm-play  load (default) | view | manual | none
   Without JavaScript, or with prefers-reduced-motion, the official static logo is shown. */
(function () {
  'use strict';

  var ART = {"speed":["<polygon points=\"10,45 44,45 40,52 6,52\" fill=\"#D81800\"/>","<polygon points=\"20,58 44,58 40,65 16,65\" fill=\"#D81800\"/>","<polygon points=\"30,71 44,71 40,78 26,78\" fill=\"#D81800\"/>"],"wheel":"<circle cx=\"104\" cy=\"64\" r=\"60\" fill=\"#FFFFFF\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(0 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(20 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(40 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(60 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(80 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(100 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(120 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(140 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(160 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(180 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(200 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(220 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(240 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(260 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(280 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(300 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(320 104 64)\"/><rect x=\"99.8\" y=\"4.6\" width=\"8.4\" height=\"9.6\" rx=\"1.8\" fill=\"#C9D3E0\" transform=\"rotate(340 104 64)\"/><circle cx=\"104\" cy=\"64\" r=\"36\" fill=\"#183860\"/><circle cx=\"104\" cy=\"64\" r=\"31.2\" fill=\"none\" stroke=\"#D81800\" stroke-width=\"4.2\"/><line x1=\"104\" y1=\"64\" x2=\"104\" y2=\"36.4\" stroke=\"#FFFFFF\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><line x1=\"104\" y1=\"64\" x2=\"130.25\" y2=\"55.47\" stroke=\"#FFFFFF\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><line x1=\"104\" y1=\"64\" x2=\"120.22\" y2=\"86.33\" stroke=\"#FFFFFF\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><line x1=\"104\" y1=\"64\" x2=\"87.78\" y2=\"86.33\" stroke=\"#FFFFFF\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><line x1=\"104\" y1=\"64\" x2=\"77.75\" y2=\"55.47\" stroke=\"#FFFFFF\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><circle cx=\"104\" cy=\"64\" r=\"10.8\" fill=\"#D81800\"/><circle cx=\"104\" cy=\"64\" r=\"4.2\" fill=\"#183860\"/>","word":"<path d=\"M217.25 92Q216.02 92 215.90 90.88L212.21 61.20Q212.10 60.75 211.65 60.75L210.08 60.75Q209.63 60.75 209.41 61.31L205.82 90.66Q205.71 91.22 205.32 91.61Q204.93 92 204.37 92L188.91 92Q188.35 92 188.02 91.61Q187.68 91.22 187.79 90.66L197.09 14.94Q197.20 14.38 197.59 13.99Q197.98 13.60 198.54 13.60L221.95 13.60Q230.58 13.60 235.56 19.09Q240.54 24.58 240.54 33.76Q240.54 36.45 240.32 37.90Q239.54 44.18 236.68 49.16Q233.82 54.14 229.46 57.17Q229.23 57.28 229.12 57.45Q229.01 57.62 229.12 57.84L234.38 90.43L234.38 90.66Q234.38 92 233.15 92L217.25 92M213.89 29.50Q213.44 29.50 213.22 30.06L211.31 45.97Q211.31 46.53 211.76 46.53L214.78 46.53Q218.14 46.53 220.27 43.78Q222.40 41.04 222.40 36.22Q222.40 32.98 220.94 31.24Q219.49 29.50 216.91 29.50M261.94 92.90Q252.42 92.90 246.98 87.69Q241.55 82.48 241.55 73.41Q241.55 72.18 241.78 69.71L245.92 35.89Q247.26 25.25 254.26 18.98Q261.26 12.70 271.79 12.70Q281.31 12.70 286.86 17.97Q292.40 23.23 292.40 32.30Q292.40 33.42 292.18 35.89L287.92 69.71Q286.69 80.35 279.58 86.62Q272.46 92.90 261.94 92.90M263.95 76.99Q266.30 76.99 267.87 75.26Q269.44 73.52 269.89 70.50L274.14 35.10Q274.26 34.54 274.26 33.65Q274.26 31.30 273.14 29.95Q272.02 28.61 269.89 28.61Q267.54 28.61 265.97 30.40Q264.40 32.19 264.06 35.10L259.70 70.50L259.58 71.73Q259.58 74.19 260.70 75.59Q261.82 76.99 263.95 76.99M323.42 92Q322.19 92 322.19 90.77L321.97 81.02Q322.08 80.80 321.86 80.63Q321.63 80.46 321.41 80.46L309.65 80.46Q308.98 80.46 308.98 81.02L306.51 90.77Q306.18 92 304.94 92L289.49 92Q288.14 92 288.59 90.54L313.57 14.83Q313.90 13.60 315.14 13.60L332.83 13.60Q334.18 13.60 334.18 14.83L340.45 90.54L340.45 90.88Q340.45 92 339.22 92L323.42 92M313.23 65.57Q313.23 66.13 313.57 66.13L320.85 66.13Q321.41 66.13 321.41 65.57L320.62 40.03Q320.62 39.58 320.40 39.58Q320.18 39.58 319.95 40.03M347.06 92Q346.50 92 346.16 91.61Q345.82 91.22 345.94 90.66L355.23 14.94Q355.34 14.38 355.74 13.99Q356.13 13.60 356.69 13.60L377.41 13.60Q387.04 13.60 392.53 18.64Q398.02 23.68 398.02 32.42Q398.02 33.42 397.79 35.66L393.54 69.94Q392.30 79.90 385.30 85.95Q378.30 92 367.78 92L347.06 92M365.87 75.54Q365.65 76.10 366.32 76.10L369.34 75.98Q371.70 75.87 373.49 73.91Q375.28 71.95 375.73 68.70L379.54 36.90Q379.65 36.34 379.65 35.33Q379.65 32.64 378.36 31.07Q377.07 29.50 374.94 29.50L372.03 29.50Q371.58 29.50 371.36 30.06\" fill=\"#FFFFFF\"/><path d=\"M456.82 14.50Q457.26 13.60 458.50 13.60L473.62 13.60Q474.18 13.60 474.51 13.99Q474.85 14.38 474.74 14.94L465.44 90.66Q465.33 91.22 464.94 91.61Q464.54 92 463.98 92L448.53 92Q447.97 92 447.63 91.61Q447.30 91.22 447.41 90.66L453.34 42.61Q453.46 42.16 453.18 42.10Q452.90 42.05 452.67 42.38L443.38 56.05Q442.93 56.94 442.70 56.94Q442.37 56.94 442.03 56.05L436.10 42.38Q435.87 42.05 435.70 42.05Q435.54 42.05 435.42 42.50L429.49 90.66Q429.38 91.22 428.98 91.61Q428.59 92 428.03 92L412.58 92Q412.02 92 411.68 91.61Q411.34 91.22 411.46 90.66L420.75 14.94Q420.86 14.38 421.26 13.99Q421.65 13.60 422.21 13.60L437.44 13.60Q438.45 13.60 439.01 14.50L445.62 30.74Q445.95 31.18 446.29 30.74M505.31 92Q504.08 92 504.08 90.77L503.86 81.02Q503.97 80.80 503.74 80.63Q503.52 80.46 503.30 80.46L491.54 80.46Q490.86 80.46 490.86 81.02L488.40 90.77Q488.06 92 486.83 92L471.38 92Q470.03 92 470.48 90.54L495.46 14.83Q495.79 13.60 497.02 13.60L514.72 13.60Q516.06 13.60 516.06 14.83L522.34 90.54L522.34 90.88Q522.34 92 521.10 92L505.31 92M495.12 65.57Q495.12 66.13 495.46 66.13L502.74 66.13Q503.30 66.13 503.30 65.57L502.51 40.03Q502.51 39.58 502.29 39.58Q502.06 39.58 501.84 40.03M527.38 92Q526.59 92 526.42 91.55Q526.26 91.10 526.59 90.43L545.74 53.14Q545.86 52.80 545.74 52.46L535.78 15.17L535.66 14.72Q535.66 14.27 536.06 13.94Q536.45 13.60 537.01 13.60L552.69 13.60Q553.70 13.60 554.03 14.72L557.62 33.20Q557.62 33.65 557.90 33.65Q558.18 33.65 558.29 33.20L566.24 14.72Q566.80 13.60 567.81 13.60L583.49 13.60Q584.27 13.60 584.44 14.05Q584.61 14.50 584.27 15.17L565.12 52.46L565.01 53.14L574.98 90.43L575.09 90.88Q575.09 92 573.86 92L558.29 92Q557.28 92 557.06 90.88L553.36 72.51Q553.36 72.06 553.14 72.12Q552.91 72.18 552.80 72.51L544.51 90.88Q544.18 92 542.94 92\" fill=\"#D81800\"/>"};

  var CX = 104, CY = 64;                                   // wheel hub in logo units
  var reduceMQ = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var canAnimate = !!(Element.prototype.animate);
  var hoverable = window.matchMedia && matchMedia('(hover: hover)').matches;
  function still() { return reduceMQ.matches || !canAnimate; }

  var EASE = {
    roll:   'cubic-bezier(.55,0,.25,1)',   // wheel picks up, then brakes
    settle: 'cubic-bezier(.3,0,.3,1)',
    out:    'cubic-bezier(.16,1,.3,1)',
    line:   'cubic-bezier(.2,.8,.2,1)'
  };

  (function injectStyles() {
    if (document.getElementById('rm-logo-css')) return;
    var s = document.createElement('style');
    s.id = 'rm-logo-css';
    s.textContent =
      'svg.rm-logo{overflow:visible;aspect-ratio:588/128}' +
      '.rm-logo .rm-wheel{transform-box:view-box;transform-origin:' + CX + 'px ' + CY + 'px}' +
      '.rm-logo .rm-s{transform-box:view-box;transform-origin:44px 0}' +
      '.rm-logo .rm-word{shape-rendering:geometricPrecision}' +
      '.rm-logo.rm-wait{opacity:0}' +
      '@media (prefers-reduced-motion: reduce){.rm-logo.rm-wait{opacity:1}}';
    document.head.appendChild(s);
  })();

  /* ---------- Build the layered SVG from an <img> placeholder ---------- */
  function build(img) {
    var variant = img.getAttribute('data-rm-logo') || 'v3';
    var label = img.getAttribute('alt') || 'Road Max';
    var labelled = img.closest('[aria-label]');
    var holder = document.createElement('div');
    holder.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 588 128" focusable="false">' +
        '<g class="rm-speed">' + ART.speed.map(function (p) { return p.replace('<polygon ', '<polygon class="rm-s" '); }).join('') + '</g>' +
        '<g class="rm-wheel">' + ART.wheel + '</g>' +
        '<g class="rm-word">' + ART.word + '</g>' +
      '</svg>';
    var svg = holder.firstChild;
    svg.setAttribute('class', (img.getAttribute('class') || '') + ' rm-logo');
    if (img.getAttribute('style')) svg.setAttribute('style', img.getAttribute('style'));
    if (img.id) svg.id = img.id;
    if (labelled || img.getAttribute('aria-hidden') === 'true' || !label) svg.setAttribute('aria-hidden', 'true');
    else { svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', label); }
    svg.setAttribute('data-rm-logo', variant);
    img.parentNode.replaceChild(svg, img);
    return svg;
  }

  function parts(svg) {
    return {
      svg: svg,
      wheel: svg.querySelector('.rm-wheel'),
      bars: Array.prototype.slice.call(svg.querySelectorAll('.rm-s')),
      word: svg.querySelector('.rm-word')
    };
  }

  function anim(el, frames, opts) {
    opts.fill = opts.fill || 'backwards';
    var a = el.animate(frames, opts);
    (el._rmAnims = el._rmAnims || []).push(a);
    a.onfinish = a.oncancel = function () { el._rmAnims = (el._rmAnims || []).filter(function (x) { return x !== a; }); };
    return a;
  }
  function stopAll(p) {
    [p.svg, p.wheel, p.word].concat(p.bars).forEach(function (el) {
      (el._rmAnims || []).slice().forEach(function (a) { a.cancel(); });
    });
  }
  function rot(d) { return 'rotate(' + d + 'deg)'; }

  /* ---------- Entrance idents, one per version ---------- */
  var IDENTS = {
    // V1: subtle reveal. The mark fades up, the wheel turns half a revolution into place,
    // the speed lines draw out from behind it.
    v1: function (p) {
      anim(p.svg, [{ opacity: 0 }, { opacity: 1 }], { duration: 500, easing: 'ease-out' });
      anim(p.wheel, [
        { transform: rot(-180), easing: EASE.roll },
        { transform: rot(3), offset: .8, easing: EASE.settle },
        { transform: rot(0) }
      ], { duration: 1300 });
      p.bars.forEach(function (b, i) {
        anim(b, [{ transform: 'scaleX(0)', opacity: 0 }, { transform: 'scaleX(1)', opacity: 1 }],
          { duration: 600, delay: 450 + i * 70, easing: EASE.line });
      });
      anim(p.word, [{ opacity: 0 }, { opacity: 1 }], { duration: 700, delay: 200, easing: 'ease-out' });
      return 1400;
    },

    // V3 Premium Modern: the logo is already in its official pose; the wheel pulls away through
    // one full turn and brakes with a slight settle, while the speed lines shoot out behind it.
    v3: function (p) {
      anim(p.svg, [{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: 'ease-out' });
      anim(p.wheel, [
        { transform: rot(0), easing: EASE.roll },
        { transform: rot(372), offset: .78, easing: EASE.settle },
        { transform: rot(360) }
      ], { duration: 1500, delay: 120 });
      p.bars.forEach(function (b, i) {
        anim(b, [
          { transform: 'scaleX(0)', opacity: 0, easing: EASE.line },
          { transform: 'scaleX(1.18)', opacity: 1, offset: .6, easing: EASE.settle },
          { transform: 'scaleX(1)', opacity: 1 }
        ], { duration: 800, delay: 420 + i * 80 });
      });
      return 1620;
    },

    // V4 Modern Classic Chic: a slow fade; the wheel eases through the last few degrees, barely perceptible.
    v4: function (p) {
      anim(p.svg, [{ opacity: 0 }, { opacity: 1 }], { duration: 1100, easing: 'ease-out' });
      anim(p.wheel, [{ transform: rot(-12) }, { transform: rot(0) }], { duration: 1900, easing: EASE.out });
      p.bars.forEach(function (b, i) {
        anim(b, [{ transform: 'scaleX(.7)', opacity: 0 }, { transform: 'scaleX(1)', opacity: 1 }],
          { duration: 1200, delay: 300 + i * 120, easing: EASE.out });
      });
      return 1900;
    },

    // V5 Experimental: the entrance is a two-turn launch on the shared wheel rig (see below),
    // so the hero can roll and streak with it.
    v5: function (p) {
      anim(p.svg, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: 'ease-out' });
      p.bars.forEach(function (b, i) {
        anim(b, [{ transform: 'scaleX(0)', opacity: 0 }, { transform: 'scaleX(1)', opacity: 1 }],
          { duration: 500, delay: 250 + i * 60, easing: EASE.line });
      });
      rig(p).kick(720, 1500);
      return 1500;
    }
  };

  /* ---------- Hover: a single controlled roll, never a continuous spin ---------- */
  var HOVERS = {
    v1: function (p) { return roll(p, 900, 1.25); },
    v3: function (p) { return roll(p, 1000, 1.3); },
    v4: null,                                                 // restrained: no hover motion
    v5: function (p) { rig(p).kick(360, 1000); return 1000; }
  };
  function roll(p, dur, stretch) {
    anim(p.wheel, [
      { transform: rot(0), easing: EASE.roll },
      { transform: rot(366), offset: .82, easing: EASE.settle },
      { transform: rot(360) }
    ], { duration: dur, fill: 'none' });
    p.bars.forEach(function (b, i) {
      anim(b, [{ transform: 'scaleX(1)' }, { transform: 'scaleX(' + stretch + ')', offset: .4 }, { transform: 'scaleX(1)' }],
        { duration: dur * .7, delay: i * 50, easing: 'ease-in-out', fill: 'none' });
    });
    return dur;
  }

  /* ---------- V5 wheel rig: rotation driven by scroll and kicks, coasting to a whole turn ---------- */
  function rig(p) {
    if (p.svg._rmRig) return p.svg._rmRig;
    var angle = 0, speed = 0, settle = null, raf = 0, listeners = [];

    function render() {
      var a = ((angle % 360) + 360) % 360;
      var atRest = !settle && Math.abs(speed) < .5 && (a < .01 || a > 359.99);
      if (atRest) speed = 0;                                // angle keeps its whole turns so linked wheels never jump
      p.wheel.style.transform = atRest ? '' : rot(angle.toFixed(2));
      var s = Math.min(.7, Math.abs(speed) / 1400);
      p.bars.forEach(function (b, i) { b.style.transform = s < .005 ? '' : 'scaleX(' + (1 + s * (1 - i * .18)).toFixed(3) + ')'; });
      listeners.forEach(function (fn) { fn(angle, speed); });
      return atRest;
    }
    function tick(t) {
      raf = 0;
      if (settle) {
        var k = Math.min(1, (t - settle.t0) / settle.T);
        // Cubic Hermite from (angle, speed) to (target, 0): continuous speed, no jerk at hand-over
        var h = settle, s = k, s2 = s * s, s3 = s2 * s;
        angle = h.a0 * (2 * s3 - 3 * s2 + 1) + h.v0 * h.T / 1000 * (s3 - 2 * s2 + s) + h.a1 * (3 * s2 - 2 * s3);
        speed = (h.a0 * (6 * s2 - 6 * s) + h.v0 * h.T / 1000 * (3 * s2 - 4 * s + 1) + h.a1 * (6 * s - 6 * s2)) / (h.T / 1000);
        if (k >= 1) { settle = null; angle = h.a1; speed = 0; }
      } else {
        speed *= .82;                                        // scroll input has stopped: bleed off
      }
      var rest = render();
      if (settle || !rest) raf = requestAnimationFrame(tick);
    }
    function wake() { if (!raf) raf = requestAnimationFrame(tick); }
    function settleTo(target, T, v0) {
      var d = target - angle;
      var v = v0 === undefined ? speed : v0;
      // never let the incoming speed carry the wheel backwards past its rest point
      var maxV = 3 * Math.abs(d) / (T / 1000);
      if (Math.abs(v) > maxV) v = maxV * (v < 0 ? -1 : 1);
      settle = { a0: angle, a1: target, v0: v, T: T, t0: performance.now() };
      wake();
    }
    var idle = 0;
    var api = {
      // free rotation (e.g. from scroll), then coast forward to the next whole turn
      drive: function (deg, dtMs) {
        if (still()) return;
        settle = null;
        angle += deg;
        var inst = deg / Math.max(8, dtMs) * 1000;
        speed = speed * .6 + inst * .4;
        wake();
        clearTimeout(idle);
        idle = setTimeout(function () {
          var dir = speed >= 0 ? 1 : -1;
          var target = (dir > 0 ? Math.ceil(angle / 360 - .02) : Math.floor(angle / 360 + .02)) * 360;
          var T = Math.max(450, Math.min(1500, 2 * Math.abs(target - angle) / Math.max(1, Math.abs(speed)) * 1000));
          settleTo(target, T);
        }, 120);
      },
      // a deliberate turn of at least `deg`, starting from rest and braking onto a whole turn
      kick: function (deg, T) {
        if (still()) return;
        var target = Math.ceil((angle + deg) / 360 - .02) * 360;
        settleTo(target, T || 1100, settle ? undefined : 0);
      },
      onSpin: function (fn) { listeners.push(fn); }
    };
    p.svg._rmRig = api;
    return api;
  }

  /* ---------- Wiring ---------- */
  function play(svg) {
    if (!svg || !svg._rm) return;
    var p = svg._rm;
    svg.classList.remove('rm-wait');
    if (still() || p.busy) return;
    stopAll(p);
    var ident = IDENTS[svg.getAttribute('data-rm-logo')] || IDENTS.v3;
    p.busy = true;
    setTimeout(function () { p.busy = false; }, ident(p));
  }

  function hover(svg) {
    var p = svg._rm, fn = HOVERS[svg.getAttribute('data-rm-logo')];
    if (!fn || still() || p.busy) return;
    p.busy = true;
    setTimeout(function () { p.busy = false; }, fn(p));
  }

  function upgrade(img) {
    var mode = img.getAttribute('data-rm-play') || 'load';
    var svg = build(img);
    svg._rm = parts(svg);
    if (still()) return svg;

    if (mode === 'manual') {
      svg.classList.add('rm-wait');
      setTimeout(function () { svg.classList.remove('rm-wait'); }, 5000);   // never leave it hidden
    } else if (mode === 'view' && 'IntersectionObserver' in window) {
      svg.classList.add('rm-wait');
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); play(svg); } });
      }, { threshold: .6 });
      io.observe(svg);
    } else if (mode !== 'none') {
      play(svg);
    }

    var trigger = svg.closest('a, button');
    if (trigger && hoverable && HOVERS[svg.getAttribute('data-rm-logo')]) {
      trigger.addEventListener('mouseenter', function () { hover(svg); });
    }
    return svg;
  }

  function upgradeAll(root) {
    return Array.prototype.slice.call((root || document).querySelectorAll('img[data-rm-logo]')).map(upgrade);
  }

  // If the visitor switches reduced motion on, drop straight to the static official logo
  if (reduceMQ.addEventListener) reduceMQ.addEventListener('change', function (e) {
    if (!e.matches) return;
    Array.prototype.slice.call(document.querySelectorAll('svg.rm-logo')).forEach(function (svg) {
      if (!svg._rm) return;
      stopAll(svg._rm);
      svg.classList.remove('rm-wait');
      svg._rm.wheel.style.transform = '';
      svg._rm.bars.forEach(function (b) { b.style.transform = ''; });
    });
  });

  window.RoadMaxLogo = {
    upgradeAll: upgradeAll,
    play: play,
    rig: function (svg) { return svg && svg._rm ? rig(svg._rm) : null; },
    reduced: still
  };

  upgradeAll();
})();
