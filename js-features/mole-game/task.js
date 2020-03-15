'use strict'

function moleGame() {
  const dead = document.getElementById('dead');
  const lost = document.getElementById('lost');
  let killedMole = 0;
  let lostMole = 0;

  // вариант с циклом. Для меня совсем неочевидный :( 
  // Поскольку в тз было указано "через цикл", я подумала, что обработчик события добавлять надо тоже через цикл.
  // Но так не работает, и писать несколько строк с одним и тем же значением мне казалось настолько нерациональным,
  // что я в процессе обдумывания этого решения сначала решила через делегирование (спасибо подсказке в тг-чате, т.к. я не знала этого слова)

    // const hole_field = document.getElementsByClassName('hole');
    // const holeField = [];
    // for(let i = 0; i < hole_field.length; i++) {
    //   const number = i + 1;
    //   const constName = 'hole' + number;
    //   holeField.push(document.getElementById(constName));
    // }
  
    // hole1.onclick = clickMole;
    // hole2.onclick = clickMole;
    // hole3.onclick = clickMole;
    // hole4.onclick = clickMole;
    // hole5.onclick = clickMole;
    // hole6.onclick = clickMole;
    // hole7.onclick = clickMole;
    // hole8.onclick = clickMole;
    // hole9.onclick = clickMole;
  
    // function clickMole() {
    //   if(this.className === 'hole hole_has-mole') {
    //     killedMole += 1;
    //   } else {
    //     lostMole += 1;
    //   }
    //   if(killedMole === 10) {
    //     alert(`You won!`);
    //     killedMole = 0;
    //     lostMole = 0;
    //   }
    //   if(lostMole === 5) {
    //     alert(`You lose :(`);
    //     killedMole = 0;
    //     lostMole = 0;
    //   }
    //   dead.textContent = killedMole;
    //   lost.textContent = lostMole;
    // }

  // Вариант без цикла, через делегирование. Имхо, наиболее логичный вариант. 

  const hole_field = document.getElementsByClassName('hole-game');
  const holeField = hole_field.item(0);  

  holeField.onclick = function(event) {
    let hole = event.target;
    if( hole.matches('.hole_has-mole') ) {
      killedMole += 1;
    } else {
      lostMole += 1;
    }
    if(killedMole === 10) {
      alert(`You won!`);
      killedMole = 0;
      lostMole = 0;
    }
    if(lostMole === 5) {
      alert(`You lose :(`);
      killedMole = 0;
      lostMole = 0;
    }
    dead.textContent = killedMole;
    lost.textContent = lostMole;
  }
}
window.onload = moleGame;