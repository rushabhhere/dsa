// component to take sudoku input
import clsx from 'clsx';
import { type FC } from 'react';

interface Props {
  sudoku: string[][];
  setSudoku: React.Dispatch<React.SetStateAction<string[][]>>;
}

const SudokuInput: FC<Props> = ({ sudoku, setSudoku }) => {
  return (
    <div className="w-[450px]">
      <div className="grid grid-cols-9 border-black border-2 border-r-[1px] border-b-[1px]">
        {sudoku.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              type="text"
              className={clsx(
                'text-center border-[1px] border-black outline-none h-[50px]',
                { 'border-r-2': j % 3 === 2, 'border-b-2': i % 3 === 2 }
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
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SudokuInput;
