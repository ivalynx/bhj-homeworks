function popups() {
  // Считаем модалы
  const arrModals = Array.from(document.querySelectorAll('.modal'));
  // Находим первый и показываем его
  arrModals[0].className = 'modal modal_active';
  const arrButtonsClose = Array.from(document.querySelectorAll('.modal__close_times'));
  const arrButtonsNext = Array.from(document.querySelectorAll('.btn'));   
  
  let modalCurrent = null;
  let modalCurrentIndex = null;   
  let btn_close_current = null;      
  let btn_next_current = null;
  let nextModalIndex = modalCurrentIndex + 1;   
  const checkParentIsModalCurrent = (el) => el.parentElement.parentElement === modalCurrent;
  
  checkModalCurrent();
  checkBtnCloseCurrent();
  checkBtnNextCurrent();

  btn_close_current.onclick = () => {
    console.log(btn_close_current.textContent);
    arrModals[modalCurrentIndex].className = 'modal';
  };  

  btn_next_current.onclick = () => {
    arrModals[modalCurrentIndex].className = 'modal'; 
    modalCurrentIndex += 1;
    if( nextModalIndex < arrModals.length ) {
      console.log(`going`);
      arrModals[nextModalIndex].className = 'modal modal_active';
      nextModalIndex += 1;
      checkModalCurrent();
      checkBtnCloseCurrent();
      checkBtnNextCurrent();   
    console.log(`Чекаем кнопки ещё раз ${btn_close_current.textContent} ${btn_next_current.textContent}`);
    }
  };

  function checkModalCurrent() {
    modalCurrent = arrModals.find( (el) => el.className === 'modal modal_active' );
    modalCurrentIndex = arrModals.indexOf(modalCurrent);    
    console.log(`checkModalCurrent indexOf ${modalCurrentIndex}`)
  }
  function checkBtnCloseCurrent() {
    btn_close_current = arrButtonsClose.find( checkParentIsModalCurrent );       
    console.log( `checkBtnCloseCurrent ${btn_close_current.textContent}` );
  }
  function checkBtnNextCurrent() {
    btn_next_current = arrButtonsNext.find( checkParentIsModalCurrent );       
    console.log(`checkBtnNextCurrent ${btn_next_current.textContent}`)
  }
};

window.onload = popups;