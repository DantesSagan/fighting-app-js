// Basic fighting game mechanics
// Project setup (done)
// Create Player and Enemy (done)
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
  sprites: {
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
  attackBox: {
    offset: {
      x: 100,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
});

const enemy = new Fighter({
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
  sprites: {
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
      imageSrc: './assets/kenji/blood//Take Hit - white silhouette - blood.png',
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
  attackBox: {
    offset: {
      x: -150,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
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
    enemy.start === false &&
    menuMain.start === true
  ) {
    menuMain.update();
    // insert shop
    shop.update();
  } else if (
    player.start === true &&
    enemy.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    player.update();
    // insert enemy or second player
    enemy.update();
  }
  // background color
  c.fillStyle = 'rgba(255, 255 ,255, 0.15)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  //   console.log('go')

  // player movements
  player.velocity.x = 0;
  // this is default idle staying position without running animation
  if (keys.a.pressed && player.lastKey === 'a') {
    // player.soundStart = false;
    player.runLeft();

    // this is running animation of player 1 whe you press "a" key
  } else if (keys.d.pressed && player.lastKey === 'd') {
    // player.soundStart = false;
    player.runRight();
    // this is running animation of player 1 whe you press "d" key
  } else {
    player.switchSprite('idle');
  }
  if (player.velocity.y < 0) {
    player.switchSprite('jump');
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall');
  }

  // enemy movements
  enemy.velocity.x = 0;
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.runLeft();
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.runRight();
  } else {
    enemy.switchSprite('idle');
  }
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump');
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall');
  }
  // detect collision
  // Player 1 is attacking 1st animation
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy,
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.damaged();
    player.isAttacking = false;
    // document.querySelector('#enemyHealth').style.width = enemy.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    gsap.to('#enemyHealth', {
      width: enemy.health + '%',
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
      rectangle2: enemy,
    }) &&
    player.isAttackingTwo &&
    player.framesCurrent === 4
  ) {
    enemy.damagedTwo();
    player.isAttackingTwo = false;
    // document.querySelector('#enemyHealth').style.width = enemy.health + '%';
    gsap.to('#enemyHealth', {
      width: enemy.health + '%',
    });
    // console.log('you attack player2');
  }

  // if player1 is missing by attacking box
  if (player.isAttackingTwo && player.framesCurrent === 4) {
    player.isAttackingTwo = false;
  }

  // Player 2 && Enemy is attacking animation
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player,
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 1
  ) {
    player.damaged();
    enemy.isAttacking = false;
    // document.querySelector('#playerHealth').style.width = player.health + '%';
    gsap.to('#playerHealth', {
      width: player.health + '%',
    });
    console.log('you attack player1');
  }
  // if player2 is missing by attacking box
  if (enemy.isAttacking && enemy.framesCurrent === 1) {
    enemy.isAttacking = false;
  }

  // Player 2 && Enemy is attackingTwo animation
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player,
    }) &&
    enemy.isAttackingTwo &&
    enemy.framesCurrent === 1
  ) {
    player.damagedTwo();
    enemy.isAttackingTwo = false;
    // document.querySelector('#playerHealth').style.width = player.health + '%';
    gsap.to('#playerHealth', {
      width: player.health + '%',
    });
    console.log('you attack player1');
  }
  // if player2 is missing by attacking box
  if (enemy.isAttackingTwo && enemy.framesCurrent === 1) {
    enemy.isAttackingTwo = false;
  }
  // end game based on healthbar of players
  document.querySelector('#displayText').style.display = 'flex';
  if (player.health <= 0 || enemy.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}

animate();

window.addEventListener('keydown', (event) => {
  // console.log(event.key);
  // player switch statement
  if (
    player.start === false &&
    enemy.start === false &&
    menuMain.start === true
  ) {
    return null;
  } else if (
    player.start === true &&
    enemy.start === true &&
    menuMain.start === false
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
    if (!enemy.dead) {
      switch (event.key) {
        // enemy switch statement
        case 'ArrowRight':
          keys.ArrowRight.pressed = true;
          enemy.lastKey = 'ArrowRight';
          enemy.sound.play();
          break;
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = true;
          enemy.lastKey = 'ArrowLeft';
          enemy.sound.play();
          break;
        case 'ArrowUp':
          if (keys.ArrowUp.pressed && enemy.lastKey === 'ArrowUp') {
            if (
              enemy.position.y + enemy.height + enemy.velocity.y >=
              canvas.height - 115
            ) {
              // event.stopPropagation();
              enemy.velocity.y = 0;
            } else {
              // in this case 1st of all object will falling down by this expression
              // and then how it rich bottom of the canvas it's stops
              enemy.velocity.y += gravity;
            }
          } else {
            if (
              enemy.position.y + enemy.height + enemy.velocity.y >=
              canvas.height - 115
            ) {
              // if you want to holding ArrowUp and jump infinite so use
              // keys.ArrowUp.pressed = true;
              // if you want to jump once per pressing Arrow up so don't this line use
              // keys.ArrowUp.pressed = true;
              // keys.ArrowUp.pressed = true;
              enemy.lastKey = 'ArrowUp';
              enemy.sound.play();
              enemy.velocity.y = -15;
            } else {
              // in this case 1st of all object will falling down by this expression
              // and then how it rich bottom of the canvas it's stops
              enemy.velocity.y += gravity;
            }
          }
          break;
        case 'ArrowDown':
          enemy.attack();
          // enemy.isAttacking = true;
          break;
        case 'l':
          enemy.attackTwo();
          // enemy.isAttacking = true;
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
  // enemy
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      enemy.soundStart = false;
      enemy.sound.pause();
      enemy.sound.currentTime = 0;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      enemy.soundStart = false;
      enemy.sound.pause();
      enemy.sound.currentTime = 0;
      break;
    case 'ArrowUp':
      if ((keys.ArrowUp.pressed = false && enemy.lastKey === 'ArrowUp')) {
        if (
          enemy.position.y + enemy.height + enemy.velocity.y >=
          canvas.height - 115
        ) {
          // event.stopPropagation();
          enemy.sound.pause();
          enemy.velocity.y = 0;
        } else {
          // in this case 1st of all object will falling down by this expression
          // and then how it rich bottom of the canvas it's stops
          enemy.velocity.y += gravity;
        }
      }
      break;
    default:
      console.log('Something goes wrong');
      break;
  }
  // console.log(event.key);
});
