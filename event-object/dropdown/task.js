'use strict'

function dropdown() {
  const dropdown__values = document.querySelectorAll('.dropdown__value');
  const dropdown__lists = document.querySelector('.dropdown').querySelectorAll('.dropdown__list')
  for(let i = 0; i < dropdown__values.length; i++) {
    dropdown__values[i].addEventListener('click', toggleDropdownList);
  };
  for(let i = 0; i < dropdown__lists.length; i++) {
    dropdown__lists[i].addEventListener('click', changeButton);
  };
  function toggleDropdownList(event) {
    const thisDropdownListClassList =  event.target.nextElementSibling.classList;
    thisDropdownListClassList.toggle ('dropdown__list_active');
  };
  function changeButton(event) {  
    event.target.closest('.dropdown__list').previousElementSibling.textContent = event.target.textContent;
    event.target.closest('.dropdown__list').classList.remove('dropdown__list_active');
    event.preventDefault();
  }
};
document.addEventListener("DOMContentLoaded", dropdown);