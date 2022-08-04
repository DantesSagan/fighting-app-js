class Sprite {
  // we can't through velocity 1st and 2nd
  // We can wrapping this two args in curly brackets like an object
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    soundSrc,
    start = false,
    restart = false,
    imageStyle,
    imageID,
    playableHero = true,
  }) {
    // Assosiation with this position and pass argr as individual sprite we are creating
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.style.transform = imageStyle;
    this.image.src = imageSrc;
    this.image.id = imageID;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.countFramesMax = this.framesMax;
    // the lower this number (value)
    // then faster will be chaning frames of animation
    this.framesHold = 20;
    this.offset = offset;
    this.sound = new Audio();
    this.sound.src = soundSrc;
    this.sound.volume = volume;
    this.start = start;
    this.restart = restart;
    this.playableHero = playableHero;
    this.combatMusic;
  }
  // We are creating draw method
  draw() {
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );

    // need to create transform scale for skin to flip it horizontally
    // c.rotate(this.angle);
    // c.translate(
    //   -this.position.x - (this.img.width * this.scale) / 2,
    //   -this.position.y - (this.img.height * this.scale) / 2
    // );
  }

  drawAI() {
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
    // need to create transform scale for skin to flip it horizontally
    // c.rotate(this.angle);
    // c.translate(
    //   -this.position.x - (this.img.width * this.scale) / 2,
    //   -this.position.y - (this.img.height * this.scale) / 2
    // );
  }

  drawReverse() {
    c.drawImage(
      this.image,
      this.countFramesMax * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
    // need to create transform scale for skin to flip it horizontally
    // c.rotate(this.angle);
    // c.translate(
    //   -this.position.x - (this.img.width * this.scale) / 2,
    //   -this.position.y - (this.img.height * this.scale) / 2
    // );
  }
  // animate frame of boxes
  animateFrames() {
    // Elapsed frames = истекающие кадры
    this.framesElapsed++;
    // this situation may be describe like this
    // if elapsed frames divide by frames hold (which means number of stopping frames)
    // and if this expression strict equal to 0 so let animation work
    // takes frames elapsed divided by frames hold and if the remainder(остаток) is zero
    // we call rest of code
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  // updating method instantly
  update() {
    this.draw();
    this.animateFrames();
  }

  animateFramesReverse() {
    // Elapsed frames = истекающие кадры
    this.framesElapsed++;
    // this situation may be describe like this
    // if elapsed frames divide by frames hold (which means number of stopping frames)
    // and if this expression strict equal to 0 so let animation work
    // takes frames elapsed divided by frames hold and if the remainder(остаток) is zero
    // we call rest of code
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.countFramesMax > 0 || this.countFramesMax > this.framesCurrent) {
        this.countFramesMax--;
        this.framesCurrent++;
      } else {
        this.countFramesMax = this.framesMax - 1;
      }
    }
  }
}

class Fighter extends Sprite {
  // we can't through velocity 1st and 2nd
  // We can wrapping this two args in curly brackets like an object
  constructor({
    position,
    velocity,
    color = 'red',
    // offset,
    imageSrc,
    imageStyle,
    imageID,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites = [],
    attackBox = {
      offset: {},
      width: undefined,
      height: undefined,
    },
    attackBoxTwo = {
      offset: {},
      width: undefined,
      height: undefined,
    },
    attackBoxThree = {
      offset: {},
      width: undefined,
      height: undefined,
    },
    soundSrc,
    start,
    restart,
    pickedHero,
    AIHero,
    AIHeroRight,
    AIHeroLeft,
  }) {
    super({
      position,
      imageSrc,
      imageStyle,
      imageID,
      scale,
      framesMax,
      offset,
      soundSrc,
      start,
      restart,
    });

    // Assosiation with this position and pass argr as individual sprite we are creating
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.attackBoxTwo = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBoxTwo.offset,
      width: attackBoxTwo.width,
      height: attackBoxTwo.height,
    };
    this.attackBoxThree = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBoxThree.offset,
      width: attackBoxThree.width,
      height: attackBoxThree.height,
    };
    this.color = color;
    this.isAttacking;
    this.isAttackingTwo;
    this.isAttackingThree;
    this.health = 100;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    // the lower this number (value)
    // then faster will be chaning frames of animation
    this.framesHold = 10;
    this.sprites = sprites;
    this.dead = false;
    this.soundStart = true;
    this.pickedHero = pickedHero;
    this.AIHero = AIHero;
    this.AIHeroRight = AIHeroRight;
    this.AIHeroLeft = AIHeroLeft;
    // we looping through object sprites to switching between two images
    for (const sprite in this.sprites[0]) {
      // this is objects that we currenlty looping over
      let varSprites = sprites[0];
      // console.log(sprite);
      varSprites[sprite].image = new Image();
      varSprites[sprite].image.src = varSprites[sprite].imageSrc;
      varSprites[sprite].image.style.transform = varSprites[sprite].imageStyle;
      varSprites[sprite].image.id = varSprites[sprite].imageID;
      varSprites[sprite].sound = new Audio();
      varSprites[sprite].sound.src = varSprites[sprite].soundSrc;
      varSprites[sprite].soundStart;
    }
    // console.log(sprites[0].attack1);
  }

  // We are creating draw method
  drawSecond() {
    // player and this
    c.fillStyle = this.color;
    // c.save();
    // c.rotate(0.17);
    c.save();
    // c.setTransform(-1, 0, 0, 1, canvas.width, 0);
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    // draw your object
    // c.restore();
    // c.drawImage(0, 0);
    // c.rotate((-360 * Math.PI) / 180);
    // attack box for both

    // default position of attacking box
    // c.fillStyle = 'green';
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width - 50,
    //   this.attackBox.height - 25
    // );

    // state when someone is attacking and changing state's of attacking box
    // by pressing key of attack
    if (this.isAttacking) {
      c.fillStyle = 'green';
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
    if (this.isAttackingTwo) {
      c.fillStyle = 'red';
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
    if (this.isAttackingThree) {
      c.fillStyle = 'blue';
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
    c.restore();
  }
  // updating method instantly
  update() {
    // this.drawSecond();
    this.draw();
    // if player is not dead so animate their frames
    // if dead do not animate
    if (!this.dead) this.animateFrames();

    // attack boxes with offsets to make it more flexible by x and y axis
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;
    // // attack boxesTwo with offsets to make it more flexible by x and y axis
    // this.attackBoxTwo.position.x = this.position.x + this.attackBoxTwo.offset.x;
    // this.attackBoxTwo.position.y = this.position.y + this.attackBoxTwo.offset.y;
    // then greater speed then long falls
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    //  draw the attack box
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // );

    // In this case we are summarize position + height + velocity
    // which is greater or equal to height of canvas (bg of black canvas)
    // and then falling down to bottom of canvas height
    if (this.start === true) {
      if (
        this.position.y + this.height + this.velocity.y >=
        canvas.height - 115
      ) {
        this.velocity.y = 0;
        // if (!this.dead) {
        //   if (this.AIHero === true) {
        //     // player9.AIHero = !player9.AIHero;
        //     this.velocity.x = 6;
        //     this.position.x += this.velocity.x;
        //     if (this.velocity.x > 0) {
        //       this.switchSprite('run');
        //     }
        //   }
        // }
      } else {
        // in this case 1st of all object will falling down by this expression
        // and then how it reach bottom of the canvas it's stops
        this.velocity.y += gravity;
      }
    }

    // console.log(this.position.y);
  }

  // startUpdate(pl2, menu, shop) {
  //   if (this.start === true && pl2.start === true && menu.start === false) {
  //     // insert shop
  //     shop.update();
  //     // insert player
  //     this.update();
  //     // insert player2 or second player
  //     pl2.updateR();
  //   }
  // }

  AIPlayerKenji(AIHero, playerAI) {
    if (AIHero === true && !this.dead) {
      this.AIHeroRight = !this.AIHeroRight;
      this.AIHeroLeft = !this.AIHeroLeft;
      let positionAI = this.position.x - this.offset.x;
      let playableHeroRight =
        player.start === true
          ? player.position.x - player.offset.x - this.attackBox.width
          : player2Reverse.start === true
          ? player2Reverse.position.x -
            player2Reverse.offset.x -
            this.attackBox.width
          : player3.start === true
          ? player3.position.x - player3.offset.x - this.attackBox.width
          : player4.start === true
          ? player4.position.x - player4.offset.x - this.attackBox.width
          : player5.start === true
          ? player5.position.x - player5.offset.x - this.attackBox.width
          : player6.start === true
          ? player6.position.x - player6.offset.x - this.attackBox.width
          : player7.start === true
          ? player7.position.x - player7.offset.x - this.attackBox.width
          : player8.start === true
          ? player8.position.x - player8.offset.x - this.attackBox.width
          : player9.start === true
          ? player9.position.x - player9.offset.x - this.attackBox.width
          : null;
      if (positionAI < playableHeroRight && this.AIHeroRight === true) {
        this.AIHeroLeft = false;
        this.runRight();
        // if (player9Reverse.health === 0) {
        //   this.AIHeroRight = false;
        //   this.AIHeroLeftt = false;
        //   this.velocity.x = 0;
        //   this.switchSprite('idle');
        // }
      } else if (
        positionAI - 500 > playableHeroRight &&
        this.AIHeroLeft === true
      ) {
        this.runLeft();
        this.AIHeroRight = false;
        // if (player9Reverse.health === 0) {
        //   this.AIHeroRight = false;
        //   this.AIHeroLeftt = false;
        //   this.velocity.x = 0;
        //   this.switchSprite('idle');
        // }
      } else if (this.position.x - this.offset.x >= playableHeroRight) {
        this.attack() || this.attackTwo() || this.attackThree();

        if (this.isAttacking === true) {
          this.detectCollisionReverse(
            playerAI,
            playerReverse,
            player2,
            player3Reverse,
            player4Reverse,
            player5Reverse,
            player6Reverse,
            player7Reverse,
            player8Reverse,
            player9Reverse,
            hitOne,
            dmgOne,
            playerAI
          );
        } else if (this.isAttackingTwo === true) {
          this.detectCollisionTwoReverse(
            playerAI,
            playerReverse,
            player2,
            player3Reverse,
            player4Reverse,
            player5Reverse,
            player6Reverse,
            player7Reverse,
            player8Reverse,
            player9Reverse,
            hitTwo,
            dmgTwo,
            playerAI
          );
        } else if (this.isAttackingThree === true) {
          this.detectCollisionThreeReverse(
            playerAI,
            playerReverse,
            player2,
            player3Reverse,
            player4Reverse,
            player5Reverse,
            player6Reverse,
            player7Reverse,
            player8Reverse,
            player9Reverse,
            hitThree,
            dmgThree,
            playerAI
          );
        }
      } else if (this.position.x - this.offset.x <= playableHeroRight) {
        if (
          this.position.y + this.height + this.velocity.y >=
          canvas.height - 115
        ) {
          // if you want to holding "w" and jump infinite so use
          // keys.w.pressed = true;
          // if you want to jump once per pressing "w" so don't this line use
          // keys.w.pressed = true;
          // keys.w.pressed = true;
          this.sound.play();
          this.velocity.y = -15;
          this.switchSprite('jump');
        } else {
          // in this case 1st of all object will falling down by this expression
          // and then how it reach bottom of the canvas it's stops
          this.velocity.y += gravity;
          this.switchSprite('fall');
        }
      }
    } else if (AIHero === true && this.dead) {
      this.velocity.x = 0;
    }

    if (this.restart === true) {
      this.restartRound();
    }
    // console.log(this.AIHeroRight, this.AIHeroLeft);
  }

  AIPlayer(AIHero, playerAI, hitOne, dmgOne, hitTwo, dmgTwo, hitThree, dmgThree) {
    if (AIHero === true && !this.dead) {
      this.AIHeroRight = !this.AIHeroRight;
      this.AIHeroLeft = !this.AIHeroLeft;
      let positionAI = this.position.x - this.offset.x;
      let playableHeroRight =
        playerReverse.start === true
          ? playerReverse.position.x -
            playerReverse.offset.x -
            this.attackBox.width
          : player2.start === true
          ? player2.position.x - player2.offset.x - this.attackBox.width
          : player3Reverse.start === true
          ? player3Reverse.position.x -
            player3Reverse.offset.x -
            this.attackBox.width
          : player4Reverse.start === true
          ? player4Reverse.position.x -
            player4Reverse.offset.x -
            this.attackBox.width
          : player5Reverse.start === true
          ? player5Reverse.position.x -
            player5Reverse.offset.x -
            this.attackBox.width
          : player6Reverse.start === true
          ? player6Reverse.position.x -
            player6Reverse.offset.x -
            this.attackBox.width
          : player7Reverse.start === true
          ? player7Reverse.position.x -
            player7Reverse.offset.x -
            this.attackBox.width
          : player8Reverse.start === true
          ? player8Reverse.position.x -
            player8Reverse.offset.x -
            this.attackBox.width
          : player9Reverse.start === true
          ? player9Reverse.position.x -
            player9Reverse.offset.x -
            this.attackBox.width
          : null;
      if (positionAI < playableHeroRight && this.AIHeroRight === true) {
        this.AIHeroLeft = false;
        this.runRight();
        // if (player9Reverse.health === 0) {
        //   this.AIHeroRight = false;
        //   this.AIHeroLeftt = false;
        //   this.velocity.x = 0;
        //   this.switchSprite('idle');
        // }
      } else if (
        positionAI - 500 > playableHeroRight &&
        this.AIHeroLeft === true
      ) {
        this.AIHeroRight = false;
        this.runLeft();
        // if (player9Reverse.health === 0) {
        //   this.AIHeroRight = false;
        //   this.AIHeroLeftt = false;
        //   this.velocity.x = 0;
        //   this.switchSprite('idle');
        // }
      } else if (positionAI >= playableHeroRight) {
        if (player5.start === true) {
          this.attackFire() || this.attackFireTwo();
        } else if (player6.start === true) {
          this.attackDark() || this.attackDarkTwo();
        } else if (player7.start === true) {
          this.attackFantasy() || this.attackFantasyTwo();
        } else if (player8.start === true) {
          this.attackAxe() || this.attackAxeTwo();
        } else if (player9.start === true) {
          this.attackVampire();
        } else {
          this.attack() || this.attackTwo() || this.attackThree();
        }

     if (this.isAttacking === true) {
       this.detectCollision(
         playerAI,
         playerReverse,
         player2,
         player3Reverse,
         player4Reverse,
         player5Reverse,
         player6Reverse,
         player7Reverse,
         player8Reverse,
         player9Reverse,
         hitOne,
         dmgOne,
       );
     } else if (this.isAttackingTwo === true) {
       this.detectCollisionTwo(
         playerAI,
         playerReverse,
         player2,
         player3Reverse,
         player4Reverse,
         player5Reverse,
         player6Reverse,
         player7Reverse,
         player8Reverse,
         player9Reverse,
         hitTwo,
         dmgTwo,
       );
     } else if (this.isAttackingThree === true) {
       this.detectCollisionThree(
         playerAI,
         playerReverse,
         player2,
         player3Reverse,
         player4Reverse,
         player5Reverse,
         player6Reverse,
         player7Reverse,
         player8Reverse,
         player9Reverse,
         hitThree,
         dmgThree,
       );
     }
      } else if (this.position.x - this.offset.x <= playableHeroRight) {
        if (
          this.position.y + this.height + this.velocity.y >=
          canvas.height - 115
        ) {
          // if you want to holding "w" and jump infinite so use
          // keys.w.pressed = true;
          // if you want to jump once per pressing "w" so don't this line use
          // keys.w.pressed = true;
          // keys.w.pressed = true;
          this.sound.play();
          this.velocity.y = -15;
          this.switchSprite('jump');
        } else {
          // in this case 1st of all object will falling down by this expression
          // and then how it reach bottom of the canvas it's stops
          this.velocity.y += gravity;
          this.switchSprite('fall');
        }
      }
    } else if (AIHero === true && this.dead === false) {
      this.velocity.x = 0;
      this.switchSprite('death')
    }
    if (this.restart === true) {
      this.restartRound();
    }
    // console.log(this.AIHeroRight, this.AIHeroLeft);
  }
  heroMovements(keysLeft, keysRight, buttonLeft, buttonRight) {
    if (!this.dead) {
      // player movements
      // console.log(language);
      this.velocity.x = 0;

      // this is default idle staying position without running animation
      // this is running animation of player 1 whe you press "a" key
      if (keysLeft && this.lastKey === buttonLeft) {
        // player.soundStart = false;
        this.runLeft();

        // this is running animation of player 1 whe you press "d" key
      } else if (keysRight && this.lastKey === buttonRight) {
        // player.soundStart = false;
        this.runRight();
      } else {
        this.switchSprite('idle');
      }
      if (this.velocity.y < 0) {
        this.switchSprite('jump');
      } else if (this.velocity.y > 0) {
        this.switchSprite('fall');
        // this is fixing bug with flickering sprites when you character reach
        // ground he flickering between fall animation of character and idle animation
        // and this piece of code solve this problem
        // before character reach ground he automatically switch to idle from fall
        // and this value equal to 441 pixel
        // is that means he switch to idle animation before reach ground without flickering
        if (
          this.position.y + this.height + this.velocity.y >=
          canvas.height - 155
        ) {
          this.switchSprite('idle');
        }
        // setTimeout(() => {
        // },100);
      }
    } else if (this.dead) {
      this.velocity.x = 0;
    }

    if (this.restart === true) {
      this.restartRound();
    }
  }

  // running to the left method with activating animation and sound
  runLeft() {
    // audio.Walking.once('load', () => {
    //   audio.Walking.play();
    //   audio.Walking.volume(volumeMove);
    // });

    // // Fires when the sound finishes playing.
    // audio.Walking.on('end', () => {
    //   console.log('Finished!');
    // });
    this.soundStart = true;
    this.velocity.x = -6;
    this.switchSprite('run');
  }
  // running to the right method with activating animation and sound
  runRight() {
    // audio.Walking.once('load', () => {
    //   audio.Walking.play();
    //   audio.Walking.volume(volumeMove);
    // });

    // // Fires when the sound finishes playing.
    // audio.Walking.on('end', () => {
    //   console.log('Finished!');
    // });
    this.soundStart = true;
    this.velocity.x = 6;
    this.switchSprite('run');
  }
  // attack method
  attack() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player.start === true) {
      player.attackBox.offset.x = 100;
    } else if (player3.start === true) {
      player3.attackBox.offset.x = 35;
    } else if (player4.start === true) {
      player4.attackBox.offset.x = 60;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFire() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player5.start === true) {
      player5.attackBox.offset.x = 50;
    }
    audio.Fire1.play();
    audio.Fire1.volume(volumeFight);
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFireTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player5.start === true) {
      player5.attackBox.offset.x = 80;
      player5.attackBox.width = 150;
    }
    audio.Fire1.play();
    audio.Fire1.volume(volumeFight);
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFireThree() {
    this.isAttackingThree = true;
    this.switchSprite('attack3');
    audio.Fire1.play();
    audio.Fire1.volume(volumeFight);
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackDark() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    audio.darkAttack.play();
    audio.darkAttack.volume(volumeFight);
  }
  attackDarkTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player6.start === true) {
      player6.attackBox.offset.x = 140;
      player6.attackBox.width = 200;
      audio.darkAttack2.play();
      audio.darkAttack2.volume(volumeFight);
    }
  }
  attackFantasy() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player7.start === true) {
      player7.attackBox.offset.x = 50;
      player7.attackBox.width = 130;
      audio.FantasyAttack.play();
      audio.FantasyAttack.volume(volumeFight);
    }
  }
  attackFantasyTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player7.start === true) {
      player7.attackBox.offset.x = 60;
      player7.attackBox.width = 140;
      audio.FantasyAttack2.play();
      audio.FantasyAttack2.volume(volumeFight);
    }
  }
  attackFantasyThree() {
    this.isAttackingThree = true;
    this.switchSprite('attack3');
    if (player7.start === true) {
      player7.attackBox.offset.x = 80;
      player7.attackBox.width = 150;
      audio.FantasyAttack3.play();
      audio.FantasyAttack3.volume(volumeFight);
    }
  }
  attackAxe() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player8.start === true) {
      player8.attackBox.offset.x = 220;
      player8.attackBox.width = 150;
      audio.AxeWarriorSwing.play();
      audio.AxeWarriorSwing.volume(volumeFight);
    }
  }
  attackAxeTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player8.start === true) {
      player8.attackBox.offset.x = 110;
      player8.attackBox.width = 150;
      audio.AxeWarriorSwing.play();
      audio.AxeWarriorSwing.volume(volumeFight);
    }
  }

  attackVampire() {
    this.isAttacking = true;
    this.switchSprite('attack1');
  }
  // // attack method missing
  // attackMissing() {
  //   this.isAttacking = false;
  //   this.switchSprite('attack1');
  // }

  attackTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player.start === true) {
      player.attackBox.offset.x = 120;
    } else if (player3.start === true) {
      player3.attackBox.offset.x = 45;
    } else if (player4.start === true) {
      player4.attackBox.offset.x = 85;
    }

    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }

  attackThree() {
    this.isAttackingThree = true;
    this.switchSprite('attack3');
    if (player.start === true) {
      player.attackBox.offset.x = 60;
    } else if (player3.start === true) {
      player3.attackBox.offset.x = 40;
    } else if (player4.start === true) {
      player4.attackBox.offset.x = 60;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  detectCollision(
    playerAttack,
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    missingFrame,
    dmg,
    playerCompare
  ) {
    if (
      rectangularCollision({
        rectangle1: playerAttack,
        rectangle2:
          player1.start === true
            ? player1
            : player2.start === true
            ? player2
            : player3.start === true
            ? player3
            : player4.start === true
            ? player4
            : player5.start === true
            ? player5
            : player6.start === true
            ? player6
            : player7.start === true
            ? player7
            : player8.start === true
            ? player8
            : player9.start === true
            ? player9
            : player1,
      }) &&
      playerAttack.isAttacking &&
      playerAttack.framesCurrent === missingFrame
    ) {
      if (player1.start === true) {
        player1.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player2.start === true) {
        player2.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player3.start === true) {
        player3.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player4.start === true) {
        player4.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player5.start === true) {
        player5.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player6.start === true) {
        player6.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player7.start === true) {
        player7.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player8.start === true) {
        player8.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player9.start === true) {
        player9.damaged(dmg);
        playerAttack.isAttacking = false;
      }
      // document.querySelector('#player2Health').style.width = player2.health + '%';
      // if we are using gsap we get to say of id and property with what need to do
      // and also give a smooth animation of decreasing healthbar
      if (playerAttack === playerCompare) {
        if (player1.start === true) {
          gsap.to('#playerHealth', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#playerHealth', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#playerHealth', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#playerHealth', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#playerHealth', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#playerHealth', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#playerHealth', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#playerHealth', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#playerHealth', {
            width: player9.health + '%',
          });
        }
      } else {
        if (player1.start === true) {
          gsap.to('#player2Health', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#player2Health', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#player2Health', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#player2Health', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#player2Health', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#player2Health', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#player2Health', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#player2Health', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#player2Health', {
            width: player9.health + '%',
          });
        }
      }
      // if player2Reverse (Kenji on Left side) strict equal to comparedPlayer so

      // console.log('you attack player2');
    }
    // if player1 is missing by attacking box
    if (
      playerAttack.isAttacking &&
      playerAttack.framesCurrent === missingFrame
    ) {
      playerAttack.isAttacking = false;
    }
  }
  detectCollisionTwo(
    playerAttack,
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    missingFrame,
    dmg,
    playerCompare
  ) {
    if (
      rectangularCollision({
        rectangle1: playerAttack,
        rectangle2:
          player1.start === true
            ? player1
            : player2.start === true
            ? player2
            : player3.start === true
            ? player3
            : player4.start === true
            ? player4
            : player5.start === true
            ? player5
            : player6.start === true
            ? player6
            : player7.start === true
            ? player7
            : player8.start === true
            ? player8
            : player9.start === true
            ? player9
            : player1,
      }) &&
      playerAttack.isAttackingTwo &&
      playerAttack.framesCurrent === missingFrame
    ) {
      if (player1.start === true) {
        player1.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player2.start === true) {
        player2.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player3.start === true) {
        player3.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player4.start === true) {
        player4.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player5.start === true) {
        player5.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player6.start === true) {
        player6.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player7.start === true) {
        player7.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player8.start === true) {
        player8.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player9.start === true) {
        player9.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      }
      // document.querySelector('#player2Health').style.width = player2.health + '%';
      // if we are using gsap we get to say of id and property with what need to do
      // and also give a smooth animation of decreasing healthbar
      if (playerAttack === playerCompare) {
        if (player1.start === true) {
          gsap.to('#playerHealth', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#playerHealth', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#playerHealth', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#playerHealth', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#playerHealth', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#playerHealth', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#playerHealth', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#playerHealth', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#playerHealth', {
            width: player9.health + '%',
          });
        }
      } else {
        if (player1.start === true) {
          gsap.to('#player2Health', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#player2Health', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#player2Health', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#player2Health', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#player2Health', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#player2Health', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#player2Health', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#player2Health', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#player2Health', {
            width: player9.health + '%',
          });
        }
      }
      // console.log('you attack player2');
    }
    // if player1 is missing by attacking box
    if (
      playerAttack.isAttackingTwo &&
      playerAttack.framesCurrent === missingFrame
    ) {
      playerAttack.isAttackingTwo = false;
    }
  }
  detectCollisionThree(
    playerAttack,
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    missingFrame,
    dmg,
    playerCompare
  ) {
    if (
      rectangularCollision({
        rectangle1: playerAttack,
        rectangle2:
          player1.start === true
            ? player1
            : player2.start === true
            ? player2
            : player3.start === true
            ? player3
            : player4.start === true
            ? player4
            : player5.start === true
            ? player5
            : player6.start === true
            ? player6
            : player7.start === true
            ? player7
            : player8.start === true
            ? player8
            : player9.start === true
            ? player9
            : player1,
      }) &&
      playerAttack.isAttackingThree &&
      playerAttack.framesCurrent === missingFrame
    ) {
      if (player1.start === true) {
        player1.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player2.start === true) {
        player2.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player3.start === true) {
        player3.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player4.start === true) {
        player4.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player5.start === true) {
        player5.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player6.start === true) {
        player6.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player7.start === true) {
        player7.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player8.start === true) {
        player8.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player9.start === true) {
        player9.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      }
      // document.querySelector('#player2Health').style.width = player2.health + '%';
      // if we are using gsap we get to say of id and property with what need to do
      // and also give a smooth animation of decreasing healthbar
      if (playerAttack === playerCompare) {
        if (player1.start === true) {
          gsap.to('#playerHealth', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#playerHealth', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#playerHealth', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#playerHealth', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#playerHealth', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#playerHealth', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#playerHealth', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#playerHealth', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#playerHealth', {
            width: player9.health + '%',
          });
        }
      } else {
        if (player1.start === true) {
          gsap.to('#player2Health', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#player2Health', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#player2Health', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#player2Health', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#player2Health', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#player2Health', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#player2Health', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#player2Health', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#player2Health', {
            width: player9.health + '%',
          });
        }
      }
      // console.log('you attack player2');
    }
    // if player1 is missing by attacking box
    if (
      playerAttack.isAttackingThree &&
      playerAttack.framesCurrent === missingFrame
    ) {
      playerAttack.isAttackingThree = false;
    }
  }

  damaged(dealingDmg) {
    this.health -= dealingDmg;
    if (this.health <= 0) {
      this.switchSprite('death');
      // setTimeout(() => {
      //   this.switchSprite('deathTwo');
      // }, 3000);
    } else {
      // in this case we auto play damaged sound
      if (player8Reverse.start === true) {
        audio.AxeWarriorAttack.play();
        audio.AxeWarriorAttack.volume(volumeFight);
      } else if (player9Reverse.start === true) {
        audio.ClawAttack1.play();
        audio.ClawAttack1.volume(volumeFight);
      } else {
        audio.Damaged.play();
        audio.Damaged.volume(volumeFight);
      }

      // this.sound.volume = volumeFight;
      // this.sound.currentTime = 0;
      // and also change sprite to damaged sprite
      this.switchSprite('damaged');
    }
  }
  damagedTwo(dealingDmgTwo) {
    this.health -= dealingDmgTwo;
    if (this.health <= 0) {
      this.switchSprite('death');
      // setTimeout(() => {
      //   this.switchSprite('deathTwo');
      //   console.log('deathTwo');
      // }, 3000);
    } else {
      if (player8Reverse.start === true) {
        audio.AxeWarriorAttack.play();
        audio.AxeWarriorAttack.volume(volumeFight);
      } else {
        audio.Damaged.play();
        audio.Damaged.volume(volumeFight);
      }

      // this.sound.volume = volumeFight;
      // this.sound.currentTime = 0;
      this.switchSprite('damaged');
    }
  }
  damagedThree(dealingDmgThree) {
    this.health -= dealingDmgThree;
    if (this.health <= 0) {
      this.switchSprite('death');
      // setTimeout(() => {
      //   this.switchSprite('deathTwo');
      //   console.log('deathTwo');
      // }, 3000);
    } else {
      audio.Damaged.play();
      audio.Damaged.volume(volumeFight);
      // this.sound.volume = volumeFight;
      // this.sound.currentTime = 0;
      this.switchSprite('damaged');
    }
  }

  restartRound() {
    this.switchSprite('idle');
    this.dead = false;
  }

  switchButtons(event) {
    switch (event.code) {
      case 'KeyD':
        keys.KeyD.pressed = true;
        this.lastKey = 'KeyD';
        this.sound.play();
        // Clear listener after first call.
        // audio.Walking.once('load', () => {
        // audio.Walking.play();
        // audio.Walking.volume(volumeMove);
        // });

        // Fires when the sound finishes playing.
        // audio.Walking.on('end', () => {
        // console.log('Finished!');
        // });
        break;
      case 'KeyA':
        keys.KeyA.pressed = true;
        this.lastKey = 'KeyA';
        this.sound.play();
        // Clear listener after first call.
        // audio.Walking.once('load', () => {
        //   audio.Walking.play();
        //   audio.Walking.volume(volumeMove);
        // });

        // // Fires when the sound finishes playing.
        // audio.Walking.on('end', () => {
        //   console.log('Finished!');
        // });
        break;
      case 'KeyW':
        if (keys.KeyW.pressed && this.lastKey === 'KeyW') {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // event.stopPropagation();
            this.velocity.y = 0;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        } else {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // if you want to holding "w" and jump infinite so use
            // keys.w.pressed = true;
            // if you want to jump once per pressing "w" so don't this line use
            // keys.w.pressed = true;
            // keys.w.pressed = true;
            this.lastKey = 'KeyW';
            this.sound.play();
            this.velocity.y = -15;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      case 'Space':
        if (player5.start === true) {
          this.attackFire();
        } else if (player6.start === true) {
          this.attackDark();
        } else if (player7.start === true) {
          this.attackFantasy();
        } else if (player8.start === true) {
          this.attackAxe();
        } else if (player9.start === true) {
          this.attackVampire();
        } else {
          this.attack();
        }
        // this.sound.play();
        break;
      case 'KeyC':
        if (player5.start === true) {
          this.attackFireTwo();
        } else if (player6.start === true) {
          this.attackDarkTwo();
        } else if (player7.start === true) {
          this.attackFantasyTwo();
        } else if (player8.start === true) {
          this.attackAxeTwo();
        } else {
          this.attackTwo();
        }
        // this.sound.play();
        break;
      case 'KeyR':
        if (player5.start === true) {
          this.attackFireThree();
        } else if (player7.start === true) {
          this.attackFantasyThree();
        } else {
          this.attackThree();
        }
        // this.sound.play();
        break;
      default:
        console.log('Something goes wrong');
        break;
    }
  }
  switchUpButtonsLeft(event) {
    switch (event.code) {
      case 'KeyD':
        keys.KeyD.pressed = false;
        // this.sprites[0].run.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        // audio.Walking.stop();
        break;
      case 'KeyA':
        keys.KeyA.pressed = false;
        // this.sprites[0].run.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        // audio.Walking.stop();
        break;
      case 'KeyW':
        if ((keys.KeyW.pressed = false && this.lastKey === 'KeyW')) {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // event.stopPropagation();
            this.soundStart = false;
            this.sound.pause();
            this.sound.currentTime = 0;
            this.velocity.y = 0;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      default:
        console.log('Something goes wrong');
        break;
    }
  }
  switchButtonsKenji(event) {
    switch (event.key) {
      // this switch statement
      case 'ArrowRight':
        keys.ArrowRight.pressed = true;
        this.lastKey = 'ArrowRight';
        this.sound.play();
        break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true;
        this.lastKey = 'ArrowLeft';
        this.sound.play();
        break;
      case 'ArrowUp':
        if (keys.ArrowUp.pressed && this.lastKey === 'ArrowUp') {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // event.stopPropagation();
            this.velocity.y = 0;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        } else {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // if you want to holding ArrowUp and jump infinite so use
            // keys.ArrowUp.pressed = true;
            // if you want to jump once per pressing Arrow up so don't this line use
            // keys.ArrowUp.pressed = true;
            // keys.ArrowUp.pressed = true;
            this.lastKey = 'ArrowUp';
            this.sound.play();
            this.velocity.y = -15;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      case '1':
        this.attack();
        if (player2.start === true) {
          player2.attackBox.offset.x = -150;
        }
        // this.isAttacking = true;
        break;
      case '2':
        this.attackTwo();
        if (player2.start === true) {
          player2.attackBox.offset.x = -190;
        }
        // this.isAttacking = true;
        break;
      case '3':
        this.attackThree();
        if (player2.start === true) {
          player2.attackBox.offset.x = -150;
        }
        // this.isAttacking = true;
        break;
      default:
        console.log('Something goes wrong');
        break;
    }
  }
  switchUpButtonsKenji(event) {
    // player2
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = false;
        // this.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = false;
        // this.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        break;
      case 'ArrowUp':
        if ((keys.ArrowUp.pressed = false && this.lastKey === 'ArrowUp')) {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // event.stopPropagation();
            this.sound.pause();
            this.velocity.y = 0;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      default:
        console.log('Something goes wrong');
        break;
    }
  }
  // switch sprites for better logic statements
  switchSprite(sprite) {
    // overriding all other animations with the attack && damaged && death animations

    if (
      this.image === this.sprites[0].attack1.image && // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.framesCurrent < this.sprites[0].attack1.framesMax - 1
    )
      return;
    if (
      this.image === this.sprites[0].attack2.image && // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.framesCurrent < this.sprites[0].attack2.framesMax - 1
    )
      return;
    if (
      this.image === this.sprites[0].attack3.image && // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.framesCurrent < this.sprites[0].attack3.framesMax - 1
    )
      return;
    if (
      this.image === this.sprites[0].damaged.image &&
      // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.framesCurrent < this.sprites[0].damaged.framesMax - 1
    )
      return;
    // dead animation
    if (this.dead === false) {
      if (this.image === this.sprites[0].death.image) {
        if (this.framesCurrent === this.sprites[0].death.framesMax - 1) {
          this.dead = true;
        }
        return;
      }
    }
    // second animation of death overlooping
    if (this.image === this.sprites[0].deathTwo.image) {
      if (this.framesCurrent === this.sprites[0].deathTwo.framesMax) {
        this.dead = true;
      }
      return;
    }
    // if restart and restart animation to idle
    if (this.restart === true) {
      this.dead = false;
    }

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites[0].idle.image) {
          this.image = this.sprites[0].idle.image;
          this.framesMax = this.sprites[0].idle.framesMax;
          // to solve problems with flashing frames need to set current frames to 0 and animation starts in the beginning
          this.framesCurrent = 0;
        }
        break;
      case 'run':
        if (this.image !== this.sprites[0].run.image) {
          if (this.sound !== this.sprites[0].run.sound) {
            this.sound = this.sprites[0].run.sound;
            this.sound.volume = volumeMove;
          }
          this.image = this.sprites[0].run.image;
          this.framesMax = this.sprites[0].run.framesMax;
          this.framesCurrent = 0;
        }

        // // // Clear listener after first call.
        // audio.Walking.once('load', () => {
        //   audio.Walking.play();
        //   audio.Walking.volume(volumeMove);
        // });

        // // Fires when the sound finishes playing.
        // audio.Walking.on('end', () => {
        //   console.log('Finished!');
        // });

        break;
      case 'jump':
        if (this.image !== this.sprites[0].jump.image) {
          if (this.sound !== this.sprites[0].jump.sound) {
            this.sound = this.sprites[0].jump.sound;
            this.sound.volume = volumeMove;
            // this.sound.play();
          }
          this.image = this.sprites[0].jump.image;
          this.framesMax = this.sprites[0].jump.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'fall':
        if (this.image !== this.sprites[0].fall.image) {
          this.image = this.sprites[0].fall.image;
          this.framesMax = this.sprites[0].fall.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'attack1':
        if (this.image !== this.sprites[0].attack1.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          // Clear listener after first call.

          this.image = this.sprites[0].attack1.image;
          this.framesMax = this.sprites[0].attack1.framesMax;
          this.framesCurrent = 0;
        }
        // audio.Swing.once('load', () => {
        audio.Swing.play();
        audio.Swing.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
        break;
      case 'attack2':
        if (this.image !== this.sprites[0].attack2.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          // Clear listener after first call.

          this.image = this.sprites[0].attack2.image;
          this.framesMax = this.sprites[0].attack2.framesMax;
          this.framesCurrent = 0;
        }
        // audio.Swing.once('load', () => {
        audio.Swing.play();
        audio.Swing.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
        break;
      case 'attack3':
        if (this.image !== this.sprites[0].attack3.image) {
          // if (this.sound !== this.sprites[0].attack3.sound) {
          //   this.sound = this.sprites[0].attack3.sound;
          //   this.sound.volume = volumeFight;
          // }

          this.image = this.sprites[0].attack3.image;
          this.framesMax = this.sprites[0].attack3.framesMax;
          this.framesCurrent = 0;
        }
        audio.Swing.play();
        audio.Swing.volume(volumeFight);
        break;
      case 'damaged':
        if (this.image !== this.sprites[0].damaged.image) {
          if (this.sound !== this.sprites[0].damaged.sound) {
            this.sound = this.sprites[0].damaged.sound;
            this.sound.volume = volumeFight;
            // this.sound.play();
          }

          this.image = this.sprites[0].damaged.image;
          this.framesMax = this.sprites[0].damaged.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'death':
        if (this.image !== this.sprites[0].death.image) {
          if (this.sound !== this.sprites[0].death.sound) {
            this.sound = this.sprites[0].death.sound;
            this.sound.currentTime = 0;
            this.sound.volume = volumeDeath;
            this.sound.play();
          }
          this.image = this.sprites[0].death.image;
          this.framesMax = this.sprites[0].death.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'deathTwo':
        if (this.image !== this.sprites[0].deathTwo.image) {
          this.image = this.sprites[0].deathTwo.image;
          this.framesMax = this.sprites[0].deathTwo.framesMax;
          this.framesCurrent = 0;
        }
        break;
    }
  }
}
class FighterReverse extends Sprite {
  // we can't through velocity 1st and 2nd
  // We can wrapping this two args in curly brackets like an object
  constructor({
    position,
    velocity,
    color = 'red',
    // offset,
    imageSrc,
    imageStyle,
    imageID,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites = [],
    attackBox = {
      offset: {},
      width: undefined,
      height: undefined,
    },
    soundSrc,
    start,
    restart,
    pickedHero,
    AIHero,
    AIHeroRight,
    AIHeroLeft,
  }) {
    super({
      position,
      imageSrc,
      imageStyle,
      imageID,
      scale,
      framesMax,
      offset,
      soundSrc,
      start,
      restart,
    });

    // Assosiation with this position and pass argr as individual sprite we are creating
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.color = color;
    this.isAttacking;
    this.isAttackingTwo;
    this.isAttackingThree;
    this.health = 100;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    // the lower this number (value)
    // then faster will be chaning frames of animation
    this.framesHold = 10;
    this.sprites = sprites;
    this.dead = false;
    this.soundStart = true;
    this.pickedHero = pickedHero;
    this.AIHero = AIHero;
    this.AIHeroRight = AIHeroRight;
    this.AIHeroLeft = AIHeroLeft;
    // we looping through object sprites to switching between two images
    for (const sprite in this.sprites[0]) {
      // this is objects that we currenlty looping over
      let varSprites = sprites[0];
      // console.log(sprite);
      varSprites[sprite].image = new Image();
      varSprites[sprite].image.src = varSprites[sprite].imageSrc;
      varSprites[sprite].image.style.transform = varSprites[sprite].imageStyle;
      varSprites[sprite].image.id = varSprites[sprite].imageID;
      varSprites[sprite].sound = new Audio();
      varSprites[sprite].sound.src = varSprites[sprite].soundSrc;
    }
    // console.log(sprites[0].attack1);
  }

  // We are creating draw method
  drawSecond() {
    // player and this
    c.fillStyle = this.color;
    // c.save();
    // c.rotate(0.17);
    c.save();
    // c.setTransform(-1, 0, 0, 1, canvas.width, 0);
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    // draw your object
    // c.restore();
    // c.drawImage(0, 0);
    // c.rotate((-360 * Math.PI) / 180);
    // attack box for both

    // default position of attacking box
    // c.fillStyle = 'green';
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width - 50,
    //   this.attackBox.height - 25
    // );

    // state when someone is attacking and changing state's of attacking box
    // by pressing key of attack
    if (this.isAttacking) {
      c.fillStyle = 'green';
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
    if (this.isAttackingTwo) {
      c.fillStyle = 'red';
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
    if (this.isAttackingThree) {
      c.fillStyle = 'blue';
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
    c.restore();
  }
  // updating method instantly
  updateReverse() {
    // this.drawSecond();
    this.drawReverse();
    // if player is not dead so animate their frames
    // if dead do not animate
    if (!this.dead) this.animateFramesReverse();

    // attack boxes with offsets to make it more flexible by x and y axis
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;
    // then greater speed then long falls
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    //  draw the attack box
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // );

    // In this case we are summarize position + height + velocity
    // which is greater or equal to height of canvas (bg of black canvas)
    // and then falling down to bottom of canvas height
    if (this.start === true) {
      if (
        this.position.y + this.height + this.velocity.y >=
        canvas.height - 115
      ) {
        this.velocity.y = 0;
      } else {
        // in this case 1st of all object will falling down by this expression
        // and then how it reach bottom of the canvas it's stops
        this.velocity.y += gravity;
      }
    }

    // console.log(this.position.y);
  }
  // running to the left method with activating animation and sound
  runLeft() {
    this.soundStart = true;
    this.velocity.x = -6;
    this.switchSprite('run');
  }
  // running to the right method with activating animation and sound
  runRight() {
    this.soundStart = true;
    this.velocity.x = 6;
    this.switchSprite('run');
  }
  // attack method
  attack() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (playerReverse.start === true) {
      playerReverse.attackBox.offset.x = -210;
    } else if (player3Reverse.start === true) {
      player3Reverse.attackBox.offset.x = -140;
    } else if (player4Reverse.start === true) {
      player4Reverse.attackBox.offset.x = -180;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFire() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player5Reverse.start === true) {
      player5Reverse.attackBox.offset.x = -150;
      audio.Fire1.play();
      audio.Fire1.volume(volumeFight);
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFireTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player5Reverse.start === true) {
      player5Reverse.attackBox.offset.x = -160;
      audio.Fire1.play();
      audio.Fire1.volume(volumeFight);
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFireThree() {
    this.isAttackingTwo = true;
    this.switchSprite('attack3');
    if (player5Reverse.start === true) {
      player5Reverse.attackBox.offset.x = -180;
      audio.Fire1.play();
      audio.Fire1.volume(volumeFight);
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackDark() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player6Reverse.start === true) {
      player6Reverse.attackBox.offset.x = -260;
      audio.darkAttack.play();
      audio.darkAttack.volume(volumeFight);
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackDarkTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player6Reverse.start === true) {
      player6Reverse.attackBox.offset.x = -280;
      player6Reverse.attackBox.width = 200;
      audio.darkAttack2.play();
      audio.darkAttack2.volume(volumeFight);
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFantasy() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player7Reverse.start === true) {
      player7Reverse.attackBox.offset.x = -110;
      player7Reverse.attackBox.width = 130;
      audio.FantasyAttack.play();
      audio.FantasyAttack.volume(volumeFight);
    }
  }
  attackFantasyTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player7Reverse.start === true) {
      player7Reverse.attackBox.offset.x = -120;
      player7Reverse.attackBox.width = 140;
      audio.FantasyAttack2.play();
      audio.FantasyAttack2.volume(volumeFight);
    }
  }
  attackFantasyThree() {
    this.isAttackingThree = true;
    this.switchSprite('attack3');
    if (player7Reverse.start === true) {
      player7Reverse.attackBox.offset.x = -150;
      player7Reverse.attackBox.width = 150;
      audio.FantasyAttack3.play();
      audio.FantasyAttack3.volume(volumeFight);
    }
  }
  attackAxe() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player8Reverse.start === true) {
      player8Reverse.attackBox.offset.x = -280;
      player8Reverse.attackBox.width = 150;
      player8Reverse.offset.x = 320;
      audio.AxeWarriorSwing.play();
      audio.AxeWarriorSwing.volume(volumeFight);
    }
  }
  attackAxeTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2');
    if (player8Reverse.start === true) {
      player8Reverse.attackBox.offset.x = -205;
      player8Reverse.attackBox.width = 150;
      player8Reverse.offset.x = 320;
      audio.AxeWarriorSwing.play();
      audio.AxeWarriorSwing.volume(volumeFight);
    }
  }
  attackVampire() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    if (player9Reverse.start === true) {
      player9Reverse.attackBox.offset.x = -150;
      player9Reverse.attackBox.width = 150;
      player9Reverse.offset.x = 150;
    }
  }
  attackTwo() {
    this.switchSprite('attack2');
    this.isAttackingTwo = true;
    if (playerReverse.start === true) {
      playerReverse.attackBox.offset.x = -225;
    } else if (player3Reverse.start === true) {
      player3Reverse.attackBox.offset.x = -150;
    } else if (player4Reverse.start === true) {
      player4Reverse.attackBox.offset.x = -180;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackThree() {
    this.switchSprite('attack3');
    this.isAttackingThree = true;
    audio.Swing.play();
    audio.Swing.volume(volumeFight);
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  AIPlayerKenji(
    AIHero,
    playerAI,
    hitOne,
    dmgOne,
    hitTwo,
    dmgTwo,
    hitThree,
    dmgThree
  ) {
    if (AIHero === true && !this.dead) {
      this.AIHeroRight = !this.AIHeroRight;
      this.AIHeroLeft = !this.AIHeroLeft;
      let positionAI = this.position.x - this.offset.x;
      let playableHeroRight =
        playerReverse.start === true
          ? playerReverse.position.x -
            playerReverse.offset.x -
            this.attackBox.width
          : player2.start === true
          ? player2.position.x - player2.offset.x - this.attackBox.width
          : player3Reverse.start === true
          ? player3Reverse.position.x -
            player3Reverse.offset.x -
            this.attackBox.width
          : player4Reverse.start === true
          ? player4Reverse.position.x -
            player4Reverse.offset.x -
            this.attackBox.width
          : player5Reverse.start === true
          ? player5Reverse.position.x -
            player5Reverse.offset.x -
            this.attackBox.width
          : player6Reverse.start === true
          ? player6Reverse.position.x -
            player6Reverse.offset.x -
            this.attackBox.width
          : player7Reverse.start === true
          ? player7Reverse.position.x -
            player7Reverse.offset.x -
            this.attackBox.width
          : player8Reverse.start === true
          ? player8Reverse.position.x -
            player8Reverse.offset.x -
            this.attackBox.width
          : player9Reverse.start === true
          ? player9Reverse.position.x -
            player9Reverse.offset.x -
            this.attackBox.width
          : null;
      if (positionAI < playableHeroRight && this.AIHeroRight === true) {
        this.AIHeroLeft = false;
        this.runRight();
        // if (player9Reverse.health === 0) {
        //   this.AIHeroRight = false;
        //   this.AIHeroLeftt = false;
        //   this.velocity.x = 0;
        //   this.switchSprite('idle');
        // }
      } else if (
        positionAI - 500 > playableHeroRight &&
        this.AIHeroLeft === true
      ) {
        this.runLeft();
        this.AIHeroRight = false;
        // if (player9Reverse.health === 0) {
        //   this.AIHeroRight = false;
        //   this.AIHeroLeftt = false;
        //   this.velocity.x = 0;
        //   this.switchSprite('idle');
        // }
      } else if (this.position.x - this.offset.x >= playableHeroRight) {
        this.attack() || this.attackTwo() || this.attackThree();

        if (this.isAttacking === true) {
          this.detectCollisionReverse(
            playerAI,
            playerReverse,
            player2,
            player3Reverse,
            player4Reverse,
            player5Reverse,
            player6Reverse,
            player7Reverse,
            player8Reverse,
            player9Reverse,
            hitOne,
            dmgOne,
            playerAI
          );
        } else if (this.isAttackingTwo === true) {
          this.detectCollisionTwoReverse(
            playerAI,
            playerReverse,
            player2,
            player3Reverse,
            player4Reverse,
            player5Reverse,
            player6Reverse,
            player7Reverse,
            player8Reverse,
            player9Reverse,
            hitTwo,
            dmgTwo,
            playerAI
          );
        } else if (this.isAttackingThree === true) {
          this.detectCollisionThreeReverse(
            playerAI,
            playerReverse,
            player2,
            player3Reverse,
            player4Reverse,
            player5Reverse,
            player6Reverse,
            player7Reverse,
            player8Reverse,
            player9Reverse,
            hitThree,
            dmgThree,
            playerAI
          );
        }
      } else if (this.position.x - this.offset.x <= playableHeroRight) {
        if (
          this.position.y + this.height + this.velocity.y >=
          canvas.height - 115
        ) {
          // if you want to holding "w" and jump infinite so use
          // keys.w.pressed = true;
          // if you want to jump once per pressing "w" so don't this line use
          // keys.w.pressed = true;
          // keys.w.pressed = true;
          this.sound.play();
          this.velocity.y = -15;
          this.switchSprite('jump');
        } else {
          // in this case 1st of all object will falling down by this expression
          // and then how it reach bottom of the canvas it's stops
          this.velocity.y += gravity;
          this.switchSprite('fall');
        }
      }
    } else if (AIHero === true && this.dead) {
      this.velocity.x = 0;
    }
    if (this.restart === true) {
      this.restartRound();
    }
    // console.log(this.AIHeroRight, this.AIHeroLeft);
  }
  AIPlayer(AIHero, playerAI, hitOne, dmgOne, hitTwo, dmgTwo, hitThree, dmgThree) {
    if (AIHero === true && !this.dead) {
      this.AIHeroRight = !this.AIHeroRight;
      this.AIHeroLeft = !this.AIHeroLeft;
      let positionAI = this.position.x - this.offset.x;
      let playableHeroRight =
        player.start === true
          ? player.position.x - player.offset.x - this.attackBox.width
          : player2Reverse.start === true
          ? player2Reverse.position.x -
            player2Reverse.offset.x -
            this.attackBox.width
          : player3.start === true
          ? player3.position.x - player3.offset.x - this.attackBox.width
          : player4.start === true
          ? player4.position.x - player4.offset.x - this.attackBox.width
          : player5.start === true
          ? player5.position.x - player5.offset.x - this.attackBox.width
          : player6.start === true
          ? player6.position.x - player6.offset.x - this.attackBox.width
          : player7.start === true
          ? player7.position.x - player7.offset.x - this.attackBox.width
          : player8.start === true
          ? player8.position.x - player8.offset.x - this.attackBox.width
          : player9.start === true
          ? player9.position.x - player9.offset.x - this.attackBox.width
          : null;
      if (positionAI < playableHeroRight && this.AIHeroRight === true) {
        this.AIHeroLeft = false;
        this.runRight();
        // if (player9Reverse.health === 0) {
        //   this.AIHeroRight = false;
        //   this.AIHeroLeftt = false;
        //   this.velocity.x = 0;
        //   this.switchSprite('idle');
        // }
      } else if (
        positionAI - 500 > playableHeroRight &&
        this.AIHeroLeft === true
      ) {
        this.runLeft();
        this.AIHeroRight = false;
        // if (player9Reverse.health === 0) {
        //   this.AIHeroRight = false;
        //   this.AIHeroLeftt = false;
        //   this.velocity.x = 0;
        //   this.switchSprite('idle');
        // }
      } else if (this.position.x - this.offset.x >= playableHeroRight) {
        if (player5Reverse.start === true) {
          this.attackFire();
        } else if (player6Reverse.start === true) {
          this.attackDark();
        } else if (player7Reverse.start === true) {
          this.attackFantasy();
        } else if (player8Reverse.start === true) {
          this.attackAxe();
        } else if (player9Reverse.start === true) {
          this.attackVampire();
        } 
          this.attack() || this.attackTwo() || this.attackThree();
        
        if(this.isAttacking === true) {
          // Player Reverse is attacking 1st animation
          this.detectCollisionReverse(
            playerAI,
            player,
            player3,
            player2Reverse,
            player4,
            player5,
            player6,
            player7,
            player8,
            player9,
            hitOne,
            dmgOne
          );
        } else if(this.isAttackingTwo === true) {
          // Player Reverse is attacking Two animation
          this.detectCollisionTwoReverse(
            playerAI,
            player,
            player3,
            player2Reverse,
            player4,
            player5,
            player6,
            player7,
            player8,
            player9,
            hitTwo,
            dmgTwo
          );
        } else if(this.isAttackingThree === true) {
           // Player Reverse is attacking Three animation
        this.detectCollisionThreeReverse(
          playerAI,
          player,
          player3,
          player2Reverse,
          player4,
          player5,
          player6,
          player7,
          player8,
          player9,
          hitThree,
          dmgThree
        );
        }


       
      } else if (this.position.x - this.offset.x <= playableHeroRight) {
        if (
          this.position.y + this.height + this.velocity.y >=
          canvas.height - 115
        ) {
          // if you want to holding "w" and jump infinite so use
          // keys.w.pressed = true;
          // if you want to jump once per pressing "w" so don't this line use
          // keys.w.pressed = true;
          // keys.w.pressed = true;
          this.sound.play();
          this.velocity.y = -15;
          this.switchSprite('jump');
        } else {
          // in this case 1st of all object will falling down by this expression
          // and then how it reach bottom of the canvas it's stops
          this.velocity.y += gravity;
          this.switchSprite('fall');
        }
      }
    } else if (AIHero === true && this.dead) {
      this.velocity.x = 0;
    }

    if (this.restart === true) {
      this.restartRound();
    }
    // console.log(this.AIHeroRight, this.AIHeroLeft);
  }
  heroMovementsReverse(keysLeft, keysRight, buttonLeft, buttonRight) {
    if (!this.dead) {
      // player movements
      this.velocity.x = 0;
      // this is default idle staying position without running animation
      // this is running animation of player 1 whe you press "a" key
      if (keysLeft && this.lastKey === buttonLeft) {
        // player.soundStart = false;
        this.runLeft();

        // this is running animation of player 1 whe you press "d" key
      } else if (keysRight && this.lastKey === buttonRight) {
        // player.soundStart = false;
        this.runRight();
      } else {
        this.switchSprite('idle');
      }
      if (this.velocity.y < 0) {
        this.switchSprite('jump');
      } else if (this.velocity.y > 0) {
        this.switchSprite('fall');
        if (
          this.position.y + this.height + this.velocity.y >=
          canvas.height - 155
        ) {
          this.switchSprite('idle');
        }
      }
    }

    if (this.restart === true) {
      this.restartRound();
    }
  }

  detectCollisionReverse(
    playerAttack,
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    missingFrame,
    dmg,
    playerCompare
  ) {
    if (
      rectangularCollision({
        rectangle1: playerAttack,
        rectangle2:
          player1.start === true
            ? player1
            : player2.start === true
            ? player2
            : player3.start === true
            ? player3
            : player4.start === true
            ? player4
            : player5.start === true
            ? player5
            : player6.start === true
            ? player6
            : player7.start === true
            ? player7
            : player8.start === true
            ? player8
            : player9.start === true
            ? player9
            : player1,
      }) &&
      playerAttack.isAttacking &&
      playerAttack.countFramesMax === missingFrame
    ) {
      if (player1.start === true) {
        player1.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player2.start === true) {
        player2.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player3.start === true) {
        player3.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player4.start === true) {
        player4.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player5.start === true) {
        player5.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player6.start === true) {
        player6.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player7.start === true) {
        player7.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player8.start === true) {
        player8.damaged(dmg);
        playerAttack.isAttacking = false;
      } else if (player9.start === true) {
        player9.damaged(dmg);
        playerAttack.isAttacking = false;
      }

      // document.querySelector('#player2Health').style.width = player2.health + '%';
      // if we are using gsap we get to say of id and property with what need to do
      // and also give a smooth animation of decreasing healthbar
      // if player2Reverse (Kenji on Left side) strict equal to comparedPlayer so
      if (playerAttack === playerCompare) {
        if (player1.start === true) {
          gsap.to('#player2Health', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#player2Health', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#player2Health', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#player2Health', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#player2Health', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#player2Health', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#player2Health', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#player2Health', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#player2Health', {
            width: player9.health + '%',
          });
        }
      } else {
        if (player1.start === true) {
          gsap.to('#playerHealth', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#playerHealth', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#playerHealth', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#playerHealth', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#playerHealth', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#playerHealth', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#playerHealth', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#playerHealth', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#playerHealth', {
            width: player9.health + '%',
          });
        }
      }

      // console.log('you attack player2');
    }
    // if player1 is missing by attacking box
    if (
      playerAttack.isAttacking &&
      playerAttack.countFramesMax === missingFrame
    ) {
      // player8Reverse.offset.x = 100;
      playerAttack.isAttacking = false;
    }
  }

  detectCollisionTwoReverse(
    playerAttack,
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    missingFrame,
    dmg,
    playerCompare
  ) {
    if (
      rectangularCollision({
        rectangle1: playerAttack,
        rectangle2:
          player1.start === true
            ? player1
            : player2.start === true
            ? player2
            : player3.start === true
            ? player3
            : player4.start === true
            ? player4
            : player5.start === true
            ? player5
            : player6.start === true
            ? player6
            : player7.start === true
            ? player7
            : player8.start === true
            ? player8
            : player9.start === true
            ? player9
            : player1,
      }) &&
      playerAttack.isAttackingTwo &&
      playerAttack.countFramesMax === missingFrame
    ) {
      if (player1.start === true) {
        player1.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player2.start === true) {
        player2.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player3.start === true) {
        player3.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player4.start === true) {
        player4.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player5.start === true) {
        player5.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player6.start === true) {
        player6.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player7.start === true) {
        player7.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player8.start === true) {
        player8.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      } else if (player9.start === true) {
        player9.damagedTwo(dmg);
        playerAttack.isAttackingTwo = false;
      }

      // document.querySelector('#player2Health').style.width = player2.health + '%';
      // if we are using gsap we get to say of id and property with what need to do
      // and also give a smooth animation of decreasing healthbar
      if (playerAttack === playerCompare) {
        if (player1.start === true) {
          gsap.to('#player2Health', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#player2Health', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#player2Health', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#player2Health', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#player2Health', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#player2Health', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#player2Health', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#player2Health', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#player2Health', {
            width: player9.health + '%',
          });
        }
      } else {
        if (player1.start === true) {
          gsap.to('#playerHealth', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#playerHealth', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#playerHealth', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#playerHealth', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#playerHealth', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#playerHealth', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#playerHealth', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#playerHealth', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#playerHealth', {
            width: player9.health + '%',
          });
        }
      }
      // console.log('you attack player2');
    }
    // if player1 is missing by attacking box
    if (
      playerAttack.isAttackingTwo &&
      playerAttack.countFramesMax === missingFrame
    ) {
      // player8Reverse.offset.x = 100;
      playerAttack.isAttackingTwo = false;
    }
  }
  detectCollisionThreeReverse(
    playerAttack,
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    missingFrame,
    dmg,
    playerCompare
  ) {
    if (
      rectangularCollision({
        rectangle1: playerAttack,
        rectangle2:
          player1.start === true
            ? player1
            : player2.start === true
            ? player2
            : player3.start === true
            ? player3
            : player4.start === true
            ? player4
            : player5.start === true
            ? player5
            : player6.start === true
            ? player6
            : player7.start === true
            ? player7
            : player8.start === true
            ? player8
            : player9.start === true
            ? player9
            : player1,
      }) &&
      playerAttack.isAttackingThree &&
      playerAttack.countFramesMax === missingFrame
    ) {
      if (player1.start === true) {
        player1.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player2.start === true) {
        player2.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player3.start === true) {
        player3.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player4.start === true) {
        player4.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player5.start === true) {
        player5.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player6.start === true) {
        player6.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player7.start === true) {
        player7.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player8.start === true) {
        player8.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      } else if (player9.start === true) {
        player9.damagedThree(dmg);
        playerAttack.isAttackingThree = false;
      }

      // document.querySelector('#player2Health').style.width = player2.health + '%';
      // if we are using gsap we get to say of id and property with what need to do
      // and also give a smooth animation of decreasing healthbar
      if (playerAttack === playerCompare) {
        if (player1.start === true) {
          gsap.to('#player2Health', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#player2Health', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#player2Health', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#player2Health', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#player2Health', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#player2Health', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#player2Health', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#player2Health', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#player2Health', {
            width: player9.health + '%',
          });
        }
      } else {
        if (player1.start === true) {
          gsap.to('#playerHealth', {
            width: player1.health + '%',
          });
        }
        if (player2.start === true) {
          gsap.to('#playerHealth', {
            width: player2.health + '%',
          });
        }
        if (player3.start === true) {
          gsap.to('#playerHealth', {
            width: player3.health + '%',
          });
        }
        if (player4.start === true) {
          gsap.to('#playerHealth', {
            width: player4.health + '%',
          });
        }
        if (player5.start === true) {
          gsap.to('#playerHealth', {
            width: player5.health + '%',
          });
        }
        if (player6.start === true) {
          gsap.to('#playerHealth', {
            width: player6.health + '%',
          });
        }
        if (player7.start === true) {
          gsap.to('#playerHealth', {
            width: player7.health + '%',
          });
        }
        if (player8.start === true) {
          gsap.to('#playerHealth', {
            width: player8.health + '%',
          });
        }
        if (player9.start === true) {
          gsap.to('#playerHealth', {
            width: player9.health + '%',
          });
        }
      }
      // console.log('you attack player2');
    }
    // if player1 is missing by attacking box
    if (
      playerAttack.isAttackingThree &&
      playerAttack.countFramesMax === missingFrame
    ) {
      playerAttack.isAttackingThree = false;
    }
  }

  damaged(dealingDmg) {
    this.health -= dealingDmg;
    if (this.health <= 0) {
      this.switchSprite('death');
      // setTimeout(() => {
      //   this.switchSprite('deathTwo');
      // }, 3000);
    } else {
      // in this case we auto play damaged sound
      // this.sound.volume = volumeFight;
      // this.sound.currentTime = 0;
      // this.sound.play();
      if (player8.start === true) {
        audio.AxeWarriorAttack.play();
        audio.AxeWarriorAttack.volume(volumeFight);
        player8Reverse.offset.x = 100;
      } else if (player9.start === true) {
        audio.ClawAttack1.play();
        audio.ClawAttack1.volume(volumeFight);
        player9Reverse.offset.x = 80;
      } else {
        audio.Damaged.play();
        audio.Damaged.volume(volumeFight);
      }

      // and also change sprite to damaged sprite
      this.switchSprite('damaged');
    }
  }
  damagedTwo(dealingDmgTwo) {
    this.health -= dealingDmgTwo;
    if (this.health <= 0) {
      this.switchSprite('death');
      // setTimeout(() => {
      //   this.switchSprite('deathTwo');
      //   console.log('deathTwo');
      // }, 3000);
    } else {
      if (player8.start === true) {
        audio.AxeWarriorAttack.play();
        audio.AxeWarriorAttack.volume(volumeFight);
        player8Reverse.offset.x = 100;
      } else {
        audio.Damaged.play();
        audio.Damaged.volume(volumeFight);
      }

      this.switchSprite('damaged');
    }
  }
  damagedThree(dealingDmgThree) {
    this.health -= dealingDmgThree;
    if (this.health <= 0) {
      this.switchSprite('death');
      // setTimeout(() => {
      //   this.switchSprite('deathTwo');
      //   console.log('deathTwo');
      // }, 3000);
    } else {
      audio.Damaged.play();
      audio.Damaged.volume(volumeFight);
      this.switchSprite('damaged');
    }
  }

  restartRound() {
    this.switchSprite('idle');
    this.dead = false;
  }
  switchUpButtonsRight(event) {
    // player2
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = false;
        this.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = false;
        this.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        break;
      case 'ArrowUp':
        if ((keys.ArrowUp.pressed = false && this.lastKey === 'ArrowUp')) {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // event.stopPropagation();
            this.sound.pause();
            this.velocity.y = 0;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      // case 'ArrowDown':
      //   audio.Fire1.stop();
      //   break;
      default:
        console.log('Something goes wrong');
        break;
    }
  }
  switchButtonsRight(event) {
    switch (event.key) {
      // this switch statement
      case 'ArrowRight':
        keys.ArrowRight.pressed = true;
        this.lastKey = 'ArrowRight';
        this.sound.play();
        break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true;
        this.lastKey = 'ArrowLeft';
        this.sound.play();
        break;
      case 'ArrowUp':
        if (keys.ArrowUp.pressed && this.lastKey === 'ArrowUp') {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // event.stopPropagation();
            this.velocity.y = 0;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        } else {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // if you want to holding ArrowUp and jump infinite so use
            // keys.ArrowUp.pressed = true;
            // if you want to jump once per pressing Arrow up so don't this line use
            // keys.ArrowUp.pressed = true;
            // keys.ArrowUp.pressed = true;
            this.lastKey = 'ArrowUp';
            this.sound.play();
            this.velocity.y = -15;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      case '1':
        if (player5Reverse.start === true) {
          this.attackFire();
        } else if (player6Reverse.start === true) {
          this.attackDark();
        } else if (player7Reverse.start === true) {
          this.attackFantasy();
        } else if (player8Reverse.start === true) {
          this.attackAxe();
        } else if (player9Reverse.start === true) {
          this.attackVampire();
        } else {
          this.attack();
        }
        // this.isAttacking = true;
        break;
      case '2':
        if (player5Reverse.start === true) {
          this.attackFireTwo();
        } else if (player6Reverse.start === true) {
          this.attackDarkTwo();
        } else if (player7Reverse.start === true) {
          this.attackFantasyTwo();
        } else if (player8Reverse.start === true) {
          this.attackAxeTwo();
        } else {
          this.attackTwo();
        }
        // this.isAttacking = true;
        break;
      case '3':
        if (player5Reverse.start === true) {
          this.attackFireThree();
        } else if (player7Reverse.start === true) {
          this.attackFantasyThree();
        } else {
          this.attackThree();
        }
        // this.isAttacking = true;
        break;
      default:
        console.log('Something goes wrong');
        break;
    }
  }
  switchButtons(event) {
    switch (event.code) {
      case 'KeyD':
        keys.KeyD.pressed = true;
        this.lastKey = 'KeyD';
        this.sound.play();
        break;
      case 'KeyA':
        keys.KeyA.pressed = true;
        this.lastKey = 'KeyA';
        this.sound.play();
        break;
      case 'KeyW':
        if (keys.KeyW.pressed && this.lastKey === 'KeyW') {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // event.stopPropagation();
            this.velocity.y = 0;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        } else {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // if you want to holding "w" and jump infinite so use
            // keys.w.pressed = true;
            // if you want to jump once per pressing "w" so don't this line use
            // keys.w.pressed = true;
            // keys.w.pressed = true;
            this.lastKey = 'KeyW';
            this.sound.play();
            this.velocity.y = -15;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      case 'Space':
        this.attack();
        break;
      case 'KeyC':
        this.attackTwo();
        if (player2Reverse.start === true) {
          player2Reverse.attackBox.offset.x = 85;
        }
        break;
      case 'KeyR':
        this.attackThree();
        if (player2Reverse.start === true) {
          player2Reverse.attackBox.offset.x = 60;
        }
        break;
      default:
        console.log('Something goes wrong');
        break;
    }
  }
  switchUpButtonsLeft(event) {
    switch (event.code) {
      case 'KeyD':
        keys.KeyD.pressed = false;
        // player.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        break;
      case 'KeyA':
        keys.KeyA.pressed = false;
        // player.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        break;
      case 'KeyW':
        if ((keys.KeyW.pressed = false && this.lastKey === 'KeyW')) {
          if (
            this.position.y + this.height + this.velocity.y >=
            canvas.height - 115
          ) {
            // event.stopPropagation();
            this.sound.pause();
            this.velocity.y = 0;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      default:
        console.log('Something goes wrong');
        break;
    }
  }
  // switch sprites for better logic statements
  switchSprite(sprite) {
    // overriding all other animations with the attack && damaged && death animations
    if (
      this.image === this.sprites[0].attack1.image && // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.countFramesMax
    )
      return;
    if (
      this.image === this.sprites[0].attack2.image && // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.countFramesMax
    )
      return;
    if (
      this.image === this.sprites[0].attack3.image && // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.countFramesMax
    )
      return;
    if (
      this.image === this.sprites[0].damaged.image &&
      // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.countFramesMax
    )
      return;
    // dead animation
    if (this.dead === false) {
      if (this.image === this.sprites[0].death.image) {
        if (this.framesCurrent === this.sprites[0].death.framesMax - 1) {
          this.dead = true;
        }
        return;
      }
    }
    // second animation of death overlooping
    if (this.image === this.sprites[0].deathTwo.image) {
      if (this.framesCurrent === this.sprites[0].deathTwo.framesMax) {
        this.dead = true;
      }
      return;
    }
    // if restart and restart animation to idle
    if (this.restart === true) {
      this.dead = false;
    }

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites[0].idle.image) {
          this.image = this.sprites[0].idle.image;
          this.framesMax = this.sprites[0].idle.framesMax;
          // to solve problems with flashing frames need to set current frames to 0 and animation starts in the beginning
          this.countFramesMax = this.framesMax - 1;
          player8Reverse.offset.x = 100;
          player9Reverse.offset.x = 80;
        }
        break;
      case 'run':
        if (this.image !== this.sprites[0].run.image) {
          if (this.sound !== this.sprites[0].run.sound) {
            this.sound = this.sprites[0].run.sound;
            this.sound.volume = volumeMove;
          }
          this.image = this.sprites[0].run.image;
          this.framesMax = this.sprites[0].run.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        player8Reverse.offset.x = 100;
        player9Reverse.offset.x = 80;
        break;
      case 'jump':
        if (this.image !== this.sprites[0].jump.image) {
          if (this.sound !== this.sprites[0].jump.sound) {
            this.sound = this.sprites[0].jump.sound;
            this.sound.volume = volumeMove;
            this.sound.play();
          }
          this.image = this.sprites[0].jump.image;
          this.framesMax = this.sprites[0].jump.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        break;
      case 'fall':
        if (this.image !== this.sprites[0].fall.image) {
          this.image = this.sprites[0].fall.image;
          this.framesMax = this.sprites[0].fall.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        break;
      case 'attack1':
        if (this.image !== this.sprites[0].attack1.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          this.image = this.sprites[0].attack1.image;
          this.framesMax = this.sprites[0].attack1.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        audio.Swing.play();
        audio.Swing.volume(volumeFight);
        break;
      case 'attack2':
        if (this.image !== this.sprites[0].attack2.image) {
          this.image = this.sprites[0].attack2.image;
          this.framesMax = this.sprites[0].attack2.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        audio.Swing.play();
        audio.Swing.volume(volumeFight);
        break;
      case 'attack3':
        if (this.image !== this.sprites[0].attack3.image) {
          this.image = this.sprites[0].attack3.image;
          this.framesMax = this.sprites[0].attack3.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        audio.Swing.play();
        audio.Swing.volume(volumeFight);
        break;
      case 'damaged':
        if (this.image !== this.sprites[0].damaged.image) {
          // if (this.sound !== this.sprites[0].damaged.sound) {
          //   this.sound = this.sprites[0].damaged.sound;
          //   this.sound.volume = volumeFight;
          //   this.sound.currentTime = 0;
          //   this.sound.play();
          // }

          this.image = this.sprites[0].damaged.image;
          this.framesMax = this.sprites[0].damaged.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        break;
      case 'death':
        if (this.image !== this.sprites[0].death.image) {
          if (this.sound !== this.sprites[0].death.sound) {
            this.sound = this.sprites[0].death.sound;
            this.sound.currentTime = 0;
            this.sound.volume = volumeDeath;
            this.sound.play();
          }
          this.image = this.sprites[0].death.image;
          this.framesMax = this.sprites[0].death.framesMax;
          this.countFramesMax = this.framesMax - 1;
          this.framesCurrent = 0;
        }
        break;
      case 'deathTwo':
        if (this.image !== this.sprites[0].deathTwo.image) {
          this.image = this.sprites[0].deathTwo.image;
          this.framesMax = this.sprites[0].deathTwo.framesMax;
          this.framesCurrent = this.framesMax - 1;
        }
        break;
    }
  }
}
