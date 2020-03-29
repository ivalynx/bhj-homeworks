'use strict'

function tabs() {
  const tabs = Array.from(document.querySelectorAll('.tabs'));
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', toggleTabs);
  }
  function toggleTabs(event) {
    const tabs__navigation = Array.from( event.target.closest('.tab__navigation').querySelectorAll('.tab') );
    if(tabs__navigation) {    
      const index = tabs__navigation.indexOf(event.target);
      const tabsIndex = tabs.indexOf(event.target.closest('.tabs'));
      const tabs__content = tabs[tabsIndex].querySelectorAll('.tab__content');
      tabs__navigation.forEach( (el) => el.classList.remove('tab_active') );
      tabs__navigation[index].classList.add('tab_active');
      tabs__content.forEach( (el) => el.classList.remove('tab__content_active') );
      tabs__content[index].classList.add('tab__content_active');
    }
    return false;
  };
};

document.addEventListener("DOMContentLoaded", tabs);