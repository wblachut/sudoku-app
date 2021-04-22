import React from 'react';
import { SudoCellProps } from '../types';
import SudokuInputCell from './SudokuInputCell/SudokuInputCell';
import { CellDiv, InvalidSpan, ValidSpan } from './Style';
import { useSelector } from 'react-redux';
import { getSudokuSelector } from '../sudokuSlice';

export const SudokuCell = ({
	rowIndex,
	cellIndex,
	cell,
	board,
}: SudoCellProps): JSX.Element => {
	const isValidating = useSelector(getSudokuSelector).validating;
	// const spanColor = cell.isValid ? 'lime' : 'lightcoral';

	return (
		<CellDiv
			className="sudoku-cell"
			data-cord={[rowIndex, cellIndex]}
			key={`row${rowIndex}col${cellIndex}`}
		>
			{cell.isStatic && cell.value}
			{cell.value !== 0 && !cell.isValid && isValidating && (
				// Use validateSpan with props instead ?
				// <ValidateSpan color >{cell.value}</ValidateSpan>
				<InvalidSpan>{cell.value}</InvalidSpan>
			)}
			{!cell.isStatic && cell.isValid && isValidating && (
				<ValidSpan>{cell.value}</ValidSpan>
			)}
			{!cell.isStatic && !isValidating && (
				<SudokuInputCell
					rowIndex={rowIndex}
					cellIndex={cellIndex}
					board={board}
				/>
			)}
		</CellDiv>
	);
};

export default SudokuCell;
