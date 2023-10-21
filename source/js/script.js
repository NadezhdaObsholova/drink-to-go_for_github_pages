//PRICE-SLIDER
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
    'max': [970]
  }
});

sliderElement.noUiSlider.on('update', () => {
  minValueElement.value = Math.round(sliderElement.noUiSlider.get().shift(-1));
  maxValueElement.value = Math.round(sliderElement.noUiSlider.get().slice(1));
});

//BURGER-MENU
const menuButtonElement = document.querySelector('.header__menu-button');
const headerNavElement = document.querySelector('.nav-header');

const onClickMenuButtonElement = () => {
  headerNavElement.classList.toggle('nav-header--js');
  menuButtonElement.classList.toggle('js-toggle-button');
};

menuButtonElement.addEventListener('click', onClickMenuButtonElement);

//SLIDER
const slides = Array.from(document.querySelectorAll('.slider__item'));
const buttonPrev = document.querySelector('.slider__button-prev');
const buttonNext = document.querySelector('.slider__button-next');
const paginationMark = Array.from(document.querySelectorAll('.slider__padination-item'));//путь внутри кнопки

let currentSlideIndex = 0;

//отключение кнопки "назад"
if (currentSlideIndex === 0) {
  buttonPrev.setAttribute('disabled', true);
}

//смена отображаемого слайда
const shiftSlide = (index) => {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove('visually-hidden');
    } else {
      slide.classList.add('visually-hidden');
    }
  });
};

//отметка на текущей пагинации
const paginationMarkCurrent = () => {
  paginationMark.forEach((item, i) => {
    if (i === currentSlideIndex) {
      item.classList.add('slider__padination-item--current');
    } else {
      item.classList.remove('slider__padination-item--current');
    }
  });
};

// обработчик переключения слайдов вперед
buttonNext.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex = currentSlideIndex + 1;
    shiftSlide(currentSlideIndex);
    paginationMarkCurrent();
  }
  if (currentSlideIndex === slides.length - 1) {
    buttonNext.setAttribute('disabled', true);
  }
  buttonPrev.removeAttribute('disabled');
});

// обработчик переключения слайдов назад
buttonPrev.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex = currentSlideIndex - 1;
    shiftSlide(currentSlideIndex);
    paginationMarkCurrent();
  }
  if (currentSlideIndex === 0) {
    buttonPrev.setAttribute('disabled', true);
  }

  buttonNext.removeAttribute('disabled');
});
