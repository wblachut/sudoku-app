import React from 'react';
import './CellInputElement.scss';
import { bindToggle } from 'material-ui-popup-state';
import { CellInpElementProps } from '../../types';
import { onCellInput } from '../index';

export const CellInput = ({
	col,
	row,
	board,
	inputRef,
	popupState,
	setBoard,
}: CellInpElementProps): JSX.Element => {
	return (
		<React.Fragment>
			<input
				type="tel"
				maxLength={1}
				data-cord={[row, col]}
				ref={inputRef}
				{...bindToggle(popupState)}
				onInput={(e) => onCellInput(e, board, setBoard)}
			></input>
		</React.Fragment>
	);
};

export default CellInput;
