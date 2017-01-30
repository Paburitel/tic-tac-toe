class TicTacToe {
    constructor() {
        this._player = true // if "x" or false if "0";
        this._board = [
            ["", "" , ""],
            ["", "" , ""],
            ["", "" , ""]
        ]; // initial data should be a string, except "0";
        this._gameOver = false;
        this._isDrow = true;
        this._drowCounter = 0;
    }

    getCurrentPlayerSymbol() {
        return this._player ? "x" : "o";
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this._isDrow || this._gameOver) return;
        let turn = this._board[rowIndex][columnIndex];
        if (this._isTurn(turn)) {
            return this.getCurrentPlayerSymbol();
        }
        this._player ? this._board[rowIndex][columnIndex] = 1 : this._board[rowIndex][columnIndex] = 0;
        this._player ? this._player = false : this._player = true;
        this._drowCounter++;
        if (this._drowCounter > 4) {
            if (this._checkWinner(rowIndex, columnIndex)) {
                this._gameOver = true;
            }
        }
        if (this._drowCounter === 9) {
            this._isDrow = false;
        }
        return this.getCurrentPlayerSymbol();
    }

    isFinished() {
        if (this._gameOver || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }



    getWinner() {
        if (this._gameOver) {
            return this._player ? "o" : "x";
        } else {
            return null;
        }
    }

    noMoreTurns() {
        return !this._isDrow;
    }

    isDraw() {
        if (!this._isDrow && !this._gameOver) return true;
        return false;
    }

    getFieldValue(rowIndex, columnIndex) {
        let turn = this._board[rowIndex][columnIndex];
        if ( this._isTurn(turn) ) {
            return turn == 1 ? "x" : "o";
        } else {
            return null;
        }
    }

    _isTurn(turn) {
       return !isNaN(parseFloat(turn)) && isFinite(turn);
    }

    _checkWinner(rowIndex , columnIndex) {
        let player = this._player ? 0 : 1,
            length = this._board.length,

            constLength = this._board.length,
            counter = 0;
        while (length--) {
            if (this._board[rowIndex][length] === player) ++counter;
            if (counter === constLength) {
                return true;
            }
        }

        length = this._board.length;
        counter = 0;
        while (length--) {
            if (this._board[length][columnIndex] === player) ++counter;
            if (counter === constLength) {
                return true;
            }
        }

        length = this._board.length;
        counter = 0;
        while (length--) {
            if (this._board[length][length] === player) ++counter;
            if (counter === constLength) {
                return true;
            }
        }

        length = -1;
        counter = 0;
        while (++length < constLength) {
            if (this._board[constLength - length - 1][length] === player) ++counter;
            if (counter === constLength) {
                return true;
            }
        }
    }
}

module.exports = TicTacToe;










