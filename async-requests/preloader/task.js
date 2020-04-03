'use string'

function preloader() {
  const items = document.getElementById('items');
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/', true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const loader = document.getElementById('loader');
      loader.classList.remove('loader_active');
      const response = JSON.parse(xhr.responseText);
      const responseItems = document.createElement('div');
      const values = Object.values(response.response.Valute);
      for(const value of values) {
        responseItems.innerHTML += `
        <div class="item__code">
          ${value.CharCode}
        </div>
        <div class="item__value">
          ${value.Value}
        </div>
        <div class="item__currency">
          руб.
        </div>
        `
      }
      items.appendChild(responseItems);
    };
  };
};

document.addEventListener('DOMContentLoaded', preloader);