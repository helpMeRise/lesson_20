$(document).ready(function () {
  $(window).scroll(function () {
    var el = $('.slider');
    if ($(this).scrollTop() > el.offset().top - 800) {
      el.addClass('fadeInUp');
    };
  });
  $(window).scroll(function () {
    var el = $('.portfolio__arrows_left img');
    if ($(this).scrollTop() > el.offset().top - 800) {
      el.addClass('fromLeft');
    };
  });
  $(window).scroll(function () {
    var el = $('.portfolio__arrows_right img');
    if ($(this).scrollTop() > el.offset().top - 800) {
      el.addClass('fromRight');
    };
  });
  $(window).scroll(function () {
    var el = $('.offer__button');
    if ($(this).scrollTop() > el.offset().top - 1500) {
      el.addClass('bounceInLeft');
    };
  });
  $(window).scroll(function () {
    var el = $('.price__card:nth-child(1)');
    if ($(this).scrollTop() > el.offset().top - 1000) {
      el.addClass('fadeInUp1');
    };
  });
  $(window).scroll(function () {
    var el = $('.price__card:nth-child(2)');
    if ($(this).scrollTop() > el.offset().top - 1000) {
      el.addClass('fadeInUp2');
    };
  });
  $(window).scroll(function () {
    var el = $('.price__card:nth-child(3)');
    if ($(this).scrollTop() > el.offset().top - 1000) {
      el.addClass('fadeInUp3');
    };
  });
  $(window).scroll(function () {
    var el = $('.price__card:nth-child(4)');
    if ($(this).scrollTop() > el.offset().top - 1000) {
      el.addClass('fadeInUp4');
    };
  });
  $(window).scroll(function () {
    var el = $('.price__card:nth-child(5)');
    if ($(this).scrollTop() > el.offset().top - 1000) {
      el.addClass('fadeInUp5');
    };
  });
  $(window).scroll(function () {
    var el = $('.price__card:nth-child(6)');
    if ($(this).scrollTop() > el.offset().top -800) {
      el.addClass('fadeInUp6');
    };
  });
  $(window).scroll(function () {
    var el = $('.steps__step:nth-child(1)');
    if ($(this).scrollTop() > el.offset().top -800) {
      el.addClass('rotateInDownLeft1');
    };
  });
  $(window).scroll(function () {
    var el = $('.steps__step:nth-child(2)');
    if ($(this).scrollTop() > el.offset().top -800) {
      el.addClass('rotateInDownLeft2');
    };
  });
  $(window).scroll(function () {
    var el = $('.steps__step:nth-child(3)');
    if ($(this).scrollTop() > el.offset().top -800) {
      el.addClass('rotateInDownLeft3');
    };
  });
  $(window).scroll(function () {
    var el = $('.steps__step:nth-child(4)');
    if ($(this).scrollTop() > el.offset().top -800) {
      el.addClass('rotateInDownLeft4');
    };
  });
  $(window).scroll(function () {
    var el = $('.steps__step:nth-child(5)');
    if ($(this).scrollTop() > el.offset().top -800) {
      el.addClass('rotateInDownLeft5');
    };
  });



});