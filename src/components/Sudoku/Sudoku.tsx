import React, { useState, useEffect } from 'react';
import './sudoku.scss';
import { setSudokuBoard } from '../../utils/APIs/setSudokuAPI';
import { emptySudokuBoard } from '../../utils/utilityFunctions';
import { getSudoku } from '../../utils/sudokuFunctions';
import BoxWrapper from './BoxWrapper';
import SudokuCell from './SudokuCell';
import SudokuOptions from '../SudokuOptions/SudokuOptions';
import CircularProgress from '@material-ui/core/CircularProgress';

type Board = number[][]; // import types ??

export const Sudoku = (): JSX.Element => {
	const rawBoard = [...emptySudokuBoard];
	const [board, setBoard] = useState<Board | undefined>(rawBoard);
	const [solution, setSolution] = useState<Board | undefined>(rawBoard);
	const [isLoading, setLoading] = useState<boolean>(false);
	const [difficulty, setDifficulty] = useState('easy');

	useEffect(() => {
		console.log(getSudoku());
		setLoading(true);
		setSudokuBoard('easy', setBoard, setLoading, setSolution);
	}, []);

	return (
		<div className="sudoku-container">
			{isLoading ? (
				<CircularProgress className={`circle-progress`} />
			) : (
				<>
					<BoxWrapper board={emptySudokuBoard} />
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
				</>
			)}
			<SudokuOptions
				difficulty={difficulty}
				setDifficulty={setDifficulty}
				board={board}
				setBoard={setBoard}
			/>
		</div>
	);
};

export default Sudoku;
