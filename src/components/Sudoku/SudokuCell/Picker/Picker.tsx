import React from 'react';
import './Picker.scss';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import { bindPopper } from 'material-ui-popup-state';
import { PickerProps, PickerTileProps } from '../../types';
import { onPickerClick } from '../index';

export const Picker = ({
	inputRef,
	board,
	popupState,
	setBoard,
}: PickerProps): JSX.Element => {
	return (
		<Popper {...bindPopper(popupState)} transition disablePortal={true}>
			{({ TransitionProps }) => (
				<Grow {...TransitionProps} timeout={500}>
					<div className="sudoku-picker">
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
					</div>
				</Grow>
			)}
		</Popper>
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
		<div
			role="button"
			className="sudoku-picker-box"
			onClick={(e) => onPickerClick(e, board, inputRef, setBoard)}
		>
			{tileNumber + 1}
		</div>
	);
};
