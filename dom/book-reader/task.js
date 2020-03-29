'use string'

function bookReader() {
  const book_controls = Array.from(document.querySelector('.book__control_font-size').querySelectorAll('.font-size'));
  const book = document.getElementById('book');
  for(let i = 0; i < book_controls.length; i++) {
    book_controls[i].addEventListener('click', changeFont);
  }

  function changeFont(event) {
    event.preventDefault(); 
    const activeLink = event.target;
    book_controls.forEach(el => el.classList.remove('font-size_active'));
    book.className = 'book';
    if( activeLink.classList.contains('font-size_small') ) {
      book.classList.add('book_fs-small');
    } else if( activeLink.classList.contains('font-size_big') ) {
      book.classList.add('book_fs-big');
    };
    activeLink.classList.add('font-size_active');
  };
}
document.addEventListener('DOMContentLoaded', bookReader);