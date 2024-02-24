#include <iostream>
#include <vector>

using std::vector;

class Solution {
 public:
  void solveSudoku(vector<vector<char>>& board) { solve(board); }

  bool solve(vector<vector<char>>& board) {
    for (int i = 0; i < board.size(); i++) {
      for (int j = 0; j < board[0].size(); j++) {
        if (board[i][j] == '.') {
          // filling in a valid value in the empty cell
          for (char c = '1'; c <= '9'; c++) {
            if (isValid(board, i, j, c)) {
              board[i][j] = c;

              // testing if the value filled in holds up
              // for future iterations
              if (solve(board)) {
                return true;
              } else {
                // clearing current value seeing it fails in the future
                board[i][j] = '.';
              }
            }
          }

          // returning false since unable to fill in any value
          // in empty cell
          return false;
        }
      }
    }

    // once all the cells are iterated
    return true;
  }

  bool isValid(vector<vector<char>>& board, int row, int col, char c) {
    for (int i = 0; i < 9; i++) {
      if (board[i][col] == c) return false;

      if (board[row][i] == c) return false;

      if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c)
        return false;
    }
    return true;
  }
};

int main() {
  Solution solver;

  // vector<vector<char>> board = {{'3', '.', '.', '.', '8', '.', '9', '.',
  // '.'},
  //                               {'.', '8', '.', '.', '.', '6', '.', '.',
  //                               '.'},
  //                               {'1', '.', '9', '.', '.', '2', '.', '.',
  //                               '4'},
  //                               {'.', '7', '.', '8', '5', '.', '.', '4',
  //                               '9'},
  //                               {'5', '.', '3', '.', '.', '.', '2', '.',
  //                               '8'},
  //                               {'6', '9', '.', '.', '4', '1', '.', '3',
  //                               '.'},
  //                               {'4', '.', '.', '9', '.', '.', '8', '.',
  //                               '1'},
  //                               {'.', '.', '.', '3', '.', '.', '.', '6',
  //                               '.'},
  //                               {'.', '.', '5', '.', '7', '.', '.', '.',
  //                               '2'}};

  vector<vector<char>> board = {{'.', '.', '.', '.', '.', '.', '.', '.', '.'},
                                {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
                                {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
                                {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
                                {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
                                {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
                                {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
                                {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
                                {'.', '.', '.', '.', '.', '.', '.', '.', '.'}};

  solver.solveSudoku(board);

  for (int i = 0; i < board.size(); i++) {
    for (int j = 0; j < board[0].size(); j++) {
      std::cout << board[i][j] << " ";
    }
    std::cout << std::endl;
  }

  return 0;
}
