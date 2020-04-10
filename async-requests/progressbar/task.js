'use strict'

function poll() {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {   
    const formData = new FormData(form); 
    const progress = document.getElementById('progress');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    xhr.upload.onprogress = function() {
      // alert('Загружено на сервер');
      progress.value = 0.5;
    }
    xhr.upload.onload = function() {
      progress.value = 1;
      // alert('Данные полностью загружены на сервер!');
    }
    xhr.upload.onerror = function(){
      console.log('Произошла ошибка при загрузке данных на сервер!');
    }
    xhr.send(formData);
    event.preventDefault();
  });
};

document.addEventListener('DOMContentLoaded', poll);