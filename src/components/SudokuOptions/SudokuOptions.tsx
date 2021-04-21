import React, { useState, useEffect } from 'react';
import {
	handleNewGame,
	handleValidateSudoku,
	handleValidateFullBoard,
	handleUploadBoard,
} from './index';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { SudoOptionsProps, HTMLInputEvent } from './types';
import styled from 'styled-components';
import { useAppDispatch } from '../App/context/store/store.hooks';
import { useSelector } from 'react-redux';
import { getSudokuSelector } from '../Sudoku/sudokuSlice';

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

const Input = styled('input')({
	display: 'none',
});

export const SudokuOptions = ({
	solution,
	board,
	setBoard,
	setSudoku,
}: SudoOptionsProps): JSX.Element => {
	const dispatch = useAppDispatch();
	const sudokuGame = useSelector(getSudokuSelector);

	const classes = useStyles();
	const [isValidating, setValidating] = useState(false);

	useEffect(() => {
		handleValidateFullBoard(board);
	}, [board]);

	return (
		<div className={classes.root}>
			<Button
				color="primary"
				variant="contained"
				disableElevation
				onClick={() => handleNewGame(setSudoku, setValidating)}
			>
				New Game
			</Button>
			<Button
				color="primary"
				variant="contained"
				disableElevation
				onClick={() =>
					handleValidateSudoku(
						board,
						solution,
						// redux validating
						// dispatch(setValidating(sudokuGame.validating));
						sudokuGame.validating,
						setBoard,
						setValidating
					)
				}
			>
				{/* Here change to redux validating */}
				{isValidating ? 'Return' : 'Validate'}
			</Button>{' '}
			<div>
				<label htmlFor="contained-button-file">
					<Input
						accept=".json"
						id="contained-button-file"
						type="file"
						// HTMLInputEvent => not working on MUI Input.
						onChange={(e: any) =>
							handleUploadBoard(e, setSudoku, setValidating)
						}
					/>
					<Button variant="contained" component="span" color="secondary">
						Upload Board
					</Button>
				</label>
			</div>
		</div>
	);
};

export default SudokuOptions;
