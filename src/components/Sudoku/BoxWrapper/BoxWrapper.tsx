import React from 'react';
import './BoxWrapper.scss';
import { emptySudokuBoard } from '../../../BIN/utilityFunctions';
import { uuid } from 'uuidv4';
import { BoxWrapProps } from '../types';

// change to other name ?
export const BoxWrapper = ({
	board = emptySudokuBoard,
}: BoxWrapProps): JSX.Element => (
	<div className={`sudoku-box-wrapper`}>
		{board &&
			board.map(() => {
				return <Box key={uuid()} />;
			})}
	</div>
);

const Box = (): JSX.Element => {
	return <div className="sudoku-box" key={uuid()}></div>;
};

export default BoxWrapper;
