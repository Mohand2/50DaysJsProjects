'use strict';

const mainArticle = document.querySelector('.container');
const btn = document.querySelector('.btn');

const rotateMainArticle = () => {
  if (!mainArticle.classList.contains('rotate-container')) {
    mainArticle.classList.add('rotate-container');
    btn.classList.add('rotate-icons');
  } else {
    mainArticle.classList.remove('rotate-container');
    btn.classList.remove('rotate-icons');
  }
};

btn.addEventListener('click', rotateMainArticle);
