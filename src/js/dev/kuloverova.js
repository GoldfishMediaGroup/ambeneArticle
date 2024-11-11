import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  try {
    advantagesSwiper();
  } catch {}
  try {
    footerSources();
  } catch {}
});

function advantagesSwiper() {
  const advantagesSwiper = new Swiper('.advantages__swiper', {
    slidesPerView: '1.2',
    spaceBetween: rem(6.4),
    speed: 800,
    loop: true,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      768: {
        spaceBetween: rem(12.4)
      }
    }
  });
}

function footerSources() {
  // const btn = document.querySelector('.footer__sources-btn');
  // const hide = document.querySelector('.footer__sources-hide-wrapper');
  // const line = document.querySelector('.footer__sources-billet-svg-min');

  const $btn = $('.footer__sources-btn');
  const $hide = $('.footer__sources-hide-wrapper');
  const $line = $('.footer__sources-billet-svg-min');

  $btn.on('click', function () {
    $hide.slideToggle(); // Тоггл видимости элемента hide
    $line.toggleClass('isActive'); // Тоггл класса active у line
  });
}
