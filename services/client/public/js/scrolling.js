let screenNumber = 1;
let scrolling = false;

const setScreenStyles = () => {
  $(".main__screen").css('height', $(window).height())
  $(".navbar__link_" + screenNumber).css("color","#100905");
};

const scroll = (event) => {
  if (!scrolling) {
    scrolling = true;
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      $(".navbar__link_" + screenNumber).css("color","#eec97c");
      screenNumber--;
      screenNumber = screenNumber < 1 ? 1 : screenNumber;
    } else {
      $(".navbar__link_" + screenNumber).css("color","#eec97c");
      screenNumber++;
      screenNumber = screenNumber > $(".main__screen").length ? $(".main__screen").length : screenNumber;
    }

    setTimeout(() => showAnimation(screenNumber), 150)
  }
}

const showAnimation = (showScreenNumber) => {
  $('html, body').animate({
    scrollTop: $(".main__screen_" + showScreenNumber).offset().top
  }, 500, "linear", () => scrolling = false);

  $(".navbar__link_" + screenNumber).css("color","#eec97c");
  $(".navbar__link_" + showScreenNumber).css("color","#100905")

  screenNumber = showScreenNumber
}

$(window).resize(setScreenStyles);
$(document).ready(setScreenStyles);
$(document).bind('mousewheel DOMMouseScroll', (event) => scroll(event));