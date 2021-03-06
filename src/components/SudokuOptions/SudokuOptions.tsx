import React, { useEffect } from 'react';
import { Board, NumberBoard } from '../Sudoku/types';
import { SudoOptionsProps, HTMLInputEvent } from './types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {
	handleNewGame,
	handleValidateSudoku,
	handleValidateFullBoard,
	handleUploadBoard,
} from './index';
import { useAppDispatch } from '../App/context/store.hooks';
import { useSelector } from 'react-redux';
import {
	getSudokuSelector,
	setValidate,
	setSudoku,
} from '../Sudoku/sudokuSlice';

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

export const SudokuOptions = ({ board }: SudoOptionsProps): JSX.Element => {
	const classes = useStyles();
	const isValidating = useSelector(getSudokuSelector).validating;

	const dispatch = useAppDispatch();
	const setValidating = (isValidating: boolean) => {
		dispatch(setValidate(isValidating));
	};
	const setNewSudoku = (board: Board, solution: NumberBoard) => {
		dispatch(setSudoku({ board, solution }));
	};

	useEffect(() => {
		handleValidateFullBoard(board);
	}, [board]);

	return (
		<div className={classes.root}>
			<Button
				color="primary"
				variant="contained"
				disableElevation
				onClick={() => handleNewGame(setNewSudoku)}
			>
				New Game
			</Button>
			<Button
				color="primary"
				variant="contained"
				disableElevation
				onClick={() => handleValidateSudoku(isValidating, setValidating)}
			>
				{isValidating ? 'Return' : 'Validate'}
			</Button>{' '}
			<div>
				<label htmlFor="contained-button-file">
					<Input
						accept=".json"
						id="contained-button-file"
						type="file"
						// HTMLInputEvent type is not working with File Input as MUI Button.
						onChange={(e: any) => handleUploadBoard(e, setNewSudoku)}
					/>
					<Button
						variant="contained"
						component="span"
						disableElevation
						color="secondary"
					>
						Upload Board
					</Button>
				</label>
			</div>
		</div>
	);
};

export default SudokuOptions;
