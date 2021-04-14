import React from 'react';
import './Picker.scss';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import { bindPopper } from 'material-ui-popup-state';
import { PickerProps, PickerTileProps } from '../../types';
import { onPickerClick } from '../index';
import { uuid } from 'uuidv4';

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
						{board.map((array, index) => {
							return (
								<PickerTile
									element={index}
									key={uuid()}
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
	element,
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
			{element + 1}
		</div>
	);
};
