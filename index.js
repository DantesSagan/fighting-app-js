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
    x: 245,
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
    y: 90,
  },
  scale: 2.05,
  color: 'blue',
  imageSrc: './assets/Medieval King Pack/Idle.png',
  imageStyle: 'scale(-1, 1)',
  imageID: 'img-scale',
  framesMax: 1,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Medieval King Pack/Idle.png',
        imageStyle: 'scale(-1, 1)',
        imageID: 'img-scale',
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
      x: 50,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
});

const player3Reverse = new FighterReverse({
  position: {
    x: 768,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 150,
    y: 90,
  },
  scale: 2.05,
  color: 'black',
  imageSrc: './assets/Medieval King Pack/Idle.png',
  framesMax: 6,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Medieval King Pack/kingReverse/Idle - Reverse.png',
        framesMax: 6,
      },
      run: {
        imageSrc: './assets/Medieval King Pack/kingReverse/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Medieval King Pack/kingReverse/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Medieval King Pack/kingReverse/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc:
          './assets/Medieval King Pack/kingReverse/Attack_1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack2: {
        imageSrc:
          './assets/Medieval King Pack/kingReverse/Attack_2 - Reverse.png',
        framesMax: 6,
      },
      damaged: {
        imageSrc: './assets/Medieval King Pack/kingReverse/Hit - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/Medieval King Pack/kingReverse/Death - Reverse.png',
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
      x: -150,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
});

const playerReverse = new FighterReverse({
  position: {
    x: 768,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 245,
    y: 170,
  },
  scale: 2.63,
  color: 'blue',
  imageSrc: './assets/samuraiMack/Idle.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/samuraiMack/reverseMack/Idle - Reverse.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/samuraiMack/reverseMack/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/samuraiMack/reverseMack/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/samuraiMack/reverseMack/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/samuraiMack/reverseMack/Attack1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack2: {
        imageSrc: './assets/samuraiMack/reverseMack/Attack2 - Reverse.png',
        framesMax: 6,
      },
      damaged: {
        imageSrc:
          './assets/samuraiMack/reverseMack/Take Hit - white silhouette - blood - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc:
          './assets/samuraiMack/reverseMack/Death - blood - Reverse.png',
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
      x: -150,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
});
// player2Reverse playing on left side not on right side as usual because default skin of Kenji sets to right place
const player2Reverse = new FighterReverse({
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
  scale: 2.5,
  color: 'red',
  imageSrc: './assets/kenji/Idle.png',
  framesMax: 4,
  sprites: [
    {
      idle: {
        imageSrc: './assets/kenji/reverseKenji/Idle - Reverse.png',
        framesMax: 4,
      },
      run: {
        imageSrc: './assets/kenji/reverseKenji/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/kenji/reverseKenji/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/kenji/reverseKenji/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/kenji/reverseKenji/Attack1 - Reverse.png',
        framesMax: 4,
      },
      attack2: {
        imageSrc: './assets/kenji/reverseKenji/Attack2 - Reverse.png',
        framesMax: 4,
      },
      damaged: {
        imageSrc:
          './assets/kenji/reverseKenji/Take Hit - white silhouette - blood - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/kenji/reverseKenji/Death - blood - Reverse.png',
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
      x: 150,
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
  // let countPosition = (player.position.x += player.velocity.x);
  // console.log(countPosition);

  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);

  // insert background image
  backgorund.update();
  // canvas.style.transform = 'scale(-1, 1)';
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
  if (
    player.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player.update();
    // if (countPosition > 256) {
    //   player.attackBox.offset.x = -200;
    // } else if (countPosition > 612) {
    //   player.attackBox.offset.x = -300;
    // } else if (countPosition > 768) {
    //   player.attackBox.offset.x = -400;
    // } else {
    //   player.attackBox.offset.x = 100;
    // }
    c.save();
    // c.scale(-1, 1);
    // player3Reverse.sprites[0].idle.imageStyle = 'scale(-1, 1)';
    // c.translate(canvas.width, 0);
    // c.scale(-1, 1);
    // insert player3 or second player
    player3Reverse.updateReverse();
    c.restore();
    // c.setTransform(1, 0, 0, 1, 0, 0);
  }
  if (
    player3.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player3.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player3Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player and PlayerReverse
  if (
    player.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    playerReverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player3 and PlayerReverse
  if (
    player3.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player3.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    playerReverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player2Reverse && PlayerReverse
  if (
    playerReverse.start === true &&
    player2Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    playerReverse.updateReverse();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player2Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player2 && Player2Reverse
  if (
    player2.start === true &&
    player2Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player2.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player2Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player3Reverser && player2Reverse
  if (
    player3Reverse.start === true &&
    player2Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player3Reverse.updateReverse();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player2Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
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

  // Player 3 Reverse
  // Because this is reverse version of player3 character need to set reverse buttons
  if (!player3Reverse.dead) {
    // player movements
    player3Reverse.velocity.x = 0;
    // this is default idle staying position without running animation
    // this is running animation of player 1 whe you press "a" key
    if (keys.ArrowLeft.pressed && player3Reverse.lastKey === 'ArrowLeft') {
      // player.soundStart = false;
      player3Reverse.runLeft();

      // this is running animation of player 1 whe you press "d" key
    } else if (
      keys.ArrowRight.pressed &&
      player3Reverse.lastKey === 'ArrowRight'
    ) {
      // player.soundStart = false;
      player3Reverse.runRight();
    } else {
      player3Reverse.switchSprite('idle');
    }
    if (player3Reverse.velocity.y < 0) {
      player3Reverse.switchSprite('jump');
    } else if (player3Reverse.velocity.y > 0) {
      player3Reverse.switchSprite('fall');
    }
  }

  if (player3Reverse.restart === true) {
    player3Reverse.restartRound();
  }

  // Player  Reverse
  // Because this is reverse version of player character need to set reverse buttons
  if (!playerReverse.dead) {
    // player movements
    playerReverse.velocity.x = 0;
    // this is default idle staying position without running animation
    // this is running animation of player 1 whe you press "a" key
    if (keys.ArrowLeft.pressed && playerReverse.lastKey === 'ArrowLeft') {
      // player.soundStart = false;
      playerReverse.runLeft();

      // this is running animation of player 1 whe you press "d" key
    } else if (
      keys.ArrowRight.pressed &&
      playerReverse.lastKey === 'ArrowRight'
    ) {
      // player.soundStart = false;
      playerReverse.runRight();
    } else {
      playerReverse.switchSprite('idle');
    }
    if (playerReverse.velocity.y < 0) {
      playerReverse.switchSprite('jump');
    } else if (playerReverse.velocity.y > 0) {
      playerReverse.switchSprite('fall');
    }
  }

  if (playerReverse.restart === true) {
    playerReverse.restartRound();
  }

  // Player 2 Reverse
  // Because this is reverse version of player3 character need to set reverse buttons
  if (!player2Reverse.dead) {
    // player movements
    player2Reverse.velocity.x = 0;
    // this is default idle staying position without running animation
    // this is running animation of player 1 whe you press "a" key
    if (keys.a.pressed && player2Reverse.lastKey === 'a') {
      // player.soundStart = false;
      player2Reverse.runLeft();

      // this is running animation of player 1 whe you press "d" key
    } else if (keys.d.pressed && player2Reverse.lastKey === 'd') {
      // player.soundStart = false;
      player2Reverse.runRight();
    } else {
      player2Reverse.switchSprite('idle');
    }
    if (player2Reverse.velocity.y < 0) {
      player2Reverse.switchSprite('jump');
    } else if (player2Reverse.velocity.y > 0) {
      player2Reverse.switchSprite('fall');
    }
  }

  if (player2Reverse.restart === true) {
    player2Reverse.restartRound();
  }
  // console.log(player2.restart);
  // detect collision
  // Player 1 is attacking 1st animation
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2:
        player2.start === true
          ? player2
          : player3Reverse.start === true
          ? player3Reverse
          : playerReverse.start === true
          ? playerReverse
          : player2,
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    if (player2.start === true) {
      player2.damaged();
      player.isAttacking = false;
    } else if (player3Reverse.start === true) {
      player3Reverse.damaged();
      player.isAttacking = false;
    } else if (playerReverse.start === true) {
      playerReverse.damaged();
      player.isAttacking = false;
    } else {
      player2.damaged();
      player.isAttacking = false;
    }

    // document.querySelector('#player2Health').style.width = player2.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    if (player2.start === true) {
      gsap.to('#player2Health', {
        width: player2.health + '%',
      });
    }
    if (player3Reverse.start === true) {
      gsap.to('#player2Health', {
        width: player3Reverse.health + '%',
      });
    }
    if (playerReverse.start === true) {
      gsap.to('#player2Health', {
        width: playerReverse.health + '%',
      });
    }
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
      rectangle2:
        player2.start === true
          ? player2
          : player3Reverse.start === true
          ? player3Reverse
          : playerReverse.start === true
          ? playerReverse
          : player2,
    }) &&
    player.isAttackingTwo &&
    player.framesCurrent === 4
  ) {
    if (player2.start === true) {
      player2.damagedTwo();
      player.isAttacking = false;
    } else if (player3Reverse.start === true) {
      player3Reverse.damagedTwo();
      player.isAttacking = false;
    } else if (playerReverse.start === true) {
      playerReverse.damagedTwo();
      player.isAttacking = false;
    } else {
      player2.damagedTwo();
      player.isAttacking = false;
    }

    // document.querySelector('#player2Health').style.width = player2.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    if (player2.start === true) {
      gsap.to('#player2Health', {
        width: player2.health + '%',
      });
    }
    if (player3Reverse.start === true) {
      gsap.to('#player2Health', {
        width: player3Reverse.health + '%',
      });
    }
    if (playerReverse.start === true) {
      gsap.to('#player2Health', {
        width: playerReverse.health + '%',
      });
    }
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
          : player2Reverse.start === true
          ? player2Reverse
          : player,
    }) &&
    player2.isAttacking &&
    player2.framesCurrent === 1
  ) {
    if (player.start === true) {
      player.damaged();
      player2.isAttacking = false;
    } else if (player3.start === true) {
      player3.damaged();
      player2.isAttacking = false;
    } else if (player2Reverse.start === true) {
      player2Reverse.damaged();
      player2.isAttacking = false;
    }
    // document.querySelector('#playerHealth').style.width = player.health + '%';
    if (player.start === true) {
      gsap.to('#playerHealth', {
        width: player.health + '%',
      });
    }
    if (player3.start === true) {
      gsap.to('#playerHealth', {
        width: player3.health + '%',
      });
    }
    if (player2Reverse.start === true) {
      gsap.to('#playerHealth', {
        width: player2Reverse.health + '%',
      });
    }
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
          : player2Reverse.start === true
          ? player2Reverse
          : player,
    }) &&
    player2.isAttackingTwo &&
    player2.framesCurrent === 1
  ) {
    if (player.start === true) {
      player.damagedTwo();
      player2.isAttacking = false;
    } else if (player3.start === true) {
      player3.damagedTwo();
      player2.isAttacking = false;
    } else if (player2Reverse.start === true) {
      player2Reverse.damagedTwo();
      player2.isAttacking = false;
    }
    // document.querySelector('#playerHealth').style.width = player.health + '%';
    if (player.start === true) {
      gsap.to('#playerHealth', {
        width: player.health + '%',
      });
    }
    if (player3.start === true) {
      gsap.to('#playerHealth', {
        width: player3.health + '%',
      });
    }
    if (player2Reverse.start === true) {
      gsap.to('#playerHealth', {
        width: player2Reverse.health + '%',
      });
    }
    console.log('you attack player1');
  }
  // if player2 is missing by attacking box
  if (player2.isAttackingTwo && player2.framesCurrent === 1) {
    player2.isAttackingTwo = false;
  }
  // here
  // Player 3 is attacking 1st animation
  if (
    rectangularCollision({
      rectangle1: player3,
      rectangle2:
        player3Reverse.start === true
          ? player3Reverse
          : player2.start === true
          ? player2
          : playerReverse.start === true
          ? playerReverse
          : player3Reverse,
    }) &&
    player3.isAttacking &&
    player3.framesCurrent === 4
  ) {
    if (player3Reverse.start === true) {
      player3Reverse.damaged();
      player3.isAttacking = false;
    } else if (player2.start === true) {
      player2.damaged();
      player3.isAttacking = false;
    } else if (playerReverse.start === true) {
      playerReverse.damaged();
      player3.isAttacking = false;
    } else {
      player3Reverse.damaged();
      player3.isAttacking = false;
    }
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    if (player2.start === true) {
      gsap.to('#player2Health', {
        width: player2.health + '%',
      });
    }
    if (player3Reverse.start === true) {
      gsap.to('#player2Health', {
        width: player3Reverse.health + '%',
      });
    }
    if (playerReverse.start === true) {
      gsap.to('#player2Health', {
        width: playerReverse.health + '%',
      });
    }
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
        player3Reverse.start === true
          ? player3Reverse
          : player2.start === true
          ? player2
          : playerReverse.start === true
          ? playerReverse
          : player3Reverse,
    }) &&
    player3.isAttackingTwo &&
    player3.framesCurrent === 4
  ) {
    if (player3Reverse.start === true) {
      player3Reverse.damagedTwo();
      player3.isAttacking = false;
    } else if (player2.start === true) {
      player2.damagedTwo();
      player3.isAttacking = false;
    } else if (playerReverse.start === true) {
      playerReverse.damagedTwo();
      player3.isAttacking = false;
    } else {
      player3Reverse.damagedTwo();
      player3Reverse.isAttacking = false;
    }
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    if (player2.start === true) {
      gsap.to('#player2Health', {
        width: player2.health + '%',
      });
    }
    if (player3Reverse.start === true) {
      gsap.to('#player2Health', {
        width: player3Reverse.health + '%',
      });
    }
    if (playerReverse.start === true) {
      gsap.to('#player2Health', {
        width: playerReverse.health + '%',
      });
    }
    // console.log('you attack player2');
  }

  // if player3 is missing by attacking box
  if (player3.isAttackingTwo && player3.framesCurrent === 4) {
    player3.isAttackingTwo = false;
  }

  // Player 3Reverse is attacking 1st animation
  if (
    rectangularCollision({
      rectangle1: player3Reverse,
      rectangle2:
        player.start === true
          ? player
          : player3.start === true
          ? player3
          : player2Reverse.start === true
          ? player2Reverse
          : player,
    }) &&
    player3Reverse.isAttacking &&
    player3Reverse.countFramesMax === 3
  ) {
    if (player.start === true) {
      player.damaged();
      player3Reverse.isAttacking = false;
    } else if (player3.start === true) {
      player3.damaged();
      player3Reverse.isAttacking = false;
    } else if (player2Reverse.start === true) {
      player2Reverse.damaged();
      player3Reverse.isAttacking = false;
    }
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    if (player.start === true) {
      gsap.to('#playerHealth', {
        width: player.health + '%',
      });
    }
    if (player3.start === true) {
      gsap.to('#playerHealth', {
        width: player3.health + '%',
      });
    }
    if (player2Reverse.start === true) {
      gsap.to('#playerHealth', {
        width: player2Reverse.health + '%',
      });
    }
    // console.log('you attack player2');
  }

  // if player1 is missing by attacking box
  if (player3Reverse.isAttacking && player3Reverse.countFramesMax === 3) {
    player3Reverse.isAttacking = false;
  }
  // Player 3Reverse is attacking Two animation
  if (
    rectangularCollision({
      rectangle1: player3Reverse,
      rectangle2:
        player.start === true
          ? player
          : player3.start === true
          ? player3
          : player2Reverse.start === true
          ? player2Reverse
          : player,
    }) &&
    player3Reverse.isAttackingTwo &&
    player3Reverse.countFramesMax === 3
  ) {
    if (player.start === true) {
      player.damagedTwo();
      player3Reverse.isAttackingTwo = false;
    } else if (player3.start === true) {
      player3.damagedTwo();
      player3Reverse.isAttackingTwo = false;
    } else if (player2Reverse.start === true) {
      player2Reverse.damagedTwo();
      player3Reverse.isAttackingTwo = false;
    }
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    if (player.start === true) {
      gsap.to('#playerHealth', {
        width: player.health + '%',
      });
    }
    if (player3.start === true) {
      gsap.to('#playerHealth', {
        width: player3.health + '%',
      });
    }
    if (player2Reverse.start === true) {
      gsap.to('#playerHealth', {
        width: player2Reverse.health + '%',
      });
    }
    // console.log('you attack player2');
  }

  // if player3 is missing by attacking box
  if (player3Reverse.isAttackingTwo && player3Reverse.countFramesMax === 3) {
    player3Reverse.isAttackingTwo = false;
  }

  // Player Reverse is attacking 1st animation
  if (
    rectangularCollision({
      rectangle1: playerReverse,
      rectangle2:
        player.start === true
          ? player
          : player3.start === true
          ? player3
          : player2Reverse.start === true
          ? player2Reverse
          : player,
    }) &&
    playerReverse.isAttacking &&
    playerReverse.countFramesMax === 2
  ) {
    if (player.start === true) {
      player.damaged();
      playerReverse.isAttacking = false;
    } else if (player3.start === true) {
      player3.damaged();
      playerReverse.isAttacking = false;
    } else if (player2Reverse.start === true) {
      player2Reverse.damaged();
      playerReverse.isAttacking = false;
    }
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    if (player.start === true) {
      gsap.to('#playerHealth', {
        width: player.health + '%',
      });
    }
    if (player3.start === true) {
      gsap.to('#playerHealth', {
        width: player3.health + '%',
      });
    }
    if (player2Reverse.start === true) {
      gsap.to('#playerHealth', {
        width: player2Reverse.health + '%',
      });
    }
    // console.log('you attack player2');
  }

  // if player1 is missing by attacking box
  if (playerReverse.isAttacking && playerReverse.countFramesMax === 2) {
    playerReverse.isAttacking = false;
  }
  // Player Reverse is attacking Two animation
  if (
    rectangularCollision({
      rectangle1: playerReverse,
      rectangle2:
        player.start === true
          ? player
          : player3.start === true
          ? player3
          : player2Reverse.start === true
          ? player2Reverse
          : player,
    }) &&
    playerReverse.isAttackingTwo &&
    playerReverse.countFramesMax === 2
  ) {
    if (player.start === true) {
      player.damagedTwo();
      playerReverse.isAttackingTwo = false;
    } else if (player3.start === true) {
      player3.damagedTwo();
      playerReverse.isAttackingTwo = false;
    } else if (player2Reverse.start === true) {
      player2Reverse.damagedTwo();
      playerReverse.isAttackingTwo = false;
    }
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    if (player.start === true) {
      gsap.to('#playerHealth', {
        width: player.health + '%',
      });
    }
    if (player3.start === true) {
      gsap.to('#playerHealth', {
        width: player3.health + '%',
      });
    }
    if (player2Reverse.start === true) {
      gsap.to('#playerHealth', {
        width: player2Reverse.health + '%',
      });
    }
    // console.log('you attack player2');
  }

  // if player3 is missing by attacking box
  if (playerReverse.isAttackingTwo && playerReverse.countFramesMax === 2) {
    playerReverse.isAttackingTwo = false;
  }

  // Player 2 Reverse is attacking 1st animation
  if (
    rectangularCollision({
      rectangle1: player2Reverse,
      rectangle2:
        playerReverse.start === true
          ? playerReverse
          : player3Reverse.start === true
          ? player3Reverse
          : player2.start === true
          ? player2
          : player,
    }) &&
    player2Reverse.isAttacking &&
    player2Reverse.countFramesMax === 3
  ) {
    if (playerReverse.start === true) {
      playerReverse.damaged();
      player2Reverse.isAttacking = false;
    } else if (player3Reverse.start === true) {
      player3Reverse.damaged();
      player2Reverse.isAttacking = false;
    } else if (player2.start === true) {
      player2.damaged();
      player2Reverse.isAttacking = false;
    }
    // document.querySelector('#player2Health').style.width = player2.health + '%';
    // if we are using gsap we get to say of id and property with what need to do
    // and also give a smooth animation of decreasing healthbar
    if (playerReverse.start === true) {
      gsap.to('#player2Health', {
        width: playerReverse.health + '%',
      });
    }
    if (player3Reverse.start === true) {
      gsap.to('#player2Health', {
        width: player3Reverse.health + '%',
      });
    }
    if (player2.start === true) {
      gsap.to('#player2Health', {
        width: player2.health + '%',
      });
    }
    // console.log('you attack player2');
  }

  // if player1 is missing by attacking box
  if (player2Reverse.isAttacking && player2Reverse.countFramesMax === 3) {
    player2Reverse.isAttacking = false;
  }
  // Player 2 Reverse is attacking Two animation
  if (
    rectangularCollision({
      rectangle1: player2Reverse,
      rectangle2:
        playerReverse.start === true
          ? playerReverse
          : player3Reverse.start === true
          ? player3Reverse
          : player2.start === true
          ? player2
          : player,
    }) &&
    player2Reverse.isAttackingTwo &&
    player2Reverse.countFramesMax === 3
  ) {
    if (playerReverse.start === true) {
      playerReverse.damagedTwo();
      player2Reverse.isAttackingTwo = false;
    } else if (player3Reverse.start === true) {
      player3Reverse.damagedTwo();
      player2Reverse.isAttackingTwo = false;
    } else if (player2.start === true) {
      player2.damagedTwo();
      player2Reverse.isAttackingTwo = false;
    }
      // document.querySelector('#player2Health').style.width = player2.health + '%';
      if (playerReverse.start === true) {
        gsap.to('#player2Health', {
          width: playerReverse.health + '%',
        });
      }
      if (player3Reverse.start === true) {
        gsap.to('#player2Health', {
          width: player3Reverse.health + '%',
        });
      }
      if (player2.start === true) {
        gsap.to('#player2Health', {
          width: player2.health + '%',
        });
      }
      // console.log('you attack player2');
    }
  
  // if player3 is missing by attacking box
  if (player2Reverse.isAttackingTwo && player2Reverse.countFramesMax === 3) {
    player2Reverse.isAttackingTwo = false;
  }

  // end game based on healthbar of players
  document.querySelector('#displayText').style.display = 'flex';
  // Player Mack
  if (
    player.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player2;
    if (player.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player3Reverse;
    if (player.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = playerReverse;
    if (player.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // PlayerReverse Mack
  if (
    playerReverse.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = playerReverse;
    let pl2 = player2;
    if (playerReverse.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    playerReverse.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = playerReverse;
    let pl2 = player3Reverse;
    if (playerReverse.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = playerReverse;
    if (player2Reverse.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // Player2
  else if (
    player2.start === true &&
    player.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player2;
    if (player2.health <= 0 || player.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2.start === true &&
    player3.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player2;
    if (player2.health <= 0 || player3.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player2;
    if (player2Reverse.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // Player2 Reverse
  else if (
    player2Reverse.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = playerReverse;
    if (player2Reverse.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    player3.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player3;
    if (player2Reverse.health <= 0 || player3.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player2;
    if (player2Reverse.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // Player3
  else if (
    player3.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = playerReverse;
    if (player3.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player3.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player3Reverse;
    if (player3.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player3.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player2;
    if (player3.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // Player3Reverse
  else if (
    player3.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player3Reverse;
    if (player3.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player3Reverse;
    if (player.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player3Reverse;
    if (player2Reverse.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
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
      menuMain.start === true) ||
    (player.start === false &&
      player3Reverse.start === false &&
      menuMain.start === true) ||
    (player3.start === false &&
      player3Reverse.start === false &&
      menuMain.start === true) ||
    (player.start === false &&
      playerReverse.start === false &&
      menuMain.start === true) ||
    (player3.start === false &&
      playerReverse.start === false &&
      menuMain.start === true) ||
    (playerReverse.start === false &&
      player2Reverse.start === false &&
      menuMain.start === true) ||
    (player3Reverse.start === false &&
      player2Reverse.start === false &&
      menuMain.start === true) ||
    (player2.start === false &&
      player2Reverse.start === false &&
      menuMain.start === true)
  ) {
    return null;
  } else if (
    (player.start === true &&
      player2.start === true &&
      menuMain.start === false) ||
    (player3.start === true &&
      player2.start === true &&
      menuMain.start === false) ||
    (player.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false) ||
    (player3.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false) ||
    (player.start === true &&
      playerReverse.start === true &&
      menuMain.start === false) ||
    (player3.start === true &&
      playerReverse.start === true &&
      menuMain.start === false) ||
    (playerReverse.start === true &&
      player2Reverse.start === true &&
      menuMain.start === false) ||
    (player3Reverse.start === true &&
      player2Reverse.start === true &&
      menuMain.start === false) ||
    (player2.start === true &&
      player2Reverse.start === true &&
      menuMain.start === false)
  ) {
    if (!player.dead) {
      player.switchButtons(event);
    }
    if (!player2.dead) {
      player2.switchButtonsKenji(event);
    }
    if (!player3.dead) {
      player3.switchButtons(event);
    }
    if (!player3Reverse.dead) {
      player3Reverse.switchButtonsRight(event);
    }
    if (!playerReverse.dead) {
      playerReverse.switchButtonsRight(event);
    }
    if (!player2Reverse.dead) {
      player2Reverse.switchButtons(event);
    }
  }

  console.log(event.key);
});

window.addEventListener('keyup', (event) => {
  // player(Samurai Mack)
  player.switchUpButtonsLeft(event);

  // player2(Samurai Kenji)
  player2.switchUpButtonsKenji(event);
  // player3(King)
  player.switchUpButtonsLeft(event);
  // player3Reverse(King)
  player3Reverse.switchUpButtonsRight(event);
  // playerReverse(SamuraiMack)
  playerReverse.switchUpButtonsRight(event);
  // playerReverse(SamuraiKenji on Left side)
  player2Reverse.switchUpButtonsLeft(event);
  // console.log(event.key);
});
