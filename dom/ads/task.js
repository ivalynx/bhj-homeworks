'use string'

function ads() {
  const rotators = Array.from(document.querySelectorAll('.rotator'));
  let delay = 1000;
  let currentCase = null;
  let currentCaseIndex = null;
  let rotated = null;
  for(let i = 0; i < rotators.length; i++) {
    rotators[i].querySelector('.rotator__case_active').style.color = rotators[i].querySelector('.rotator__case_active').dataset.color;
  }

  intervalID = setInterval(changeRotators, delay);
  
  function changeRotators() {
    rotated += 1;
    for(let i = 0; i < rotators.length; i++) {
      const cases = Array.from(rotators[i].querySelectorAll('.rotator__case'));
      currentCase = rotators[i].querySelector('.rotator__case_active');
      currentCaseIndex = cases.indexOf(currentCase);
      if( currentCaseIndex === cases.length - 1 ) {
        cases[0].classList.add('rotator__case_active');
      } else {
        currentCase.nextElementSibling.classList.add('rotator__case_active');
      }
      currentCase.classList.remove('rotator__case_active');
      currentCase = rotators[i].querySelector('.rotator__case_active');
      delay = currentCase.dataset.speed;
      currentCase.style.color = currentCase.dataset.color;
    }
  };

};

document.addEventListener('DOMContentLoaded', ads);