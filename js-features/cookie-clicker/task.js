'use strict'

function cookieClicker() {
  const cookie = document.getElementById('cookie');
  const clicker__counter = document.getElementById('clicker__counter');
  const clicker__speed = document.getElementById('clicker__speed');
  let clickerCounter = 0;
  let clickerSpeed = 0;
  const firstClick = Date.now();  
  cookie.onclick = ClickerCounter;
  function ClickerCounter() {
    if(cookie.className === 'clicker__cookie') {
      cookie.className = 'clicker__cookie big';
    } else {
      cookie.className = 'clicker__cookie';
    }
    clickerCounter += 1;
    clicker__counter.textContent = clickerCounter;
    const clickNow = Date.now();
    const timeNow = (clickNow - firstClick) / 1000;
    clickerSpeed = clickerCounter / timeNow;
    clicker__speed.textContent = clickerSpeed.toFixed(1);
  };
}
window.onload = cookieClicker;