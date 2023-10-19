//price-slider
const sliderElement = document.querySelector('.price-slider__holder');
const minValueElement = document.querySelector('.price-slider__value-min');
const maxValueElement = document.querySelector('.price-slider__value-max');

minValueElement.value = 0;
maxValueElement.value = 900;

noUiSlider.create(sliderElement, {

  start: [0, 900],
  connect: true,
  step: 1,
  range: {
    'min': [0],
    'max': [1000]
  }
});

sliderElement.noUiSlider.on('update', () => {
  minValueElement.value = Math.round(sliderElement.noUiSlider.get().shift(-1));
  maxValueElement.value = Math.round(sliderElement.noUiSlider.get().slice(1));
});

//burger-menu
const menuButtonElement = document.querySelector('.header__menu-button');
const headerNavElement = document.querySelector('.nav-header');


const onClickMenuButtonElement = () => {
  headerNavElement.classList.toggle('nav-header--js');
  menuButtonElement.classList.toggle('js-toggle-button');
};

menuButtonElement.addEventListener('click', onClickMenuButtonElement);




//slider
/*
const buttonPrevElement = document.querySelector('.slider__button-prev');
const buttonNextElement = document.querySelector('.slider__button-next');
const slides = document.querySelectorAll('.slider__item');

console.log(buttonPrevElement);
console.log(buttonNextElement);
console.log(slides);
*/