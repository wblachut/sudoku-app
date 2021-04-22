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
import {
	getSudokuSelector,
	setValidate,
	setSudoku,
	setSudokuBoard,
} from '../Sudoku/sudokuSlice';
import { Board, NumberBoard } from '../Sudoku/types';

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
	const setBoard = (board: Board) => {
		dispatch(setSudokuBoard(board));
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
				onClick={() => handleNewGame(setNewSudoku, setValidating)}
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
						onChange={(e: any) =>
							handleUploadBoard(e, setNewSudoku, setValidating)
						}
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
