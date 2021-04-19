import React from 'react';
import { SudoRowProps } from './types';
import SudokuCell from './SudokuCell/SudokuCell';

export const SudokuRow = ({
	rowIndex,
	board,
	setBoard,
}: SudoRowProps): JSX.Element => {
	return (
		<React.Fragment>
			{board[rowIndex].map((cell, cellIndex: number) => {
				return (
					<SudokuCell
						rowIndex={rowIndex}
						cellIndex={cellIndex}
						cellValue={cell}
						board={board}
						setBoard={setBoard}
						key={`row${rowIndex}col${cellIndex}`}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default SudokuRow;
