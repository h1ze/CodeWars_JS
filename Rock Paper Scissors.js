// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
    let msg1 = 'Player 1 won!';
    let msg2 = 'Player 2 won!';
    return p1 == p2 ? 'Draw!' : p1 == 'rock' && p2 == 'scissors' ? msg1 :
    p1 == 'paper' && p2 == 'rock' ? msg1 :
    p1 == 'scissors' && p2 == 'paper' ? msg1 : msg2;
};

console.log(rps('scissors','paper'));

const rps2 = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };

  console.log(rps2('scissors','rock'));