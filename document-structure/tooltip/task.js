'use strict'

function tooltip() {
  const linksToTooltips = document.querySelectorAll('.has-tooltip');
  for (const linkToTooltip of linksToTooltips) {
    linkToTooltip.addEventListener('click', showTooltip);
  };

  function showTooltip(event) {
    event.preventDefault();
    const link = event.target;
    if( link.querySelector('.tooltip') ) {
        link.querySelector('.tooltip').classList.toggle('tooltip_active');
    } else {     
      const tooltip = document.createElement('div');
      tooltip.textContent = link.getAttribute('title');
      tooltip.classList.add('tooltip', 'tooltip_active');
      link.insertAdjacentElement('beforeEnd', tooltip);
    } 
  };
};

document.addEventListener('DOMContentLoaded', tooltip);