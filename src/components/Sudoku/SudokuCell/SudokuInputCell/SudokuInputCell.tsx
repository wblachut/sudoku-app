import React, { useState } from 'react';
import { CellInputDiv } from './Style';
import { Board, SudoEmptyCellProps } from '../../types';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CellInputElement from './CellInputElement';
import Picker from '../Picker/Picker';
import {
	usePopupState,
	bindToggle,
	bindPopper,
} from 'material-ui-popup-state/hooks';
import { useAppDispatch } from '../../../App/context/store.hooks';
import { setSudokuBoard, getSudokuSelector } from '../../sudokuSlice';
import { useSelector } from 'react-redux';

export const SudokuEmptyCell = ({
	cellIndex,
	rowIndex,
	board,
}: SudoEmptyCellProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleClickAway = (): void => setIsOpen(false);
	const handleClick = (): void => setIsOpen((isOpen) => !isOpen);
	const popupState = usePopupState({
		variant: 'popper',
		popupId: 'sudokuPopper',
	});

	const solution = useSelector(getSudokuSelector).solution;
	const dispatch = useAppDispatch();
	const setBoard = (board: Board) => {
		dispatch(setSudokuBoard(board));
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<CellInputDiv onClick={handleClick}>
				<CellInputElement
					cords={[rowIndex, cellIndex]}
					board={board}
					solution={solution}
					popupState={popupState}
					setBoard={setBoard}
					{...bindToggle(popupState)}
				/>
				{isOpen && (
					<Popper {...bindPopper(popupState)} transition disablePortal={true}>
						{({ TransitionProps }) => (
							<Grow {...TransitionProps} timeout={500}>
								<Picker
									cords={[rowIndex, cellIndex]}
									board={board}
									solution={solution}
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
