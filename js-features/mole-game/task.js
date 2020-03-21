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

    const hole_field = document.getElementsByClassName('hole');
    for (const hole of hole_field) {
      hole.onclick = clickMole;
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

  // Вариант без цикла, через делегирование. Имхо, более логичный вариант. 

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
