'use string'

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  const intViewportHeight = window.innerHeight;
  console.log(`intViewportHeight = ${intViewportHeight}`);

  window.addEventListener('scroll', () => {
    for(let i = 0; i < reveals.length; i++) {
      const top = reveals[i].getBoundingClientRect().top;
      const bottom = reveals[i].getBoundingClientRect().bottom;
      if(top <= intViewportHeight) {
        reveals[i].classList.add('reveal_active');
      };
      if(bottom <= 0 || top >= intViewportHeight) {
        reveals[i].classList.remove('reveal_active');
      };
    }    
  });
};

document.addEventListener('DOMContentLoaded', reveal);