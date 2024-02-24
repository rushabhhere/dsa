import { useState, type FC } from 'react';
import ProblemWrapper from '../../components/ProblemWrapper';
import SudokuInput from '../../components/Sudoku/SudokuInput';
import solveSudoku from '../../algorithms/sudoku';

interface Props {
  // props
}

const Sudoku: FC<Props> = () => {
  const [sudoku, setSudoku] = useState<string[][]>([
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ]);

  const solve = () => {
    setSudoku(solveSudoku(sudoku));
  };

  return (
    <ProblemWrapper problemName="Sudoku Solver">
      <h1 className="text-2xl font-bold text-red-500">Sudoku Solver</h1>

      <div className="mt-5">
        <SudokuInput sudoku={sudoku} setSudoku={setSudoku} />
        <button
          onClick={solve}
          className="px-4 py-2 mt-5 text-lg bg-green-300 rounded-md hover:bg-green-400"
        >
          Solve
        </button>
      </div>
    </ProblemWrapper>
  );
};

export default Sudoku;
