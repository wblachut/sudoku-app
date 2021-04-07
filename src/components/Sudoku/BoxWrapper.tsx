import React from 'react';
import './sudoku.scss';
import { emptySudokuBoard } from '../../utils/utilityFunctions';
import { uuid } from 'uuidv4';

type Board = number[][] | undefined; // import types ??
type BoxWrapProps = {
	board: Board;
	// onClick?: () => number;
};

// change to other name ==> use for onHover board with numbers
export const BoxWrapper = ({
	board = emptySudokuBoard,
}: BoxWrapProps): JSX.Element => (
	<div className={`sudoku-box-wrapper`}>
		{emptySudokuBoard.map((array, i) => {
			return <Box key={uuid()} />;
		})}
	</div>
);

const Box = (): JSX.Element => {
	return <div className="sudoku-box" key={uuid()}></div>;
};

export default BoxWrapper;
