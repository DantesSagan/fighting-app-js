// class AI {
//     constructor(level) {

//         //private attribute: level of intelligence the player has
//         var levelOfIntelligence = level;

//         //private attribute: the game the player is playing
//         var game = {};

//         /*
//          * private recursive function that computes the minimax value of a game state
//          * @param state [State] : the state to calculate its minimax value
//          * @returns [Number]: the minimax value of the state
//          */
//         function minimaxValue(state) { }

//         /*
//          * private function: make the ai player take a blind move
//          * that is: choose the cell to place its symbol randomly
//          * @param turn [String]: the player to play, either X or O
//          */
//         function takeABlindMove(turn) { }

//         /*
//          * private function: make the ai player take a novice move,
//          * that is: mix between choosing the optimal and suboptimal minimax decisions
//          * @param turn [String]: the player to play, either X or O
//          */
//         function takeANoviceMove(turn) { }

//         /*
//          * private function: make the ai player take a master move,
//          * that is: choose the optimal minimax decision
//          * @param turn [String]: the player to play, either X or O
//          */
//         function takeAMasterMove(turn) { }


//         /*
//          * public method to specify the game the ai player will play
//          * @param _game [Game] : the game the ai will play
//          */
//         this.plays = function (_game) {
//             game = _game;
//         };

//         /*
//          * public function: notify the ai player that it's its turn
//          * @param turn [String]: the player to play, either X or O
//          */
//         this.notify = function (turn) {
//             switch (levelOfIntelligence) {
//                 //invoke the desired behavior based on the level chosen
//                 case "blind": takeABlindMove(turn); break;
//                 case "novice": takeANoviceMove(turn); break;
//                 case "master": takeAMasterMove(turn); break;
//             }
//         };
//     }
// }
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');
const numbersOfEnemies = 10;
const enemiesArray = [];

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

// enemy1 = {
//   x: 10,
//   y: 50,
//   width: 200,
//   height: 200,
// };

class Enemy {
  constructor(framesMax, scale) {
    this.image = new Image();
    this.image.src =
      '/animation-test-app/image/robotball/RobotFullAnimation.png';
    this.width = 50;
    this.height = 50;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.speed = Math.random() * 4 - 2;
    // this.image = image;
    // additional for animate image
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    // additional for animate image
    this.framesHold = 20;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    // this.offset = offset;
  }

  // wiggling animation
  draw() {
    // c.fillRect(this.x, this.y, this.width, this.height);
    // c.drawImage(this.image, this.x, this.y, this.width, this.height);
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      (this.x += Math.random() * 15 - 9.5),
      (this.y += Math.random() * 7 - 2.5),
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }
  animateFrames() {
    // Elapsed frames = истекающие кадры
    this.framesElapsed++;
    // this situation may be describe like this
    // if elapsed frames divide by frames hold (which means number of stopping frames)
    // and if this expression strict equal to 0 so let animation work
    // takes frames elapsed divided by frames hold and if the remainder(остаток) is zero
    // we call rest of code
    if (this.framesElapsed % this.flapSpeed === 0) {
      if (this.framesCurrent >= 12) {
        this.framesCurrent = 0;
      } else {
        this.framesCurrent++;
      }
    }
    // if (this.framesElapsed % this.framesHold === 0) {
    //   if (this.framesCurrent < this.framesMax - 1) {
    //     this.framesCurrent++;
    //   } else {
    //     this.framesCurrent = 0;
    //   }
    // }
  }
  update() {
    this.draw();
    this.animateFrames();
  }
}

for (let i = 0; i < numbersOfEnemies; i++) {
  enemiesArray.push(new Enemy(13, 0.1));
}

console.log(enemiesArray);

// const enemy1 = new Enemy(enemyImage);
// const enemy2 = new Enemy();

function animate() {
  c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach((enemy) => {
    enemy.update();
    // enemy.draw();
  });
  requestAnimationFrame(animate);
}
animate();
