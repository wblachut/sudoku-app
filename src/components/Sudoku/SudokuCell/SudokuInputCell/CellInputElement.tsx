import React from 'react';
import { bindToggle } from 'material-ui-popup-state';
import { CellInpElementProps } from '../../types';
import { onCellInput } from '../index';

export const CellInput = ({
	rowIndex,
	cellIndex,
	board,
	inputRef,
	popupState,
	setBoard,
}: CellInpElementProps): JSX.Element => {
	return (
		<React.Fragment>
			<input
				type="tel"
				data-cord={[rowIndex, cellIndex]}
				ref={inputRef}
				{...bindToggle(popupState)}
				onInput={(e) => onCellInput(e, board, setBoard)}
			></input>
		</React.Fragment>
	);
};

export default CellInput;
