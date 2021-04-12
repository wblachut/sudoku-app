import React, { useRef, useState } from 'react';
import './SudokuCell.scss';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { SudoCellProps } from '../types';
import { onCellInput, onPickerClick } from './index';

export const SudokuCell = ({
	i,
	j,
	val,
	board,
	setBoard,
}: SudoCellProps): JSX.Element => {
	const inputRef = useRef<any>();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleClickAway = (): void => setIsOpen(false);
	const handleClick = (): void => setIsOpen((open) => !open);

	return (
		<div
			className="sudoku-cell"
			data-cord={[j, i]}
			key={(j.toString(), i.toString())}
		>
			{val !== 0 && val !== 10 && val}
			{val === 10 && <span className="sudoku-error">x</span>}
			{val === 0 && (
				<PopupState variant="popper" popupId="sudoku-popper">
					{(popupState) => (
						<ClickAwayListener onClickAway={handleClickAway}>
							<div className="sudoku-cell__input-div" onClick={handleClick}>
								<input
									type="tel"
									maxLength={1}
									data-cord={[j, i]}
									ref={inputRef}
									{...bindToggle(popupState)}
									onInput={(e) => onCellInput(e, board, setBoard)}
								></input>
								{isOpen ? (
									<Popper
										{...bindPopper(popupState)}
										transition
										disablePortal={true}
									>
										{({ TransitionProps }) => (
											<Grow {...TransitionProps} timeout={500}>
												<div className="sudoku-picker">
													{board.map((arr, i) => {
														return (
															<div
																key={i}
																role="button"
																className="sudoku-picker-box"
																onClick={(e) =>
																	onPickerClick(e, board, inputRef, setBoard)
																}
															>
																{i + 1}
															</div>
														);
													})}
												</div>
											</Grow>
										)}
									</Popper>
								) : null}
							</div>
						</ClickAwayListener>
					)}
				</PopupState>
			)}
		</div>
	);
};

export default SudokuCell;
