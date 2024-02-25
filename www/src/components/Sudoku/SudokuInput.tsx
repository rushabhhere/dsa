import clsx from 'clsx';
import { type FC } from 'react';

interface Props {
  sudoku: string[][];
  setSudoku: React.Dispatch<React.SetStateAction<string[][]>>;
  inputCells: boolean[][];
  setInputCells: React.Dispatch<React.SetStateAction<boolean[][]>>;
  solved: boolean;
}

const SudokuInput: FC<Props> = ({
  sudoku,
  setSudoku,
  inputCells,
  setInputCells,
  solved,
}) => {
  return (
    <div className="w-[270px] sm:w-[450px]">
      <div className="grid grid-cols-9 border-black border-2 border-r-[1px] border-b-[1px]">
        {sudoku.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              disabled={solved}
              type="text"
              className={clsx(
                'text-center font-bold text-xl sm:text-4xl border-[1px] border-black outline-none h-[30px] sm:h-[50px]',
                {
                  'border-r-2': j % 3 === 2,
                  'border-b-2': i % 3 === 2,
                  'bg-gray-300': inputCells[i][j],
                }
              )}
              value={cell === '.' ? '' : cell}
              onChange={e => {
                const value = e.target.value;

                if (
                  value.length > 1 ||
                  (value.length === 1 && !/^[1-9]$/.test(value))
                ) {
                  return;
                }

                setSudoku((prev: string[][]) => {
                  const newSudoku = [...prev];
                  newSudoku[i][j] = value.length === 0 ? '.' : value;
                  return newSudoku;
                });

                setInputCells((prev: boolean[][]) => {
                  const newInputCells = [...prev];
                  newInputCells[i][j] = value.length !== 0;
                  return newInputCells;
                });
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SudokuInput;
