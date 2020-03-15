function popups() {
  // Считаем модалы
  const modals = document.querySelectorAll('.modal');
  const arrModals = Array.from(modals);
  // Находим первый и показываем его
  const modalFirst = arrModals[0];
  modalFirst.className = 'modal modal_active';
  const buttonsClose = document.querySelectorAll('.modal__close_times');
  const arrButtonsClose = Array.from(buttonsClose);
  const buttonsNext = document.querySelectorAll('.btn');
  const arrButtonsNext = Array.from(buttonsNext);   
  
  let modalCurrent = null;
  let modalCurrentIndex = null;   
  let btn_close_current = null;      
  let btn_next_current = null;
  let nextModalIndex = modalCurrentIndex + 1;   
  const checkParentIsModalCurrent = (el) => el.parentElement.parentElement === modalCurrent;
  
  checkModalCurrent();
  checkModalCurrentIndex()
  checkBtnCloseCurrent();
  checkBtnNextCurrent();

  btn_close_current.onclick = () => {
    console.log(btn_close_current.textContent);
    arrModals[modalCurrentIndex].className = 'modal';
  };  

  btn_next_current.onclick = () => {
    
    console.log(btn_close_current.textContent);

    arrModals[modalCurrentIndex].className = 'modal'; 
    modalCurrentIndex += 1;
    if( nextModalIndex < arrModals.length ) {
      console.log(`going`);
      arrModals[nextModalIndex].className = 'modal modal_active';
      nextModalIndex += 1;
      checkModalCurrent();
      checkModalCurrentIndex();
      checkBtnCloseCurrent();
      checkBtnNextCurrent();
      checkNextModalIndex();
      
    console.log(`Чекаем кнопки ещё раз ${btn_close_current.textContent} ${btn_next_current.textContent}`);
    }
  };

  function checkModalCurrent() {
    modalCurrent = arrModals.find( (el) => el.className === 'modal modal_active' );    
    console.log(`checkModalCurrent indexOf ${arrModals.indexOf(modalCurrent)}`)
  }
  function checkBtnCloseCurrent() {
    btn_close_current = arrButtonsClose.find( checkParentIsModalCurrent );       
    console.log( `checkBtnCloseCurrent ${btn_close_current.textContent}` );
  }
  function checkBtnNextCurrent() {
    btn_next_current = arrButtonsNext.find( checkParentIsModalCurrent );       
    console.log(`checkBtnNextCurrent ${btn_next_current.textContent}`)
  }
  function checkNextModalIndex() {
    nextModalIndex = arrModals.indexOf(modalCurrent) + 1;
    console.log(`checkNextModalIndex ${nextModalIndex}`);
  }
  function checkModalCurrentIndex() {
    modalCurrentIndex = arrModals.indexOf(modalCurrent );
    console.log(`checkModalCurrentIndex ${modalCurrentIndex}`);
  }
};

window.onload = popups;