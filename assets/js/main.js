// K1 Dover Tyres — homepage interactions
(function () {
  'use strict';

  var PHONE = '01304350200';
  var WHATSAPP_NUMBER = '447842290576';
  // Postcode areas covering Kent (incl. Medway).
  var KENT_AREAS = ['CT', 'ME', 'DA', 'TN'];

  // Header: transparent over the hero, solid once scrolled
  var header = document.getElementById('site-header');
  function onScroll() {
    var solid = window.scrollY > 40;
    header.classList.toggle('bg-ink/95', solid);
    header.classList.toggle('backdrop-blur', solid);
    header.classList.toggle('border-white/10', solid);
    header.classList.toggle('border-transparent', !solid);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var menuBtn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    menu.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) header.classList.add('bg-ink/95');
    else onScroll();
  }
  menuBtn.addEventListener('click', function () { setMenu(menu.classList.contains('hidden')); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  // Postcode coverage checker
  var pcForm = document.getElementById('postcode-form');
  var pcInput = document.getElementById('postcode');
  var pcResult = document.getElementById('postcode-result');
  pcForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = pcInput.value.trim().toUpperCase();
    var area = (value.match(/^[A-Z]{1,2}/) || [''])[0];
    pcResult.classList.remove('hidden');
    if (!value) {
      pcResult.textContent = 'Please enter your postcode.';
    } else if (KENT_AREAS.indexOf(area) !== -1) {
      pcResult.innerHTML = '<strong class="text-white">Great news, we cover your area.</strong> ' +
        'Call <a class="font-semibold text-white underline" href="tel:' + PHONE + '">01304 350200</a> or ' +
        '<a class="font-semibold text-white underline" href="https://wa.me/' + WHATSAPP_NUMBER + '">WhatsApp us</a>.';
    } else {
      pcResult.innerHTML = '<strong class="text-white">Call us to check.</strong> ' +
        'That postcode may be outside our usual area. Call <a class="font-semibold text-white underline" href="tel:' + PHONE + '">01304 350200</a> and we\'ll let you know.';
    }
  });

  // Callback form: opens WhatsApp with the details pre-filled (no server needed)
  var cbForm = document.getElementById('callback-form');
  var cbError = document.getElementById('cb-error');
  cbForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var fields = cbForm.elements;
    var name = fields.namedItem('name').value.trim();
    var phone = fields.namedItem('phone').value.trim();
    var service = fields.namedItem('service').value;
    if (!name || !phone || !service) { cbError.classList.remove('hidden'); return; }
    cbError.classList.add('hidden');
    var text = 'Hi K1, please call me back.\nName: ' + name + '\nPhone: ' + phone + '\nService: ' + service;
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });

  // Subtle reveal on scroll
  var items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Logo: drop-in on load, then hand control back to the hover effect; slightly smaller once scrolled
  var logo = document.getElementById('logo');
  var logoImg = logo.querySelector('.k1-logo');
  function endEntrance() { logo.classList.remove('is-entering'); }
  logo.addEventListener('animationend', function (e) { if (e.animationName === 'k1-drop') endEntrance(); });
  setTimeout(endEntrance, 1200); // fallback if animationend never fires
  function sizeLogo() {
    var small = window.scrollY > 40;
    logoImg.classList.toggle('h-9', small);
    logoImg.classList.toggle('h-11', !small);
  }
  window.addEventListener('scroll', sizeLogo, { passive: true });
  sizeLogo();

  // Icons draw themselves on (staggered within their group) and star rows pop in when they scroll into view
  var drawables = document.querySelectorAll('.i-draw, .stars');
  function activate(el) {
    if (el.classList.contains('stars')) { el.classList.add('is-on'); return; }
    var group = el.closest('ul, ol, section');
    var siblings = group ? group.querySelectorAll('.i-draw') : [el];
    var index = Array.prototype.indexOf.call(siblings, el);
    el.style.setProperty('--d', (Math.max(index, 0) * 0.12) + 's');
    el.classList.add('is-drawn');
  }
  if ('IntersectionObserver' in window) {
    var iconObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { activate(entry.target); iconObserver.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -30px 0px' });
    drawables.forEach(function (el) { iconObserver.observe(el); });
  } else {
    drawables.forEach(activate);
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Smooth, weighted scrolling (skipped when reduced motion is requested)
  var lenis = null;
  if (window.Lenis && !reduceMotion) {
    lenis = new window.Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })(performance.now());
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link || link.getAttribute('href').length < 2) return;
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    });
  }

  // Hero parallax
  var heroImg = document.querySelector('.hero-img');
  function parallax() {
    if (reduceMotion || !heroImg) return;
    var y = Math.min(window.scrollY, 900);
    heroImg.style.translate = '0 ' + (y * 0.25).toFixed(1) + 'px';
  }
  window.addEventListener('scroll', parallax, { passive: true });

  // Intro: layered logo assembles, then the curtain lifts (once per visit)
  var hero = document.getElementById('top');
  var intro = document.getElementById('intro');
  var headerLogo = logo.querySelector('.k1-logo');
  function startPage() {
    hero.classList.add('hero-in');
    headerLogo.classList.add('play');
  }
  var skipIntro = document.documentElement.classList.contains('no-intro') || !intro;
  if (skipIntro) {
    if (intro) intro.remove();
    requestAnimationFrame(startPage);
  } else {
    if (lenis) lenis.stop();
    document.documentElement.style.overflow = 'hidden';
    var lifted = false;
    var lift = function () {
      if (lifted) return;
      lifted = true;
      try { sessionStorage.setItem('k1-intro', '1'); } catch (err) { /* private mode */ }
      intro.classList.add('out');
      document.documentElement.style.overflow = '';
      if (lenis) lenis.start();
      setTimeout(startPage, 350);
      setTimeout(function () { intro.remove(); }, 1100);
    };
    intro.addEventListener('click', lift);
    setTimeout(lift, 2600);
  }

  // Coverage map: draw the county outline when it scrolls into view; freeze SMIL motion for reduced-motion users
  var liveMap = document.getElementById('live-map');
  if (liveMap) {
    if (reduceMotion) {
      liveMap.classList.add('on');
      if (liveMap.pauseAnimations) liveMap.pauseAnimations();
    } else if ('IntersectionObserver' in window) {
      var mapObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { liveMap.classList.add('on'); mapObserver.disconnect(); }
      }, { threshold: 0.25 });
      mapObserver.observe(liveMap);
    } else {
      liveMap.classList.add('on');
    }
  }

  // Current year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
