import React from 'react';
import './sudokuOptions.scss';
import Button from '@material-ui/core/Button';
import RadioButtonsGroup from './RadioButtonsGroup';
import { getSudokuSolution } from '../../utils/APIs/getSolutionAPI';

type SudoOptionsProps = {
	difficulty: string;
	setDifficulty: React.Dispatch<React.SetStateAction<string>>;
};

export const SudokuOptions = ({
	difficulty,
	setDifficulty,
}: SudoOptionsProps): JSX.Element => {
	return (
		<section className="Options-box-wrapper">
			<RadioButtonsGroup
				difficulty={difficulty}
				setDifficulty={setDifficulty}
			/>
			<Button variant="contained" color="primary" disableElevation>
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
