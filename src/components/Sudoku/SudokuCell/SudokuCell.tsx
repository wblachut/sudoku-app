import React from 'react';
import './SudokuCell.scss';
import { SudoCellProps } from '../types';
import SudokuEmptyCell from './SudokuEmptyCell/SudokuEmptyCell';
import { uuid } from 'uuidv4';

const emptyCellValue = 0;
const errorCellElement = 10;

export const SudokuCell = ({
	col,
	row,
	element,
	board,
	setBoard,
}: SudoCellProps): JSX.Element => {
	return (
		<div className="sudoku-cell" data-cord={[row, col]} key={uuid()}>
			{element !== emptyCellValue && element !== errorCellElement && element}
			{element === errorCellElement && (
				<span className="sudoku-invalid-element">x</span>
			)}
			{element === emptyCellValue && (
				<SudokuEmptyCell
					col={col}
					row={row}
					board={board}
					setBoard={setBoard}
				/>
			)}
		</div>
	);
};

export default SudokuCell;
