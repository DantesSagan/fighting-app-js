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
  }) {
    // Assosiation with this position and pass argr as individual sprite we are creating
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    // the lower this number (value)
    // then faster will be chaning frames of animation
    this.framesHold = 10;
    this.offset = offset;
    this.sound = new Audio();
    this.sound.src = soundSrc;
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
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = {
      offset: {},
      width: undefined,
      height: undefined,
    },
    soundSrc,
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
      soundSrc,
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
    this.health = 100;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    // the lower this number (value)
    // then faster will be chaning frames of animation
    this.framesHold = 10;
    this.sprites = sprites;
    this.dead = false;
    this.soundStart = true;
    // we looping through object sprites to switching between two images
    for (const sprite in this.sprites) {
      // this is objects that we currenlty looping over
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
      sprites[sprite].sound = new Audio();
      sprites[sprite].sound.src = sprites[sprite].soundSrc;
    }
    // console.log(this.sprites)
  }

  // We are creating draw method
  // draw() {
  //   // player and enemy
  //   c.fillStyle = this.color;
  //   c.fillRect(this.position.x, this.position.y, this.width, this.height);

  //   // attack box for both

  //   // default position of attacking box
  //   // c.fillStyle = 'green';
  //   // c.fillRect(
  //   //   this.attackBox.position.x,
  //   //   this.attackBox.position.y,
  //   //   this.attackBox.width - 50,
  //   //   this.attackBox.height - 25
  //   // );

  //   // state when someone is attacking and changing state's of attacking box
  //   // by pressing key of attack
  //   if (this.isAttacking) {
  //     c.fillStyle = 'green';
  //     c.fillRect(
  //       this.attackBox.position.x,
  //       this.attackBox.position.y,
  //       this.attackBox.width,
  //       this.attackBox.height
  //     );
  //   }
  // }
  // updating method instantly
  update() {
    this.draw();
    // if player is not dead so animate their frames
    // if dead do not animate
    if (!this.dead) this.animateFrames();

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
    if (
      this.position.y + this.height + this.velocity.y >=
      canvas.height - 115
    ) {
      this.velocity.y = 0;
      this.position.y = 331;
    } else {
      // in this case 1st of all object will falling down by this expression
      // and then how it rich bottom of the canvas it's stops
      this.velocity.y += gravity;
    }
    // console.log(this.position.y);
  }
  // running to the left method with activating animation and sound
  runLeft() {
    this.soundStart = true;
    this.sound.play();
    this.velocity.x = -6;
    this.switchSprite('run');
  }
  // running to the right method with activating animation and sound
  runRight() {
    this.sound.pause();
    this.soundStart = true;
    this.sound.play();
    this.velocity.x = 6;
    this.switchSprite('run');
  }
  // attack method
  attack() {
    this.switchSprite('attack1');
    this.isAttacking = true;
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }

  attackTwo() {
    this.switchSprite('attack2');
    this.isAttackingTwo = true;
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }

  damaged() {
    this.health -= 20;
    if (this.health <= 0) {
      this.switchSprite('death');
      // setTimeout(() => {
      //   this.switchSprite('deathTwo');
      // }, 3000);
    } else {
      // in this case we auto play damaged sound
      this.sound.currentTime = 0;
      this.sound.play();
      // and also change sprite to damaged sprite
      this.switchSprite('damaged');
    }
  }
  damagedTwo() {
    this.health -= 35;
    if (this.health <= 0) {
      this.switchSprite('death');
      // setTimeout(() => {
      //   this.switchSprite('deathTwo');
      //   console.log('deathTwo');
      // }, 3000);
    } else {
      this.switchSprite('damaged');
    }
  }

  // switch sprites for better logic statements
  switchSprite(sprite) {
    // overriding all other animations with the attack && damaged && death animations
    if (
      this.image === this.sprites.attack1.image && // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.framesCurrent < this.sprites.attack1.framesMax - 1
    )
      return;
    if (
      this.image === this.sprites.attack2.image && // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.framesCurrent < this.sprites.attack2.framesMax - 1
    )
      return;
    if (
      this.image === this.sprites.damaged.image &&
      // but as soon it's frame current goes above the frames max  we are going to continue other animation by pressing keys
      this.framesCurrent < this.sprites.damaged.framesMax - 1
    )
      return;

    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1) {
        this.dead = true;
      }
      return;
    }
    // second animation of death overlooping
    if (this.image === this.sprites.deathTwo.image) {
      if (this.framesCurrent === this.sprites.deathTwo.framesMax) {
        this.dead = true;
      }
      return;
    }

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          // to solve problems with flashing frames need to set current frames to 0 and animation starts in the beginning
          this.framesCurrent = 0;
        }
        break;
      case 'run':
        if (this.image !== this.sprites.run.image) {
          if (this.sound !== this.sprites.run.sound) {
            this.sound = this.sprites.run.sound;
          }
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framesMax = this.sprites.jump.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framesMax = this.sprites.fall.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image;
          this.framesMax = this.sprites.attack1.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'attack2':
        if (this.image !== this.sprites.attack2.image) {
          this.image = this.sprites.attack2.image;
          this.framesMax = this.sprites.attack2.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'damaged':
        if (this.image !== this.sprites.damaged.image) {
          if (this.sound !== this.sprites.damaged.sound) {
            this.sound = this.sprites.damaged.sound;
            this.sound.currentTime = 0;
            this.sound.play();
          }
          this.image = this.sprites.damaged.image;
          this.framesMax = this.sprites.damaged.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framesMax = this.sprites.death.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'deathTwo':
        if (this.image !== this.sprites.deathTwo.image) {
          this.image = this.sprites.deathTwo.image;
          this.framesMax = this.sprites.deathTwo.framesMax;
          this.framesCurrent = 0;
        }
        break;
    }
  }
}
