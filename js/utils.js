// 1) A finite set of states of the game. In our game, each state would represent a certain configuration of the grid.
// 2) A finite set of players which are the agents playing the game. In Fihgting game there’s only two players: the human player and the AI.
// 3) A finite set of actions that the players can do. Here, there's several actions that need to describe:
//  a.Define move to left AI;
//  b.Define move to right AI;
//  c.Define jump to AI;
//  d.Define attack1 to AI;
//  e.Define attack2 to AI;
// 4) A transition function that takes the current state and the played action and returns the next state in the game.
// 5) A terminal test function that checks if a state is terminal (that is if the game ends at this state).
// 6) A score function that calculates the score of the player at a terminal state

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

function determineWinner({ pl1, pl2, timerId }) {
  clearTimeout(timerId);
  document.querySelector('#displayText').style.display = 'flex';
  // console.log(pl1.health);
  if (pl1.health === pl2.health) {
    document.querySelector('#displayText').innerHTML = 'Ничья';
    document.querySelector('#restart').style.display = 'flex';
    // console.log('Tie');
  } else if (pl1.health > pl2.health) {
    document.querySelector('#displayText').innerHTML = 'Игрок 1 выиграл!!!';
    document.querySelector('#restart').style.display = 'flex';
    // console.log('Player 1 Win!!!');
  } else if (pl1.health < pl2.health) {
    document.querySelector('#displayText').innerHTML = 'Игрок 2 выиграл!!!';
    document.querySelector('#restart').style.display = 'flex';
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
    // Player Mack
    // Player Mack
    if (
      player.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // PlayerReverse Mack
    if (
      playerReverse.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = playerReverse;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      playerReverse.start === true &&
      player3.start === true &&
      menuMain.start === false
    ) {
      let pl1 = playerReverse;
      let pl2 = player3;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      playerReverse.start === true &&
      player4.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player2
    else if (
      player2.start === true &&
      player.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2.start === true &&
      player3.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player2 Reverse
    else if (
      player2Reverse.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player3
    else if (
      player3.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player3Reverse
    else if (
      player3.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player4
    else if (
      player4.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player4Reverse
    else if (
      player4Reverse.start === true &&
      player.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4Reverse.start === true &&
      player3.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4Reverse.start === true &&
      player2Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4Reverse.start === true &&
      player4.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
  }
}

// menu function
function menu() {
  setInterval(() => {
    menuMain.sound.play();
    menuMain.sound.volume = volume;
  }, 1000);
  if (menuMain.start === true) {
    menuMain.sound.src = '../audio/ambient_menu.wav';
  } else if (menuMain.start === false) {
    menuMain.sound.src = '../audio/Hard void (Finish - Rock 5).wav';
  }
}

// concept 1 changing sprites with shifting past sprite and pushing new with the same players 1 and player 2 !== work
// concept 2 create additional players and sets them individual characteristics but idk how to determine winner with multiple sets  and settings
// concept 3

const sprites = [
  {
    idle: {
      imageSrc: './assets/samuraiMack/Idle.png',
      framesMax: 8,
    },
    run: {
      imageSrc: './assets/samuraiMack/Run.png',
      soundSrc: './audio/walking.wav',
      framesMax: 8,
    },
    jump: {
      imageSrc: './assets/samuraiMack/Jump.png',
      soundSrc: './audio/jump.mp3',
      framesMax: 2,
    },
    fall: {
      imageSrc: './assets/samuraiMack/Fall.png',
      framesMax: 2,
    },
    attack1: {
      imageSrc: './assets/samuraiMack/Attack1.png',
      soundSrc: './audio/swing.wav',
      framesMax: 6,
    },
    attack2: {
      imageSrc: './assets/samuraiMack/Attack2.png',
      framesMax: 6,
    },
    damaged: {
      imageSrc: './assets/samuraiMack/Take Hit - white silhouette.png',
      soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
      framesMax: 4,
    },
    death: {
      imageSrc: './assets/samuraiMack/Death.png',
      soundSrc: './audio/death 2.wav',
      framesMax: 6,
    },
    deathTwo: {
      imageSrc: './assets/kenji/blood/Death - blood - last 2.png',
      framesMax: 3,
    },
  },
];
function WithoutBlood() {
  player.sprites.shift();
  player.sprites.push(sprites[0]);
}
// picking hero from hero list
function HeroList() {
  // const div = document.createElement('div');
  // const mapArray = array.map((arrItem) => arrItem);
  // div.innerHTML = JSON.stringify(mapArray);
  // player.sprites.push(mapArray);
  // var parent = document.getElementById('parentColumnOne');
  // parent.append(div); // or: parent.appendChild(h1)
  document.querySelector('#pickMenu').style.display = 'flex';
  document.querySelector('#mainMenu').style.display = 'none';
}

function PickMackPlayer1() {
  // const hero1 = document.getElementById('hero1Player1');
  // player.sprites.shift();
  // // sprites.map((arrItem) => {
  // //   let hero1 = arrItem;
  // //   // console.log(hero1);
  // // });
  // player.sprites.push(sprites[0]);
  // console.log(player.sprites);
  player.playableHero = true;
  player.AIHero = false;
  player.start = true;
}
function PickMackPlayer2() {
  playerReverse.start = true;
}
function PickKingPlayer1() {
  player3.start = true;
}
function PickKingPlayer2() {
  player3Reverse.start = true;
}
// console.log(sprites[0]);
function PickKenjiPlayer2() {
  player2.start = true;
}
// Playing Kenji on left side like reverse for default side (right)
function PickKenjiPlayer1() {
  player2Reverse.start = true;
}
// Player4 like King 2
function PickKing2Player1() {
  player4.start = true;
}
function PickKing2Player2() {
  player4Reverse.start = true;
}

function TrueStart() {
  // home();
  // player.start = true;
  // player2.start = true;
  menuMain.start = false;
  document.querySelector('#infoPlayers').style.display = 'flex';
  document.querySelector('#pickMenu').style.display = 'none';
  decreaseTimer();
  // console.log('Click start', player3.start, player2.start);
  // console.log(player.sprites, player2.sprites);
}

// menu restart
function MenuRestart() {
  player.start = false;
  playerReverse.start = false;
  player2.start = false;
  player2Reverse.start = false;
  player3.start = false;
  player3Reverse.start = false;
  player4.start = false;
  player4Reverse.start = false;
  menuMain.start = false;

  // Left side hero
  player.health = 100;
  player3.health = 100;
  player2Reverse.health = 100;
  player4.health = 100;
  gsap.to('#playerHealth', {
    width: player.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player3.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player2Reverse.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player4.health + '%',
  });

  // Right side hero
  playerReverse.health = 100;
  player2.health = 100;
  player3Reverse.health = 100;
  gsap.to('#player2Health', {
    width: player2.health + '%',
  });
  gsap.to('#player2Health', {
    width: player3Reverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: playerReverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: player4Reverse.health + '%',
  });
  if (
    player.restart === false ||
    playerReverse.restart === false ||
    player2.restart === false ||
    player2Reverse.restart === false ||
    player3.restart === false ||
    player3Reverse.restart === false ||
    player4.restart === false ||
    player4Reverse.restart === false
  ) {
    // restart set to true
    player.restart = true;
    playerReverse.restart = true;
    player2.restart = true;
    player2Reverse.restart = true;
    player3.restart = true;
    player3Reverse.restart = true;
    player4.restart = true;
    player4Reverse.restart = true;
    // position x like in the start of round(game)
    player.position.x = 256;
    playerReverse.position.x = 768;
    player2.position.x = 768;
    player2Reverse.position.x = 256;
    player3.position.x = 256;
    player3Reverse.position.x = 768;
    player4.position.x = 256;
    player4Reverse.position.x = 768;
    setTimeout(() => {
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
    }, 1000);
  }
  document.querySelector('#mainMenu').style.display = 'flex';
  document.querySelector('#displayText').innerHTML = '';
  document.querySelector('#infoPlayers').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
  let diff = 30 - timer;
  // console.log(diff);
  document.querySelector('#timer').innerHTML =
    timer < 30 ? (timer += diff) : null;
}
// function restart when round ends
function TrueRestart() {
  player.health = 100;
  player3.health = 100;
  player2Reverse.health = 100;
  player4.health = 100;
  gsap.to('#playerHealth', {
    width: player.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player3.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player2Reverse.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player4.health + '%',
  });

  playerReverse.health = 100;
  player2.health = 100;
  player3Reverse.health = 100;
  player4Reverse.health = 100;

  gsap.to('#player2Health', {
    width: player2.health + '%',
  });
  gsap.to('#player2Health', {
    width: player3Reverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: playerReverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: player4Reverse.health + '%',
  });

  if (
    player.restart === false ||
    playerReverse.restart === false ||
    player2.restart === false ||
    player2Reverse.restart === false ||
    player3.restart === false ||
    player3Reverse.restart === false ||
    player4.restart === false ||
    player4Reverse.restart === false
  ) {
    // restart set to true
    player.restart = true;
    playerReverse.restart = true;
    player2.restart = true;
    player2Reverse.restart = true;
    player3.restart = true;
    player3Reverse.restart = true;
    player4.restart = true;
    player4Reverse.restart = true;
    // position x like in the start of round(game)
    player.position.x = 256;
    playerReverse.position.x = 768;
    player2.position.x = 768;
    player2Reverse.position.x = 256;
    player3.position.x = 256;
    player3Reverse.position.x = 768;
    player4.position.x = 256;
    player4Reverse.position.x = 768;
    setTimeout(() => {
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
    }, 1000);
  }

  console.log(player2.dead);
  document.querySelector('#infoPlayers').style.display = 'flex';
  document.querySelector('#displayText').innerHTML = '';
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
  let diff = 30 - timer;
  // console.log(diff);
  document.querySelector('#timer').innerHTML =
    timer < 30 ? (timer += diff) : null;
  decreaseTimer();
  console.log('Click restart', player.start, player2.start);
}
// function back which just hides some menu features
function TrueBack() {
  document.querySelector('#mainMenu').style.display = 'flex';
  document.querySelector('#pickMenu').style.display = 'none';
  document.querySelector('#settings').style.display = 'none';
  document.querySelector('#howToPlay').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
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
