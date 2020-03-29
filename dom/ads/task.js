'use string'

function ads() {
  const rotators = Array.from(document.querySelectorAll('.rotator'));
  let delay = 1000;
  let index = 0;
  let previousIndex = -1;
  const nextIndex = 0;
  let lastIndex = null;

  rotators.forEach( rotator => Array.from(rotator.querySelectorAll('.rotator__case')).forEach( (el, index, array) => setInterval(changeRotators(el, index, array), delay) ));

  function changeRotators(el, index, array) {
    delay = el.dataset.speed;
    el.style.color = el.dataset.color;
    // console.log(`el: ${el},\n index: ${index}, \n array: ${array} \n previousIndex = ${previousIndex}`);
    if( previousIndex >= 0) {
      array[previousIndex].classList.remove('rotator__case_active');
    } else {
      lastIndex = array.length - 1;
      array[lastIndex].classList.remove('rotator__case_active');
    };
    previousIndex += 1;
    index += 1;
    if( index === array.length ) {
      index = nextIndex;
      previousIndex = -1;
    };
    el.classList.toggle('rotator__case_active');
    // console.log(`index: ${index}, \n array: ${array} \n previousIndex = ${previousIndex}`);
  };
};

document.addEventListener('DOMContentLoaded', ads);