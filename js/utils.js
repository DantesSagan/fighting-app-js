
// new function which listen collision between two boxes (rectangular) or sprites
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector('#displayText').style.display = 'flex';
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Ничья';
    
    // console.log('Tie');
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Игрок 1 выиграл!!!';
    // console.log('Player 1 Win!!!');
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Игрок 2 выиграл!!!';
    // console.log('Player 2 Win!!!');
  }
}

let timer = 30;
let timerId;
function decreaseTimer() {
  console.log(timer);
  timerId = setTimeout(decreaseTimer, 1000);
  if (timer > 0) {
    timer--;
    document.querySelector('#timer').innerHTML = timer;
  }
  if (timer === 0) {
    // when where is if's statements equals to true so
    // apply this querySelector with style flex
    determineWinner({ player, enemy, timerId });
  }
}
