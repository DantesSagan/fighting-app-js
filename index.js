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
// Change language
let language = 'eng';
ChangeLanguage();

// This is means whitch velocity to falling down to bottom of the canvas
// And how faster this rich bottom by this
const gravity = 0.7;
const menuMain = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './assets/Etc/background - clouds - two.png',
  framesMax: 6,
  start: true,
});
// background image
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './assets/Etc/background.png',
  start: false,
});
// shop layout

const shop = new Sprite({
  position: {
    x: 615,
    y: 115,
  },
  imageSrc: './assets/Etc/shop - eye - animation.png',
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
  imageSrc: './assets/Samurai/samuraiMack/Idle.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Samurai/samuraiMack/Idle.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/Samurai/samuraiMack/Run.png',
        soundSrc: './audio/walking.wav',
        soundStart: false,
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Samurai/samuraiMack/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Samurai/samuraiMack/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/Samurai/samuraiMack/Attack1.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack2: {
        imageSrc: './assets/Samurai/samuraiMack/Attack2.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack3: {
        imageSrc: './assets/Samurai/samuraiMack/Attack3 ext.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      damaged: {
        imageSrc:
          './assets/Samurai/samuraiMack/blood/Take Hit - white silhouette - blood.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/Samurai/samuraiMack/blood/Death - blood.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 6,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
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
  imageSrc: './assets/Samurai/samuraiMack/Idle.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Samurai/samuraiMack/reverseMack/Idle - Reverse.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/Samurai/samuraiMack/reverseMack/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Samurai/samuraiMack/reverseMack/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Samurai/samuraiMack/reverseMack/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc:
          './assets/Samurai/samuraiMack/reverseMack/Attack1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack2: {
        imageSrc:
          './assets/Samurai/samuraiMack/reverseMack/Attack2 - Reverse.png',
        framesMax: 6,
      },
      attack3: {
        imageSrc:
          './assets/Samurai/samuraiMack/reverseMack/Attack3 - Reverse.png',
        framesMax: 6,
      },
      damaged: {
        imageSrc:
          './assets/Samurai/samuraiMack/reverseMack/Take Hit - white silhouette - blood - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc:
          './assets/Samurai/samuraiMack/reverseMack/Death - blood - Reverse.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 6,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: -210,
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
  imageSrc: './assets/Samurai/kenji/Idle.png',
  framesMax: 4,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Samurai/kenji/Idle.png',
        framesMax: 4,
      },
      run: {
        imageSrc: './assets/Samurai/kenji/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Samurai/kenji/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Samurai/kenji/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/Samurai/kenji/Attack1.png',
        framesMax: 4,
      },
      attack2: {
        imageSrc: './assets/Samurai/kenji/Attack2.png',
        framesMax: 4,
      },
      attack3: {
        imageSrc: './assets/Samurai/kenji/Attack3 - Two.png',
        framesMax: 8,
      },
      damaged: {
        imageSrc:
          './assets/Samurai/kenji/blood/Take Hit - white silhouette - blood.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood.png',
        soundSrc: './audio/death.wav',
        framesMax: 7,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
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
  // attackBoxTwo: {
  //   offset: {
  //     x: -250,
  //     y: 30,
  //   },
  //   width: 150,
  //   height: 50,
  // },
  start: false,
  restart: false,
});
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
    x: 235,
    y: 170,
  },
  scale: 2.5,
  color: 'red',
  imageSrc: './assets/Samurai/kenji/Idle.png',
  framesMax: 4,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Samurai/kenji/reverseKenji/Idle - Reverse.png',
        framesMax: 4,
      },
      run: {
        imageSrc: './assets/Samurai/kenji/reverseKenji/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Samurai/kenji/reverseKenji/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Samurai/kenji/reverseKenji/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/Samurai/kenji/reverseKenji/Attack1 - Reverse.png',
        framesMax: 4,
      },
      attack2: {
        imageSrc: './assets/Samurai/kenji/reverseKenji/Attack2 - Reverse.png',
        framesMax: 4,
      },
      attack3: {
        imageSrc:
          './assets/Samurai/kenji/reverseKenji/Attack3 - Two - Reverse.png',
        framesMax: 8,
      },
      damaged: {
        imageSrc:
          './assets/Samurai/kenji/reverseKenji/Take Hit - white silhouette - blood - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc:
          './assets/Samurai/kenji/reverseKenji/Death - blood - Reverse.png',
        soundSrc: './audio/death.wav',
        framesMax: 7,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: 75,
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
  imageSrc: './assets/KnightsKings/Medieval King Pack/Idle.png',
  framesMax: 1,
  sprites: [
    {
      idle: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Idle.png',
        framesMax: 6,
      },
      run: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Attack_1.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack2: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Attack_2.png',
        framesMax: 6,
      },
      attack3: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Attack_2.png',
        framesMax: 6,
      },
      damaged: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Hit.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/KnightsKings/Medieval King Pack/Death.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 11,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: 35,
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
  imageSrc: './assets/KnightsKings/Medieval King Pack/Idle.png',
  framesMax: 6,
  sprites: [
    {
      idle: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Idle - Reverse.png',
        framesMax: 6,
      },
      run: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Attack_1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack2: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Attack_2 - Reverse.png',
        framesMax: 6,
      },
      attack3: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Attack_2 - Reverse.png',
        framesMax: 6,
      },
      damaged: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Hit - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack/kingReverse/Death - Reverse.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 11,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
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
  imageSrc: './assets/KnightsKings/Medieval King Pack 2/Sprites/Idle.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/KnightsKings/Medieval King Pack 2/Sprites/Idle.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/KnightsKings/Medieval King Pack 2/Sprites/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/KnightsKings/Medieval King Pack 2/Sprites/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/KnightsKings/Medieval King Pack 2/Sprites/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/Sprites/Attack1.png',
        soundSrc: './audio/swing.wav',
        framesMax: 4,
      },
      attack2: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/Sprites/Attack2.png',
        framesMax: 4,
      },
      attack3: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/Sprites/Attack3.png',
        framesMax: 4,
      },
      damaged: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/Sprites/Take Hit - white silhouette.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/Sprites/Death.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 6,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
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
  imageSrc:
    './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Idle - Reverse.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Idle - Reverse.png',
        framesMax: 8,
      },
      run: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Attack1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 4,
      },
      attack2: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Attack2 - Reverse.png',
        framesMax: 4,
      },
      attack3: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Attack3 - Reverse.png',
        framesMax: 4,
      },
      damaged: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Take Hit - white silhouette - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc:
          './assets/KnightsKings/Medieval King Pack 2/SpritesReverse/Death - Reverse.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 6,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
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

const player5 = new Fighter({
  position: {
    x: 256,
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
  imageSrc: './assets/Wizards/Fire Wizard/Sprites/Idle.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Idle.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Move.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Idle.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 8,
      },
      fall: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Idle.png',
        framesMax: 8,
      },
      attack1: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Attack.png',
        soundSrc: './audio/EvilWizard1/Attack1_2.wav',
        framesMax: 8,
      },
      attack2: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Attack2.png',
        framesMax: 8,
      },
      attack3: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Attack3Three.png',
        framesMax: 5,
      },
      damaged: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Take Hit.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc: './assets/Wizards/Fire Wizard/Sprites/Death.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 5,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
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
const player5Reverse = new FighterReverse({
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
  imageSrc: './assets/Wizards/Fire Wizard/SpritesReverse/Idle - Reverse.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Idle - Reverse.png',
        framesMax: 8,
      },
      run: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Move - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Idle - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 8,
      },
      fall: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Idle - Reverse.png',
        framesMax: 8,
      },
      attack1: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Attack - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 8,
      },
      attack2: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Attack2 - Reverse.png',
        framesMax: 8,
      },
      attack3: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Attack3 - Reverse.png',
        framesMax: 5,
      },
      damaged: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Take Hit - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 4,
      },
      death: {
        imageSrc:
          './assets/Wizards/Fire Wizard/SpritesReverse/Death - Reverse.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 5,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
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
const player6 = new Fighter({
  position: {
    x: 256,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 300,
    y: 300,
  },
  scale: 2.73,
  color: 'blue',
  imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Idle.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Idle.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Attack1.png',
        soundSrc: './audio/EvilWizard1/Attack1_2.wav',
        framesMax: 8,
      },
      attack2: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Attack2.png',
        framesMax: 8,
      },
      attack3: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Attack2.png',
        framesMax: 8,
      },
      damaged: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Take hit.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 3,
      },
      death: {
        imageSrc: './assets/Wizards/Dark Wizard 2/Sprites/Death.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 7,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
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
const player6Reverse = new FighterReverse({
  position: {
    x: 768,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 330,
    y: 300,
  },
  scale: 2.73,
  color: 'blue',
  imageSrc: './assets/Wizards/Dark Wizard 2/SpriteReverse/Idle - Reverse.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Idle - Reverse.png',
        framesMax: 8,
      },
      run: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Attack1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 8,
      },
      attack2: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Attack2 - Reverse.png',
        framesMax: 8,
      },
      attack3: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Attack2 - Reverse.png',
        framesMax: 8,
      },
      damaged: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Take hit - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 3,
      },
      death: {
        imageSrc:
          './assets/Wizards/Dark Wizard 2/SpriteReverse/Death - Reverse.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 7,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: -250,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
});

if (menuMain.start === true) {
  const music = '../audio/ambient_menu.wav';
  menu({ music });
} else {
  const music = '../audio/Hard void (Finish - Rock 5).wav';
  menu({ music });
}

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
  KeyW: {
    pressed: false,
  },
  KeyA: {
    pressed: false,
  },
  KeyD: {
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

  if (menuMain.start === true) {
    menuMain.update();
  } else {
    background.update();
  }

  // insert background image
  // background.update();
  // canvas.style.transform = 'scale(-1, 1)';

  MenuFalsePlayersTrueCheck({
    player,
    playerReverse,
    player2,
    player2Reverse,
    player3,
    player3Reverse,
    player4,
    player4Reverse,
    player5,
    player5Reverse,
    player6,
    player6Reverse,
  });

  // By default menu is true and when you select players on both side's menu changing to false
  // And when menu false players sets to true which you selected to started the round
  // MenuFalsePlayersTrue();

  // background color
  c.fillStyle = 'rgba(255, 255 ,255, 0.15)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  // console.log(player.sprites)

  let moveLeftPL1 = keys.KeyA.pressed;
  let moveRightPL1 = keys.KeyD.pressed;
  let moveLeftPL2 = keys.ArrowLeft.pressed;
  let moveRightPL2 = keys.ArrowRight.pressed;
  // Player 1
  player.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');

  // Player 2
  player2.heroMovements(moveLeftPL2, moveRightPL2, 'ArrowLeft', 'ArrowRight');

  // Player 3
  player3.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');

  // Player4
  player4.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');

  // Player5
  player5.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');

  // Player 6
  player6.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');

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
  player2Reverse.heroMovementsReverse(
    moveLeftPL1,
    moveRightPL1,
    'KeyA',
    'KeyD'
  );

  // Player4 Reverse
  // Because this is reverse version of player character need to set reverse buttons
  player4Reverse.heroMovementsReverse(
    moveLeftPL2,
    moveRightPL2,
    'ArrowLeft',
    'ArrowRight'
  );

  // Player5 Reverse
  player5Reverse.heroMovementsReverse(
    moveLeftPL2,
    moveRightPL2,
    'ArrowLeft',
    'ArrowRight'
  );

  // Player6 Reverse
  player6Reverse.heroMovementsReverse(
    moveLeftPL2,
    moveRightPL2,
    'ArrowLeft',
    'ArrowRight'
  );

  // console.log(player2.restart);

  // Detect collision
  // Player 1 is attacking 1st animation
  // When 1st arg = playerAttack
  // 2n arg = player1
  // 3d arg = player2
  // 4th arg = player3
  // 5th arg = player4
  // 6th arg = attack animation (collision)
  // 7th arg = value of dealing dmg
  player.detectCollision(
    player,
    player2,
    player3Reverse,
    playerReverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    4,
    20
  );

  // Player 1 is attacking Two animation
  player.detectCollisionTwo(
    player,
    player2,
    player3Reverse,
    playerReverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    4,
    25
  );

  // Player 1 is attacking Three animation
  player.detectCollisionThree(
    player,
    player2,
    player3Reverse,
    playerReverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    4,
    30
  );

  // Player 2 && player2 is attacking animation
  // Detect collision
  // Player 1 is attacking 1st animation
  // When 1st arg = playerAttack
  // 2n arg = player1
  // 3d arg = player2
  // 4th arg = player3
  // 5th arg = player4
  // 6th arg = attack animation (collision)
  // 7th arg = value of dealing dmg
  // 8th arg = player for compare to detect collision between two players.
  // Player 2 on right side (player2Health) detect collision to (playerHealth) on left side
  player2.detectCollision(
    player2,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    1,
    10,
    player2
  );
  player2.detectCollisionTwo(
    player2,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    1,
    20,
    player2
  );
  player2.detectCollisionThree(
    player2,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    4,
    30,
    player2
  );
  // if (
  //   rectangularCollision({
  //     rectangle1: player2,
  //     rectangle2:
  //       player.start === true
  //         ? player
  //         : player3.start === true
  //         ? player3
  //         : player2Reverse.start === true
  //         ? player2Reverse
  //         : player4.start === true
  //         ? player4
  //         : player,
  //   }) &&
  //   player2.isAttacking &&
  //   player2.framesCurrent === 1
  // ) {
  //   if (player.start === true) {
  //     player.damagedByKenji();
  //     player2.isAttacking = false;
  //   } else if (player3.start === true) {
  //     player3.damagedByKenji();
  //     player2.isAttacking = false;
  //   } else if (player2Reverse.start === true) {
  //     player2Reverse.damagedByKenji();
  //     player2.isAttacking = false;
  //   } else if (player4.start === true) {
  //     player4.damagedByKenji();
  //     player2.isAttacking = false;
  //   }
  //   // document.querySelector('#playerHealth').style.width = player.health + '%';
  //   if (player.start === true) {
  //     gsap.to('#playerHealth', {
  //       width: player.health + '%',
  //     });
  //   }
  //   if (player3.start === true) {
  //     gsap.to('#playerHealth', {
  //       width: player3.health + '%',
  //     });
  //   }
  //   if (player2Reverse.start === true) {
  //     gsap.to('#playerHealth', {
  //       width: player2Reverse.health + '%',
  //     });
  //   }
  //   if (player4.start === true) {
  //     gsap.to('#playerHealth', {
  //       width: player4.health + '%',
  //     });
  //   }
  //   console.log('you attack player1');
  // }
  // // if player2 is missing by attacking box
  // if (player2.isAttacking && player2.framesCurrent === 1) {
  //   player2.isAttacking = false;
  // }

  // // Player 2 && player2 is attackingTwo animation
  // if (
  //   rectangularCollision({
  //     rectangle1: player2,
  //     rectangle2:
  //       player.start === true
  //         ? player
  //         : player3.start === true
  //         ? player3
  //         : player2Reverse.start === true
  //         ? player2Reverse
  //         : player4.start === true
  //         ? player4
  //         : player,
  //   }) &&
  //   player2.isAttackingTwo &&
  //   player2.framesCurrent === 1
  // ) {
  //   if (player.start === true) {
  //     player.damagedTwoByKenji();
  //     player2.isAttackingTwo = false;
  //   } else if (player3.start === true) {
  //     player3.damagedTwoByKenji();
  //     player2.isAttackingTwo = false;
  //   } else if (player2Reverse.start === true) {
  //     player2Reverse.damagedTwoByKenji();
  //     player2.isAttackingTwo = false;
  //   } else if (player4.start === true) {
  //     player4.damagedTwoByKenji();
  //     player2.isAttackingTwo = false;
  //   }
  //   // document.querySelector('#playerHealth').style.width = player.health + '%';
  //   if (player.start === true) {
  //     gsap.to('#playerHealth', {
  //       width: player.health + '%',
  //     });
  //   }
  //   if (player3.start === true) {
  //     gsap.to('#playerHealth', {
  //       width: player3.health + '%',
  //     });
  //   }
  //   if (player2Reverse.start === true) {
  //     gsap.to('#playerHealth', {
  //       width: player2Reverse.health + '%',
  //     });
  //   }
  //   if (player4.start === true) {
  //     gsap.to('#playerHealth', {
  //       width: player4.health + '%',
  //     });
  //   }
  //   console.log('you attack player1');
  // }
  // // if player2 is missing by attacking box
  // if (player2.isAttackingTwo && player2.framesCurrent === 1) {
  //   player2.isAttackingTwo = false;
  // }
  // here
  // Player 3 is attacking 1st animation
  player3.detectCollision(
    player3,
    player3Reverse,
    player2,
    playerReverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    4,
    20
  );

  // Player 3 is attacking Two animation
  player3.detectCollisionTwo(
    player3,
    player3Reverse,
    player2,
    playerReverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    4,
    25
  );

  // Player4 is attacking animation
  player4.detectCollision(
    player4,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    2,
    10
  );

  // Player4 is attackingTwo animation
  player4.detectCollisionTwo(
    player4,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    2,
    20
  );

  // Player4 is attackingThree animation
  player4.detectCollisionThree(
    player4,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    2,
    30
  );

  // Player5 is attacking animation
  player5.detectCollision(
    player5,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    2,
    15
  );

  // Player5 is attacking 2nd animation
  player5.detectCollisionTwo(
    player5,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    3,
    25
  );

  // Player5 is attacking 3d animation
  player5.detectCollisionThree(
    player5,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    3,
    35
  );

  // Player6 is attacking animation
  player6.detectCollision(
    player6,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    4,
    15
  );

  // Player5 is attacking 2nd animation
  player6.detectCollisionTwo(
    player6,
    playerReverse,
    player2,
    player3Reverse,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    5,
    25
  );

  // Player 3Reverse is attacking 1st animation
  player3Reverse.detectCollisionReverse(
    player3Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    2,
    20
  );

  // Player 3Reverse is attacking Two animation
  player3Reverse.detectCollisionTwoReverse(
    player3Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    2,
    25
  );

  // Player Reverse is attacking 1st animation
  playerReverse.detectCollisionReverse(
    playerReverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    2,
    20
  );

  // Player Reverse is attacking Two animation
  playerReverse.detectCollisionTwoReverse(
    playerReverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    2,
    25
  );

  // Player Reverse is attacking Three animation
  playerReverse.detectCollisionThreeReverse(
    playerReverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    2,
    30
  );

  // Player4Reverse is attacking 1st animation
  player4Reverse.detectCollisionReverse(
    player4Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    1,
    10
  );

  // Player4Reverse is attacking Two animation
  player4Reverse.detectCollisionTwoReverse(
    player4Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    1,
    20
  );

  // Player4Reverse is attacking Three animation
  player4Reverse.detectCollisionThreeReverse(
    player4Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    1,
    30
  );

  // Player5Reverse is attacking 1st animation
  player5Reverse.detectCollisionReverse(
    player5Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    6,
    15
  );

  // Player5Reverse is attacking 2d animation
  player5Reverse.detectCollisionTwoReverse(
    player5Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    4,
    25
  );

  // Player5Reverse is attacking 3d animation
  player5Reverse.detectCollisionThreeReverse(
    player5Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    2,
    35
  );

  // Player6Reverse is attacking 1st animation
  player6Reverse.detectCollisionReverse(
    player6Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    4,
    15
  );

  // Player5Reverse is attacking 2d animation
  player6Reverse.detectCollisionTwoReverse(
    player6Reverse,
    player,
    player3,
    player2Reverse,
    player4,
    player5,
    player6,
    3,
    25
  );

  // Player 2 Reverse is attacking 1st animation
  // Detect collision
  // Player 1 is attacking 1st animation
  // When 1st arg = playerAttack
  // 2n arg = player1
  // 3d arg = player2
  // 4th arg = player3
  // 5th arg = player4
  // 6th arg = attack animation (collision)
  // 7th arg = value of dealing dmg
  // 8th arg = player for compare to detect collision between two players.
  // Player 2 on left side (playerHealth) detect collision to (player2Health) on right side
  player2Reverse.detectCollisionReverse(
    player2Reverse,
    playerReverse,
    player3Reverse,
    player2,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    3,
    10,
    player2Reverse
  );
  player2Reverse.detectCollisionTwoReverse(
    player2Reverse,
    playerReverse,
    player3Reverse,
    player2,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    3,
    20,
    player2Reverse
  );
  player2Reverse.detectCollisionThreeReverse(
    player2Reverse,
    playerReverse,
    player3Reverse,
    player2,
    player4Reverse,
    player5Reverse,
    player6Reverse,
    4,
    30,
    player2Reverse
  );
  // if (
  //   rectangularCollision({
  //     rectangle1: player2Reverse,
  //     rectangle2:
  //       playerReverse.start === true
  //         ? playerReverse
  //         : player3Reverse.start === true
  //         ? player3Reverse
  //         : player2.start === true
  //         ? player2
  //         : player4Reverse.start === true
  //         ? player4Reverse
  //         : player,
  //   }) &&
  //   player2Reverse.isAttacking &&
  //   player2Reverse.countFramesMax === 3
  // ) {
  //   if (playerReverse.start === true) {
  //     playerReverse.damagedByKenji();
  //     player2Reverse.isAttacking = false;
  //   } else if (player3Reverse.start === true) {
  //     player3Reverse.damagedByKenji();
  //     player2Reverse.isAttacking = false;
  //   } else if (player2.start === true) {
  //     player2.damagedByKenji();
  //     player2Reverse.isAttacking = false;
  //   } else if (player4Reverse.start === true) {
  //     player4Reverse.damagedByKenji();
  //     player2Reverse.isAttacking = false;
  //   }
  //   // document.querySelector('#player2Health').style.width = player2.health + '%';
  //   // if we are using gsap we get to say of id and property with what need to do
  //   // and also give a smooth animation of decreasing healthbar
  //   if (playerReverse.start === true) {
  //     gsap.to('#player2Health', {
  //       width: playerReverse.health + '%',
  //     });
  //   }
  //   if (player3Reverse.start === true) {
  //     gsap.to('#player2Health', {
  //       width: player3Reverse.health + '%',
  //     });
  //   }
  //   if (player2.start === true) {
  //     gsap.to('#player2Health', {
  //       width: player2.health + '%',
  //     });
  //   }
  //   if (player4Reverse.start === true) {
  //     gsap.to('#player2Health', {
  //       width: player4Reverse.health + '%',
  //     });
  //   }
  //   // console.log('you attack player2');
  // }

  // // if player1 is missing by attacking box
  // if (player2Reverse.isAttacking && player2Reverse.countFramesMax === 3) {
  //   player2Reverse.isAttacking = false;
  // }
  // // Player 2 Reverse is attacking Two animation
  // if (
  //   rectangularCollision({
  //     rectangle1: player2Reverse,
  //     rectangle2:
  //       playerReverse.start === true
  //         ? playerReverse
  //         : player3Reverse.start === true
  //         ? player3Reverse
  //         : player2.start === true
  //         ? player2
  //         : player4Reverse.start === true
  //         ? player4Reverse
  //         : player,
  //   }) &&
  //   player2Reverse.isAttackingTwo &&
  //   player2Reverse.countFramesMax === 3
  // ) {
  //   if (playerReverse.start === true) {
  //     playerReverse.damagedTwoByKenji();
  //     player2Reverse.isAttackingTwo = false;
  //   } else if (player3Reverse.start === true) {
  //     player3Reverse.damagedTwoByKenji();
  //     player2Reverse.isAttackingTwo = false;
  //   } else if (player2.start === true) {
  //     player2.damagedTwoByKenji();
  //     player2Reverse.isAttackingTwo = false;
  //   } else if (player4Reverse.start === true) {
  //     player4Reverse.damagedTwoByKenji();
  //     player2Reverse.isAttackingTwo = false;
  //   }
  //   // document.querySelector('#player2Health').style.width = player2.health + '%';
  //   if (playerReverse.start === true) {
  //     gsap.to('#player2Health', {
  //       width: playerReverse.health + '%',
  //     });
  //   }
  //   if (player3Reverse.start === true) {
  //     gsap.to('#player2Health', {
  //       width: player3Reverse.health + '%',
  //     });
  //   }
  //   if (player2.start === true) {
  //     gsap.to('#player2Health', {
  //       width: player2.health + '%',
  //     });
  //   }
  //   if (player4Reverse.start === true) {
  //     gsap.to('#player2Health', {
  //       width: player4Reverse.health + '%',
  //     });
  //   }
  //   // console.log('you attack player2');
  // }

  // // if player3 is missing by attacking box
  // if (player2Reverse.isAttackingTwo && player2Reverse.countFramesMax === 3) {
  //   player2Reverse.isAttackingTwo = false;
  // }

  // end game based on healthbar of players
  document.querySelector('#displayText').style.display = 'flex';

  // Determine winner by less then zero health point
  DetermineWinnerByLessThenZeroHP();
}
animate();

window.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.altKey) {
    ChangeLanguage();
  }
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
    (player4Reverse === false && menuMain.start === true) ||
    (player5.start === false && menuMain.start === true) ||
    (player5Reverse.start === false && menuMain.start === true) ||
    (player6.start === false && menuMain.start === true) ||
    (player6Reverse.start === false && menuMain.start === true)
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
    (player4Reverse === true && menuMain.start === false) ||
    (player5.start === true && menuMain.start === false) ||
    (player5Reverse.start === true && menuMain.start === false) ||
    (player6.start === true && menuMain.start === false) ||
    (player6Reverse.start === true && menuMain.start === false)
  ) {
    if (event.key === 'Escape') {
      document.querySelector('#EscapeMenu').style.display = 'flex';
      // console.log('Escape pressed');
    }

    if (
      !player.dead &&
      player.AIHero === false &&
      player.playableHero === true
    ) {
      player.switchButtons(event);
    } else if (
      !player.dead &&
      player.AIHero === true &&
      player.playableHero === false
    ) {
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
    if (!player5.dead) {
      player5.switchButtons(event);
    }
    if (!player6.dead) {
      player6.switchButtons(event);
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
    if (!player5Reverse.dead) {
      player5Reverse.switchButtonsRight(event);
    }
    if (!player6Reverse.dead) {
      player6Reverse.switchButtonsRight(event);
    }
  }

  // console.log(event.key);
});

window.addEventListener('keyup', (event) => {
  // player(Samurai Mack)
  player.switchUpButtonsLeft(event);

  // player3(King)
  player3.switchUpButtonsLeft(event);

  // playerReverse(SamuraiKenji on Left side)
  player2Reverse.switchUpButtonsLeft(event);

  // player4(King 2)
  player4.switchUpButtonsLeft(event);

  // player5(Evil Wizard 1)
  player5.switchUpButtonsLeft(event);

  // player6(Evil Wizard 2)
  player6.switchUpButtonsLeft(event);

  // playerReverse(SamuraiMack)
  playerReverse.switchUpButtonsRight(event);

  // player2(Samurai Kenji)
  player2.switchUpButtonsKenji(event);

  // player3Reverse(King)
  player3Reverse.switchUpButtonsRight(event);

  // player4Reverse(King2)
  player4Reverse.switchUpButtonsRight(event);

  // player5Reverse(Evil Wizard 1)
  player5Reverse.switchUpButtonsRight(event);

  // player6Reverse(Evil Wizard 2)
  player6Reverse.switchUpButtonsRight(event);

  // console.log(event.key);
});
