// menu function
function menu() {
  setInterval(() => {
    menuMain.sound.play();
    menuMain.sound.volume = volume;
  }, 1000);
  if (menuMain.start === true) {
    menuMain.sound.src = '../audio/ambient_menu.wav';
  } else if (menuMain.start === false) {
    menuMain.sound.src = '../audio/Hard void (Finish - Rock 5).wav';
  }
}
// menu restart
function MenuRestart() {
  // restart boolean
  player.start = false;
  playerReverse.start = false;
  player2.start = false;
  player2Reverse.start = false;
  player3.start = false;
  player3Reverse.start = false;
  player4.start = false;
  player4Reverse.start = false;
  player5.start = false;
  player5Reverse.start = false;
  menuMain.start = true;
  // pickedHeroes boolean to false when button menu pressed
  player.pickedHero = false;
  playerReverse.pickedHero = false;
  player2.pickedHero = false;
  player2Reverse.pickedHero = false;
  player3.pickedHero = false;
  player3Reverse.pickedHero = false;
  player4.pickedHero = false;
  player4Reverse.pickedHero = false;
  player5.pickedHero = false;
  player5Reverse.pickedHero = false;
  // change color or selected hero before
  // 1st list of heroes
  document.querySelector('#hero1Player1').style.backgroundColor = 'white';
  document.querySelector('#hero2Player1').style.backgroundColor = 'white';
  document.querySelector('#hero3Player1').style.backgroundColor = 'white';
  document.querySelector('#hero4Player1').style.backgroundColor = 'white';
  document.querySelector('#hero5Player1').style.backgroundColor = 'white';

  // second list of heroes
  document.querySelector('#hero1Player2').style.backgroundColor = 'white';
  document.querySelector('#hero2Player2').style.backgroundColor = 'white';
  document.querySelector('#hero3Player2').style.backgroundColor = 'white';
  document.querySelector('#hero4Player2').style.backgroundColor = 'white';
  document.querySelector('#hero5Player2').style.backgroundColor = 'white';

  // Left side hero
  player.health = 100;
  player3.health = 100;
  player2Reverse.health = 100;
  player4.health = 100;
  player5.health = 100;
  gsap.to('#playerHealth', {
    width: player.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player3.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player2Reverse.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player4.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player5.health + '%',
  });

  // Right side hero
  playerReverse.health = 100;
  player2.health = 100;
  player3Reverse.health = 100;
  player5Reverse.health = 100;
  gsap.to('#player2Health', {
    width: player2.health + '%',
  });
  gsap.to('#player2Health', {
    width: player3Reverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: playerReverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: player4Reverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: player5Reverse.health + '%',
  });

  if (
    player.restart === false ||
    playerReverse.restart === false ||
    player2.restart === false ||
    player2Reverse.restart === false ||
    player3.restart === false ||
    player3Reverse.restart === false ||
    player4.restart === false ||
    player4Reverse.restart === false ||
    player5.restart === false ||
    player5Reverse.restart === false
  ) {
    // restart set to true
    player.restart = true;
    playerReverse.restart = true;
    player2.restart = true;
    player2Reverse.restart = true;
    player3.restart = true;
    player3Reverse.restart = true;
    player4.restart = true;
    player4Reverse.restart = true;
    player5.restart = true;
    player5Reverse.restart = true;
    // position x like in the start of round(game)
    player.position.x = 256;
    playerReverse.position.x = 768;
    player2.position.x = 768;
    player2Reverse.position.x = 256;
    player3.position.x = 256;
    player3Reverse.position.x = 768;
    player4.position.x = 256;
    player4Reverse.position.x = 768;
    player5.position.x = 256;
    player5Reverse.position.x = 768;
    setTimeout(() => {
      player.restart = false;
      playerReverse.restart = false;
      player2.restart = false;
      player2Reverse.restart = false;
      player3.restart = false;
      player3Reverse.restart = false;
      player4.restart = false;
      player4Reverse.restart = false;
      player5.restart = false;
      player5Reverse.restart = false;
    }, 1000);
  }
  document.querySelector('#mainMenu').style.display = 'flex';
  document.querySelector('#displayText').innerHTML = '';
  document.querySelector('#infoPlayers').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
  let diff = 30 - timer;
  // console.log(diff);
  document.querySelector('#timer').innerHTML =
    timer < 30 ? (timer += diff) : null;
}

function MenuFalsePlayersTrue() {
  if (
    player.start === false &&
    player2.start === false &&
    menuMain.start === true
  ) {
    menuMain.update();
    // insert shop
    shop.update();
  }
  if (
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
  // Player5 && playerReverse
  if (
    player5.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player5.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    playerReverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player5 && player2Reverse
  if (
    player5.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player5.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player2.update();
    // insert player3 or second player
    // c.restore();
  }
  // Player5 && player3Reverse
  if (
    player5.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player5.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player3Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player5 && player4Reverse
  if (
    player5.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player5.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player4Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }

  // Player5Reverse && player
  if (
    player.start === true &&
    player5Reverse.start === true &&
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
    player5Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player5Reverse && player2Reverse
  if (
    player2Reverse.start === true &&
    player5Reverse.start === true &&
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
    player5Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player5Reverse && player3
  if (
    player3.start === true &&
    player5Reverse.start === true &&
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
    player5Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }

  // Player5Reverse && player4
  if (
    player4.start === true &&
    player5Reverse.start === true &&
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
    player5Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
  // Player5 && player5Reverse
  if (
    player5.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    // insert shop
    shop.update();
    // insert player
    // insert player2 or second player
    player5.update();
    // c.save();
    // c.scale(-1, 1);
    // c.setTransform(-1, 0, 0, 1, 0, 0);
    player5Reverse.updateReverse();
    // insert player3 or second player
    // c.restore();
  }
}
