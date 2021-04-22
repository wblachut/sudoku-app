import React from 'react';
import SudokuRow from './SudokuRow';
import SudokuOptions from '../SudokuOptions/SudokuOptions';
import { Wrapper, SudokuBoard } from './Styles';
import { useSelector } from 'react-redux';
import { getSudokuSelector } from './sudokuSlice';

export const Sudoku = (): JSX.Element => {
	// const sudoku = useSelector(getSudokuSelector);
	const board = useSelector(getSudokuSelector).board;

	return (
		<Wrapper>
			<SudokuBoard>
				{board &&
					board.map((row, rowIndex: number) => {
						return (
							<SudokuRow
								rowIndex={rowIndex}
								board={board}
								key={`row${rowIndex}`}
							/>
						);
					})}
			</SudokuBoard>
			<SudokuOptions board={board} />
		</Wrapper>
	);
};

export default Sudoku;
