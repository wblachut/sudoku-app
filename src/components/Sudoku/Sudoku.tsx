import React, { useState, useEffect } from 'react';
import './Sudoku.scss';
import SudokuRow from './SudokuRow';
import SudokuOptions from '../SudokuOptions/SudokuOptions';
import { Board, SudokuType } from './types';
import { getSudoku } from '../../utils/sudokuFunctions';

export const Sudoku = (): JSX.Element => {
	const sudokuGame = getSudoku();
	const [sudoku, setSudoku] = useState<SudokuType>(sudokuGame);
	const [board, setBoard] = useState<Board>([...sudoku.board]);
	const [solution, setSolution] = useState<Board>(sudoku.solution);

	useEffect(() => {
		setBoard([...sudoku.board]);
		setSolution(sudoku.solution);
	}, [sudoku]);

	return (
		<div className="sudoku-container">
			<div className="sudoku-board-wrapper">
				<div className="sudoku-board">
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
				</div>
			</div>
			<SudokuOptions
				board={board}
				solution={solution}
				setBoard={setBoard}
				setSudoku={setSudoku}
			/>
		</div>
	);
};

export default Sudoku;
