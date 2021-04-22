import React from 'react';
import { SudoRowProps } from './types';
import SudokuCell from './SudokuCell/SudokuCell';

export const SudokuRow = ({ rowIndex, board }: SudoRowProps): JSX.Element => {
	return (
		<React.Fragment>
			{board[rowIndex].map((cell, cellIndex: number) => {
				return (
					<SudokuCell
						rowIndex={rowIndex}
						cellIndex={cellIndex}
						cell={cell}
						board={board}
						key={`row${rowIndex}col${cellIndex}`}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default SudokuRow;
