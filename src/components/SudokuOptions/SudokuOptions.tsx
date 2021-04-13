import React, { useState, useEffect } from 'react';
import './SudokuOptions.scss';
import {
	handleNewGame,
	handleValidateSudoku,
	handleValidateFullBoard,
	handleFetchBoard,
} from './index';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { SudoOptionsProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(2),
				// position: 'static',
			},
		},
	})
);

const onFetchBoardClick = () => {
	const input = prompt('paste board JSON here');
	if (input === '' || input === null) return;
	try {
		const userSudoku = JSON.parse(input);
		console.log(input);
	} catch (e) {
		alert('invalid sudoku input');
		console.log(e);
	}
};

export const SudokuOptions = ({
	solution,
	board,
	setBoard,
	setSudoku,
}: SudoOptionsProps): JSX.Element => {
	const classes = useStyles();
	const [candidate, setCandidate] = useState(board);
	const [isValidating, setValidating] = useState(false);

	useEffect(() => {
		handleValidateFullBoard(
			board,
			candidate,
			solution,
			isValidating,
			setBoard,
			setValidating,
			setCandidate
		);
		// console.log('useEffect for end check !');
	}, [board]);

	return (
		<section className="Options-box-wrapper">
			<div className={classes.root}>
				<Button
					color="primary"
					variant="contained"
					onClick={() => handleNewGame(setSudoku, setCandidate, setValidating)}
				>
					New Game
				</Button>
				<Button
					color="primary"
					variant="contained"
					onClick={() =>
						handleValidateSudoku(
							board,
							solution,
							candidate,
							isValidating,
							setBoard,
							setCandidate,
							setValidating
						)
					}
				>
					{isValidating ? 'Return' : 'Validate'}
				</Button>{' '}
				<p>
					<Button
						color="secondary"
						variant="contained"
						// size="small"
						onClick={
							() => onFetchBoardClick()
							//	open popUp with input field
							// }
							// handleFetchBoard(board, setSudoku, setCandidate, setValidating)
						}
					>
						Fetch Board
					</Button>
				</p>
			</div>
		</section>
	);
};

export default SudokuOptions;
