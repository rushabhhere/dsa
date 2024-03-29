function isValidInput(sudoku: string[][]): boolean {
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] !== '.') {
        if (!isValid(sudoku, i, j, sudoku[i][j])) {
          return false;
        }
      }
    }
  }
  return true;
}

function solveSudoku(sudoku: string[][]): string[][] {
  const copy = sudoku.map(row => [...row]);
  solve(copy);
  return copy;
}

function solve(board: string[][]) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        for (let c = 1; c <= 9; c++) {
          const character = c.toString();
          if (isValid(board, i, j, character)) {
            board[i][j] = character;
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = '.';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(
  board: string[][],
  row: number,
  col: number,
  c: string
): boolean {
  for (let i = 0; i < 9; i++) {
    if (i !== row && board[i][col] === c) {
      return false;
    }
    if (i !== col && board[row][i] === c) {
      return false;
    }

    const x = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const y = 3 * Math.floor(col / 3) + (i % 3);
    if (x !== row && y !== col && board[x][y] === c) {
      return false;
    }
  }
  return true;
}

export default solveSudoku;
export { isValidInput };
