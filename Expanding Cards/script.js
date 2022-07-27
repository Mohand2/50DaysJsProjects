'use strict';

const panels = document.querySelectorAll('.panel');

function removeActiiveClass() {
  panels.forEach((panel) => panel.classList.remove('active'));
}

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiiveClass();
    panel.classList.add('active');
  });
});
