import React from 'react';
// import React, { useState, useEffect } from 'react';
import './sudoku.scss';
import { emptySudokuBoard } from '../../utils/utilityFunctions';
// import BoxWrapper from './BoxWrapper';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Grow from '@material-ui/core/Grow';

type Board = number[][] | undefined; // import types ??
type SudoCellProps = {
	i: number;
	j: number;
	val: number;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board | undefined>>;
};

export const Sudoku = ({
	i,
	j,
	val,
	board,
	setBoard,
}: SudoCellProps): JSX.Element => {
	const onCellInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
		const cords = e.currentTarget.getAttribute('data-cord');
		if (board && cords) {
			const x = cords[1];
			const y = cords[0];
			console.log('Cell Input', y, x, e.currentTarget.value);
			console.log('Replace', board[1][5]);
			// console.log('Replace', board[y][x]);
			const updatedBoard = Object.assign(board);
			// const updatedBoard = [...board];
			updatedBoard[y][x] = +e.currentTarget.value;
			setBoard(updatedBoard);
		}
		console.log(board);
	};

	const onPickerClick = (e: React.MouseEvent<HTMLDivElement>) => {
		// const popper = document.getElementById('sudoku-popper')!;
		console.log(document.getElementById('sudoku-popper'));

		// document.body.removeChild(popper);
		const val = e.currentTarget.innerHTML;
		console.log(val);
	};

	return (
		<div
			className="sudoku-cell"
			data-cord={[j, i]}
			key={(j.toString(), i.toString())}
		>
			{val !== 0 && val}
			{val === 0 && (
				<PopupState variant="popper" popupId="sudoku-popper">
					{(popupState) => (
						<React.Fragment>
							<input
								type="tel"
								pattern="[0-9]{1}"
								maxLength={1}
								data-key="othersTitle"
								data-cord={[j, i]}
								onFocus={(e) => onCellFocus(e)}
								{...bindToggle(popupState)}
								onChange={(e) => onCellInput(e)}
							></input>
							<Popper {...bindPopper(popupState)} transition>
								{({ TransitionProps }) => (
									<Grow {...TransitionProps} timeout={350}>
										{/* <BoxWrapper board={emptySudokuBoard} /> */}
										<div className="sudoku-picker">
											{emptySudokuBoard.map((arr, i) => {
												return (
													<div
														key={i}
														role="button"
														className="sudoku-picker-box"
														onClick={(e) => onPickerClick(e)}
													>
														{i}
													</div>
												);
											})}
										</div>
									</Grow>
								)}
							</Popper>
						</React.Fragment>
					)}
				</PopupState>
			)}
		</div>
	);
};

export default Sudoku;

function onCellFocus(e: React.FormEvent<HTMLInputElement>) {
	console.log('open popup here!', e);
}

// function onCellInput(e: React.FormEvent<HTMLInputElement>) {
// 	e.preventDefault();
// 	const val = e.target.value;
// 	if (typeof(val) !== number) val = '';
// 	if (val.length > e.target.maxLength) val.slice(0, e.target.maxLength);
// }
