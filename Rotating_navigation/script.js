'use strict';

const mainArticle = document.querySelector('.container');
const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');

const rotateMainArticle = () => {
  if (!mainArticle.classList.contains('rotate-container')) {
    mainArticle.classList.add('rotate-container');
    btn.classList.add('rotate-icons');
    nav.classList.add('nav-transition');
  } else {
    mainArticle.classList.remove('rotate-container');
    btn.classList.remove('rotate-icons');
    nav.classList.remove('nav-transition');
  }
};

btn.addEventListener('click', rotateMainArticle);
