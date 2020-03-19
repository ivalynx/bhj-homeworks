'use strict'

function moleGame() {
  const dead = document.getElementById('dead');
  const lost = document.getElementById('lost');
  let killedMole = 0;
  let lostMole = 0;
  const clear = (message, kill, lost) => {
    alert(message);
    killedMole = kill;
    lostMole = lost;
  };

  // вариант с циклом. Для меня совсем неочевидный :( 
  // Поскольку в тз было указано "через цикл", я подумала, что обработчик события добавлять надо тоже через цикл.
  // Но так не работает, и писать несколько строк с одним и тем же значением мне казалось настолько нерациональным,
  // что я в процессе обдумывания этого решения сначала решила через делегирование (спасибо подсказке в тг-чате, т.к. я не знала этого слова)

    const hole_field = document.getElementsByClassName('hole');
    for(let i = 0; i < hole_field.length; i++) {
      hole_field[i].onclick = clickMole;
    }
    
    function clickMole() {
      if(this.className === 'hole hole_has-mole') {
        killedMole += 1;
      } else {
        lostMole += 1;
      }
      if(killedMole === 10) {
        clear(`You won!`, 0, 0);
      }
      if(lostMole === 5) {
        clear(`You lose :(`, 0, 0);
      }
      dead.textContent = killedMole;
      lost.textContent = lostMole;
    }

  // Вариант без цикла, через делегирование. Имхо, наиболее логичный вариант. 

  // const holeField = document.getElementsByClassName('hole-game')[0];

  // holeField.onclick = function(event) {
  //   let hole = event.target;
  //   if( hole.matches('.hole_has-mole') ) {
  //     killedMole += 1;
  //   } else {
  //     lostMole += 1;
  //   }
  //   if(killedMole === 10) {
  //     clear(`You won!`, 0, 0);
  //   }
  //   if(lostMole === 5) {
  //     clear(`You lose :(`, 0, 0);
  //   }
  //   dead.textContent = killedMole;
  //   lost.textContent = lostMole;
  // }
}
window.onload = moleGame;