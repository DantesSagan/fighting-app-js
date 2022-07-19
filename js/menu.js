// menu function
function menu({ music }) {
  menuMain.sound.pause();
  menuMain.sound.currentTime = 0;
  menuMain.sound.src = music;
  setInterval(() => {
    menuMain.sound.play();
    menuMain.sound.volume = volume;
  }, 1000);
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
  player6.start = false;
  player6Reverse.start = false;
  player7.start = false;
  player7Reverse.start = false;
  player8.start = false;
  player8Reverse.start = false;
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
  player6.pickedHero = false;
  player6Reverse.pickedHero = false;
  player7.pickedHero = false;
  player7Reverse.pickedHero = false;
  player8.pickedHero = false;
  player8Reverse.pickedHero = false;
  // change music by menu music when pressed menu restart button on fight round
  if (menuMain.start === true) {
    const music = '../audio/ambient_menu.wav';

    menu({ music });
  } else {
    const music = '../audio/Hard void (Finish - Rock 5).wav';

    menu({ music });
  }
  // change color or selected hero before
  // 1st list of heroes
  document.querySelector('#hero1Player1').style.backgroundColor = 'white';
  document.querySelector('#hero2Player1').style.backgroundColor = 'white';
  document.querySelector('#hero3Player1').style.backgroundColor = 'white';
  document.querySelector('#hero4Player1').style.backgroundColor = 'white';
  document.querySelector('#hero5Player1').style.backgroundColor = 'white';
  document.querySelector('#hero6Player1').style.backgroundColor = 'white';
  document.querySelector('#hero7Player1').style.backgroundColor = 'white';
  document.querySelector('#hero8Player1').style.backgroundColor = 'white';

  // second list of heroes
  document.querySelector('#hero1Player2').style.backgroundColor = 'white';
  document.querySelector('#hero2Player2').style.backgroundColor = 'white';
  document.querySelector('#hero3Player2').style.backgroundColor = 'white';
  document.querySelector('#hero4Player2').style.backgroundColor = 'white';
  document.querySelector('#hero5Player2').style.backgroundColor = 'white';
  document.querySelector('#hero6Player2').style.backgroundColor = 'white';
  document.querySelector('#hero7Player2').style.backgroundColor = 'white';
  document.querySelector('#hero8Player2').style.backgroundColor = 'white';

  // Left side hero
  player.health = 100;
  player3.health = 100;
  player2Reverse.health = 100;
  player4.health = 100;
  player5.health = 100;
  player6.health = 100;
  player7.health = 100;
  player8.health = 100;
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
  gsap.to('#playerHealth', {
    width: player6.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player7.health + '%',
  });
  gsap.to('#playerHealth', {
    width: player8.health + '%',
  });

  // Right side hero
  playerReverse.health = 100;
  player2.health = 100;
  player3Reverse.health = 100;
  player5Reverse.health = 100;
  player6Reverse.health = 100;
  player7Reverse.health = 100;
  player8Reverse.health = 100;
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
  gsap.to('#player2Health', {
    width: player6Reverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: player7Reverse.health + '%',
  });
  gsap.to('#player2Health', {
    width: player8Reverse.health + '%',
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
    player5Reverse.restart === false ||
    player6.restart === false ||
    player6Reverse.restart === false ||
    player7.restart === false ||
    player7Reverse.restart === false ||
    player8.restart === false ||
    player8Reverse.restart === false
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
    player6.restart = true;
    player6Reverse.restart = true;
    player7.restart = true;
    player7Reverse.restart = true;
    player8.restart = true;
    player8Reverse.restart = true;
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
    player6.position.x = 256;
    player6Reverse.position.x = 768;
    player7.position.x = 256;
    player7Reverse.position.x = 768;
    player8.position.x = 256;
    player8Reverse.position.x = 768;
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
      player6.restart = false;
      player6Reverse.restart = false;
      player7.restart = false;
      player7Reverse.restart = false;
      player8.restart = false;
      player8Reverse.restart = false;
    }, 1000);
  }
  document.querySelector('#mainMenu').style.display = 'flex';
  document.querySelector('#displayText').innerHTML = '';
  document.querySelector('#infoPlayers').style.display = 'none';
  document.querySelector('#EscapeMenu').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
  let diff = 30 - timer;
  // console.log(diff);
  document.querySelector('#timer').innerHTML =
    timer < 30 ? (timer += diff) : null;
}

function MenuFalsePlayersTrueCheck({
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
}) {
  // Player start
  if (
    player.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    player.update();
    playerReverse.updateReverse();
  }
  if (
    player.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    player.update();
    player2.update();
  }
  if (
    player.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    player.update();
    player3Reverse.updateReverse();
  }
  if (
    player.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    player.update();
    player4Reverse.updateReverse();
  }
  if (
    player.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    player.update();
    player5Reverse.updateReverse();
  }
  if (
    player.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    player.update();
    player6Reverse.updateReverse();
  }
  if (
    player.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    player.update();
    player7Reverse.updateReverse();
  }
  if (
    player.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    player.update();
    player8Reverse.updateReverse();
  }
  // Player2 Reverse start
  if (
    player2Reverse.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    player2Reverse.updateReverse();
    playerReverse.updateReverse();
  }
  if (
    player2Reverse.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    player2Reverse.updateReverse();
    player2.update();
  }
  if (
    player2Reverse.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    player2Reverse.updateReverse();
    player3Reverse.updateReverse();
  }
  if (
    player2Reverse.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    player2Reverse.updateReverse();
    player4Reverse.updateReverse();
  }
  if (
    player2Reverse.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    player2Reverse.updateReverse();
    player5Reverse.updateReverse();
  }
  if (
    player2Reverse.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    player2Reverse.updateReverse();
    player6Reverse.updateReverse();
  }
  if (
    player2Reverse.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    player2Reverse.updateReverse();
    player7Reverse.updateReverse();
  }
  if (
    player2Reverse.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    player2Reverse.updateReverse();
    player8Reverse.updateReverse();
  }
  // Player3 start
  if (
    player3.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    player3.update();
    playerReverse.updateReverse();
  }
  if (
    player3.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    player3.update();
    player2.update();
  }
  if (
    player3.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    player3.update();
    player3Reverse.updateReverse();
  }
  if (
    player3.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    player3.update();
    player4Reverse.updateReverse();
  }
  if (
    player3.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    player3.update();
    player5Reverse.updateReverse();
  }
  if (
    player3.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    player3.updateReverse();
    player6Reverse.updateReverse();
  }
  if (
    player3.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    player3.update();
    player7Reverse.updateReverse();
  }
  if (
    player3.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    player3.update();
    player8Reverse.updateReverse();
  }
  // Player4 start
  if (
    player4.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    player4.update();
    playerReverse.updateReverse();
  }
  if (
    player4.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    player4.update();
    player2.update();
  }
  if (
    player4.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    player4.update();
    player3Reverse.updateReverse();
  }
  if (
    player4.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    player4.update();
    player4Reverse.updateReverse();
  }
  if (
    player4.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    player4.update();
    player5Reverse.updateReverse();
  }
  if (
    player4.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    player4.update();
    player6Reverse.updateReverse();
  }
  if (
    player4.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    player4.update();
    player7Reverse.updateReverse();
  }
  if (
    player4.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    player4.update();
    player8Reverse.updateReverse();
  }
  // Player5 start
  if (
    player5.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    player5.update();
    playerReverse.updateReverse();
  }
  if (
    player5.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    player5.update();
    player2.update();
  }
  if (
    player5.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    player5.update();
    player3Reverse.updateReverse();
  }
  if (
    player5.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    player5.update();
    player4Reverse.updateReverse();
  }
  if (
    player5.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    player5.update();
    player5Reverse.updateReverse();
  }
  if (
    player5.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    player5.update();
    player6Reverse.updateReverse();
  }
  if (
    player5.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    player5.update();
    player7Reverse.updateReverse();
  }
  if (
    player5.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    player5.update();
    player8Reverse.updateReverse();
  }
  // Player6 start
  if (
    player6.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    player6.update();
    playerReverse.updateReverse();
  }
  if (
    player6.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    player6.update();
    player2.update();
  }
  if (
    player6.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    player6.update();
    player3Reverse.updateReverse();
  }
  if (
    player6.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    player6.update();
    player4Reverse.updateReverse();
  }
  if (
    player6.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    player6.update();
    player5Reverse.updateReverse();
  }
  if (
    player6.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    player6.update();
    player6Reverse.updateReverse();
  }
  if (
    player6.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    player6.update();
    player7Reverse.updateReverse();
  }
  if (
    player6.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    player6.update();
    player8Reverse.updateReverse();
  }
  // Player7 start
  if (
    player7.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    playerReverse.updateReverse();
  }
  if (
    player7.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    player2.update();
  }
  if (
    player7.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    player3Reverse.updateReverse();
  }
  if (
    player7.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    player4Reverse.updateReverse();
  }
  if (
    player7.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    player5Reverse.updateReverse();
  }
  if (
    player7.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    player6Reverse.updateReverse();
  }
  if (
    player7.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    player7Reverse.updateReverse();
  }
  if (
    player7.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    player8Reverse.updateReverse();
  }
  // Player8 start
  if (
    player8.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    player8.update();
    playerReverse.updateReverse();
  }
  if (
    player8.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    player8.update();
    player2.update();
  }
  if (
    player8.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    player8.update();
    player3Reverse.updateReverse();
  }
  if (
    player8.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    player8.update();
    player4Reverse.updateReverse();
  }
  if (
    player8.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    player7.update();
    player5Reverse.updateReverse();
  }
  if (
    player8.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    player8.update();
    player6Reverse.updateReverse();
  }
  if (
    player8.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    player8.update();
    player7Reverse.updateReverse();
  }
  if (
    player8.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    player8.update();
    player8Reverse.updateReverse();
  }
}
