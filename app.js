(function () {
  'use strict';

  // Photos are loaded from the current Prastutee site for this sample.
  // When the final files arrive, change BASE to '' and put the images in this folder.
  var BASE = window.PRASTUTEE_IMG_BASE || 'https://yellowgreen-bison-217927.hostingersite.com/';

  // Field stories. Titles are the ones used on the current site; swap the order or
  // the photo of any story here if a caption does not match its picture.
  var STORIES = [
    { img: 'prastutee_admin/photo/Pic_23042022051406484.jpg', title: 'Mission Sanjevani' },
    { img: 'prastutee_admin/photo/Pic_06052025121448813.jpg', title: 'Accredited under the due-diligence process' },
    { img: 'prastutee_admin/photo/Pic_30122024171658651.jpg', title: 'Exposure visit: learning best practice from peers' },
    { img: 'prastutee_admin/photo/Pic_16112024151107109.jpeg', title: 'The treadle pump: a friend to small landholders for irrigation' },
    { img: 'prastutee_admin/photo/Pic_13112024073025306.jpg', title: 'Maize crop-cutting experiment' },
    { img: 'prastutee_admin/photo/Pic_13052024153804530.jpg', title: 'Indigenous methods of seed preservation' },
    { img: 'prastutee_admin/photo/Pic_13052024153320483.jpg', title: 'Community farming on common land' },
    { img: 'prastutee_admin/photo/Pic_13052024153035185.jpg', title: 'Indigenous mulching in the nursery' },
    { img: 'prastutee_admin/photo/Pic_13052024144426251.jpg', title: 'Vermi-compost' },
    { img: 'prastutee_admin/photo/Pic_13052024142756725.jpg', title: 'Women farmers making and using organic manure' },
    { img: 'prastutee_admin/photo/Pic_12052024011337663.jpg', title: 'Akhi Trutia with tribal women farmers, Bandhugan block' }
  ];

  function mark(img) {
    img.addEventListener('error', function () {
      var box = img.closest('figure');
      if (box) box.classList.add('noimg');
    });
  }

  // build the story rail
  var rail = document.getElementById('rail');
  STORIES.forEach(function (s) {
    var li = document.createElement('li');
    li.className = 'card';
    var fig = document.createElement('figure');
    var img = document.createElement('img');
    img.alt = s.title;
    img.loading = 'lazy';
    img.decoding = 'async';
    mark(img);
    img.src = BASE + s.img;
    fig.appendChild(img);
    var h = document.createElement('h3');
    h.textContent = s.title;
    li.appendChild(fig);
    li.appendChild(h);
    rail.appendChild(li);
  });

  // the other photos on the page
  document.querySelectorAll('img[data-src]').forEach(function (img) {
    mark(img);
    img.src = BASE + img.getAttribute('data-src');
  });

  // arrows scroll the rail by about one card
  document.querySelectorAll('.arrow').forEach(function (b) {
    b.addEventListener('click', function () {
      var step = (rail.querySelector('.card') || { offsetWidth: 330 }).offsetWidth + 20;
      rail.scrollBy({ left: Number(b.dataset.dir) * step * 1.5, behavior: 'smooth' });
    });
  });

  // phone menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
