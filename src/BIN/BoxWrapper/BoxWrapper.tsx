import React from 'react';
import './BoxWrapper.scss';
import { BoxWrapProps } from '../../components/Sudoku/types';

export const BoxWrapper = ({ board }: BoxWrapProps): JSX.Element => (
	<div className="sudoku-box-wrapper">
		{board &&
			board.map((box, idx) => {
				return <Box key={idx} />; // earlier key => uuid
			})}
	</div>
);

const Box = (): JSX.Element => {
	return <div className="sudoku-box"></div>;
};

export default BoxWrapper;
