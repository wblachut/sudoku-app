import React from 'react';
import { Wrapper, SudokuBoard } from './Styles';
import { Cell } from './types';
import SudokuRow from './SudokuRow';
import SudokuOptions from '../SudokuOptions/SudokuOptions';
import { useSelector } from 'react-redux';
import { getSudokuSelector } from './sudokuSlice';

export const Sudoku = (): JSX.Element => {
	const board = useSelector(getSudokuSelector).board;

	return (
		<Wrapper>
			<SudokuBoard>
				{board &&
					board.map((row: Cell[], rowIndex: number) => {
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
