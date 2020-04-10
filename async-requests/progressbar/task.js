'use strict'

function poll() {
  const progress = document.getElementById('progress');
  const form = document.getElementById('form');
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  formData.append('file', 'file');
  form.addEventListener('submit', event => {
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    xhr.onprogress = function(event) {
      progress.value = event.loaded / 1000000;
    };
    xhr.send(formData);
    event.preventDefault();
  });
};

document.addEventListener('DOMContentLoaded', poll);