

// ***** BOARD *****

export class Board {

  constructor() {
    this.board = new Array(9),
    this.winConditions = new Array(8);
  }

  updateWinConditions() {
    // rows
    var w0 = this.board[0] + this.board[1] + this.board[2];
    var w1 = this.board[3] + this.board[4] + this.board[5];
    var w2 = this.board[6] + this.board[7] + this.board[8];

    // columns
    var w3 = this.board[0] + this.board[3] + this.board[6];
    var w4 = this.board[1] + this.board[4] + this.board[7];
    var w5 = this.board[2] + this.board[5] + this.board[8];

    // diag
    var w6 = this.board[0] + this.board[4] + this.board[8];
    var w7 = this.board[2] + this.board[4] + this.board[6];

    this.winConditions = [w0, w1 ,w2, w3, w4, w5, w6, w7];
  }
  checkWinConditions(whoseTurn) {
    var winCheck = (whoseTurn + 1) * 3;
    this.updateWinConditions();

    for(var i = 0; i < this.winConditions.length; i++) {
      if ( this.winConditions[i] === (winCheck) )
        return true;
    }
    return false;
  }
  markSquare(squareId, whoseTurn) {
    this.board[squareId] = whoseTurn + 1;
  }
  printBoard() {
    var boardContent = "";
    for(var i = 0; i < this.board.length; i++)
      boardContent += i +":" + "(" + this.board[i]+ ") ";
    console.log(boardContent);
  }
  printWinConditions() {
    var winConditionsContent = "";
    for(var i = 0; i < this.winConditions.length; i++)
      winConditionsContent += i +":" + "(" + this.winConditions[i]+ ") ";
    console.log(winConditionsContent);
  }
  clearBoard() {
    for(var i = 0; i < this.board.length; i++)
      this.board[i] = -100;
  }

}
