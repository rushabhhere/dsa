import { useState, type FC } from 'react';
import ProblemWrapper from '../../components/ProblemWrapper';
import SudokuInput from '../../components/Sudoku/SudokuInput';
import solveSudoku, { isValidInput } from '../../algorithms/sudoku';

interface Props {
  // props
}

const Sudoku: FC<Props> = () => {
  const initialState = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ];

  const initialInputCells = [
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
  ];

  const [sudoku, setSudoku] = useState<string[][]>(initialState);

  const [inputCells, setInputCells] = useState<boolean[][]>(initialInputCells);

  const [solved, setSolved] = useState<boolean>(false);

  const solve = () => {
    if (!isValidInput(sudoku)) {
      alert('Invalid input');
    } else {
      setSudoku(solveSudoku(sudoku));
      setSolved(true);
    }
  };

  const reset = () => {
    setSudoku(initialState);

    setInputCells(initialInputCells);

    setSolved(false);
  };

  return (
    <ProblemWrapper problemName="Sudoku Solver">
      <h1 className="text-2xl font-bold text-red-500">Sudoku Solver</h1>

      <div className="mt-5">
        <SudokuInput
          sudoku={sudoku}
          setSudoku={setSudoku}
          inputCells={inputCells}
          setInputCells={setInputCells}
          solved={solved}
        />
        <button
          onClick={solve}
          className="px-4 py-2 mt-5 text-lg bg-green-300 rounded-md hover:bg-green-400"
        >
          Solve
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 mt-5 ml-3 text-lg bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Reset
        </button>
      </div>
    </ProblemWrapper>
  );
};

export default Sudoku;
