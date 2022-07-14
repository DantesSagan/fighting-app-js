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
    AIHero = false,
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
    this.AIHero = AIHero;
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
    this.drawSecond();
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

  heroMovements(keysLeft, keysRight, buttonLeft, buttonRight) {
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
      }
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
      this.attackBox.offset.x = 100;
    } else if (player3.start === true) {
      this.attackBox.offset.x = 35;
    } else if (player4.start === true) {
      this.attackBox.offset.x = 60;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFire() {
    this.isAttacking = true;
    this.switchSprite('attack1Fire');
    if (player5.start === true) {
      this.attackBox.offset.x = 50;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFireTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2Fire');
    if (player5.start === true) {
      this.attackBox.offset.x = 80;
      this.attackBox.width = 150;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFireThree() {
    this.isAttackingThree = true;
    this.switchSprite('attack3Fire');
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackDark() {
    this.isAttacking = true;
    this.switchSprite('attack1Dark');

    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackDarkTwo() {
    this.isAttacking = true;
    this.switchSprite('attack2Dark');
    if (player6.start === true) {
      this.attackBox.offset.x = 140;
      this.attackBox.width = 200;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
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
      this.attackBox.offset.x = 120;
    } else if (player3.start === true) {
      this.attackBox.offset.x = 45;
    } else if (player4.start === true) {
      this.attackBox.offset.x = 85;
    }

    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }

  attackThree() {
    this.isAttackingThree = true;
    this.switchSprite('attack3');
    if (player.start === true) {
      this.attackBox.offset.x = 60;
    } else if (player3.start === true) {
      this.attackBox.offset.x = 40;
    } else if (player4.start === true) {
      this.attackBox.offset.x = 60;
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
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
      player5.restart = false;
      player6.restart = false;
      player6Reverse.restart = false;
      // in this case we auto play damaged sound
      audio.Damaged.play();
      audio.Damaged.volume(volumeFight);
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
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
      player5.restart = false;
      player6.restart = false;
      player6Reverse.restart = false;
      audio.Damaged.play();
      audio.Damaged.volume(volumeFight);
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
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
      player5.restart = false;
      player6.restart = false;
      player6Reverse.restart = false;
      audio.Damaged.play();
      audio.Damaged.volume(volumeFight);
      // this.sound.volume = volumeFight;
      // this.sound.currentTime = 0;
      this.switchSprite('damaged');
    }
  }

  restartRound() {
    this.switchSprite('idle');
  }

  switchButtons(event) {
    switch (event.key) {
      case 'd' || 'в':
        keys.d.pressed = true;
        this.lastKey = 'd';
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
      case 'a' || 'ф':
        keys.a.pressed = true;
        this.lastKey = 'a';
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
      case 'w' || 'ц':
        if (keys.w.pressed && this.lastKey === 'w') {
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
            this.lastKey = 'w';
            this.sound.play();
            this.velocity.y = -15;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      case ' ':
        if (player5.start === true) {
          this.attackFire();
        } else if (player6.start === true) {
          this.attackDark();
        } else {
          this.attack();
        }
        // this.sound.play();
        break;
      case 'c' || 'с':
        if (player5.start === true) {
          this.attackFireTwo();
        } else if (player6.start === true) {
          this.attackDarkTwo();
        } else {
          this.attackTwo();
        }
        // this.sound.play();
        break;
      case 'r' || 'к':
        if (player5.start === true) {
          this.attackFireThree();
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
    switch (event.key) {
      case 'd':
        keys.d.pressed = false;
        // this.sprites[0].run.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        // audio.Walking.stop();
        break;
      case 'a':
        keys.a.pressed = false;
        // this.sprites[0].run.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        // audio.Walking.stop();
        break;
      case 'w':
        if ((keys.w.pressed = false && this.lastKey === 'w')) {
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
      case 'attack1Dark':
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
        audio.darkAttack.play();
        audio.darkAttack.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
        break;
      case 'attack1Fire':
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
        audio.Fire1.play();
        audio.Fire1.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
        break;
      case 'attack2':
        if (this.image !== this.sprites[0].attack2.image) {
          // if (this.sound !== this.sprites[0].attack2.sound) {
          //   this.sound = this.sprites[0].attack2.sound;
          //   this.sound.volume = volumeFight;
          // }

          this.image = this.sprites[0].attack2.image;
          this.framesMax = this.sprites[0].attack2.framesMax;
          this.framesCurrent = 0;
        }
        audio.Swing.play();
        audio.Swing.volume(volumeFight);
        break;
      case 'attack2Fire':
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
        audio.Fire1.play();
        audio.Fire1.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
        break;
      case 'attack2Dark':
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
        audio.darkAttack2.play();
        audio.darkAttack2.volume(volumeFight);
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
      case 'attack3Fire':
        if (this.image !== this.sprites[0].attack3.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          // Clear listener after first call.

          this.image = this.sprites[0].attack3.image;
          this.framesMax = this.sprites[0].attack3.framesMax;
          this.framesCurrent = 0;
        }
        // audio.Swing.once('load', () => {
        audio.Fire1.play();
        audio.Fire1.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
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
        audio.Damaged.play();
        audio.Damaged.volume(volumeFight);
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
    c.restore();
  }
  // updating method instantly
  updateReverse() {
    this.drawSecond();
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
      this.attackBox.offset.x = -210;
    } else if (player3Reverse.start === true) {
      this.attackBox.offset.x = -140;
    } else if (player4Reverse.start === true) {
      this.attackBox.offset.x = -180;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFire() {
    this.isAttacking = true;
    this.switchSprite('attack1Fire');
    if (player5Reverse.start === true) {
      this.attackBox.offset.x = -150;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFireTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2Fire');
    if (player5Reverse.start === true) {
      this.attackBox.offset.x = -160;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackFireThree() {
    this.isAttackingTwo = true;
    this.switchSprite('attack3Fire');
    if (player5Reverse.start === true) {
      this.attackBox.offset.x = -180;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackDark() {
    this.isAttacking = true;
    this.switchSprite('attack1Dark');
    if (player6Reverse.start === true) {
      this.attackBox.offset.x = -260;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackDarkTwo() {
    this.isAttackingTwo = true;
    this.switchSprite('attack2Dark');
    if (player6Reverse.start === true) {
      this.attackBox.offset.x = -280;
      this.attackBox.width = 200;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  // // attack method missing
  // attackMissing() {
  //   this.isAttacking = false;
  //   this.switchSprite('attack1');
  // }

  attackTwo() {
    this.switchSprite('attack2');
    this.isAttackingTwo = true;
    if (playerReverse.start === true) {
      this.attackBox.offset.x = -225;
    } else if (player3Reverse.start === true) {
      this.attackBox.offset.x = -150;
    } else if (player4Reverse.start === true) {
      this.attackBox.offset.x = -180;
    }
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }
  attackThree() {
    this.switchSprite('attack3');
    this.isAttackingThree = true;
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
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
      }

      // console.log('you attack player2');
    }
    // if player1 is missing by attacking box
    if (
      playerAttack.isAttacking &&
      playerAttack.countFramesMax === missingFrame
    ) {
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
      }
      // console.log('you attack player2');
    }
    // if player1 is missing by attacking box
    if (
      playerAttack.isAttackingTwo &&
      playerAttack.countFramesMax === missingFrame
    ) {
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
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
      player5.restart = false;
      player6.restart = false;
      player6Reverse.restart = false;
      audio.Damaged.play();
      audio.Damaged.volume(volumeFight);
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
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
      player5.restart = false;
      player6.restart = false;
      player6Reverse.restart = false;
      audio.Damaged.play();
      audio.Damaged.volume(volumeFight);
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
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
      player5.restart = false;
      player6.restart = false;
      player6Reverse.restart = false;
      audio.Damaged.play();
      audio.Damaged.volume(volumeFight);
      this.switchSprite('damaged');
    }
  }

  restartRound() {
    this.switchSprite('idle');
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
        } else {
          this.attackTwo();
        }
        // this.isAttacking = true;
        break;
      case '3':
        if (player5Reverse.start === true) {
          this.attackFireThree();
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
    switch (event.key) {
      case 'd':
        keys.d.pressed = true;
        this.lastKey = 'd';
        this.sound.play();
        break;
      case 'a':
        keys.a.pressed = true;
        this.lastKey = 'a';
        this.sound.play();
        break;
      case 'w':
        if (keys.w.pressed && this.lastKey === 'w') {
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
            this.lastKey = 'w';
            this.sound.play();
            this.velocity.y = -15;
          } else {
            // in this case 1st of all object will falling down by this expression
            // and then how it reach bottom of the canvas it's stops
            this.velocity.y += gravity;
          }
        }
        break;
      case ' ':
        this.attack();
        break;
      case 'c':
        this.attackTwo();
        if (player2Reverse.start === true) {
          player2Reverse.attackBox.offset.x = 85;
        }
        break;
      case 'r':
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
    switch (event.key) {
      case 'd':
        keys.d.pressed = false;
        // player.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        break;
      case 'a':
        keys.a.pressed = false;
        // player.soundStart = false;
        this.sound.pause();
        this.sound.currentTime = 0;
        break;
      case 'w':
        if ((keys.w.pressed = false && this.lastKey === 'w')) {
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
      case 'attack1Fire':
        if (this.image !== this.sprites[0].attack1.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          // Clear listener after first call.

          this.image = this.sprites[0].attack1.image;
          this.framesMax = this.sprites[0].attack1.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        // audio.Swing.once('load', () => {
        audio.Fire1.play();
        audio.Fire1.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
        break;
      case 'attack1Dark':
        if (this.image !== this.sprites[0].attack1.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          // Clear listener after first call.

          this.image = this.sprites[0].attack1.image;
          this.framesMax = this.sprites[0].attack1.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        // audio.Swing.once('load', () => {
        audio.darkAttack.play();
        audio.darkAttack.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
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
      case 'attack2Fire':
        if (this.image !== this.sprites[0].attack2.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          // Clear listener after first call.

          this.image = this.sprites[0].attack2.image;
          this.framesMax = this.sprites[0].attack2.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        // audio.Swing.once('load', () => {
        audio.Fire1.play();
        audio.Fire1.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
        break;
      case 'attack2Dark':
        if (this.image !== this.sprites[0].attack2.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          // Clear listener after first call.

          this.image = this.sprites[0].attack2.image;
          this.framesMax = this.sprites[0].attack2.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        // audio.Swing.once('load', () => {
        audio.darkAttack2.play();
        audio.darkAttack2.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
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
      case 'attack3Fire':
        if (this.image !== this.sprites[0].attack3.image) {
          // if (this.sound !== this.sprites[0].attack1.sound) {
          //   this.sound = this.sprites[0].attack1.sound;
          //   this.sound.volume = volumeFight;
          // }
          // Clear listener after first call.

          this.image = this.sprites[0].attack3.image;
          this.framesMax = this.sprites[0].attack3.framesMax;
          this.countFramesMax = this.framesMax - 1;
        }
        // audio.Swing.once('load', () => {
        audio.Fire1.play();
        audio.Fire1.volume(volumeFight);
        // });

        // Fires when the sound finishes playing.
        // audio.Swing.on('end', () => {
        console.log('Finished!');
        // });
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
