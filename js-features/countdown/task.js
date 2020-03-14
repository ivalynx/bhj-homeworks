'use strict'

function countDown() {
  const timer = document.getElementById('timer');
  timer.start = 59;
  timer.textContent = timer.start;
  let delay = timer.start * 1000;
  let timerId = setInterval(() => timer.textContent-= 1, 1000);
  setTimeout( () => clearInterval(timerId), delay);
  setTimeout( () => window.location = 'https://netology.ru/', delay);
};

countDown();
