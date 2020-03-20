const sliderItems = document.querySelectorAll('.slider__item');
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

let startSliderItemIndex = 0;
let nextSliderItemIndex = 0;

sliderArrowPrev.onclick = () => {nextSliderItemIndex -= 1; leafSlider()};
sliderArrowNext.onclick = () => {nextSliderItemIndex += 1; leafSlider()};

function leafSlider() {
  if( nextSliderItemIndex < 0 ) {
    nextSliderItemIndex = sliderItems.length + nextSliderItemIndex;
  } else if( nextSliderItemIndex >= sliderItems.length ) {
    nextSliderItemIndex = sliderItems.length - nextSliderItemIndex;
  }
  sliderItems[startSliderItemIndex].className = 'slider__item';
  startSliderItemIndex = nextSliderItemIndex;
  sliderItems[startSliderItemIndex].className = 'slider__item slider__item_active';
};