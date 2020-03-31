'use string'

function interests() {
  const interests = document.querySelectorAll('.interest__check');
  for (const interest of interests) {
    interest.addEventListener('click', clickInterest);
  };

  function clickInterest(event) {
    const commonInterest = event.target.closest('.interest').querySelector('.interests_active');
    if( commonInterest ) {
      commonInterest.querySelectorAll('.interest__check').forEach(el => {
        if(event.target.checked) {
          el.checked = true;
        } else {
          el.checked = false;
        }
      });
    } 
    // else {
    //   let previousSiblingInterestInput = null;
    //   let nextSiblingInterestInput = null;
    //   if( event.target.closest('.interest').previousElementSibling.querySelector('.interest__check') ) {
    //     previousSiblingInterestInput = event.target.closest('.interest').previousElementSibling.querySelector('.interest__check');  
    //   }
    //   if( event.target.closest('.interest').nextElementSibling.querySelector('.interest__check') ) {
    //     nextSiblingInterestInput = event.target.closest('.interest').nextElementSibling.querySelector('.interest__check');
    //   }
    //   // найти siblingInterestInput
    //   const commonInterestInput = event.target.closest('.interests_active').closest('.interest').querySelector('.interest__check');
    //   if( siblingInterestInput.chechecked && event.target.checked ) {
    //     commonInterestInput.checked = true;
    //   } else if( siblingInterestInput.chechecked || event.target.checked ) {
    //     commonInterestInput.indeterminate = true;
    //   } else {
    //     commonInterestInput.checked = false;
    //   }
    // }
  };
}
document.addEventListener('DOMContentLoaded', interests);