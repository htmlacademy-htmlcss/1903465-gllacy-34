const slides = document.querySelectorAll('.slider-slide');
const buttonPrev = document.querySelector('.slider-prev');
const buttonNext = document.querySelector('.slider-next');
const bullets = document.querySelectorAll('.slider-pagination-button');
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlide = document.querySelector('.slider-slide.is-active');
  const activeBullet = document.querySelector('.slider-pagination-button.is-active');

  // document.body.style.backgroundColor = slides[index].dataset.color;
  // slides.forEach((element) => (element.style.order = ""));
  document.body.classList.add('${slider[index].dataset.class}');
  activeSlide.classList.remove("is__active");
  slides[index].classList.add("is__active");
  slides[index].style.order = "-1";
  activeBullet.classList.remove("is__active");
  bullets[index].classList.add("is__active");
};

const onPrevButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
};

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
};

const initSlider = () => {
  buttonPrev.addEventListener('click', onPrevButtonClick);
  buttonNext.addEventListener('click', onNextButtonClick);
  bullets.forEach((element, index) => element.addEventListener('click', () => onSlideChange(index)));
};

initSlider();


// const modalOpenBtn = document.querySelector('.feedback-button');
// const modal = document.querySelector('.modal-container');
// const modalCloseBtn = document.querySelector('.modal-close-button');

// modalOpenBtn.addEventListener('click', (evt) => {
//   evt.preventDefault();
// modal.classList.add('is-open');
// });

// modalCloseBtn.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   modal.classList.remove('is-open');
//   });

// document.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Escape') {
//     evt.preventDefault();
//     modal.classList.remove('is-open');
//   }
// });

document.addEventListener('click', (evt) => {
  if ( evt.target === modal) {
   modal.classList.remove('is-open');
  }
});
