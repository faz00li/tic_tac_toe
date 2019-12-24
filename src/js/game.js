

// ***** GAME *****

import { Board } from './board.js';

export class Game {

  constructor() {
    this.gameOver = false;
    this.whoseTurn = 0;
    this.board = new Board();
    this.turnCounter = 1;
    this.players = [];
  }

  setGame() {
    this.board.clearBoard();
  }

  takeTurn(squareId) {
    this.board.markSquare(squareId, this.whoseTurn);
    this.gameOver = this.board.checkWinConditions(this.whoseTurn);
    console.log("GAME OVER: " + this.gameOver);

    if(this.whoseTurn === 0)
      this.whoseTurn = 1;
    else
      this.whoseTurn = 0;
  }

  checkIfMarked(squareId) {

    if (this.board.board[squareId] === 1){
      return true;
    }

    else if(this.board.board[squareId] === 2) {
      return true;
    }

    else {
      return false;
    }
  }
  printBoard() {
    this.board.printBoard();
  }

  checkGameOver() {
    if (this.gameOver) {
      console.log("GAME OVER");
      return true;
    }
    else
      return false;
  }
}

// initializeGame() {
//
//   this.gameOver = false;
//
//   // var player1 = new Player("X", 3);
//   // var player2 = new Player("O", 6);
//   // this.players.push(player1);
//   // this.players.push(player2);
//
//   this.whoseTurn = 1;
//
//   this.board = new Board;
// }
