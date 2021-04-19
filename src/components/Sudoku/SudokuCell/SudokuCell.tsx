import React from 'react';
import './SudokuCell.scss';
import { SudoCellProps } from '../types';
import SudokuEmptyCell from './SudokuEmptyCell/SudokuEmptyCell';

const EMPTY = 0;
const ERROR = 10;

export const SudokuCell = ({
	rowIndex,
	cellIndex,
	cellValue,
	board,
	setBoard,
}: SudoCellProps): JSX.Element => {
	return (
		<div
			className="sudoku-cell"
			data-cord={[rowIndex, cellIndex]}
			key={`row${rowIndex}col${cellIndex}`}
		>
			{cellValue !== EMPTY && cellValue !== ERROR && cellValue}
			{cellValue === ERROR && <span className="sudoku-invalid-element">x</span>}
			{cellValue === EMPTY && (
				<SudokuEmptyCell
					rowIndex={rowIndex}
					cellIndex={cellIndex}
					board={board}
					setBoard={setBoard}
				/>
			)}
		</div>
	);
};

export default SudokuCell;
