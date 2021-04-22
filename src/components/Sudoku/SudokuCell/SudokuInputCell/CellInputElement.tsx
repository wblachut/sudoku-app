import React from 'react';
import { bindToggle } from 'material-ui-popup-state';
import { CellInpElementProps } from '../../types';
import { onCellInput } from '../index';

export const CellInput = ({
	cords,
	board,
	solution,
	popupState,
	setBoard,
}: CellInpElementProps): JSX.Element => {
	const cellValue = board[cords[0]][cords[1]].value;
	const inputValue = cellValue !== 0 ? cellValue : '';
	return (
		<React.Fragment>
			<input
				value={inputValue}
				type="tel"
				maxLength={1}
				{...bindToggle(popupState)}
				onInput={(e) => onCellInput(e, board, solution, cords, setBoard)}
			></input>
		</React.Fragment>
	);
};

export default CellInput;
