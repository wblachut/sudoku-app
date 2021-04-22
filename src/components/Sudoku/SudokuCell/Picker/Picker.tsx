import React from 'react';
import { PickerProps, PickerTileProps } from '../../types';
import { onPickerClick } from '../index';
import { PickerDiv, TileDiv } from './Style';

export const Picker = ({
	cords,
	board,
	solution,
	setBoard,
}: PickerProps): JSX.Element => {
	return (
		<PickerDiv>
			{board.map((row, rowIndex) => {
				return (
					<PickerTile
						cords={cords}
						tileNumber={rowIndex}
						key={`tile${rowIndex}`}
						board={board}
						solution={solution}
						setBoard={setBoard}
					/>
				);
			})}
		</PickerDiv>
	);
};

export default Picker;

const PickerTile = ({
	cords,
	tileNumber,
	board,
	solution,
	setBoard,
}: PickerTileProps): JSX.Element => {
	return (
		<TileDiv
			role="button"
			className="sudoku-picker-box"
			onClick={(e) => onPickerClick(e, board, solution, cords, setBoard)}
		>
			{tileNumber + 1}
		</TileDiv>
	);
};
