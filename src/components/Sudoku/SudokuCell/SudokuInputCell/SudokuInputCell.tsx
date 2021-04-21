import React, { useRef, useState } from 'react';
import {
	usePopupState,
	bindToggle,
	bindPopper,
} from 'material-ui-popup-state/hooks';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { SudoEmptyCellProps } from '../../types';
import CellInputElement from './CellInputElement';
import Picker from '../Picker/Picker';
import { CellInputDiv } from './Style';

export const SudokuEmptyCell = ({
	cellIndex,
	rowIndex,
	board,
	setBoard,
}: SudoEmptyCellProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const handleClickAway = (): void => setIsOpen(false);
	const handleClick = (): void => setIsOpen((isOpen) => !isOpen);
	const popupState = usePopupState({
		variant: 'popper',
		popupId: 'sudokuPopper',
	});

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<CellInputDiv onClick={handleClick}>
				<CellInputElement
					rowIndex={rowIndex}
					cellIndex={cellIndex}
					board={board}
					inputRef={inputRef}
					popupState={popupState}
					setBoard={setBoard}
					{...bindToggle(popupState)}
				/>
				{isOpen && (
					<Popper {...bindPopper(popupState)} transition disablePortal={true}>
						{({ TransitionProps }) => (
							<Grow {...TransitionProps} timeout={500}>
								<Picker
									board={board}
									inputRef={inputRef}
									// popupState={popupState}
									setBoard={setBoard}
								/>
							</Grow>
						)}
					</Popper>
				)}
			</CellInputDiv>
		</ClickAwayListener>
	);
};

export default SudokuEmptyCell;
