// Basic fighting game mechanics
// Project setup (done)
// Create Player and player2 (done)
//  Move characters with Event listeners (done)
// Health Bar interface
// Game timers and Game Over

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 596;

c.fillRect(0, 0, canvas.width, canvas.height);

// This is means whitch velocity to falling down to bottom of the canvas
// And how faster this rich bottom by this
const gravity = 0.7;
const menuMain = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './assets/background.png',
  start: true,
});
// background image
const backgorund = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './assets/background.png',
  start: false,
});
// shop layout

const shop = new Sprite({
  position: {
    x: 615,
    y: 115,
  },
  imageSrc: './assets/shop - eye - animation.png',
  scale: 2.85,
  framesMax: 6,
  start: false,
});

// We are creating a new object called player
// Which is a new class called Sprite with positioning of this object determines of by x aix and y axis
const player = new Fighter({
  position: {
    x: 256,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 215,
    y: 170,
  },
  scale: 2.63,
  color: 'blue',
  imageSrc: './assets/samuraiMack/Idle.png',
  framesMax: 8,
  sprites: [
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
        imageSrc:
          './assets/samuraiMack/blood/Take Hit - white silhouette - blood.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/samuraiMack/blood/Death - blood.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 6,
      },
      deathTwo: {
        imageSrc: './assets/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: 100,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
});

const player2 = new Fighter({
  position: {
    x: 768,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 215,
    y: 170,
  },
  scale: 2.5,
  color: 'red',
  imageSrc: './assets/kenji/Idle.png',
  framesMax: 4,
  sprites: [
    {
      idle: {
        imageSrc: './assets/kenji/Idle.png',
        framesMax: 4,
      },
      run: {
        imageSrc: './assets/kenji/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/kenji/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/kenji/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/kenji/Attack1.png',
        framesMax: 4,
      },
      attack2: {
        imageSrc: './assets/kenji/Attack2.png',
        framesMax: 4,
      },
      damaged: {
        imageSrc:
          './assets/kenji/blood/Take Hit - white silhouette - blood.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/kenji/blood/Death - blood.png',
        soundSrc: './audio/death.wav',
        framesMax: 7,
      },
      deathTwo: {
        imageSrc: './assets/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: -150,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
});

const player3 = new Fighter({
  position: {
    x: 256,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 115,
    y: 110,
  },
  scale: 2.25,
  color: 'blue',
  imageSrc: './assets/Medieval King Pack/Idle.png',
  framesMax: 6,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Medieval King Pack/Idle.png',
        framesMax: 6,
      },
      run: {
        imageSrc: './assets/Medieval King Pack/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Medieval King Pack/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Medieval King Pack/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/Medieval King Pack/Attack_1.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack2: {
        imageSrc: './assets/Medieval King Pack/Attack_2.png',
        framesMax: 6,
      },
      damaged: {
        imageSrc: './assets/Medieval King Pack/Hit.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/Medieval King Pack/Death.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 11,
      },
      deathTwo: {
        imageSrc: './assets/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: 100,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
});

menu();

// function Start() {
//   const p = document.getElementById('start');
//   p.onclick = TrueStart();
// }

// window.onclick = () => {
//   // rewrite your code here
//   TrueStart();
// };

// menu();
// console.log(player);

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
};

// Declaration variable let with last used key
let lastKey;

function animate(event) {
  window.requestAnimationFrame(animate);

  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);

  // insert background image
  backgorund.update();

  if (
    player.start === false &&
    player2.start === false &&
    menuMain.start === true
  ) {
    menuMain.update();
    // insert shop
    shop.update();
  } else if (
    player.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    player.update();
    // insert player2 or second player
    player2.update();
  }

   if (
    player3.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player2.update();
    // insert player3 or second player
    player3.update();
  }
  // background color
  c.fillStyle = 'rgba(255, 255 ,255, 0.15)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  //   console.log('go')
  // console.log(player.sprites)
  // Player 1
  if (!player.dead) {
    // player movements
    player.velocity.x = 0;
    // this is default idle staying position without running animation
    // this is running animation of player 1 whe you press "a" key
    if (keys.a.pressed && player.lastKey === 'a') {
      // player.soundStart = false;
      player.runLeft();

      // this is running animation of player 1 whe you press "d" key
    } else if (keys.d.pressed && player.lastKey === 'd') {
      // player.soundStart = false;
      player.runRight();
    } else {
      player.switchSprite('idle');
    }
    if (player.velocity.y < 0) {
      player.switchSprite('jump');
    } else if (player.velocity.y > 0) {
      player.switchSprite('fall');
    }
  }

  if (player.restart === true) {
    player.restartRound();
  }
  // Player 2

  if (!player2.dead) {
    // player2 movements
    player2.velocity.x = 0;
    if (keys.ArrowLeft.pressed && player2.lastKey === 'ArrowLeft') {
      player2.runLeft();
    } else if (keys.ArrowRight.pressed && player2.lastKey === 'ArrowRight') {
      player2.runRight();
    } else {
      player2.switchSprite('idle');
    }

    if (player2.velocity.y < 0) {
      player2.switchSprite('jump');
    } else if (player2.velocity.y > 0) {
      player2.switchSprite('fall');
    }
  }
  if (player2.restart === true) {
    player2.restartRound();
  }
  // Player 3

  if (!player3.dead) {
    // player movements
    player3.velocity.x = 0;
    // this is default idle staying position without running animation
    // this is running animation of player 1 whe you press "a" key
    if (keys.a.pressed && player3.lastKey === 'a') {
      // player.soundStart = false;
      player3.runLeft();

      // this is running animation of player 1 whe you press "d" key
    } else if (keys.d.pressed && player3.lastKey === 'd') {
      // player.soundStart = false;
      player3.runRight();
    } else {
      player3.switchSprite('idle');
    }
    if (player3.velocity.y < 0) {
      player3.switchSprite('jump');
    } else if (player3.velocity.y > 0) {
      player3.switchSprite('fall');
    }
  }

  if (player3.restart === true) {
    player3.restartRound();
  }

  // console.log(player2.restart);
  // detect collision
  // Player 1 is attacking 1st animation
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: player2,
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    player2.damaged();
    player.isAttacking = false;
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    gsap.to('#player2Health', {
      width: player2.health + '%',
    });
    // console.log('you attack player2');
  }

  // if player1 is missing by attacking box
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false;
  }
  // Player 1 is attacking Two animation
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: player2,
    }) &&
    player.isAttackingTwo &&
    player.framesCurrent === 4
  ) {
    player2.damagedTwo();
    player.isAttackingTwo = false;
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    gsap.to('#player2Health', {
      width: player2.health + '%',
    });
    // console.log('you attack player2');
  }

  // if player1 is missing by attacking box
  if (player.isAttackingTwo && player.framesCurrent === 4) {
    player.isAttackingTwo = false;
  }

  // Player 2 && player2 is attacking animation
  if (
    rectangularCollision({
      rectangle1: player2,
      rectangle2:
        player.start === true
          ? player
          : player3.start === true
          ? player3
          : player,
    }) &&
    player2.isAttacking &&
    player2.framesCurrent === 1
  ) {
    player.damaged();
    player2.isAttacking = false;
    // document.querySelector('#playerHealth').style.width = player.health + '%';
    gsap.to('#playerHealth', {
      width: player.health + '%',
    });
    console.log('you attack player1');
  }
  // if player2 is missing by attacking box
  if (player2.isAttacking && player2.framesCurrent === 1) {
    player2.isAttacking = false;
  }

  // Player 2 && player2 is attackingTwo animation
  if (
    rectangularCollision({
      rectangle1: player2,
      rectangle2:
        player.start === true
          ? player
          : player3.start === true
          ? player3
          : player,
    }) &&
    player2.isAttackingTwo &&
    player2.framesCurrent === 1
  ) {
    player.damagedTwo();
    player2.isAttackingTwo = false;
    // document.querySelector('#playerHealth').style.width = player.health + '%';
    gsap.to('#playerHealth', {
      width: player.health + '%',
    });
    console.log('you attack player1');
  }
  // if player2 is missing by attacking box
  if (player2.isAttackingTwo && player2.framesCurrent === 1) {
    player2.isAttackingTwo = false;
  }

  // Player 3 is attacking 1st animation
  if (
    rectangularCollision({
      rectangle1: player3,
      rectangle2:
        player.start === true
          ? player
          : player2.start === true
          ? player2
          : player,
    }) &&
    player3.isAttacking &&
    player3.framesCurrent === 4
  ) {
    player2.damaged();
    player3.isAttacking = false;
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    gsap.to('#player2Health', {
      width: player2.health + '%',
    });
    // console.log('you attack player2');
  }

  // if player1 is missing by attacking box
  if (player3.isAttacking && player3.framesCurrent === 4) {
    player3.isAttacking = false;
  }
  // Player 3 is attacking Two animation
  if (
    rectangularCollision({
      rectangle1: player3,
      rectangle2:
        player.start === true
          ? player
          : player2.start === true
          ? player2
          : player,
    }) &&
    player3.isAttackingTwo &&
    player3.framesCurrent === 4
  ) {
    player2.damagedTwo();
    player3.isAttackingTwo = false;
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    gsap.to('#player2Health', {
      width: player2.health + '%',
    });
    // console.log('you attack player2');
  }

  // if player3 is missing by attacking box
  if (player3.isAttackingTwo && player3.framesCurrent === 4) {
    player3.isAttackingTwo = false;
  }

  // end game based on healthbar of players
  document.querySelector('#displayText').style.display = 'flex';
  if (player.health <= 0 || player2.health <= 0) {
    determineWinner({ player, player2, timerId });
  } else if (player3.health <= 0 || player2.health <= 0) {
    determineWinner({ player3, player2, timerId });
  }
}

animate();

window.addEventListener('keydown', (event) => {
  // console.log(event.key);
  // player switch statement
  if (
    (player.start === false &&
      player2.start === false &&
      menuMain.start === true) ||
    (player2.start === false &&
      player3.start === false &&
      menuMain.start === true)
  ) {
    return null;
  } else if (
    (player.start === true &&
      player2.start === true &&
      menuMain.start === false) ||
    (player3.start === true &&
      player2.start === true &&
      menuMain.start === false)
  ) {
    if (!player.dead) {
      switch (event.key) {
        case 'd':
          keys.d.pressed = true;
          player.lastKey = 'd';
          player.sound.play();
          break;
        case 'a':
          keys.a.pressed = true;
          player.lastKey = 'a';
          player.sound.play();
          break;
        case 'w':
          if (keys.w.pressed && player.lastKey === 'w') {
            if (
              player.position.y + player.height + player.velocity.y >=
              canvas.height - 115
            ) {
              // event.stopPropagation();
              player.velocity.y = 0;
            } else {
              // in this case 1st of all object will falling down by this expression
              // and then how it rich bottom of the canvas it's stops
              player.velocity.y += gravity;
            }
          } else {
            if (
              player.position.y + player.height + player.velocity.y >=
              canvas.height - 115
            ) {
              // if you want to holding "w" and jump infinite so use
              // keys.w.pressed = true;
              // if you want to jump once per pressing "w" so don't this line use
              // keys.w.pressed = true;
              // keys.w.pressed = true;
              player.lastKey = 'w';
              player.sound.play();
              player.velocity.y = -15;
            } else {
              // in this case 1st of all object will falling down by this expression
              // and then how it rich bottom of the canvas it's stops
              player.velocity.y += gravity;
            }
          }
          break;
        case ' ':
          player.attack();
          player.sound.play();
          break;
        case 'c':
          player.attackTwo();
          break;
        default:
          console.log('Something goes wrong');
          break;
      }
    }
    if (!player2.dead) {
      switch (event.key) {
        // player2 switch statement
        case 'ArrowRight':
          keys.ArrowRight.pressed = true;
          player2.lastKey = 'ArrowRight';
          player2.sound.play();
          break;
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = true;
          player2.lastKey = 'ArrowLeft';
          player2.sound.play();
          break;
        case 'ArrowUp':
          if (keys.ArrowUp.pressed && player2.lastKey === 'ArrowUp') {
            if (
              player2.position.y + player2.height + player2.velocity.y >=
              canvas.height - 115
            ) {
              // event.stopPropagation();
              player2.velocity.y = 0;
            } else {
              // in this case 1st of all object will falling down by this expression
              // and then how it rich bottom of the canvas it's stops
              player2.velocity.y += gravity;
            }
          } else {
            if (
              player2.position.y + player2.height + player2.velocity.y >=
              canvas.height - 115
            ) {
              // if you want to holding ArrowUp and jump infinite so use
              // keys.ArrowUp.pressed = true;
              // if you want to jump once per pressing Arrow up so don't this line use
              // keys.ArrowUp.pressed = true;
              // keys.ArrowUp.pressed = true;
              player2.lastKey = 'ArrowUp';
              player2.sound.play();
              player2.velocity.y = -15;
            } else {
              // in this case 1st of all object will falling down by this expression
              // and then how it rich bottom of the canvas it's stops
              player2.velocity.y += gravity;
            }
          }
          break;
        case 'ArrowDown':
          player2.attack();
          // player2.isAttacking = true;
          break;
        case 'l':
          player2.attackTwo();
          // player2.isAttacking = true;
          break;
        default:
          console.log('Something goes wrong');
          break;
      }
    }
    if (!player3.dead) {
      switch (event.key) {
        case 'd':
          keys.d.pressed = true;
          player3.lastKey = 'd';
          player3.sound.play();
          break;
        case 'a':
          keys.a.pressed = true;
          player3.lastKey = 'a';
          player3.sound.play();
          break;
        case 'w':
          if (keys.w.pressed && player3.lastKey === 'w') {
            if (
              player3.position.y + player3.height + player3.velocity.y >=
              canvas.height - 115
            ) {
              // event.stopPropagation();
              player3.velocity.y = 0;
            } else {
              // in this case 1st of all object will falling down by this expression
              // and then how it rich bottom of the canvas it's stops
              player3.velocity.y += gravity;
            }
          } else {
            if (
              player3.position.y + player3.height + player3.velocity.y >=
              canvas.height - 115
            ) {
              // if you want to holding "w" and jump infinite so use
              // keys.w.pressed = true;
              // if you want to jump once per pressing "w" so don't this line use
              // keys.w.pressed = true;
              // keys.w.pressed = true;
              player3.lastKey = 'w';
              player3.sound.play();
              player3.velocity.y = -15;
            } else {
              // in this case 1st of all object will falling down by this expression
              // and then how it rich bottom of the canvas it's stops
              player3.velocity.y += gravity;
            }
          }
          break;
        case ' ':
          player3.attack();
          player3.sound.play();
          break;
        case 'c':
          player3.attackTwo();
          break;
        default:
          console.log('Something goes wrong');
          break;
      }
    }
  }

  console.log(event.key);
});

window.addEventListener('keyup', (event) => {
  // player
  switch (event.key) {
    case 'd':
      keys.d.pressed = false;
      // player.soundStart = false;
      player.sound.pause();
      // player.sound.currentTime = 0;
      break;
    case 'a':
      keys.a.pressed = false;
      // player.soundStart = false;
      player.sound.pause();
      // player.sound.currentTime = 0;
      break;
    case 'w':
      if ((keys.w.pressed = false && player.lastKey === 'w')) {
        if (
          player.position.y + player.height + player.velocity.y >=
          canvas.height - 115
        ) {
          // event.stopPropagation();
          player.sound.pause();
          player.velocity.y = 0;
        } else {
          // in this case 1st of all object will falling down by this expression
          // and then how it rich bottom of the canvas it's stops
          player.velocity.y += gravity;
        }
      }
      break;
    case ' ':
      player.sound.volume = 0;
      break;
    default:
      console.log('Something goes wrong');
      break;
  }
  // player2
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      player2.soundStart = false;
      player2.sound.pause();
      player2.sound.currentTime = 0;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      player2.soundStart = false;
      player2.sound.pause();
      player2.sound.currentTime = 0;
      break;
    case 'ArrowUp':
      if ((keys.ArrowUp.pressed = false && player2.lastKey === 'ArrowUp')) {
        if (
          player2.position.y + player2.height + player2.velocity.y >=
          canvas.height - 115
        ) {
          // event.stopPropagation();
          player2.sound.pause();
          player2.velocity.y = 0;
        } else {
          // in this case 1st of all object will falling down by this expression
          // and then how it rich bottom of the canvas it's stops
          player2.velocity.y += gravity;
        }
      }
      break;
    default:
      console.log('Something goes wrong');
      break;
  }
  // player3
  switch (event.key) {
    case 'd':
      keys.d.pressed = false;
      // player.soundStart = false;
      player3.sound.pause();
      // player.sound.currentTime = 0;
      break;
    case 'a':
      keys.a.pressed = false;
      // player.soundStart = false;
      player3.sound.pause();
      // player.sound.currentTime = 0;
      break;
    case 'w':
      if ((keys.w.pressed = false && player3.lastKey === 'w')) {
        if (
          player3.position.y + player3.height + player3.velocity.y >=
          canvas.height - 115
        ) {
          // event.stopPropagation();
          player3.sound.pause();
          player3.velocity.y = 0;
        } else {
          // in this case 1st of all object will falling down by this expression
          // and then how it rich bottom of the canvas it's stops
          player3.velocity.y += gravity;
        }
      }
      break;
    case ' ':
      player3.sound.volume = 0;
      break;
    default:
      console.log('Something goes wrong');
      break;
  }
  // console.log(event.key);
});
