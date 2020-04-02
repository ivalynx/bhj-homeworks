'use string'

function tooltip() {
  const linksToTooltips = document.querySelectorAll('.has-tooltip');
  for (const linkToTooltip of linksToTooltips) {
    linkToTooltip.addEventListener('click', showTooltip);
  };

  function showTooltip(event) {
    const link = event.target;
    const otherTooltips = document.querySelectorAll('.tooltip');
    for (const otherTooltip of otherTooltips) {
      otherTooltip.remove();
    };
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = link.getAttribute('title');
    tooltip.style.display = 'block';
    // tooltip.style.left = '0';
    // tooltip.style.top = '0';
    link.insertAdjacentElement('afterend', tooltip);
    event.preventDefault();
  }
};

document.addEventListener('DOMContentLoaded', tooltip);