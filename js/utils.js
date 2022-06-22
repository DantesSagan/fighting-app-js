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
    document.querySelector('#menuRestart').style.display = 'flex';
    // console.log('Tie');
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Игрок 1 выиграл!!!';
    document.querySelector('#restart').style.display = 'flex';
    document.querySelector('#menuRestart').style.display = 'flex';
    // console.log('Player 1 Win!!!');
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Игрок 2 выиграл!!!';
    document.querySelector('#restart').style.display = 'flex';
    document.querySelector('#menuRestart').style.display = 'flex';
    // console.log('Player 2 Win!!!');
  }
}

// timer for round
let timer = 30;
// let currTime = timer > 0 ? timer-- : 0;
let timerId;
function decreaseTimer() {
  // console.log(timer);
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
    menuMain.sound.volume = volume;
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
  document.querySelector('#infoPlayers').style.display = 'flex';
  document.querySelector('#mainMenu').style.display = 'none';
  decreaseTimer();
  console.log('Click start', player.start, enemy.start);
}
// menu restart
function MenuRestart() {
  player.start = false;
  enemy.start = false;
  menuMain.start = false;
  document.querySelector('#mainMenu').style.display = 'flex';
  document.querySelector('#displayText').innerHTML = '';
  document.querySelector('#infoPlayers').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
  document.querySelector('#menuRestart').style.display = 'none';
  if (
    player.health < 100 ||
    enemy.health < 100 ||
    (player.health < 100 && enemy.health < 100)
  ) {
    player.health = 100;
    gsap.to('#playerHealth', {
      width: player.health + '%',
    });
    enemy.health = 100;
    gsap.to('#enemyHealth', {
      width: enemy.health + '%',
    });
    player.dead = false;
    enemy.dead = false;
    player.switchSprite('idle');
    enemy.switchSprite('idle');
  }
  player.dead = false;
  enemy.dead = false;
  decreaseTimer();
}
// function restart when round ends
function TrueRestart() {
  if (
    player.start === true &&
    enemy.start === true &&
    menuMain.start === false
  ) {
    if (
      player.health < 100 ||
      enemy.health < 100 ||
      (player.health < 100 && enemy.health < 100)
    ) {
      player.health = 100;
      gsap.to('#playerHealth', {
        width: player.health + '%',
      });
      enemy.health = 100;
      gsap.to('#enemyHealth', {
        width: enemy.health + '%',
      });
      if (
        player.dead === true ||
        player.dead === true ||
        (player.dead === true && player.dead === true)
      ) {
        player.dead = false;
        enemy.dead = false;
        player.switchSprite('idle');
        enemy.switchSprite('idle');
      }
    }

    console.log(enemy.dead);
    document.querySelector('#infoPlayers').style.display = 'flex';
    document.querySelector('#displayText').innerHTML = '';
    document.querySelector('#mainMenu').style.display = 'none';
    document.querySelector('#restart').style.display = 'none';
    document.querySelector('#menuRestart').style.display = 'none';
    let diff = 30 - timer;
    console.log(diff);
    document.querySelector('#timer').innerHTML =
      timer < 30 ? (timer += diff) : null;
    decreaseTimer();
    console.log('Click restart', player.start, enemy.start);
  }
}
// function back which just hides some menu features
function TrueBack() {
  document.querySelector('#mainMenu').style.display = 'flex';
  document.querySelector('#settings').style.display = 'none';
  document.querySelector('#howToPlay').style.display = 'none';
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

// changing volume menu music
let vol = document.querySelector('input[value="volume"]');
let volume = Number(vol.value);
const rangeValue = () => {
  const result = document.getElementById('result');
  const inputHandler = (e) => {
    volume = e.target.value;
    result.innerHTML = e.target.value;
  };
  console.log(`${volume} = volume`);
  vol.addEventListener('change', inputHandler); // for IE8
};

// changing volume fighting sounds
let volFight = document.querySelector('input[value="volumeFight"]');
let volumeFight = Number(volFight.value);
const rangeValueFight = () => {
  const resultFight = document.getElementById('resultFight');
  const inputHandler = (e) => {
    volumeFight = e.target.value;
    resultFight.innerHTML = e.target.value;
  };
  console.log(`${volumeFight} = volumeFight`);
  volFight.addEventListener('change', inputHandler); // for IE8
};

// changing volume death sounds
let volDeath = document.querySelector('input[value="volumeDeath"]');
let volumeDeath = Number(volDeath.value);
const rangeValueDeath = () => {
  const resultDeath = document.getElementById('resultDeath');
  const inputHandler = (e) => {
    volumeDeath = e.target.value;
    resultDeath.innerHTML = e.target.value;
  };
  console.log(`${volumeDeath} = volumeDeath`);
  volDeath.addEventListener('change', inputHandler); // for IE8
};

// changing volume walking | jump sounds
let volMove = document.querySelector('input[value="volumeMove"]');
let volumeMove = Number(volMove.value);
const rangeValueMove = () => {
  const resultMove = document.getElementById('resultMove');
  const inputHandler = (e) => {
    volumeMove = e.target.value;
    resultMove.innerHTML = e.target.value;
  };
  console.log(`${volumeMove} = volumeMove`);
  volMove.addEventListener('change', inputHandler); // for IE8
};
