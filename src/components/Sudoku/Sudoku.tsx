import React, { useState, useEffect } from 'react';
import './sudoku.scss';
import { getSudokuBoard } from '../../utils/APIs/getBoardAPI';
import { emptySudokuBoard } from '../../utils/utilityFunctions';
import BoxWrapper from './BoxWrapper';
import SudokuCell from './SudokuCell';
import CircularProgress from '@material-ui/core/CircularProgress';

type Difficulty = 'easy' | 'medium' | 'hard';
type Board = number[][]; // import types ??

export const Sudoku = (): JSX.Element => {
	const [board, setBoard] = useState<Board | undefined>(emptySudokuBoard);
	const [isLoading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		// set difficulty type
		async function setSudokuBoard(difficulty: Difficulty) {
			const boardData = await getSudokuBoard(difficulty);
			setBoard(boardData);
			setLoading((isLoading) => !isLoading);
		}
		setSudokuBoard('easy');
	}, []);

	return (
		<div className="sudoku-container">
			<BoxWrapper board={emptySudokuBoard} />
			<div className="sudoku-board-wrapper">
				{isLoading ? (
					<CircularProgress />
				) : (
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
										/>
									);
								});
							})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Sudoku;
