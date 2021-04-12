import React, { useState, useEffect } from 'react';
import './Sudoku.scss';
import { getSudoku } from '../../utils/sudokuFunctions';
import BoxWrapper from './BoxWrapper/BoxWrapper';
import SudokuCell from './SudokuCell/SudokuCell';
import SudokuOptions from '../SudokuOptions/SudokuOptions';
import { Board, SudokuType } from './types';

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
						board.map((arr, j: number) => {
							return arr.map((element, i: number) => {
								return (
									<SudokuCell
										key={(j.toString(), i.toString())}
										i={i}
										j={j}
										val={element}
										board={board}
										setBoard={setBoard}
									/>
								);
							});
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
