import React from 'react';
import { PickerProps, PickerTileProps } from '../../types';
import { onPickerClick } from '../index';
import { PickerDiv, TileDiv } from './Style';

export const Picker = ({
	inputRef,
	board,
	setBoard,
}: PickerProps): JSX.Element => {
	return (
		<PickerDiv>
			{board.map((row, rowIndex) => {
				return (
					<PickerTile
						tileNumber={rowIndex}
						key={`tile${rowIndex}`}
						inputRef={inputRef}
						board={board}
						setBoard={setBoard}
					/>
				);
			})}
		</PickerDiv>
	);
};

export default Picker;

const PickerTile = ({
	tileNumber,
	inputRef,
	board,
	setBoard,
}: PickerTileProps): JSX.Element => {
	return (
		<TileDiv
			role="button"
			className="sudoku-picker-box"
			onClick={(e) => onPickerClick(e, board, inputRef, setBoard)}
		>
			{tileNumber + 1}
		</TileDiv>
	);
};
