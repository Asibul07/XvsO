import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'X vs O';
  board: string[] = ['', '', '', '', '', '', '', '', ''];
  currentPlayer: string = '✘';
  aiPlayer: string = 'O';
  gameOver: boolean = false;
  round: number = 0;
  isTwoPlayerMode: boolean = false;
  message: string = '';
  isWaitingForAi: boolean = false;
  aiScore: number = 0;
  humanScore: number = 0;
  player2Score: number = 0;
  tie: number = 0;

  toggleMode() {
    this.isTwoPlayerMode = !this.isTwoPlayerMode;
    this.resetGame();
  }

  // winning condition check
  winning(board: string[], player: string): boolean {
    return (
      (board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)
    );
  }

  playerMove(index: number) {
    if (!this.gameOver && this.board[index] === '' && !this.isWaitingForAi) {
      this.move(index, this.currentPlayer);

      if (!this.isTwoPlayerMode && !this.gameOver) {
        this.isWaitingForAi = true;
        setTimeout(() => {
          const aiIndex = this.bestMoveForAI();
          this.move(aiIndex, this.aiPlayer);
          this.isWaitingForAi = false;
        }, 500);
      }
    }
  }

  move(index: number, player: string) {
    if (this.gameOver || this.board[index]) {
      return;
    }
    this.board[index] = player;
    this.round++;
    if (this.winning(this.board, player)) {
      this.gameOver = true;
      setTimeout(() => {
        if (this.isTwoPlayerMode) {
          this.message = `${
            player === '✘' ? '1st Player' : '2nd Player'
          } wins!`;
          if (player === '✘') {
            this.humanScore++;
          } else {
            this.player2Score++;
          }
        } else {
          this.message = `${player === '✘' ? 'Human' : 'AI'} wins!`;

          if (player === '✘') {
            this.humanScore++;
          } else {
            this.aiScore++;
          }
        }
        this.resetGame();
      }, 500);
    } else if (this.round > 8) {
      this.gameOver = true;
      setTimeout(() => {
        this.message = "It's a tie!";
        this.tie++;
        this.resetGame();
      }, 500);
    } else {
      if (this.isTwoPlayerMode) {
        this.currentPlayer = this.currentPlayer === '✘' ? 'O' : '✘';
      }
    }
  }

  bestMoveForAI(): number {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] === '') {
        this.board[i] = this.aiPlayer;
        if (this.winning(this.board, this.aiPlayer)) {
          this.board[i] = '';
          return i;
        }
        this.board[i] = '';
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] === '') {
        this.board[i] = '✘';
        if (this.winning(this.board, '✘')) {
          this.board[i] = '';
          return i;
        }
        this.board[i] = '';
      }
    }

    return this.minimax(this.board, this.aiPlayer).index;
  }

  minimax(reboard: string[], player: string): any {
    const availableSpots = this.avail(reboard);

    if (this.winning(reboard, '✘')) {
      return { score: -10 };
    } else if (this.winning(reboard, 'O')) {
      return { score: 10 };
    } else if (availableSpots.length === 0) {
      return { score: 0 };
    }

    const moves: any[] = [];

    //analyse empty space
    availableSpots.forEach((spot) => {
      const move: any = {};
      move.index = spot;
      reboard[spot] = player;

      if (player === this.aiPlayer) {
        const result = this.minimax(reboard, '✘');
        move.score = result.score;
      } else {
        const result = this.minimax(reboard, this.aiPlayer);
        move.score = result.score;
      }

      reboard[spot] = '';
      moves.push(move);
    });

    //check best possible moves for aibot using Minimax algorithm
    let bestMove;
    if (player === this.aiPlayer) {
      let bestScore = -20;
      moves.forEach((move) => {
        if (move.score > bestScore) {
          bestScore = move.score;
          bestMove = move;
        }
      });
    } else {
      let bestScore = 20;
      moves.forEach((move) => {
        if (move.score < bestScore) {
          bestScore = move.score;
          bestMove = move;
        }
      });
    }

    return bestMove;
  }

  avail(reboard: string[]): number[] {
    return reboard
      .map((value, index) => (value === '' ? index : null))
      .filter((val) => val !== null);
  }

  //reset function
  resetGame() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = '✘';
    this.gameOver = false;
    this.round = 0;
    this.isWaitingForAi = false;
    setTimeout(() => {
      this.message = '';
    }, 1000);
  }
}
