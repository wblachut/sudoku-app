import React from 'react';
// import React, { useState, useEffect } from 'react';
import './sudoku.scss';
// import BoxWrapper from './BoxWrapper';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Grow from '@material-ui/core/Grow';

type SudoCellProps = {
	i: number;
	j: number;
	val: number;
};

export const Sudoku = ({ i, j, val }: SudoCellProps): JSX.Element => {
	return (
		<div
			className="sudoku-cell"
			data-cord={[j, i]}
			key={(j.toString(), i.toString())}
		>
			{val !== 0 && val}
			{val === 0 && (
				<PopupState variant="popper" popupId="demo-popup-popper">
					{(popupState) => (
						<React.Fragment>
							<input
								type="tel"
								pattern="[0-9]{1}"
								maxLength={1}
								data-key="othersTitle"
								onFocus={(e) => onCellFocus(e)}
								{...bindToggle(popupState)}
								// onInput={(e) => onCellInput(e)}
							></input>
							<Popper {...bindPopper(popupState)} transition>
								{({ TransitionProps }) => (
									<Grow {...TransitionProps} timeout={350}>
										{/* <BoxWrapper {...className={'input-hint'}}>
											The content of the Popover.
										</BoxWrapper> */}
										<div> The content of the Popper. </div>
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
