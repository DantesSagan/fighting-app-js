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
    document.querySelector('#restart').style.display = 'flex';
    // console.log('Tie');
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Игрок 1 выиграл!!!';
    document.querySelector('#restart').style.display = 'flex';
    // console.log('Player 1 Win!!!');
  } else if (player.health < enemy.health) {
    document.querySelector('#restart').style.display = 'flex';
    document.querySelector('#displayText').innerHTML = 'Игрок 2 выиграл!!!';
    // console.log('Player 2 Win!!!');
  }
}

// timer for round
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
// menu function
function menu() {
  setInterval(() => {
    menuMain.sound.play();
  }, 1000);
  if (menuMain.start === true) {
    menuMain.sound.src = './audio/ambient_menu.wav';
  } else if (menuMain.start === false) {
    menuMain.sound.src = './audio/Hard void (Finish - Rock 5).wav';
  }
}

// starting game without a choice hero
function TrueStart() {
  // home();
  player.start = true;
  enemy.start = true;
  menuMain.start = false;
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#infoPlayers').style.display = 'flex';
  decreaseTimer();
  console.log('Click start', player.start, enemy.start);
}
// restart when round ends
function TrueRestart() {
  window.location.reload();
  setTimeout(() => {
    TrueStart();
  }, 500);
  decreaseTimer();
}

// exist
function TrueExit() {
  let open = window.open('', '_self', '').close();
}
// about page from menu
function TrueAbout() {
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#howToPlay').style.display = 'grid';
  // document.querySelector('#displayText').innerHTML = 'Игрок 1 выиграл!!!';
}

// settings function
function Settings() {
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#settings').style.display = 'flex';
}

// const volume = document.getElementById('volume').value;
let vol = document.querySelector('input[id="volume"]');
let volume = vol.value;
const rangeValue = () => {
  // const result = document.getElementById('volume').value;
  const inputHandler = (e) => {
    vol.innerHTML = e.target.value;
  };
  console.log(volume)
  // const source = document.getElementById('volume');
  // console.log(volume, 'changed');
  vol.addEventListener('input', inputHandler);
  vol.addEventListener('propertychange', inputHandler); // for IE8
};
// document.getElementById('volume').addEventListener('input', rangeValue);

// function updateVolume() {
//   const newVolume = document.getElementById('volume').value;
//   document.querySelectorAll('audio').forEach(element => element.volume = newVolume)
//   document.getElementById('result').innerText = newVolume
// }

// document.addEventListener('DOMContentLoaded', () => {
/* I'll Suggest to use $(document).ready(function(){ }); If Using JQuery */
// document.getElementById('range').addEventListener('input', updateVolume)
// });
// function AudioSettings() {
//   const inputHandler = (e) => {
//     volume = e.target.value;
//   };
//   // const source = document.getElementById('volume');
//   const result = document.getElementById('result');
//   // console.log(volume, 'changed');
//   volume.addEventListener('input', inputHandler);
//   volume.addEventListener('propertychange', inputHandler); // for IE8
//   //
// }
