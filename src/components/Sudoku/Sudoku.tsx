import React, { useState, useEffect } from 'react';
import SudokuRow from './SudokuRow';
import SudokuOptions from '../SudokuOptions/SudokuOptions';
import { Board, NumberBoard, SudokuType } from './types';
import { Wrapper, SudokuBoard } from './Styles';
import { useSelector } from 'react-redux';
import { getSudokuSelector } from './sudokuSlice';

export const Sudoku = (): JSX.Element => {
	const sudokuGame = useSelector(getSudokuSelector);

	// const sudokuGame = getSudoku();
	const [sudoku, setSudoku] = useState<SudokuType>(sudokuGame);
	const [board, setBoard] = useState<Board>([...sudoku.board]);
	const [solution, setSolution] = useState<NumberBoard>(sudoku.solution);

	useEffect(() => {
		setBoard([...sudoku.board]);
		setSolution(sudoku.solution);
	}, [sudoku]);

	return (
		<Wrapper>
			<SudokuBoard>
				{board &&
					board.map((row, rowIndex: number) => {
						return (
							<SudokuRow
								rowIndex={rowIndex}
								board={board}
								setBoard={setBoard}
								key={`row${rowIndex}`}
							/>
						);
					})}
			</SudokuBoard>
			<SudokuOptions
				board={board}
				solution={solution}
				setBoard={setBoard}
				setSudoku={setSudoku}
			/>
		</Wrapper>
	);
};

export default Sudoku;
