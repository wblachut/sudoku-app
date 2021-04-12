import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// type Difficulty = 'easy' | 'medium' | 'hard';
type RadioBtnProps = {
	difficulty: string;
	setDifficulty: React.Dispatch<React.SetStateAction<string>>;
} & typeof defaultProps;

const defaultProps = {
	difficulty: 'easy',
};

export const RadioButtonsGroup = ({
	difficulty = 'easy',
	setDifficulty,
}: RadioBtnProps): JSX.Element => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDifficulty((event.target as HTMLInputElement).value);
		console.log((event.target as HTMLInputElement).value);
	};

	return (
		<FormControl component="fieldset" margin="dense">
			<FormLabel component="legend">Difficulty</FormLabel>
			<RadioGroup
				aria-label="difficulty"
				name="difficulty1"
				value={difficulty}
				onChange={handleChange}
			>
				<FormControlLabel
					value="easy"
					control={<Radio color="primary" />}
					label="Easy"
				/>
				<FormControlLabel
					value="medium"
					control={<Radio color="primary" />}
					label="Medium"
				/>
				<FormControlLabel
					value="hard"
					control={<Radio color="primary" />}
					label="Hard"
				/>
			</RadioGroup>
		</FormControl>
	);
};

export default RadioButtonsGroup;
