'use strict'

function poll() {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {   
    const formData = new FormData(form); 
    const progress = document.getElementById('progress');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    xhr.upload.onprogress = function() {
      progress.value = 0.5;
    }
    xhr.upload.onload = function() {
      progress.value = 1;
    }
    xhr.upload.onerror = function(){
      alert('Произошла ошибка при загрузке данных на сервер!');
    }
    xhr.send(formData);
    event.preventDefault();
  });
};

document.addEventListener('DOMContentLoaded', poll);