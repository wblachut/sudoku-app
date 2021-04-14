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
		handleValidateFullBoard(board, solution);
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
				<div>
					<Button
						color="secondary"
						variant="contained"
						size="small"
						onClick={() => {
							handleFetchBoard(setSudoku, setCandidate, setValidating);
						}}
					>
						Fetch Board
					</Button>
				</div>
			</div>
		</section>
	);
};

export default SudokuOptions;
