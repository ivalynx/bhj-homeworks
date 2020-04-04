'use strict'

function poll() {
  const progress = document.getElementById( 'progress' );
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.OPENED) {
      progress.value = 0.1;
    };
    if(xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
      progress.value = 0.2;
    };
    if(xhr.readyState === XMLHttpRequest.LOADING) {
      progress.value = 0.7;
    };
    if(xhr.readyState === XMLHttpRequest.DONE) {
      progress.value = 1;
    };
  };
};

document.addEventListener('DOMContentLoaded', poll);