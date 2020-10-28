var screenNumber = 1;
var scrolling = false;

var setScreenStyles = () => {
  $('.main__screen').css('height', $(window).height());
  $('.navbar__link_' + screenNumber).css('color', '#100905');
};

var scroll = (event) => {
  $('.main__screen_' + screenNumber).css('paddingTop', '0px');

  if (!scrolling) {
    scrolling = true;

    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      $('.navbar__link_' + screenNumber).css('color', '#eec97c');
      screenNumber--;
      screenNumber = screenNumber < 1 ? 1 : screenNumber;
    } else {
      $('.navbar__link_' + screenNumber).css('color', '#eec97c');
      screenNumber++;
      screenNumber = screenNumber > $('.main__screen').length ? $('.main__screen').length : screenNumber;
    }

    if (screenNumber === 2 || screenNumber === 6) {
      setTimeout(() => {
        $('.main__screen_' + screenNumber).animate({ 'padding-top': '54px' }, 900);
      }, 700);
    }

    setTimeout(() => showAnimation(screenNumber), 150);
  }
};

var showAnimation = (showScreenNumber) => {
  $('html, body').animate(
    {
      scrollTop: $('.main__screen_' + showScreenNumber).offset().top,
    },
    500,
    'linear',
    () => (scrolling = false),
  );

  $('.navbar__link_' + screenNumber).css('color', '#eec97c');
  $('.navbar__link_' + showScreenNumber).css('color', '#100905');

  screenNumber = showScreenNumber;
};

$(window).resize(setScreenStyles);
$(document).ready(setScreenStyles);
$(document).bind('mousewheel DOMMouseScroll', (event) => scroll(event));
