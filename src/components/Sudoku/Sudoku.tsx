import React, { useState, useEffect } from 'react';
import './Sudoku.scss';
import BoxWrapper from './BoxWrapper/BoxWrapper';
import SudokuRow from './SudokuRow';
import SudokuOptions from '../SudokuOptions/SudokuOptions';
import { Board, SudokuType } from './types';
import { getSudoku } from '../../utils/sudokuFunctions';
import { uuid } from 'uuidv4';

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
			<BoxWrapper board={board} />
			<div className="sudoku-board-wrapper">
				<div className="sudoku-board">
					{board &&
						board.map((array, row: number) => {
							return (
								<SudokuRow
									array={array}
									row={row}
									board={board}
									setBoard={setBoard}
									key={uuid()}
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
