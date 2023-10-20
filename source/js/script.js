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


// слайдер

const slides = Array.from(document.querySelectorAll('.slider__item'));
const prevButton = document.querySelector('.slider__button-prev');
const nextButton = document.querySelector('.slider__button-next');
const paginationMark = Array.from(document.querySelectorAll('.slider__padination-item'));//путь внутри кнопки

let currentSlideIndex = 0;

// Функция, которая скрывает все слайды и показывает только текущий слайд.

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove('visually-hidden');
    } else {
      slide.classList.add('visually-hidden');
    }
  });
};

//пагинация

const paginationMarkCurrent = () => {
  paginationMark.forEach((item, i) => {
    if (i === currentSlideIndex) {
      item.classList.add('slider__padination-item--current');
    } else {
      item.classList.remove('slider__padination-item--current');
    }
  });
};


// Показать первый слайд при загрузке страницы.
showSlide(currentSlideIndex);
// Показать первую пагинацию при загрузке страницы.
paginationMarkCurrent();
//
if (currentSlideIndex === 0) {
  prevButton.setAttribute('disabled', true);
}

// Обработчик для кнопки "Следующий слайд".
nextButton.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex = currentSlideIndex + 1;
    showSlide(currentSlideIndex);
    paginationMarkCurrent();
  }
  if (currentSlideIndex === slides.length - 1) {
    nextButton.setAttribute('disabled', true);
  }

  prevButton.removeAttribute('disabled');

});

// Обработчик для кнопки "Предыдущий слайд".
prevButton.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex = currentSlideIndex - 1;
    showSlide(currentSlideIndex);
    paginationMarkCurrent();
  }
  if (currentSlideIndex === 0) {
    prevButton.setAttribute('disabled', true);
  }

  nextButton.removeAttribute('disabled');
});

// Обработчик для пагинации.
sliderPagination.forEach((paginationButton, i) => {
  paginationButton.addEventListener('click', () => {
    currentSlideIndex = i;
    showSlide(currentSlideIndex);
    paginationMarkCurrent();

    if (currentSlideIndex === 0) {
      prevButton.setAttribute('disabled', true);
    } else {
      prevButton.removeAttribute('disabled');
    }

    if (currentSlideIndex === slides.length - 1) {
      nextButton.setAttribute('disabled', true);
    } else {
      nextButton.removeAttribute('disabled');
    }
  });
});

