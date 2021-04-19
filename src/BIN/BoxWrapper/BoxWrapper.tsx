import React from 'react';
import './BoxWrapper.scss';
import { uuid } from 'uuidv4';
import { BoxWrapProps } from '../../components/Sudoku/types';

export const BoxWrapper = ({ board }: BoxWrapProps): JSX.Element => (
	<div className="sudoku-box-wrapper">
		{board &&
			board.map(() => {
				return <Box key={uuid()} />;
			})}
	</div>
);

const Box = (): JSX.Element => {
	return <div className="sudoku-box"></div>;
};

export default BoxWrapper;
