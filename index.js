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
  framesMax: 1,
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

const player4 = new Fighter({
  position: {
    x: 256,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 205,
    y: 135,
  },
  scale: 2.73,
  color: 'blue',
  imageSrc: './assets/Medieval King Pack 2/Sprites/Idle.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Medieval King Pack 2/Sprites/Idle.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/Medieval King Pack 2/Sprites/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Medieval King Pack 2/Sprites/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Medieval King Pack 2/Sprites/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/Medieval King Pack 2/Sprites/Attack1.png',
        soundSrc: './audio/swing.wav',
        framesMax: 4,
      },
      attack2: {
        imageSrc: './assets/Medieval King Pack 2/Sprites/Attack2.png',
        framesMax: 4,
      },
      damaged: {
        imageSrc:
          './assets/Medieval King Pack 2/Sprites/Take Hit - white silhouette.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/Medieval King Pack 2/Sprites/Death.png',
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
      x: 80,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
});

const player4Reverse = new FighterReverse({
  position: {
    x: 768,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 180,
    y: 135,
  },
  scale: 2.73,
  color: 'blue',
  imageSrc: './assets/Medieval King Pack 2/SpritesReverse/Idle - Reverse.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc:
          './assets/Medieval King Pack 2/SpritesReverse/Idle - Reverse.png',
        framesMax: 8,
      },
      run: {
        imageSrc:
          './assets/Medieval King Pack 2/SpritesReverse/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc:
          './assets/Medieval King Pack 2/SpritesReverse/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc:
          './assets/Medieval King Pack 2/SpritesReverse/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc:
          './assets/Medieval King Pack 2/SpritesReverse/Attack1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 4,
      },
      attack2: {
        imageSrc:
          './assets/Medieval King Pack 2/SpritesReverse/Attack2 - Reverse.png',
        framesMax: 4,
      },
      damaged: {
        imageSrc:
          './assets/Medieval King Pack 2/SpritesReverse/Take Hit - white silhouette - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc:
          './assets/Medieval King Pack 2/SpritesReverse/Death - Reverse.png',
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
      x: -180,
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

  // Player4 && playerReverse
  if (
    player4.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player4.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    playerReverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }

  // Player4 && player2
  if (
    player4.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player4.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player2.update();
    // insert player3 or second player
    // c.restore();
  }

  // Player4 && player3Reverse
  if (
    player4.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player4.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player3Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }

  // Player4Reverse && player
  if (
    player4Reverse.start === true &&
    player.start === true &&
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
    player4Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }

  // Player4Reverse && player2Reverse
  if (
    player4Reverse.start === true &&
    player2Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player2Reverse.updateReverse();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player4Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player4Reverse && player3
  if (
    player4Reverse.start === true &&
    player3.start === true &&
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
    player4Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player4Reverse && player4
  if (
    player4Reverse.start === true &&
    player4.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player4.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player4Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // background color
  c.fillStyle = 'rgba(255, 255 ,255, 0.15)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  //   console.log('go')
  // console.log(player.sprites)
  let moveLeftPL1 = keys.a.pressed;
  let moveRightPL1 = keys.d.pressed;
  let moveLeftPL2 = keys.ArrowLeft.pressed;
  let moveRightPL2 = keys.ArrowRight.pressed;
  // Player 1
  player.heroMovements(moveLeftPL1, moveRightPL1, 'a', 'd');

  // Player 2
  player2.heroMovements(moveLeftPL2, moveRightPL2, 'ArrowLeft', 'ArrowRight');

  // Player 3
  player3.heroMovements(moveLeftPL1, moveRightPL1, 'a', 'd');

  // Player4
  player4.heroMovements(moveLeftPL1, moveRightPL1, 'a', 'd');

  // Player 3 Reverse
  // Because this is reverse version of player3 character need to set reverse buttons
  player3Reverse.heroMovementsReverse(
    moveLeftPL2,
    moveRightPL2,
    'ArrowLeft',
    'ArrowRight'
  );

  // Player  Reverse
  // Because this is reverse version of player character need to set reverse buttons
  playerReverse.heroMovementsReverse(
    moveLeftPL2,
    moveRightPL2,
    'ArrowLeft',
    'ArrowRight'
  );

  // Player 2 Reverse
  // Because this is reverse version of player3 character need to set reverse buttons
  player2Reverse.heroMovementsReverse(moveLeftPL1, moveRightPL1, 'a', 'd');

  // Player4 Reverse
  // Because this is reverse version of player character need to set reverse buttons
  player4Reverse.heroMovementsReverse(
    moveLeftPL2,
    moveRightPL2,
    'ArrowLeft',
    'ArrowRight'
  );

  // console.log(player2.restart);
  // detect collision
  // Player 1 is attacking 1st animation
  player.detectCollision(
    player,
    player2,
    player3Reverse,
    playerReverse,
    player4Reverse,
    4
  );

  // Player 1 is attacking Two animation
  player.detectCollisionTwo(
    player,
    player2,
    player3Reverse,
    playerReverse,
    player4Reverse,
    4
  );

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
          : player4.start === true
          ? player4
          : player,
    }) &&
    player2.isAttacking &&
    player2.framesCurrent === 1
  ) {
    if (player.start === true) {
      player.damagedByKenji();
      player2.isAttacking = false;
    } else if (player3.start === true) {
      player3.damagedByKenji();
      player2.isAttacking = false;
    } else if (player2Reverse.start === true) {
      player2Reverse.damagedByKenji();
      player2.isAttacking = false;
    } else if (player4.start === true) {
      player4.damagedByKenji();
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
    if (player4.start === true) {
      gsap.to('#playerHealth', {
        width: player4.health + '%',
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
          : player4.start === true
          ? player4
          : player,
    }) &&
    player2.isAttackingTwo &&
    player2.framesCurrent === 1
  ) {
    if (player.start === true) {
      player.damagedTwoByKenji();
      player2.isAttackingTwo = false;
    } else if (player3.start === true) {
      player3.damagedTwoByKenji();
      player2.isAttackingTwo = false;
    } else if (player2Reverse.start === true) {
      player2Reverse.damagedTwoByKenji();
      player2.isAttackingTwo = false;
    } else if (player4.start === true) {
      player4.damagedTwoByKenji();
      player2.isAttackingTwo = false;
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
    if (player4.start === true) {
      gsap.to('#playerHealth', {
        width: player4.health + '%',
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
  player3.detectCollision(
    player3,
    player3Reverse,
    player2,
    playerReverse,
    player4Reverse,
    4
  );

  // Player 3 is attacking Two animation
  player3.detectCollisionTwo(
    player3,
    player3Reverse,
    player2,
    playerReverse,
    player4Reverse,
    4
  );

  // Player4 is attacking animation
  player4.detectCollision(
    player4,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    2
  );

  // Player4 is attackingTwo animation
  player4.detectCollisionTwo(
    player4,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    2
  );

  // Player 3Reverse is attacking 1st animation
  player3Reverse.detectCollisionReverse(
    player3Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    3
  );

  // Player 3Reverse is attacking Two animation
  player3Reverse.detectCollisionTwoReverse(
    player3Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    3
  );

  // Player Reverse is attacking 1st animation
  playerReverse.detectCollisionReverse(
    playerReverse,
    player,
    player3,
    player2Reverse,
    player4,
    2
  );

  // Player Reverse is attacking Two animation
  playerReverse.detectCollisionTwoReverse(
    playerReverse,
    player,
    player3,
    player2Reverse,
    player4,
    2
  );

  // Player4Reverse is attacking 1st animation
  player4Reverse.detectCollisionReverse(
    player4Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    1
  );

  // Player4Reverse is attacking Two animation
  player4Reverse.detectCollisionTwoReverse(
    player4Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    1
  );

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
          : player4Reverse.start === true
          ? player4Reverse
          : player,
    }) &&
    player2Reverse.isAttacking &&
    player2Reverse.countFramesMax === 3
  ) {
    if (playerReverse.start === true) {
      playerReverse.damagedByKenji();
      player2Reverse.isAttacking = false;
    } else if (player3Reverse.start === true) {
      player3Reverse.damagedByKenji();
      player2Reverse.isAttacking = false;
    } else if (player2.start === true) {
      player2.damagedByKenji();
      player2Reverse.isAttacking = false;
    } else if (player4Reverse.start === true) {
      player4Reverse.damagedByKenji();
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
    if (player4Reverse.start === true) {
      gsap.to('#player2Health', {
        width: player4Reverse.health + '%',
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
          : player4Reverse.start === true
          ? player4Reverse
          : player,
    }) &&
    player2Reverse.isAttackingTwo &&
    player2Reverse.countFramesMax === 3
  ) {
    if (playerReverse.start === true) {
      playerReverse.damagedTwoByKenji();
      player2Reverse.isAttackingTwo = false;
    } else if (player3Reverse.start === true) {
      player3Reverse.damagedTwoByKenji();
      player2Reverse.isAttackingTwo = false;
    } else if (player2.start === true) {
      player2.damagedTwoByKenji();
      player2Reverse.isAttackingTwo = false;
    } else if (player4Reverse.start === true) {
      player4Reverse.damagedTwoByKenji();
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
    if (player4Reverse.start === true) {
      gsap.to('#player2Health', {
        width: player4Reverse.health + '%',
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
  } else if (
    player.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player4Reverse;
    if (player.health <= 0 || player4Reverse.health <= 0) {
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
    player3.start === true &&
    menuMain.start === false
  ) {
    let pl1 = playerReverse;
    let pl2 = player3;
    if (playerReverse.health <= 0 || player3.health <= 0) {
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
  } else if (
    playerReverse.start === true &&
    player4.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = playerReverse;
    if (player4.health <= 0 || playerReverse.health <= 0) {
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
  } else if (
    player4.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player2;
    if (player4.health <= 0 || player2.health <= 0) {
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
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player3Reverse;
    if (player2Reverse.health <= 0 || player3Reverse.health <= 0) {
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
  } else if (
    player2Reverse.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player4Reverse;
    if (player2Reverse.health <= 0 || player4Reverse.health <= 0) {
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
  } else if (
    player3.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player4Reverse;
    if (player3.health <= 0 || player4Reverse.health <= 0) {
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
  } else if (
    player4.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player3Reverse;
    if (player4.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // Player4
  else if (
    player4.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = playerReverse;
    if (player4.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player3Reverse;
    if (player4.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player2;
    if (player4.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player4Reverse;
    if (player4.health <= 0 || player4Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // Player4Reverse
  else if (
    player4Reverse.start === true &&
    player.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player4Reverse;
    if (player4Reverse.health <= 0 || player.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4Reverse.start === true &&
    player3.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player4Reverse;
    if (player4Reverse.health <= 0 || player3.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4Reverse.start === true &&
    player2Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player4Reverse;
    if (player4Reverse.health <= 0 || player2Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4Reverse.start === true &&
    player4.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player4Reverse;
    if (player4Reverse.health <= 0 || player4.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
}
animate();

window.addEventListener('keydown', (event) => {
  // console.log(event.key);
  // player switch statement
  if (
    (player.start === false && menuMain.start === true) ||
    (playerReverse.start === false && menuMain.start === true) ||
    (player2.start === false && menuMain.start === true) ||
    (player2Reverse.start === false && menuMain.start === true) ||
    (player3.start === false && menuMain.start === true) ||
    (player3Reverse.start === false && menuMain.start === true) ||
    (player4.start === false && menuMain.start === true) ||
    (player4Reverse === false && menuMain.start === true)
  ) {
    return null;
  } else if (
    (player.start === true && menuMain.start === false) ||
    (playerReverse.start === true && menuMain.start === false) ||
    (player2.start === true && menuMain.start === false) ||
    (player2Reverse.start === true && menuMain.start === false) ||
    (player3.start === true && menuMain.start === false) ||
    (player3Reverse.start === true && menuMain.start === false) ||
    (player4.start === true && menuMain.start === false) ||
    (player4Reverse === true && menuMain.start === false)
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
    if (!player4.dead) {
      player4.switchButtons(event);
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
    if (!player4Reverse.dead) {
      player4Reverse.switchButtonsRight(event);
    }
  }

  console.log(event.key);
});

window.addEventListener('keyup', (event) => {
  // player(Samurai Mack)
  player.switchUpButtonsLeft(event);

  // player3(King)
  player.switchUpButtonsLeft(event);

  // playerReverse(SamuraiKenji on Left side)
  player2Reverse.switchUpButtonsLeft(event);

  // player4(King 2)
  player4.switchUpButtonsLeft(event);

  // playerReverse(SamuraiMack)
  playerReverse.switchUpButtonsRight(event);

  // player2(Samurai Kenji)
  player2.switchUpButtonsKenji(event);

  // player3Reverse(King)
  player3Reverse.switchUpButtonsRight(event);

  // player4Reverse(King2)
  player4Reverse.switchUpButtonsRight(event);
  // console.log(event.key);
});
