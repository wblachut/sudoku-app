import React from 'react';
import './sudokuOptions.scss';
import Button from '@material-ui/core/Button';
import RadioButtonsGroup from './RadioButtonsGroup';
import { getSudokuSolution } from '../../utils/APIs/getSolutionAPI';
// import { getSudoku } from '../../utils/sudokuFunctions';

type Board = number[][] | undefined; // import types ??
type SudoOptionsProps = {
	difficulty: string;
	setDifficulty: React.Dispatch<React.SetStateAction<string>>;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board | undefined>>;
};

export const SudokuOptions = ({
	difficulty = 'easy',
	setDifficulty,
}: // board,
// setBoard,
// difficulty,
// setDifficulty,
SudoOptionsProps): JSX.Element => {
	return (
		<section className="Options-box-wrapper">
			<RadioButtonsGroup
				difficulty={difficulty}
				setDifficulty={setDifficulty}
			/>
			<Button
				variant="contained"
				color="primary"
				disableElevation
				onClick={() => getSudokuSolution}
				// getSudokuSolution(board)
			>
				New Game
			</Button>
			<Button
				variant="contained"
				color="primary"
				disableElevation
				onClick={() => getSudokuSolution}
			>
				Validate
			</Button>
		</section>
	);
};

export default SudokuOptions;
