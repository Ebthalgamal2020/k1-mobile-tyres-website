/* Road Max V5 — journey interactions. Everything degrades to a readable static page
   without JavaScript or with prefers-reduced-motion. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch = window.matchMedia('(hover: none)').matches;
  var doc = document.documentElement;
  var WA = '447842290576';

  /* ---------- hero entrance ---------- */
  requestAnimationFrame(function () { setTimeout(function () { document.body.classList.add('go'); }, 80); });

  /* ---------- header + mobile menu ---------- */
  var hdr = document.getElementById('hdr');
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    var open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  /* ---------- logo ident replays once when the footer logo comes into view ---------- */
  var footLogo = document.querySelector('.play-view');

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add(e.target === footLogo ? 'play' : 'in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-in], .call').forEach(function (el) { io.observe(el); });
  if (footLogo) io.observe(footLogo);

  /* ---------- the red road thread: progress + current chapter ---------- */
  var fill = document.getElementById('thread-fill');
  var dots = document.querySelectorAll('#thread a');
  var chapters = document.querySelectorAll('[data-chapter]');
  var chapterIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var i = +e.target.getAttribute('data-chapter');
      dots.forEach(function (d, j) { d.classList.toggle('on', j <= i); });
      document.getElementById('thread').classList.toggle('hide', i === 4);
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  chapters.forEach(function (c) { chapterIO.observe(c); });

  /* ---------- On Site: the wheel turns a quarter per step ---------- */
  var site = document.getElementById('on-site');
  var wheelImg = site.querySelector('.wheel img');
  var steps = site.querySelectorAll('.step');
  var ticks = site.querySelectorAll('.ticks span');
  var seq = site.querySelectorAll('.seq button');
  var current = 0;
  var pinned = !reduce && window.innerWidth > 760;
  if (!pinned) doc.classList.add('static-steps');

  function setStep(i) {
    if (i === current) return;
    current = i;
    wheelImg.style.setProperty('--turn', (i * 90) + 'deg');
    steps.forEach(function (s, j) { s.classList.toggle('on', j === i); });
    ticks.forEach(function (t, j) { t.classList.toggle('on', j === i); });
    seq.forEach(function (b, j) { b.classList.toggle('on', j === i); });
  }
  seq.forEach(function (b, i) {
    b.addEventListener('click', function () {
      var r = site.getBoundingClientRect();
      var span = site.offsetHeight - window.innerHeight;
      window.scrollTo({ top: window.scrollY + r.top + span * (i + 0.5) / 4, behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---------- scroll loop: thread fill, hero parallax, review signs, wheel steps ---------- */
  var plate = document.querySelector('.hero .plate img');
  var quotes = document.querySelectorAll('.q[data-speed]');
  var ticking = false;
  function frame() {
    ticking = false;
    var y = window.scrollY, vh = window.innerHeight;
    var max = doc.scrollHeight - vh;
    hdr.classList.toggle('solid', y > 40);
    if (fill) fill.style.transform = 'scaleY(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    if (pinned) {
      var r = site.getBoundingClientRect();
      var span = site.offsetHeight - vh;
      var p = Math.min(.999, Math.max(0, -r.top / span));
      setStep(Math.floor(p * 4));
    }
    if (!reduce) {
      if (y < vh * 1.2 && plate) plate.style.translate = '0 ' + (y * .22).toFixed(1) + 'px';
      if (window.innerWidth > 760) {
        quotes.forEach(function (q) {
          var b = q.getBoundingClientRect();
          if (b.bottom < -200 || b.top > vh + 200) return;
          var off = (b.top + b.height / 2 - vh / 2) * -parseFloat(q.getAttribute('data-speed'));
          q.style.transform = 'translateY(' + off.toFixed(1) + 'px)';
        });
      }
    }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  window.addEventListener('resize', frame);
  frame();

  /* ---------- Services: on touch screens the first tap opens the story ---------- */
  if (touch) {
    document.querySelectorAll('.tile:not(.t-emg)').forEach(function (t) {
      t.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        var was = t.classList.contains('open');
        document.querySelectorAll('.tile.open').forEach(function (o) { o.classList.remove('open'); });
        if (!was) t.classList.add('open');
      });
    });
  }

  /* ---------- On the way: postcode → route from Dover (Kent postcodes only) ---------- */
  var towns = JSON.parse(document.getElementById('towns').textContent);
  var route = document.getElementById('route');
  var routeC = document.getElementById('route-c');
  var pin = document.getElementById('pin');
  var res = document.getElementById('pc-res');
  var input = document.getElementById('pc-in');

  // Postcode districts inside Kent and Medway, mapped to the nearest town on the map.
  function townFor(pc) {
    var m = pc.replace(/\s+/g, '').toUpperCase().match(/^([A-Z]{1,2})(\d{1,2})/);
    if (!m) return null;
    var a = m[1], n = +m[2];
    if (a === 'CT') {
      if (n >= 15 && n <= 17) return 'Dover';
      if (n === 14 || n === 13) return 'Deal';
      if (n === 9 || n === 8 || n === 7) return 'Margate';
      if (n === 10) return 'Broadstairs';
      if (n === 11 || n === 12) return 'Ramsgate';
      if (n === 5) return 'Whitstable';
      if (n === 6) return 'Herne Bay';
      if (n >= 18 && n <= 20) return 'Folkestone';
      if (n === 21) return 'Hythe';
      return 'Canterbury';
    }
    if (a === 'ME') {
      if (n >= 14 && n <= 18) return 'Maidstone';
      if (n === 10 || n === 9) return 'Sittingbourne';
      if (n === 13) return 'Faversham';
      if (n === 19) return 'Kings Hill';
      if (n === 20) return 'Aylesford';
      if (n <= 8) return 'Medway';
      return null;
    }
    if (a === 'TN') {
      if (n >= 23 && n <= 30) return 'Ashford';
      if (n >= 1 && n <= 4) return 'Tunbridge Wells';
      if (n >= 9 && n <= 12) return 'Tonbridge';
      if (n >= 13 && n <= 15) return 'Sevenoaks';
      if (n >= 17 && n <= 18) return 'Cranbrook';
      return null;
    }
    if (a === 'DA') {
      if (n >= 1 && n <= 4) return 'Dartford';
      if (n >= 9 && n <= 13) return 'Gravesend';
      return null;
    }
    return null;
  }

  function draw(name) {
    var a = towns.Dover, b = towns[name];
    document.querySelectorAll('.atlas .town').forEach(function (t) { t.classList.toggle('hit', t.getAttribute('data-town') === name); });
    if (name === 'Dover') { route.setAttribute('d', ''); routeC.setAttribute('d', ''); pin.style.transform = 'translate(' + a[0] + 'px,' + a[1] + 'px)'; return; }
    var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
    var nx = -(b[1] - a[1]), ny = b[0] - a[0], L = Math.hypot(nx, ny) || 1, bend = .22 * Math.hypot(b[0] - a[0], b[1] - a[1]);
    var d = 'M' + a[0] + ',' + a[1] + ' Q' + (mx + nx / L * bend).toFixed(1) + ',' + (my + ny / L * bend).toFixed(1) + ' ' + b[0] + ',' + b[1];
    route.setAttribute('d', d); routeC.setAttribute('d', d);
    var len = route.getTotalLength();
    [route, routeC].forEach(function (p) {
      p.style.transition = 'none';
      p.style.strokeDasharray = p === route ? len : '10 10';
      if (p === route) p.style.strokeDashoffset = reduce ? 0 : len;
    });
    routeC.style.opacity = 0;
    route.getBoundingClientRect();
    if (!reduce) {
      route.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(.2,.8,.2,1)';
      route.style.strokeDashoffset = 0;
      setTimeout(function () { routeC.style.transition = 'opacity .4s'; routeC.style.opacity = 1; }, 1200);
    } else { routeC.style.opacity = 1; }
    pin.style.transform = 'translate(' + b[0] + 'px,' + b[1] + 'px)';
  }

  document.getElementById('pc').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = input.value.trim();
    if (!v) { res.textContent = 'Type your postcode, for example CT16 or ME14.'; return; }
    var t = townFor(v);
    var msg = encodeURIComponent('Hi Road Max, I need help. My postcode is ' + v.toUpperCase() + '.');
    if (t) {
      draw(t);
      res.innerHTML = '<b>' + t + ' is on our patch.</b> <a href="tel:01304350200">Call 01304 350200</a> or <a href="https://wa.me/' + WA + '?text=' + msg + '">WhatsApp your location</a> and a fitter will come to you.';
    } else {
      draw('Dover');
      res.innerHTML = 'That postcode may be outside Kent. <a href="tel:01304350200">Call 01304 350200</a> and we\'ll tell you straight away.';
    }
  });

  // first view: show the idea with a route to Canterbury
  var wayIO = new IntersectionObserver(function (en) {
    if (en[0].isIntersecting) { draw('Canterbury'); wayIO.disconnect(); }
  }, { threshold: .35 });
  wayIO.observe(document.getElementById('atlas'));

  /* ---------- year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
