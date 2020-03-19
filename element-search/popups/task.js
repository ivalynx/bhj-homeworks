'use strict'
function popups() {
  const modalFirst = document.getElementById('modal_main');
  const modalSecond = document.getElementById('modal_success');
  const btnsClose = document.querySelectorAll('.modal__close_times');
  const btnNextModal = document.querySelector('.btn_danger');
  const btnSuccess = document.querySelector('.btn_success');
  modalFirst.className = 'modal modal_active';
  
  btnsClose[0].onclick = closeModal;
  btnsClose[1].onclick = closeModal;
  btnSuccess.onclick = closeModal; 
  btnNextModal.onclick = () => {
    modalFirst.className = 'modal';
    modalSecond.className = 'modal modal_active';
  };

  function closeModal() {    
    modalFirst.className = 'modal';
    modalSecond.className = 'modal';
  };
}
popups();
