import React from 'react';
import { SudoCellProps } from '../types';
import SudokuInputCell from './SudokuInputCell/SudokuInputCell';
import { CellDiv, ValidateSpan } from './Style';

export const SudokuCell = ({
	rowIndex,
	cellIndex,
	cell,
	board,
	setBoard,
}: SudoCellProps): JSX.Element => {
	return (
		<CellDiv
			className="sudoku-cell"
			data-cord={[rowIndex, cellIndex]}
			key={`row${rowIndex}col${cellIndex}`}
		>
			{cell.readOnly && cell.value}
			{cell.value !== 0 && !cell.valid && (
				// need to add && isValidating
				<ValidateSpan>{cell.value}</ValidateSpan>
				// <ValidateSpan color >{cell.value}</ValidateSpan>
			)}
			{cell.value === 0 && (
				// change to !call.readOnly && isValidating
				<SudokuInputCell
					rowIndex={rowIndex}
					cellIndex={cellIndex}
					board={board}
					setBoard={setBoard}
				/>
			)}
		</CellDiv>
	);
};

export default SudokuCell;
