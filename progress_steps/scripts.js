'use strict';

const items = document.querySelectorAll('.item');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');

const activateNextItem = () => {
  for (let i = 0; i < items.length; i++) {
    if (!items[i].classList.contains('active')) {
      i === items.length - 1
        ? btnNext.classList.add('btn-disabled')
        : btnBack.classList.remove('btn-disabled');
      items[i].classList.add('active');
      break;
    }
  }
};

const activateBackItem = () => {
  for (let i = items.length - 1; i >= 0; i--) {
    if (i !== 0) {
      if (items[i].classList.contains('active')) {
        items[i].classList.remove('active');
        i === 1
          ? btnBack.classList.add('btn-disabled')
          : btnNext.classList.remove('btn-disabled');

        break;
      }
    }
  }
};

btnNext.addEventListener('click', activateNextItem);
btnBack.addEventListener('click', activateBackItem);
