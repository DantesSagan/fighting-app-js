// 1) A finite set of states of the game. In our game, each state would represent a certain configuration of the grid.
// 2) A finite set of players which are the agents playing the game. In Fihgting game there’s only two players: the human player and the AI.
// 3) A finite set of actions that the players can do. Here, there's several actions that need to describe:
//  a.Define move to left AI;
//  b.Define move to right AI;
//  c.Define jump to AI;
//  d.Define attack1 to AI;
//  e.Define attack2 to AI;
// 4) A transition function that takes the current state and the played action and returns the next state in the game.
// 5) A terminal test function that checks if a state is terminal (that is if the game ends at this state).
// 6) A score function that calculates the score of the player at a terminal state

// new function which listen collision between two boxes (rectangular) or sprites
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({ pl1, pl2, timerId }) {
  clearTimeout(timerId);
  document.querySelector('#displayText').style.display = 'flex';
  // console.log(pl1.health);
  if (pl1.health === pl2.health) {
    if (language === 'eng') {
      document.querySelector('#displayText').innerHTML = 'Tie';
    } else if (language === 'ru') {
      document.querySelector('#displayText').innerHTML = 'Ничья';
    }
    document.querySelector('#restart').style.display = 'flex';
    // console.log('Tie');
  } else if (pl1.health > pl2.health) {
    if (language === 'eng') {
      document.querySelector('#displayText').innerHTML = 'Player 1 won!';
    } else if (language === 'ru') {
      document.querySelector('#displayText').innerHTML = 'Игрок 1 выиграл!!!';
    }
    document.querySelector('#restart').style.display = 'flex';
    // console.log('Player 1 Win!!!');
  } else if (pl1.health < pl2.health) {
    if (language === 'eng') {
      document.querySelector('#displayText').innerHTML = 'Player 2 won!';
    } else if (language === 'ru') {
      document.querySelector('#displayText').innerHTML = 'Игрок 2 выиграл!!!';
    }
    document.querySelector('#restart').style.display = 'flex';
    // console.log('Player 2 Win!!!');
  }
}

// timer for round
let timer = 30;
// let currTime = timer > 0 ? timer-- : 0;
let timerId;
function decreaseTimer() {
  // console.log(timer);
  timerId = setTimeout(decreaseTimer, 1000);
  if (timer > 0) {
    timer--;
    document.querySelector('#timer').innerHTML = timer;
  }
  if (timer === 0) {
    // when where is if's statements equals to true so
    // apply this querySelector with style flex
    // Player Mack
    // Player Mack
    if (
      player.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // PlayerReverse Mack
    if (
      playerReverse.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = playerReverse;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      playerReverse.start === true &&
      player3.start === true &&
      menuMain.start === false
    ) {
      let pl1 = playerReverse;
      let pl2 = player3;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      playerReverse.start === true &&
      player4.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player2
    else if (
      player2.start === true &&
      player.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2.start === true &&
      player3.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player2 Reverse
    else if (
      player2Reverse.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player3
    else if (
      player3.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player3Reverse
    else if (
      player3.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player4
    else if (
      player4.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player4Reverse
    else if (
      player4Reverse.start === true &&
      player.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4Reverse.start === true &&
      player3.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4Reverse.start === true &&
      player2Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4Reverse.start === true &&
      player4.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player5
    else if (
      player5.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
  }
}

// Determine winner by less then zero health point
function DetermineWinnerByLessThenZeroHP() {
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
  } else if (
    player.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player5Reverse;
    if (player.health <= 0 || player5Reverse.health <= 0) {
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
  } else if (
    player5.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = playerReverse;
    if (player5.health <= 0 || playerReverse.health <= 0) {
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
  } else if (
    player5.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player2;
    if (player5.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player5Reverse;
    if (player5.health <= 0 || player5Reverse.health <= 0) {
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
  } else if (
    player2Reverse.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player5Reverse;
    if (player2Reverse.health <= 0 || player5Reverse.health <= 0) {
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
  } else if (
    player3.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player5Reverse;
    if (player3.health <= 0 || player5Reverse.health <= 0) {
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
  } else if (
    player5.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player3Reverse;
    if (player5.health <= 0 || player3Reverse.health <= 0) {
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
  } else if (
    player4.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player5Reverse;
    if (player4.health <= 0 || player5Reverse.health <= 0) {
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
  } else if (
    player5.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player4Reverse;
    if (player4Reverse.health <= 0 || player5.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }

  // Player5
  else if (
    player5.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = playerReverse;
    if (player5.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player3Reverse;
    if (player5.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player2;
    if (player5.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player4Reverse;
    if (player5.health <= 0 || player4Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player5Reverse;
    if (player5.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }

  // Player5 Reverse
  else if (
    player.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player5Reverse;
    if (player5.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2;
    let pl2 = player5Reverse;
    if (player2.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player3.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player5Reverse;
    if (player3.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player5Reverse;
    if (player4.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player5Reverse;
    if (player5.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }

  // Player6
  else if (
    player6.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = playerReverse;
    if (player6.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player3Reverse;
    if (player6.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player2;
    if (player6.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player4Reverse;
    if (player6.health <= 0 || player4Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player5Reverse;
    if (player6.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player6Reverse;
    if (player6.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }

  // Player6 Reverse
  else if (
    player.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player6Reverse;
    if (player.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player6Reverse;
    if (player2Reverse.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player3.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player6Reverse;
    if (player3.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player6Reverse;
    if (player4.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player6Reverse;
    if (player5.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player6Reverse;
    if (player6.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
}

// concept 1 changing sprites with shifting past sprite and pushing new with the same players 1 and player 2 !== work
// concept 2 create additional players and sets them individual characteristics but idk how to determine winner with multiple sets  and settings
// concept 3

const sprites = [
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
      imageSrc: './assets/samuraiMack/Take Hit - white silhouette.png',
      soundSrc: './audio/mixkit-sword-cutting-flesh-2788.wav',
      framesMax: 4,
    },
    death: {
      imageSrc: './assets/samuraiMack/Death.png',
      soundSrc: './audio/death 2.wav',
      framesMax: 6,
    },
    deathTwo: {
      imageSrc: './assets/kenji/blood/Death - blood - last 2.png',
      framesMax: 3,
    },
  },
];
function WithoutBlood() {
  player.sprites.shift();
  player.sprites.push(sprites[0]);
}

// picking hero from hero list
function HeroList() {
  // const div = document.createElement('div');
  // const mapArray = array.map((arrItem) => arrItem);
  // div.innerHTML = JSON.stringify(mapArray);
  // player.sprites.push(mapArray);
  // var parent = document.getElementById('parentColumnOne');
  // parent.append(div); // or: parent.appendChild(h1)
  document.querySelector('#pickMenu').style.display = 'flex';
  document.querySelector('#mainMenu').style.display = 'none';
}

// picking hero from hero list two
function HeroListTwo() {
  document.querySelector('#pickMenu').style.display = 'none';
  document.querySelector('#pickMenuTwo').style.display = 'flex';
}

function PickMackPlayer1() {
  // const hero1 = document.getElementById('hero1Player1');
  // player.sprites.shift();
  // // sprites.map((arrItem) => {
  // //   let hero1 = arrItem;
  // //   // console.log(hero1);
  // // });
  // player.sprites.push(sprites[0]);
  // console.log(player.sprites);
  player.pickedHero = !player.pickedHero;

  if (player.pickedHero === true) {
    player.start = true;
    document.querySelector('#hero1Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero1Player1').style.backgroundColor = 'white';
    player.pickedHero = false;
    player.start = false;
  }

  // player.playableHero = true;
  // player.AIHero = false;
  // player.start = true;
}
function PickKingPlayer1() {
  player3.pickedHero = !player3.pickedHero;
  if (player3.pickedHero === true) {
    player3.start = true;
    document.querySelector('#hero2Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero2Player1').style.backgroundColor = 'white';
    player3.pickedHero = false;
    player3.start = false;
  }
}
// Playing Kenji on left side like reverse for default side (right)
function PickKenjiPlayer1() {
  player2Reverse.pickedHero = !player2Reverse.pickedHero;
  if (player2Reverse.pickedHero === true) {
    player2Reverse.start = true;
    document.querySelector('#hero3Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero3Player1').style.backgroundColor = 'white';
    player2Reverse.pickedHero = false;
    player2Reverse.start = false;
  }
}
// Player4 like King 2
function PickKing2Player1() {
  player4.pickedHero = !player4.pickedHero;
  if (player4.pickedHero === true) {
    player4.start = true;
    document.querySelector('#hero4Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero4Player1').style.backgroundColor = 'white';
    player4.pickedHero = false;
    player4.start = false;
  }
}
function PickEvilWizardPlayer1() {
  player5.pickedHero = !player5.pickedHero;
  if (player5.pickedHero === true) {
    player5.start = true;
    document.querySelector('#hero5Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero5Player1').style.backgroundColor = 'white';
    player5.pickedHero = false;
    player5.start = false;
  }
}
function PickEvilWizard2Player1() {
  player6.pickedHero = !player6.pickedHero;
  if (player6.pickedHero === true) {
    player6.start = true;
    document.querySelector('#hero6Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero6Player1').style.backgroundColor = 'white';
    player6.pickedHero = false;
    player6.start = false;
  }
}
function PickMackPlayer2() {
  playerReverse.pickedHero = !playerReverse.pickedHero;
  if (playerReverse.pickedHero === true) {
    playerReverse.start = true;
    document.querySelector('#hero1Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero1Player2').style.backgroundColor = 'white';
    playerReverse.pickedHero = false;
    playerReverse.start = false;
  }
}

function PickKingPlayer2() {
  player3Reverse.pickedHero = !player3Reverse.pickedHero;
  if (player3Reverse.pickedHero === true) {
    player3Reverse.start = true;
    document.querySelector('#hero2Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero2Player2').style.backgroundColor = 'white';
    player3Reverse.pickedHero = false;
    player3Reverse.start = false;
  }
}
// console.log(sprites[0]);
function PickKenjiPlayer2() {
  player2.pickedHero = !player2.pickedHero;
  if (player2.pickedHero === true) {
    player2.start = true;
    document.querySelector('#hero3Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero3Player2').style.backgroundColor = 'white';
    player2.pickedHero = false;
    player2.start = false;
  }
}

function PickKing2Player2() {
  player4Reverse.pickedHero = !player4Reverse.pickedHero;
  if (player4Reverse.pickedHero === true) {
    player4Reverse.start = true;
    document.querySelector('#hero4Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero4Player2').style.backgroundColor = 'white';
    player4Reverse.pickedHero = false;
    player4Reverse.start = false;
  }
}

function PickEvilWizardOnePlayer2() {
  player5Reverse.pickedHero = !player5Reverse.pickedHero;
  if (player5Reverse.pickedHero === true) {
    player5Reverse.start = true;
    document.querySelector('#hero5Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero5Player2').style.backgroundColor = 'white';
    player5Reverse.pickedHero = false;
    player5Reverse.start = false;
  }
}

function PickEvilWizardTwoPlayer2() {
  player6Reverse.pickedHero = !player6Reverse.pickedHero;
  if (player6Reverse.pickedHero === true) {
    player6Reverse.start = true;
    document.querySelector('#hero6Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero6Player2').style.backgroundColor = 'white';
    player6Reverse.pickedHero = false;
    player6Reverse.start = false;
  }
}

function TrueStart() {
  menuMain.start = false;
  document.querySelector('#infoPlayers').style.display = 'flex';
  document.querySelector('#pickMenu').style.display = 'none';
  document.querySelector('#pickMenuTwo').style.display = 'none';
  decreaseTimer();
}

// function restart when round ends
function TrueRestart() {
  player.health = 100;
  player3.health = 100;
  player2Reverse.health = 100;
  player4.health = 100;
  player5.health = 100;
  player6.health = 100;
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

  playerReverse.health = 100;
  player2.health = 100;
  player3Reverse.health = 100;
  player4Reverse.health = 100;
  player5Reverse.health = 100;
  player6Reverse.health = 100;
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
    player6Reverse.restart === false
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
    }, 1000);
  }

  console.log(player2.dead);
  document.querySelector('#infoPlayers').style.display = 'flex';
  document.querySelector('#displayText').innerHTML = '';
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
  let diff = 30 - timer;
  // console.log(diff);
  document.querySelector('#timer').innerHTML =
    timer < 30 ? (timer += diff) : null;
  decreaseTimer();
  console.log('Click restart', player.start, player2.start);
}
// function back which just hides some menu features
function TrueBack() {
  document.querySelector('#mainMenu').style.display = 'flex';
  document.querySelector('#pickMenu').style.display = 'none';
  document.querySelector('#settings').style.display = 'none';
  document.querySelector('#howToPlay').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
}

function ListTwoBack() {
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#pickMenu').style.display = 'flex';
  document.querySelector('#pickMenuTwo').style.display = 'none';
  document.querySelector('#settings').style.display = 'none';
  document.querySelector('#howToPlay').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
}

// exist
function TrueExit() {
  let open = window.open('', '_self', '').close();
}
// about page from menu
function TrueAbout() {
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#howToPlay').style.display = 'grid';
  // document.querySelector('#displayText').innerHTML = 'Игрок 1 выиграл!!!';
}

// settings function
function Settings() {
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#settings').style.display = 'flex';
}

function ChangeLanguage() {
  if (language === 'ru') {
    language = 'eng';
  } else if (language === 'eng') {
    language = 'ru';
  }
  if (language === 'ru') {
    // Интерфейс в игре
    document.querySelector('#playerOne').innerHTML = 'Игрок 1';
    document.querySelector('#playerTwo').innerHTML = 'Игрок 2';
    // Главное меню
    document.querySelector('#mainTitle').innerHTML =
      'Бойцовский клуб-игра-приложение';
    document.querySelector('#menuTitle').innerHTML = 'Меню';
    document.querySelector('#pickHeroes').innerHTML = 'Выбрать персонажа';
    document.querySelector('#menuSettings').innerHTML = 'Настройки';
    document.querySelector('#menuHowToPlay').innerHTML = 'Как играть';
    document.querySelector('#menuExit').innerHTML = 'Выйти';
    // Настройки
    document.querySelector('#settingsAudioTitle').innerHTML = 'Настройки аудио';
    document.querySelector('#settingsTitle').innerHTML = 'Настройки';
    document.querySelector('#settingsMenuMusic').innerHTML = 'Музыка из меню';
    document.querySelector('#settingsAttackMusic').innerHTML =
      'Звуки атаки и повреждения';
    document.querySelector('#settingsDeathSound').innerHTML = 'Звуки смерти';
    document.querySelector('#settingsMoveSound').innerHTML =
      'Звуки передвижения';
    document.querySelector('#changeLanguage').innerHTML = 'Изменить язык';
    // Как играть
    document.querySelector('#howPlayerOne').innerHTML = 'Игрок 1';
    //
    document.querySelector('#howMain').innerHTML = 'Как играть';
    document.querySelector('#howA').innerHTML = 'Ф кнопка';
    document.querySelector('#howW').innerHTML = 'Ц кнопка';
    document.querySelector('#howD').innerHTML = 'В кнопка';
    document.querySelector('#howSpace').innerHTML = 'Пробел кнопка';
    document.querySelector('#howC').innerHTML = 'С кнопка';
    document.querySelector('#howR').innerHTML = 'К кнопка';
    document.querySelector('#howLeft').innerHTML = 'Движение налево';
    document.querySelector('#howJump').innerHTML = 'Прыжок';
    document.querySelector('#howRight').innerHTML = 'Движение направо';
    document.querySelector('#howLightAttack').innerHTML = 'Легкая атака';
    document.querySelector('#howMiddleAttack').innerHTML = 'Средняя атака';
    document.querySelector('#howHardAttack').innerHTML = 'Тяжелая атака';
    // Как играть 2
    document.querySelector('#howPlayerTwo').innerHTML = 'Игрок 2';
    //
    document.querySelector('#howLeft2').innerHTML = 'Стрелка влево';
    document.querySelector('#howUp2').innerHTML = 'Стрелка вверх';
    document.querySelector('#howRight2').innerHTML = 'Стрелка вправо';
    document.querySelector('#howDown2').innerHTML = 'Стрелка вниз';
    document.querySelector('#howTwo2').innerHTML = '2 кнопка';
    document.querySelector('#howThree2').innerHTML = '3 кнопка';
    document.querySelector('#howMoveLeft2').innerHTML = 'Движение налево';
    document.querySelector('#howMoveJump2').innerHTML = 'Прыжок';
    document.querySelector('#howMoveRight2').innerHTML = 'Движение направо';
    document.querySelector('#howLightAttack2').innerHTML = 'Легкая атака';
    document.querySelector('#howMiddleAttack2').innerHTML = 'Средняя атака';
    document.querySelector('#howHardAttack2').innerHTML = 'Тяжелая атака';
    // Меню выбора героев - список 1
    // Игрок 1
    document.querySelector('#pickPlayer1').innerHTML = 'Игрок 1';
    document.querySelector('#pickMack1').innerHTML = 'Мэк';
    document.querySelector('#pickKing1').innerHTML = 'Король';
    document.querySelector('#pickKenji1').innerHTML = 'Кэнджи';
    document.querySelector('#pickKingTwo1').innerHTML = 'Король - 2';
    // Игрок 2
    document.querySelector('#pickPlayer2').innerHTML = 'Игрок 2';
    document.querySelector('#pickMack2').innerHTML = 'Мэк';
    document.querySelector('#pickKing2').innerHTML = 'Король';
    document.querySelector('#pickKenji2').innerHTML = 'Кэнджи';
    document.querySelector('#pickKingTwo2').innerHTML = 'Король - 2';
    // Играть и назад
    document.querySelector('#menuPlay').innerHTML = 'Играть';
    document.querySelector('#heroListTwo').innerHTML = 'Список 2';
    document.querySelector('#back').innerHTML = 'Назад';

    // Меню выбора героев - список 2
    // Игрок 1
    document.querySelector('#pickPlayerListTwo1').innerHTML = 'Игрок 1';
    document.querySelector('#pickEvilWizard1').innerHTML = 'Огненный волшебник 1';
    document.querySelector('#pickEvilWizardTwo1').innerHTML =
      'Темныё волшебник 2';

    // Игрок 2
    document.querySelector('#pickPlayerListTwo2').innerHTML = 'Игрок 2';
    document.querySelector('#pickEvilWizard2').innerHTML = 'Огненный волшебник 1';
    document.querySelector('#pickEvilWizardTwo2').innerHTML =
      'Тёмный волшебник 2';

    // Список два кнопки играть и  назад
    document.querySelector('#menuPlayTwo').innerHTML = 'Играть';
    document.querySelector('#backTwo').innerHTML = 'Назад';

    // Перезапустить и вернуться в меню
    document.querySelector('#restartButton').innerHTML = 'Перезапустить';
    document.querySelector('#restartMenu').innerHTML = 'Меню';
    // Назад кнопка - Как играть
    document.querySelector('#howToPlayBack').innerHTML = 'Назад';
    // Назад кнопка - Настройки
    document.querySelector('#settingsBack').innerHTML = 'Назад';
  } else if (language === 'eng') {
    // Interface in a game
    document.querySelector('#playerOne').innerHTML = 'Player 1';
    document.querySelector('#playerTwo').innerHTML = 'Player 2';
    // Main menu
    document.querySelector('#mainTitle').innerHTML = 'Fighting club-game-app';
    document.querySelector('#menuTitle').innerHTML = 'Menu';
    document.querySelector('#pickHeroes').innerHTML = 'Pick heroes';
    document.querySelector('#menuSettings').innerHTML = 'Settings';
    document.querySelector('#menuHowToPlay').innerHTML = 'How to play';
    document.querySelector('#menuExit').innerHTML = 'Exit';
    // Settings
    document.querySelector('#settingsTitle').innerHTML = 'Settings';
    document.querySelector('#settingsAudioTitle').innerHTML = 'Audio settings';
    document.querySelector('#settingsMenuMusic').innerHTML = 'Menu music';
    document.querySelector('#settingsAttackMusic').innerHTML =
      'Attack sound and damaged sound';
    document.querySelector('#settingsDeathSound').innerHTML = 'Death sound';
    document.querySelector('#settingsMoveSound').innerHTML = 'Move sound';
    document.querySelector('#changeLanguage').innerHTML = 'Change language';
    // How to play
    document.querySelector('#howPlayerOne').innerHTML = 'Player 1';
    //
    document.querySelector('#howMain').innerHTML = 'How to play';
    document.querySelector('#howA').innerHTML = 'A button';
    document.querySelector('#howW').innerHTML = 'W button';
    document.querySelector('#howD').innerHTML = 'D button';
    document.querySelector('#howSpace').innerHTML = 'Space button';
    document.querySelector('#howC').innerHTML = 'C button';
    document.querySelector('#howR').innerHTML = 'R button';
    document.querySelector('#howLeft').innerHTML = 'Move to the left';
    document.querySelector('#howJump').innerHTML = 'Jump';
    document.querySelector('#howRight').innerHTML = 'Move to the right';
    document.querySelector('#howLightAttack').innerHTML = 'Light attack';
    document.querySelector('#howMiddleAttack').innerHTML = 'Middle attack';
    document.querySelector('#howHardAttack').innerHTML = 'Hard attack';
    // How to play 2
    document.querySelector('#howPlayerTwo').innerHTML = 'Player 2';
    //
    document.querySelector('#howLeft2').innerHTML = 'Arrow Left';
    document.querySelector('#howUp2').innerHTML = 'Arrow Up';
    document.querySelector('#howRight2').innerHTML = 'Arrow Right';
    document.querySelector('#howDown2').innerHTML = 'Arrow Down';
    document.querySelector('#howTwo2').innerHTML = '2 button';
    document.querySelector('#howThree2').innerHTML = '3 button';
    document.querySelector('#howMoveLeft2').innerHTML = 'Move to the left';
    document.querySelector('#howMoveJump2').innerHTML = 'Jump';
    document.querySelector('#howMoveRight2').innerHTML = 'Move to the right';
    document.querySelector('#howLightAttack2').innerHTML = 'Light attack';
    document.querySelector('#howMiddleAttack2').innerHTML = 'Middle attack';
    document.querySelector('#howHardAttack2').innerHTML = 'Hard attack';
    // Menu
    document.querySelector('#pickPlayer1').innerHTML = 'Player 1';
    document.querySelector('#pickPlayer2').innerHTML = 'Player 2';
    // Player 1
    document.querySelector('#pickPlayer1').innerHTML = 'Player 1';
    document.querySelector('#pickMack1').innerHTML = 'Mack';
    document.querySelector('#pickKing1').innerHTML = 'King';
    document.querySelector('#pickKenji1').innerHTML = 'Kenji';
    document.querySelector('#pickKingTwo1').innerHTML = 'King - 2';
    // Player 2
    document.querySelector('#pickPlayer2').innerHTML = 'Player 2';
    document.querySelector('#pickMack2').innerHTML = 'Mack';
    document.querySelector('#pickKing2').innerHTML = 'King';
    document.querySelector('#pickKenji2').innerHTML = 'Kenji';
    document.querySelector('#pickKingTwo2').innerHTML = 'King - 2';
    // Play and back
    document.querySelector('#menuPlay').innerHTML = 'Play';
    document.querySelector('#heroListTwo').innerHTML = 'List 2';
    document.querySelector('#back').innerHTML = 'Back';
    // Menu picking heroes - list 2
    // Player 1
    document.querySelector('#pickPlayerListTwo1').innerHTML = 'Player 1';
    document.querySelector('#pickEvilWizard1').innerHTML = 'Fire Wizard 1';
    document.querySelector('#pickEvilWizardTwo1').innerHTML = 'Dark Wizard 2';

    // Player 2
    document.querySelector('#pickPlayerListTwo2').innerHTML = 'Player 2';
    document.querySelector('#pickEvilWizard2').innerHTML = 'Fire Wizard 1';
    document.querySelector('#pickEvilWizardTwo2').innerHTML = 'Dark Wizard 2';
    //ListTwo Play and back
    document.querySelector('#menuPlayTwo').innerHTML = 'Play';
    document.querySelector('#backTwo').innerHTML = 'Back';
    // Restart and menu
    document.querySelector('#restartButton').innerHTML = 'Restart';
    document.querySelector('#restartMenu').innerHTML = 'Menu';
    // Назад кнопка 1
    document.querySelector('#howToPlayBack').innerHTML = 'Back';
    // Назад кнопка - Настройки
    document.querySelector('#settingsBack').innerHTML = 'Back';
  }
}

function ChangeLanguageToEng() {
  language = 'eng';
  document.querySelector('#displayEng').style.display = 'flex';
  document.querySelector('#displayRu').style.display = 'none';
}

// changing volume menu music
let vol = document.querySelector('input[value="volume"]');
let volume = Number(vol.value);
const rangeValue = () => {
  const result = document.getElementById('result');
  const inputHandler = (e) => {
    volume = e.target.value;
    result.innerHTML = e.target.value;
  };
  console.log(`${volume} = volume`);
  vol.addEventListener('change', inputHandler); // for IE8
};

// changing volume fighting sounds
let volFight = document.querySelector('input[value="volumeFight"]');
let volumeFight = Number(volFight.value);
const rangeValueFight = () => {
  const resultFight = document.getElementById('resultFight');
  const inputHandler = (e) => {
    volumeFight = e.target.value;
    resultFight.innerHTML = e.target.value;
  };
  console.log(`${volumeFight} = volumeFight`);
  volFight.addEventListener('change', inputHandler); // for IE8
};

// changing volume death sounds
let volDeath = document.querySelector('input[value="volumeDeath"]');
let volumeDeath = Number(volDeath.value);
const rangeValueDeath = () => {
  const resultDeath = document.getElementById('resultDeath');
  const inputHandler = (e) => {
    volumeDeath = e.target.value;
    resultDeath.innerHTML = e.target.value;
  };
  console.log(`${volumeDeath} = volumeDeath`);
  volDeath.addEventListener('change', inputHandler); // for IE8
};

// changing volume walking | jump sounds
let volMove = document.querySelector('input[value="volumeMove"]');
let volumeMove = Number(volMove.value);

const rangeValueMove = () => {
  const resultMove = document.getElementById('resultMove');
  const inputHandler = (e) => {
    volumeMove = e.target.value;
    resultMove.innerHTML = e.target.value;
  };
  console.log(`${volumeMove} = volumeMove`);
  volMove.addEventListener('change', inputHandler); // for IE8
};
