import React from 'react';
import { SudoRowProps } from './types';
import SudokuCell from './SudokuCell/SudokuCell';
import { uuid } from 'uuidv4';

export const SudokuRow = ({
	array,
	row,
	board,
	setBoard,
}: SudoRowProps): JSX.Element => {
	return (
		<React.Fragment>
			{array.map((element, col: number) => {
				return (
					<SudokuCell
						key={uuid()}
						col={col}
						row={row}
						element={element}
						board={board}
						setBoard={setBoard}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default SudokuRow;
