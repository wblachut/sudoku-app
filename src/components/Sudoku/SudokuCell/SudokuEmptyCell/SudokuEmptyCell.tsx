import React, { useRef, useState } from 'react';
import PopupState from 'material-ui-popup-state';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { SudoEmptyCellProps } from '../../types';
import CellInputElement from './CellInputElement';
import Picker from '../Picker/Picker';

export const SudokuEmptyCell = ({
	col,
	row,
	board,
	setBoard,
}: SudoEmptyCellProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const handleClickAway = (): void => setIsOpen(false);
	const handleClick = (): void => setIsOpen((open) => !open);

	return (
		<PopupState variant="popper" popupId="sudoku-popper">
			{(popupState) => (
				<ClickAwayListener onClickAway={handleClickAway}>
					<div className="sudoku-cell-input-div" onClick={handleClick}>
						<CellInputElement
							col={col}
							row={row}
							board={board}
							inputRef={inputRef}
							popupState={popupState}
							setBoard={setBoard}
						/>
						{isOpen && (
							<Picker
								board={board}
								inputRef={inputRef}
								popupState={popupState}
								setBoard={setBoard}
							/>
						)}
					</div>
				</ClickAwayListener>
			)}
		</PopupState>
	);
};

export default SudokuEmptyCell;
