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
    // Player5Reverse
    else if (
      player.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player6
    else if (
      player6.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player6.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player6.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player6.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player6.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    }

    // Player6Reverse
    else if (
      player.start === true &&
      player6Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player6Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player6Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player6Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player6Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player6Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player6Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player6Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player6Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player6Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player6.start === true &&
      player6Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = player6Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player7
    else if (
      player7.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player7;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player7.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player7;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player7.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player7;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player7.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player7;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player7.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player7;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    }

    // Player7Reverse
    else if (
      player.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player6.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player7.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player7;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player8
    else if (
      player8.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player8.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player8.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player8.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player8.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player8.start === true &&
      player6Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = player6Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player8.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    }

    // Player8Reverse
    else if (
      player.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player6.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player7.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player7;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player8.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    }
    // Player9
    else if (
      player9.start === true &&
      playerReverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = playerReverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player9.start === true &&
      player2.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = player2;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player9.start === true &&
      player3Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = player3Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player9.start === true &&
      player4Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = player4Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player9.start === true &&
      player5Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = player5Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player9.start === true &&
      player6Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = player6Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player9.start === true &&
      player7Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = player7Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player9.start === true &&
      player8Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = player8Reverse;
      determineWinner({ pl1, pl2, timerId });
    }

    // Player9Reverse
    else if (
      player.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player;
      let pl2 = player9Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player2Reverse.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player2Reverse;
      let pl2 = player9Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player3.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player3;
      let pl2 = player9Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player4.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player4;
      let pl2 = player9Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player5.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player5;
      let pl2 = player9Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player6.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player6;
      let pl2 = player9Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player7.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player7;
      let pl2 = player9Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player8.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player8;
      let pl2 = player9Reverse;
      determineWinner({ pl1, pl2, timerId });
    } else if (
      player9.start === true &&
      player9Reverse.start === true &&
      menuMain.start === false
    ) {
      let pl1 = player9;
      let pl2 = player8Reverse;
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

  // Player7
  else if (
    player7.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = playerReverse;
    if (player7.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player7.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = player3Reverse;
    if (player7.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player7.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = player2;
    if (player7.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player7.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = player4Reverse;
    if (player7.health <= 0 || player4Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player7.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = player5Reverse;
    if (player7.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player7.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = player6Reverse;
    if (player7.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }

  // Player7 Reverse
  else if (
    player.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player7Reverse;
    if (player.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player7Reverse;
    if (player2Reverse.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player3.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player7Reverse;
    if (player3.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player7Reverse;
    if (player4.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player7Reverse;
    if (player5.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player7Reverse;
    if (player6.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player7.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = player7Reverse;
    if (player7.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }

  // Player8
  else if (
    player8.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = playerReverse;
    if (player8.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player8.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = player3Reverse;
    if (player8.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player8.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = player2;
    if (player8.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player8.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = player4Reverse;
    if (player8.health <= 0 || player4Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player8.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = player5Reverse;
    if (player8.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player8.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = player6Reverse;
    if (player8.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player8.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = player7Reverse;
    if (player8.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // Player8 Reverse
  else if (
    player.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player8Reverse;
    if (player.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player8Reverse;
    if (player2Reverse.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player3.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player8Reverse;
    if (player3.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player8Reverse;
    if (player4.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player8Reverse;
    if (player5.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player8Reverse;
    if (player6.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player7.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = player8Reverse;
    if (player7.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player8.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = player8Reverse;
    if (player8.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }

  // Player9
  else if (
    player9.start === true &&
    playerReverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = playerReverse;
    if (player9.health <= 0 || playerReverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player9.start === true &&
    player3Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = player3Reverse;
    if (player9.health <= 0 || player3Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player9.start === true &&
    player2.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = player2;
    if (player9.health <= 0 || player2.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player9.start === true &&
    player4Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = player4Reverse;
    if (player9.health <= 0 || player4Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player9.start === true &&
    player5Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = player5Reverse;
    if (player9.health <= 0 || player5Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player9.start === true &&
    player6Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = player6Reverse;
    if (player9.health <= 0 || player6Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player9.start === true &&
    player7Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = player7Reverse;
    if (player9.health <= 0 || player7Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player9.start === true &&
    player8Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = player8Reverse;
    if (player9.health <= 0 || player8Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
  // Player9 Reverse
  else if (
    player.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player;
    let pl2 = player9Reverse;
    if (player.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player2Reverse.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player2Reverse;
    let pl2 = player9Reverse;
    if (player2Reverse.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player3.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player3;
    let pl2 = player9Reverse;
    if (player3.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player4.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player4;
    let pl2 = player9Reverse;
    if (player4.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player5.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player5;
    let pl2 = player9Reverse;
    if (player5.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player6.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player6;
    let pl2 = player9Reverse;
    if (player6.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player7.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player7;
    let pl2 = player9Reverse;
    if (player7.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player8.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player8;
    let pl2 = player9Reverse;
    if (player8.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  } else if (
    player9.start === true &&
    player9Reverse.start === true &&
    menuMain.start === false
  ) {
    let pl1 = player9;
    let pl2 = player9Reverse;
    if (player9.health <= 0 || player9Reverse.health <= 0) {
      determineWinner({ pl1, pl2, timerId });
    }
  }
}

// concept 1 changing sprites with shifting past sprite and pushing new with the same players 1 and player 2 !== work
// concept 2 create additional players and sets them individual characteristics but idk how to determine winner with multiple sets  and settings
// concept 3

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

let chooseListTwo;
let chooseListThree;

// picking hero from hero list two
function HeroListTwo() {
  document.querySelector('#pickMenu').style.display = 'none';
  document.querySelector('#pickMenuTwo').style.display = 'flex';

  // chooseListTwo = !chooseListTwo;

  // if (chooseListTwo === true) {
  //   chooseListTwo = true;
  //   document.querySelector('#heroListTwo').style.backgroundColor = 'red';
  // } else {
  //   document.querySelector('#heroListTwo').style.backgroundColor = 'white';
  //   chooseListTwo = false;
  // }
}

// picking hero from hero list three
function HeroListThree() {
  document.querySelector('#pickMenu').style.display = 'none';
  document.querySelector('#pickMenuTwo').style.display = 'none';
  document.querySelector('#pickMenuThree').style.display = 'flex';

  // chooseListThree = !chooseListThree;

  // if (chooseListThree === true) {
  //   chooseListThree = true;
  //   document.querySelector('#heroListThree').style.backgroundColor = 'green';
  // } else {
  //   document.querySelector('#heroListThree').style.backgroundColor = 'white';
  //   chooseListThree = false;
  // }
}

function PickMackPlayer1() {
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
function MackPlayer1AI() {
  player.AIHero = !player.AIHero;
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
function KingPlayer1AI() {
  player3.AIHero = !player3.AIHero;
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
function KenjiPlayer1AI() {
  player2Reverse.AIHero = !player2Reverse.AIHero;
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
function King2Player1AI() {
  player4.AIHero = !player4.AIHero;
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

function EvilWizardPlayer1AI() {
  player5.AIHero = !player5.AIHero;
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

function EvilWizard2Player1AI() {
  player6.AIHero = !player6.AIHero;
}

function PickFantasyWarrior1Player1() {
  player7.pickedHero = !player7.pickedHero;
  if (player7.pickedHero === true) {
    player7.start = true;
    document.querySelector('#hero7Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero7Player1').style.backgroundColor = 'white';
    player7.pickedHero = false;
    player7.start = false;
  }
}

function FantasyWarrior1Player1AI() {
  player7.AIHero = !player7.AIHero;
}

function PickWarriorAxe1Player1() {
  player8.pickedHero = !player8.pickedHero;
  if (player8.pickedHero === true) {
    player8.start = true;
    document.querySelector('#hero8Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero8Player1').style.backgroundColor = 'white';
    player8.pickedHero = false;
    player8.start = false;
  }
}

function WarriorAxe1Player1AI() {
  player8.AIHero = !player8.AIHero;
}

function PickVampire1Player1() {
  player9.pickedHero = !player9.pickedHero;
  if (player9.pickedHero === true) {
    player9.start = true;
    document.querySelector('#hero9Player1').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero9Player1').style.backgroundColor = 'white';
    player9.pickedHero = false;
    player9.start = false;
  }
}

function Vampire1Player1AI() {
  player9.AIHero = !player9.AIHero;
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

function MackPlayer2AI() {
  playerReverse.AIHero = !playerReverse.AIHero;
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

function KingPlayer2AI() {
  player3Reverse.AIHero = !player3Reverse.AIHero;
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

function KenjiPlayer2AI() {
  player2.AIHero = !player2.AIHero;
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

function King2Player2AI() {
  player4Reverse.AIHero = !player4Reverse.AIHero;
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

function EvilWizard1Player2AI() {
  player5Reverse.AIHero = !player5Reverse.AIHero;
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

function EvilWizard2Player2AI() {
  player6Reverse.AIHero = !player6Reverse.AIHero;
}

function PickFantasyWarrior1Player2() {
  player7Reverse.pickedHero = !player7Reverse.pickedHero;
  if (player7Reverse.pickedHero === true) {
    player7Reverse.start = true;
    document.querySelector('#hero7Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero7Player2').style.backgroundColor = 'white';
    player7Reverse.pickedHero = false;
    player7Reverse.start = false;
  }
}

function FantasyWarriorPlayer2AI() {
  player7Reverse.AIHero = !player7Reverse.AIHero;
}

function PickWarriorAxe1Player2() {
  player8Reverse.pickedHero = !player8Reverse.pickedHero;
  if (player8Reverse.pickedHero === true) {
    player8Reverse.start = true;
    document.querySelector('#hero8Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero8Player2').style.backgroundColor = 'white';
    player8Reverse.pickedHero = false;
    player8Reverse.start = false;
  }
}

function WarriorAxePlayer2AI() {
  player8Reverse.AIHero = !player8Reverse.AIHero;
}

function PickVampire1Player2() {
  player9Reverse.pickedHero = !player9Reverse.pickedHero;
  if (player9Reverse.pickedHero === true) {
    player9Reverse.start = true;
    document.querySelector('#hero9Player2').style.backgroundColor = 'red';
  } else {
    document.querySelector('#hero9Player2').style.backgroundColor = 'white';
    player9Reverse.pickedHero = false;
    player9Reverse.start = false;
  }
}

function Vampire1Player2AI() {
  player9Reverse.AIHero = !player9Reverse.AIHero;
}

let timerStart = 5;
let timerStartId;
function TimerToStart() {
  timerStartId = setTimeout(TimerToStart, 1000);
  if (timerStart > 0) {
    timerStart--;
    document.querySelector('#timerStart').innerHTML = timerStart;
  } else if (timerStart <= 0) {
    menuMain.start = false;
  }
}

function TrueStart() {
  TimerToStart();
  // console.log(timerStart)

  setTimeout(() => {
    menuMain.start = false;
    document.querySelector('#timerStart').style.display = 'none';
    document.querySelector('#startSign').style.display = 'flex';
    decreaseTimer();
  }, 5000);
  setTimeout(() => {
    document.querySelector('#startSign').style.display = 'none';
  }, 6500);
  if (menuMain.start === true) {
    const music = '../audio/ambient_menu.wav';

    menu({ music });
  } else {
    if (menuMain.combatMusic === true) {
      const music = '../audio/Hard void (Finish - Rock 5).wav';
      menu({ music });
    } else {
      const music = '';
      menu({ music });
    }
  }
  document.querySelector('#infoPlayers').style.display = 'flex';
  document.querySelector('#timerStart').style.display = 'flex';
  document.querySelector('#pickMenu').style.display = 'none';
  document.querySelector('#pickMenuTwo').style.display = 'none';
  document.querySelector('#pickMenuThree').style.display = 'none';
  document.querySelector('#version').style.display = 'none';
}

// function restart when round ends
function TrueRestart() {
  player.health = 100;
  player3.health = 100;
  player2Reverse.health = 100;
  player4.health = 100;
  player5.health = 100;
  player6.health = 100;
  player7.health = 100;
  player8.health = 100;
  player9.health = 100;
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
  gsap.to('#playerHealth', {
    width: player9.health + '%',
  });

  playerReverse.health = 100;
  player2.health = 100;
  player3Reverse.health = 100;
  player4Reverse.health = 100;
  player5Reverse.health = 100;
  player6Reverse.health = 100;
  player7Reverse.health = 100;
  player8Reverse.health = 100;
  player9Reverse.health = 100;
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
  gsap.to('#player2Health', {
    width: player9Reverse.health + '%',
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
    player8Reverse.restart === false ||
    player9.restart === false ||
    player9Reverse.restart === false
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
    player9.restart = true;
    player9Reverse.restart = true;

    // // AI Player boolean value
    // if (player.AIHero === true) {
    //   player.AIHero = false;
    //   setTimeout(() => {
    //     player.AIHero = true;
    //   }, 1000);
    // }
    // playerReverse.AIHero = false;
    // player2.AIHero = false;
    // player2Reverse.AIHero = false;
    // player3.AIHero = false;
    // player3Reverse.AIHero = false;
    // player4.AIHero = false;
    // player4Reverse.AIHero = false;
    // player5.AIHero = false;
    // player5Reverse.AIHero = false;
    // player6.AIHero = false;
    // player6Reverse.AIHero = false;
    // player7.AIHero = false;
    // player7Reverse.AIHero = false;
    // player8.AIHero = false;
    // player8Reverse.AIHero = false;
    // player9.AIHero = false;
    // player9Reverse.AIHero = false;
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
    player9.position.x = 256;
    player9Reverse.position.x = 768;
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
      player9.restart = false;
      player9Reverse.restart = false;
    }, 1000);
  }

  // console.log(player2.dead);
  document.querySelector('#infoPlayers').style.display = 'flex';
  document.querySelector('#timerStart').style.display = 'flex';
  document.querySelector('#timerStart').style.display = 'flex';
  document.querySelector('#displayText').innerHTML = '';
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#EscapeMenu').style.display = 'none';
  document.querySelector('#restart').style.display = 'none';
  clearTimeout(timerId);
  clearTimeout(timerStartId);
  let diff = 30 - timer;
  // console.log(diff);
  document.querySelector('#timer').innerHTML =
    timer < 30 ? (timer += diff) : null;
  document.querySelector('#timerStart').innerHTML =
    timerStart === 0 ? (timerStart += 5) : null;
  menuMain.start = true;
  setTimeout(() => {
    menuMain.start = false;
    document.querySelector('#timerStart').style.display = 'none';
    decreaseTimer();
  }, 5000);
  TimerToStart();
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

function ListThreeBack() {
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#pickMenuTwo').style.display = 'flex';
  document.querySelector('#pickMenuThree').style.display = 'none';
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
function ClickableMenu() {
  document.querySelector('#EscapeMenu').style.display = 'flex';
}
// Escape menu
function EscapeClose() {
  document.querySelector('#EscapeMenu').style.display = 'none';
}

// settings function
function Settings() {
  document.querySelector('#mainMenu').style.display = 'none';
  document.querySelector('#settings').style.display = 'flex';
}

function ChangeLanguage() {
  if (language === 'eng') {
    language = 'ru';
  } else if (language === 'ru') {
    language = 'eng';
  }
  if (language === 'ru') {
    // Интерфейс в игре
    document.querySelector('#playerOne').innerHTML = 'Игрок 1';
    document.querySelector('#playerTwo').innerHTML = 'Игрок 2';
    document.querySelector('#escMenu').innerHTML = 'Меню настроек (Esc)';
    // Главное меню
    document.querySelector('#mainTitle').innerHTML = 'Бойцовский клуб';
    document.querySelector('#menuTitle').innerHTML = 'Меню';
    document.querySelector('#pickHeroes').innerHTML = 'Выбрать персонажа';
    document.querySelector('#menuSettings').innerHTML = 'Настройки';
    document.querySelector('#menuHowToPlay').innerHTML = 'Как играть';
    document.querySelector('#version').innerHTML = 'Версия: 0.10.4';
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
    document.querySelector('#language').innerHTML = 'Язык';
    document.querySelector('#changeLanguage').innerHTML = 'Изменить язык';
    document.querySelector('#combinationChange').innerHTML =
      'Комбинация: Shift + Alt';
    document.querySelector('#languageButton').innerHTML = 'Язык';
    document.querySelector('#audioButton').innerHTML = 'Звук';
    document.querySelector('#audioCombat').innerHTML = 'Музыка в бою';
    document.querySelector('#audioBack').innerHTML = 'Назад';
    document.querySelector('#languageBack').innerHTML = 'Назад';
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
    document.querySelector('#howOne2').innerHTML = '1 кнопка';
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
    document.querySelector('#pickEvilWizard1').innerHTML = 'Огненный волшебник';
    document.querySelector('#pickEvilWizardTwo1').innerHTML =
      'Темныё волшебник';
    document.querySelector('#pickFantasyWarriorTwo1').innerHTML =
      'Фэнтэзи воин';
    document.querySelector('#pickWarriorAxeTwo1').innerHTML = 'Воин с топором';

    // Игрок 2
    document.querySelector('#pickPlayerListTwo2').innerHTML = 'Игрок 2';
    document.querySelector('#pickEvilWizard2').innerHTML = 'Огненный волшебник';
    document.querySelector('#pickEvilWizardTwo2').innerHTML =
      'Тёмный волшебник';
    document.querySelector('#pickFantasyWarriorTwo2').innerHTML =
      'Фэнтэзи воин';
    document.querySelector('#pickWarriorAxeTwo2').innerHTML = 'Воин с топором';

    // Список два кнопки играть и  назад
    document.querySelector('#menuPlayTwo').innerHTML = 'Играть';
    document.querySelector('#backTwo').innerHTML = 'Назад';

    // Меню выбора героев - список 3
    // Игрок 1
    document.querySelector('#pickPlayerListThree1').innerHTML = 'Игрок 1';
    document.querySelector('#pickVampire1Player1').innerHTML = 'Вампир';

    // Игрок 2
    document.querySelector('#pickPlayerListThree2').innerHTML = 'Игрок 2';
    document.querySelector('#pickVampire1Player2').innerHTML = 'Вампир';

    // Список три кнопки играть и  назад
    document.querySelector('#menuPlayThree').innerHTML = 'Играть';
    document.querySelector('#heroListThree').innerHTML = 'Список 3';
    document.querySelector('#backThree').innerHTML = 'Назад';

    // Раунд
    document.querySelector('#startSign').innerHTML = 'ЗАДАЙТЕ ЖАРУ!!!';
    // Перезапустить и вернуться в меню
    document.querySelector('#restartButton').innerHTML = 'Перезапустить';
    document.querySelector('#restartMenu').innerHTML = 'Меню';
    // Назад кнопка - Как играть
    document.querySelector('#howToPlayBack').innerHTML = 'Назад';
    // Назад кнопка - Настройки
    document.querySelector('#settingsBack').innerHTML = 'Назад';
    // Меню escape
    document.querySelector('#EscapeMainTitle').innerHTML = 'Меню (esc)';
    document.querySelector('#EscapeMenuSettings').innerHTML = 'В главное меню';
    document.querySelector('#EscapeMenuRestart').innerHTML = 'Перезапустить';
    document.querySelector('#EscapeClose').innerHTML = 'Закрыть';
  } else if (language === 'eng') {
    // Interface in a game
    document.querySelector('#playerOne').innerHTML = 'Player 1';
    document.querySelector('#playerTwo').innerHTML = 'Player 2';
    document.querySelector('#escMenu').innerHTML = 'Menu control (Esc)';
    // Main menu
    document.querySelector('#mainTitle').innerHTML = 'Fighting club';
    document.querySelector('#menuTitle').innerHTML = 'Menu';
    document.querySelector('#pickHeroes').innerHTML = 'Pick heroes';
    document.querySelector('#menuSettings').innerHTML = 'Settings';
    document.querySelector('#menuHowToPlay').innerHTML = 'How to play';
    document.querySelector('#version').innerHTML = 'Version: 0.10.4';
    document.querySelector('#menuExit').innerHTML = 'Exit';
    // Settings
    document.querySelector('#settingsTitle').innerHTML = 'Settings';
    document.querySelector('#settingsAudioTitle').innerHTML = 'Audio settings';
    document.querySelector('#settingsMenuMusic').innerHTML = 'Menu music';
    document.querySelector('#settingsAttackMusic').innerHTML =
      'Attack sound and damaged sound';
    document.querySelector('#settingsDeathSound').innerHTML = 'Death sound';
    document.querySelector('#settingsMoveSound').innerHTML = 'Move sound';
    document.querySelector('#language').innerHTML = 'Language';
    document.querySelector('#changeLanguage').innerHTML = 'Change language';
    document.querySelector('#combinationChange').innerHTML =
      'Combination: Shift + Alt';
    document.querySelector('#languageButton').innerHTML = 'Language';
    document.querySelector('#audioButton').innerHTML = 'Audio';
    document.querySelector('#audioCombat').innerHTML = 'Music in combat';
    document.querySelector('#audioBack').innerHTML = 'Back';
    document.querySelector('#languageBack').innerHTML = 'Back';
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
    document.querySelector('#howOne2').innerHTML = '1 button';
    document.querySelector('#howTwo2').innerHTML = '2 button';
    document.querySelector('#howThree2').innerHTML = '3 button';
    document.querySelector('#howMoveLeft2').innerHTML = 'Move to the left';
    document.querySelector('#howMoveJump2').innerHTML = 'Jump';
    document.querySelector('#howMoveRight2').innerHTML = 'Move to the right';
    document.querySelector('#howLightAttack2').innerHTML = 'Light attack';
    document.querySelector('#howMiddleAttack2').innerHTML = 'Middle attack';
    document.querySelector('#howHardAttack2').innerHTML = 'Hard attack';
    // Menu
    //
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
    document.querySelector('#pickEvilWizard1').innerHTML = 'Fire Wizard';
    document.querySelector('#pickEvilWizardTwo1').innerHTML = 'Dark Wizard';
    document.querySelector('#pickFantasyWarriorTwo1').innerHTML =
      'Fantasy Warrior';
    document.querySelector('#pickWarriorAxeTwo1').innerHTML =
      'Warrior with axe';

    // Player 2
    document.querySelector('#pickPlayerListTwo2').innerHTML = 'Player 2';
    document.querySelector('#pickEvilWizard2').innerHTML = 'Fire Wizard';
    document.querySelector('#pickEvilWizardTwo2').innerHTML = 'Dark Wizard';
    document.querySelector('#pickFantasyWarriorTwo2').innerHTML =
      'Fantasy Warrior';
    document.querySelector('#pickWarriorAxeTwo2').innerHTML =
      'Warrior with axe';

    //ListTwo Play and back
    document.querySelector('#menuPlayTwo').innerHTML = 'Play';
    document.querySelector('#backTwo').innerHTML = 'Back';

    // List 3
    // Игрок 1
    document.querySelector('#pickPlayerListThree1').innerHTML = 'Player 1';
    document.querySelector('#pickVampire1Player1').innerHTML = 'Vampire';

    // Игрок 2
    document.querySelector('#pickPlayerListThree2').innerHTML = 'Player 2';
    document.querySelector('#pickVampire1Player2').innerHTML = 'Vampire';

    // Round
    document.querySelector('#startSign').innerHTML = 'LETS ROCK IT!!!';
    // List three and button back
    document.querySelector('#menuPlayThree').innerHTML = 'Play';
    document.querySelector('#heroListThree').innerHTML = 'List 3';
    document.querySelector('#backThree').innerHTML = 'Back';

    // Restart and menu
    document.querySelector('#restartButton').innerHTML = 'Restart';
    document.querySelector('#restartMenu').innerHTML = 'Menu';
    // Назад кнопка 1
    document.querySelector('#howToPlayBack').innerHTML = 'Back';
    // Назад кнопка - Настройки
    document.querySelector('#settingsBack').innerHTML = 'Back';
    // Меню escape
    document.querySelector('#EscapeMainTitle').innerHTML = 'Menu (esc)';
    document.querySelector('#EscapeMenuSettings').innerHTML = 'To main menu';
    document.querySelector('#EscapeMenuRestart').innerHTML = 'Restart';
    document.querySelector('#EscapeClose').innerHTML = 'Close';
  }
}

function AudioButton() {
  document.querySelector('#audioSettings').style.display = 'flex';
  document.querySelector('#settings').style.display = 'none';
}
function CombatMusic() {
  menuMain.combatMusic = !menuMain.combatMusic;
}
function BackAudio() {
  document.querySelector('#audioSettings').style.display = 'none';
  document.querySelector('#settings').style.display = 'flex';
}
function LanguageButton() {
  document.querySelector('#languageSettings').style.display = 'flex';
  document.querySelector('#settings').style.display = 'none';
}
function BackLanguage() {
  document.querySelector('#languageSettings').style.display = 'none';
  document.querySelector('#settings').style.display = 'flex';
}
function ChangeLanguageToEng() {
  language = 'eng';
  document.querySelector('#displayEng').style.display = 'flex';
  document.querySelector('#displayRu').style.display = 'none';
}

// changing volume menu music
let vol = document.querySelector('input[value="volume"]');
let volume = Number(vol.value);
volume = 0.2;
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
volumeFight = 0.2;
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
volDeath = 0.2;
// changing volume walking | jump sounds
let volMove = document.querySelector('input[value="volumeMove"]');
let volumeMove = Number(volMove.value);
volumeMove = 0.2;
const rangeValueMove = () => {
  const resultMove = document.getElementById('resultMove');
  const inputHandler = (e) => {
    volumeMove = e.target.value;
    resultMove.innerHTML = e.target.value;
  };
  console.log(`${volumeMove} = volumeMove`);
  volMove.addEventListener('change', inputHandler); // for IE8
};
