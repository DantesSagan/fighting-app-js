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
  AIHero: false,
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
  AlHero: false,
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
  AIHero: false,
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
  AIHero: false,
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
  AIHero: false,
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
  AlHero: false,
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
  AIHero: false,
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
  AlHero: false,
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
  AIHero: false,
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
  AlHero: false,
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
  AIHero: false,
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
  AlHero: false,
});
const player7 = new Fighter({
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
    y: 145,
  },
  scale: 2.9,
  color: 'blue',
  imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Idle.png',
  framesMax: 10,
  sprites: [
    {
      idle: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Idle.png',
        framesMax: 10,
      },
      run: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 3,
      },
      fall: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Fall.png',
        framesMax: 3,
      },
      attack1: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Attack1.png',
        soundSrc: './audio/EvilWizard1/Attack1_2.wav',
        framesMax: 7,
      },
      attack2: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Attack2.png',
        framesMax: 7,
      },
      attack3: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Attack3.png',
        framesMax: 8,
      },
      damaged: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Take hit.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 3,
      },
      death: {
        imageSrc: './assets/KnightsKings/Fantasy Warrior/Sprites/Death.png',
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
      x: 80,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
  AIHero: false,
});
const player7Reverse = new FighterReverse({
  position: {
    x: 768,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 205,
    y: 145,
  },
  scale: 2.9,
  color: 'blue',
  imageSrc:
    './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Idle - Reverse.png',
  framesMax: 10,
  sprites: [
    {
      idle: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Idle - Reverse.png',
        framesMax: 10,
      },
      run: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 8,
      },
      jump: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 3,
      },
      fall: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Fall - Reverse.png',
        framesMax: 3,
      },
      attack1: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Attack1 - Reverse.png',
        soundSrc: './audio/EvilWizard1/Attack1_2.wav',
        framesMax: 7,
      },
      attack2: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Attack2 - Reverse.png',
        framesMax: 7,
      },
      attack3: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Attack3 - Reverse.png',
        framesMax: 8,
      },
      damaged: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Take hit - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 3,
      },
      death: {
        imageSrc:
          './assets/KnightsKings/Fantasy Warrior/SpritesReverse/Death - Reverse.png',
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
      x: -80,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
  AlHero: false,
});
const player8 = new Fighter({
  position: {
    x: 256,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 100,
    y: 70,
  },
  scale: 1.23,
  color: 'blue',
  imageSrc: './assets/Warrior-axe/Black boots/Idle - black.png',
  framesMax: 5,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Warrior-axe/Black boots/Idle - black.png',
        framesMax: 5,
      },
      run: {
        imageSrc: './assets/Warrior-axe/Black boots/Run - black (1).png',
        soundSrc: './audio/walking.wav',
        framesMax: 10,
      },
      jump: {
        imageSrc: './assets/Warrior-axe/Black boots/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Warrior-axe/Black boots/Fall.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc: './assets/Warrior-axe/Black boots/Attack1 - black.png',
        soundSrc: './audio/swing.wav',
        framesMax: 7,
      },
      attack2: {
        imageSrc: './assets/Warrior-axe/Black boots/Attack2 - black.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack3: {
        imageSrc: './assets/Samurai/samuraiMack/Attack3 ext.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      damaged: {
        imageSrc: './assets/Warrior-axe/Black boots/Take hit - black.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 5,
      },
      death: {
        imageSrc: './assets/Warrior-axe/Black boots/Death - black.png',
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
      x: 220,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
  AIHero: false,
});
const player8Reverse = new FighterReverse({
  position: {
    x: 768,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 100,
    y: 70,
  },
  scale: 1.23,
  color: 'blue',
  imageSrc:
    './assets/Warrior-axe/Black boots - Reverse/Idle - black - Reverse.png',
  framesMax: 5,
  sprites: [
    {
      idle: {
        imageSrc:
          './assets/Warrior-axe/Black boots - Reverse/Idle - black - Reverse.png',
        framesMax: 5,
      },
      run: {
        imageSrc:
          './assets/Warrior-axe/Black boots - Reverse/Run - black - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 10,
      },
      jump: {
        imageSrc:
          './assets/Warrior-axe/Black boots - Reverse/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc:
          './assets/Warrior-axe/Black boots - Reverse/Fall - Reverse.png',
        framesMax: 2,
      },
      attack1: {
        imageSrc:
          './assets/Warrior-axe/Black boots - Reverse/Attack1 - black - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 7,
      },
      attack2: {
        imageSrc:
          './assets/Warrior-axe/Black boots - Reverse/Attack2 - black - Reverse.png',
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
          './assets/Warrior-axe/Black boots - Reverse/Take hit - black - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 5,
      },
      death: {
        imageSrc:
          './assets/Warrior-axe/Black boots - Reverse/Death - black - Reverse.png',
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
      x: -100,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
  AlHero: false,
});
const player9 = new Fighter({
  position: {
    x: 256,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 80,
    y: 50,
  },
  scale: 0.8,
  color: 'blue',
  imageSrc: './assets/Vampire/Idle.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Vampire/Idle.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/Vampire/Run.png',
        soundSrc: './audio/walking.wav',
        framesMax: 6,
      },
      jump: {
        imageSrc: './assets/Vampire/Jump.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Vampire/Fall.png',
        framesMax: 3,
      },
      attack1: {
        imageSrc: './assets/Vampire/Attack1.png',
        soundSrc: './audio/swing.wav',
        framesMax: 5,
      },
      attack2: {
        imageSrc: './assets/Vampire/Attack1.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack3: {
        imageSrc: './assets/Vampire/Attack1.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      damaged: {
        imageSrc: './assets/Vampire/Take hit.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 3,
      },
      death: {
        imageSrc: './assets/Vampire/Death.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 8,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: 60,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
  AIHero: false,
});
const player9Reverse = new FighterReverse({
  position: {
    x: 768,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 80,
    y: 50,
  },
  scale: 0.8,
  color: 'blue',
  imageSrc: './assets/Vampire/reverse/Idle - Reverse.png',
  framesMax: 8,
  sprites: [
    {
      idle: {
        imageSrc: './assets/Vampire/reverse/Idle - Reverse.png',
        framesMax: 8,
      },
      run: {
        imageSrc: './assets/Vampire/reverse/Run - Reverse.png',
        soundSrc: './audio/walking.wav',
        framesMax: 6,
      },
      jump: {
        imageSrc: './assets/Vampire/reverse/Jump - Reverse.png',
        soundSrc: './audio/jump.mp3',
        framesMax: 2,
      },
      fall: {
        imageSrc: './assets/Vampire/reverse/Fall - Reverse.png',
        framesMax: 3,
      },
      attack1: {
        imageSrc: './assets/Vampire/reverse/Attack1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 5,
      },
      attack2: {
        imageSrc: './assets/Vampire/reverse/Attack1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      attack3: {
        imageSrc: './assets/Vampire/reverse/Attack1 - Reverse.png',
        soundSrc: './audio/swing.wav',
        framesMax: 6,
      },
      damaged: {
        imageSrc: './assets/Vampire/reverse/Take hit - Reverse.png',
        soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
        framesMax: 3,
      },
      death: {
        imageSrc: './assets/Vampire/reverse/Death - Reverse.png',
        soundSrc: './audio/death 2.wav',
        framesMax: 8,
      },
      deathTwo: {
        imageSrc: './assets/Samurai/kenji/blood/Death - blood - last 2.png',
        framesMax: 3,
      },
    },
  ],
  attackBox: {
    offset: {
      x: -200,
      y: 30,
    },
    width: 150,
    height: 50,
  },
  start: false,
  restart: false,
  AlHero: false,
});
if (menuMain.start === true) {
  const music = './audio/ambient_menu.wav';
  menu({ music });
} else {
  if (menuMain.combatMusic === true) {
    const music = './audio/Hard void (Finish - Rock 5).wav';
    menu({ music });
  } else {
    const music = '';
    menu({ music });
  }
}

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
// window.addEventListener('load', ()=>{
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
  shop.update();
  // insert background image
  // background.update();
  // canvas.style.transform = 'scale(-1, 1)';

  // By default menu is true and when you select players on both side's menu changing to false
  // And when menu false players sets to true which you selected to started the round
  // MenuFalsePlayersTrue();
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
    player7,
    player7Reverse,
    player8,
    player8Reverse,
    player9,
    player9Reverse,
  });
  // background color
  c.fillStyle = 'rgba(255, 255 ,255, 0.15)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  // console.log(player.sprites)

  let moveLeftPL1 = keys.KeyA.pressed;
  let moveRightPL1 = keys.KeyD.pressed;
  let moveLeftPL2 = keys.ArrowLeft.pressed;
  let moveRightPL2 = keys.ArrowRight.pressed;
  // Player 1
  if (player.AIHero === true) {
    player.AIPlayer(player.AIHero, player, 4, 20, 4, 25, 4, 30);
  } else {
    player.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');
    player.detectCollision(
      player,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      4,
      20
    );

    // Player 1 is attacking Two animation
    player.detectCollisionTwo(
      player,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      4,
      25
    );

    // Player 1 is attacking Three animation
    player.detectCollisionThree(
      player,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      4,
      30
    );
  }

  // Player 2 Reverse (on Left Side)
  if (player2Reverse.AIHero === true) {
    player2Reverse.AIPlayerKenji(player2Reverse.AIHero, player2Reverse, 3, 10, 3, 20, 4, 30);
  } else {
    player2Reverse.heroMovementsReverse(
      moveLeftPL1,
      moveRightPL1,
      'KeyA',
      'KeyD'
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
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      3,
      10,
      player2Reverse
    );
    player2Reverse.detectCollisionTwoReverse(
      player2Reverse,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      3,
      20,
      player2Reverse
    );
    player2Reverse.detectCollisionThreeReverse(
      player2Reverse,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      4,
      30,
      player2Reverse
    );
  }

  // Player 3
  if (player3.AIHero === true) {
    player3.AIPlayer(player3.AIHero, player3, 4, 20, 4, 25);
  } else {
    player3.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');
    // Player 3 is attacking 1st animation
    player3.detectCollision(
      player3,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      4,
      20
    );

    // Player 3 is attacking Two animation
    player3.detectCollisionTwo(
      player3,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      4,
      25
    );
  }

  // Player4
  if (player4.AIHero === true) {
    player4.AIPlayer(player4.AIHero, player4, 2, 10, 2, 20, 2, 30);
  } else {
    player4.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');
    // Player4 is attacking animation
    player4.detectCollision(
      player4,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
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
      player7Reverse,
      player8Reverse,
      player9Reverse,
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
      player7Reverse,
      player8Reverse,
      player9Reverse,
      2,
      30
    );
  }

  // Player5
  if (player5.AIHero === true) {
    player5.AIPlayer(player5.AIHero, player5, 2, 15, 3, 25);
  } else {
    player5.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');
    // Player5 is attacking animation
    player5.detectCollision(
      player5,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
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
      player7Reverse,
      player8Reverse,
      player9Reverse,
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
      player7Reverse,
      player8Reverse,
      player9Reverse,
      3,
      35
    );
  }

  // Player 6
  if (player6.AIHero === true) {
    player6.AIPlayer(player6.AIHero, player6, 4, 15, 5, 25);
  } else {
    player6.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');
    // Player6 is attacking animation
    player6.detectCollision(
      player6,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
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
      player7Reverse,
      player8Reverse,
      player9Reverse,
      5,
      25
    );
  }

  // Player 7
  if (player7.AIHero === true) {
    player7.AIPlayer(player7.AIHero, player7, 5,15, 3, 25);
  } else {
    player7.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');
    // Player7 is attacking animation
    player7.detectCollision(
      player7,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      5,
      15
    );

    // Player7 is attacking 2nd animation
    player7.detectCollisionTwo(
      player7,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      3,
      25
    );

    // Player7 is attacking 3d animation
    player7.detectCollisionThree(
      player7,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      5,
      35
    );
  }

  // Player 8
  if (player8.AIHero === true) {
    player8.AIPlayer(player8.AIHero, player8, 5, 25, 4, 35);
  } else {
    player8.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');
    // Player8 is attacking animation
    player8.detectCollision(
      player8,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      5,
      25
    );

    // Player8 is attacking 2nd animation
    player8.detectCollisionTwo(
      player8,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      4,
      35
    );
  }

  // Player 9
  if (player9.AIHero === true) {
    player9.AIPlayer(player9.AIHero, player9, 3, 25);
  } else {
    player9.heroMovements(moveLeftPL1, moveRightPL1, 'KeyA', 'KeyD');
    // Player9 is attacking animation
    player9.detectCollision(
      player9,
      playerReverse,
      player2,
      player3Reverse,
      player4Reverse,
      player5Reverse,
      player6Reverse,
      player7Reverse,
      player8Reverse,
      player9Reverse,
      3,
      25
    );
  }

  // // Player 2
  // if (player2.AIHero === true) {
  //   player2.AIPlayer(player2.AIHero, player2);
  // } else {
  //   player2.heroMovements(moveLeftPL2, moveRightPL2, 'ArrowLeft', 'ArrowRight');
  //   // Player 2 && player2 is attacking animation
  //   // Detect collision
  //   // Player 1 is attacking 1st animation
  //   // When 1st arg = playerAttack
  //   // 2n arg = player1
  //   // 3d arg = player2
  //   // 4th arg = player3
  //   // 5th arg = player4
  //   // 6th arg = attack animation (collision)
  //   // 7th arg = value of dealing dmg
  //   // 8th arg = player for compare to detect collision between two players.
  //   // Player 2 on right side (player2Health) detect collision to (playerHealth) on left side
  //   player2.detectCollision(
  //     player2,
  //     player,
  //     player3,
  //     player2Reverse,
  //     player4,
  //     player5,
  //     player6,
  //     player7,
  //     player8,
  //     player9,
  //     1,
  //     10,
  //     player2
  //   );
  //   player2.detectCollisionTwo(
  //     player2,
  //     player,
  //     player3,
  //     player2Reverse,
  //     player4,
  //     player5,
  //     player6,
  //     player7,
  //     player8,
  //     player9,
  //     1,
  //     20,
  //     player2
  //   );
  //   player2.detectCollisionThree(
  //     player2,
  //     player,
  //     player3,
  //     player2Reverse,
  //     player4,
  //     player5,
  //     player6,
  //     player7,
  //     player8,
  //     player9,
  //     4,
  //     30,
  //     player2
  //   );
  // }

  // Reverse AI and Controllable players

  // Player 1Reverse
  if (playerReverse.AIHero === true) {
    playerReverse.AIPlayer(playerReverse.AIHero, playerReverse, 2, 20, 2, 25, 2, 30);
  } else {
    playerReverse.heroMovementsReverse(
      moveLeftPL2,
      moveRightPL2,
      'ArrowLeft',
      'ArrowRight'
    );
    // Player Reverse is attacking 1st animation
    playerReverse.detectCollisionReverse(
      playerReverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      2,
      20
    );

    // Player Reverse is attacking Two animation
    playerReverse.detectCollisionTwoReverse(
      playerReverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      2,
      25
    );

    // Player Reverse is attacking Three animation
    playerReverse.detectCollisionThreeReverse(
      playerReverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      2,
      30
    );
  }

  // Player 2 (Samurai Kenji on Right side by default)
  if (player2.AIHero === true) {
    player2.AIPlayerKenji(player2.AIHero, player2, 3, 10, 3, 20, 4, 30);
  } else {
    player2.heroMovements(moveLeftPL2, moveRightPL2, 'ArrowLeft', 'ArrowRight');

    player2.detectCollision(
      player2,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      1,
      10,
      player2
    );
    player2.detectCollisionTwo(
      player2,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      1,
      20,
      player2
    );
    player2.detectCollisionThree(
      player2,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      4,
      30,
      player2
    );
  }

  // Player 3 Reverse

  if (player3Reverse.AIHero === true) {
    player3Reverse.AIPlayer(player3Reverse.AIHero, player3Reverse, 2, 20, 2, 25);
  } else {
    player3Reverse.heroMovementsReverse(
      moveLeftPL2,
      moveRightPL2,
      'ArrowLeft',
      'ArrowRight'
    );
    // Player 3Reverse is attacking 1st animation
    player3Reverse.detectCollisionReverse(
      player3Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      2,
      20
    );

    // Player 3Reverse is attacking Two animation
    player3Reverse.detectCollisionTwoReverse(
      player3Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      2,
      25
    );
  }

  // Player4 Reverse
  if (player4Reverse.AIHero === true) {
    player4Reverse.AIPlayer(player4Reverse.AIHero, player4Reverse, 1, 10, 1, 20, 1, 30);
  } else {
    player4Reverse.heroMovementsReverse(
      moveLeftPL2,
      moveRightPL2,
      'ArrowLeft',
      'ArrowRight'
    );
    // Player4Reverse is attacking 1st animation
    player4Reverse.detectCollisionReverse(
      player4Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      1,
      10
    );

    // Player4Reverse is attacking Two animation
    player4Reverse.detectCollisionTwoReverse(
      player4Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      1,
      20
    );

    // Player4Reverse is attacking Three animation
    player4Reverse.detectCollisionThreeReverse(
      player4Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      1,
      30
    );
  }

  // Player5 Reverse

  if (player5Reverse.AIHero === true) {
    player5Reverse.AIPlayer(player5Reverse.AIHero, player5Reverse, 6, 15, 4, 25, 2, 35);
  } else {
    player5Reverse.heroMovementsReverse(
      moveLeftPL2,
      moveRightPL2,
      'ArrowLeft',
      'ArrowRight'
    );
    // Player5Reverse is attacking 1st animation
    player5Reverse.detectCollisionReverse(
      player5Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      6,
      15
    );

    // Player5Reverse is attacking 2d animation
    player5Reverse.detectCollisionTwoReverse(
      player5Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      4,
      25
    );

    // Player5Reverse is attacking 3d animation
    player5Reverse.detectCollisionThreeReverse(
      player5Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      2,
      35
    );
  }

  // Player6 Reverse

  if (player6Reverse.AIHero === true) {
    player6Reverse.AIPlayer(player6Reverse.AIHero, player6Reverse, 4, 15, 3, 25);
  } else {
    player6Reverse.heroMovementsReverse(
      moveLeftPL2,
      moveRightPL2,
      'ArrowLeft',
      'ArrowRight'
    );
    // Player6Reverse is attacking 1st animation
    player6Reverse.detectCollisionReverse(
      player6Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      4,
      15
    );

    // Player6Reverse is attacking 2d animation
    player6Reverse.detectCollisionTwoReverse(
      player6Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      3,
      25
    );
  }

  // Player7 Reverse

  if (player7Reverse.AIHero === true) {
    player7Reverse.AIPlayer(player7Reverse.AIHero, player7Reverse, 3, 15, 5, 25, 4, 35);
  } else {
    player7Reverse.heroMovementsReverse(
      moveLeftPL2,
      moveRightPL2,
      'ArrowLeft',
      'ArrowRight'
    );
    // Player7Reverse is attacking 1st animation
    player7Reverse.detectCollisionReverse(
      player7Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      3,
      15
    );

    // Player7Reverse is attacking 2d animation
    player7Reverse.detectCollisionTwoReverse(
      player7Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      5,
      25
    );

    // Player7Reverse is attacking 3d animation
    player7Reverse.detectCollisionThreeReverse(
      player7Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      4,
      35
    );
  }

  // Player8 Reverse

  if (player8Reverse.AIHero === true) {
    player8Reverse.AIPlayer(player8Reverse.AIHero, player8Reverse, 3, 25, 2, 35);
  } else {
    player8Reverse.heroMovementsReverse(
      moveLeftPL2,
      moveRightPL2,
      'ArrowLeft',
      'ArrowRight'
    );
    // Player8Reverse is attacking 1st animation
    player8Reverse.detectCollisionReverse(
      player8Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      3,
      25
    );

    // Player8Reverse is attacking 2d animation
    player8Reverse.detectCollisionTwoReverse(
      player8Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      2,
      35
    );
  }

  // Player9 Reverse

  if (player9Reverse.AIHero === true) {
    player9Reverse.AIPlayer(player9Reverse.AIHero, player9Reverse, 3, 25);
  } else {
    player9Reverse.heroMovementsReverse(
      moveLeftPL2,
      moveRightPL2,
      'ArrowLeft',
      'ArrowRight'
    ); 
    // Player9Reverse is attacking 1st animation
    player9Reverse.detectCollisionReverse(
      player9Reverse,
      player,
      player2Reverse,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      3,
      25
    );
  }

  // end game based on healthbar of players
  document.querySelector('#displayText').style.display = 'flex';

  // Determine winner by less then zero health point
  DetermineWinnerByLessThenZeroHP();
}
animate();
// })


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
    (player6Reverse.start === false && menuMain.start === true) ||
    (player7.start === false && menuMain.start === true) ||
    (player7Reverse.start === false && menuMain.start === true) ||
    (player8.start === false && menuMain.start === true) ||
    (player8Reverse.start === false && menuMain.start === true) ||
    (player9.start === false && menuMain.start === true) ||
    (player9Reverse.start === false && menuMain.start === true)
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
    (player6Reverse.start === true && menuMain.start === false) ||
    (player7.start === true && menuMain.start === false) ||
    (player7Reverse.start === true && menuMain.start === false) ||
    (player8.start === true && menuMain.start === false) ||
    (player8Reverse.start === false && menuMain.start === true) ||
    (player9.start === true && menuMain.start === false) ||
    (player9Reverse.start === false && menuMain.start === true)
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
    if (!player7.dead) {
      player7.switchButtons(event);
    }
    if (!player8.dead) {
      player8.switchButtons(event);
    }
    if (!player9.dead) {
      player9.switchButtons(event);
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
    if (!player7Reverse.dead) {
      player7Reverse.switchButtonsRight(event);
    }
    if (!player8Reverse.dead) {
      player8Reverse.switchButtonsRight(event);
    }
    if (!player9Reverse.dead) {
      player9Reverse.switchButtonsRight(event);
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

  // player7(Fantasy warrior)
  player7.switchUpButtonsLeft(event);

  // player8(Axe warrior)
  player8.switchUpButtonsLeft(event);

  // player9(Vampire)
  player9.switchUpButtonsLeft(event);

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

  // player7Reverse(Fantasy warrior)
  player7Reverse.switchUpButtonsRight(event);

  // player8Reverse(Fantasy warrior)
  player8Reverse.switchUpButtonsRight(event);

  // player9Reverse(Vampire)
  player9Reverse.switchUpButtonsRight(event);

  // console.log(event.key);
});
