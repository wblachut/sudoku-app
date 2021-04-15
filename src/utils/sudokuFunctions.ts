import { Board, SudokuType } from '../components/Sudoku/types';
import { makepuzzle, solvepuzzle } from 'sudoku';
import { solveUserBoard } from './solverFunction';

// type rawBoard = (number | null)[];

export const getSudoku = (): SudokuType => {
	const raw = makepuzzle();
	const rawSolution = solvepuzzle(raw);

	const sudoku = {
		board: getFormattedBoard(raw),
		solution: getFormattedSolution(rawSolution),
	};
	return sudoku;
};

const getFormattedBoard = (raw: any) => {
	const board = raw.map((e: number) => (e === null ? 0 : e + 1));
	return formatBoard(board);
};

const getFormattedSolution = (rawSolution: any) => {
	const solutionBoard = rawSolution.map((e: number) => e + 1);
	return formatBoard(solutionBoard);
};

const formatBoard = (unformatted: any) => {
	const board: number[][] = [];
	for (let i = 0; i < 9; i++) {
		const row: number[] = [];
		for (let j = 0; j < 9; j++) {
			const value = unformatted[i * 9 + j];
			const col: number = value;
			row.push(col);
		}
		board.push(row);
	}
	return board;
};

export const formatUserBoard = (board: Board): Board => {
	const formatted = [...board];
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (formatted[i][j] === null) {
				formatted[i][j] === 0;
			}
		}
	}
	return formatted;
};

// User Sudoku Functions
export const getUserSudoku = (userInput: string): SudokuType => {
	const userSudokuParsed = JSON.parse(userInput).board;
	const formatted = formatUserBoard(userSudokuParsed);
	const solution = solveUserBoard(formatted);
	return {
		board: formatted,
		solution: solution,
	};
};

export const validateSudokuBoard = (
	board: Board,
	printErrors: boolean,
	solution?: Board
): Board => {
	board.forEach((array: number[], y: number) => {
		array.forEach((element: number, x: number) => {
			if (printErrors && solution) {
				if (element !== solution[y][x] && element !== 0) {
					board[y][x] = 10;
				}
			} else {
				element === 10 ? (board[y][x] = 0) : (board[y][x] = element);
			}
		});
	});
	return board;
};

export const alertSudokuValidation = (
	candidate: Board,
	solution: Board
): void => {
	if (candidate.every((array, index) => array == solution[index])) {
		alert('Congratulations, sudoku solved correctly !');
	} else {
		console.log(candidate);
		alert('Sorry, sudoku solved wrong !');
	}
};

const checkShape = (board: Board) => {
	const SUDOKU_SIZE = 9;
	if (board.length !== SUDOKU_SIZE || board[0].length !== SUDOKU_SIZE) {
		return false;
	} else return true;
};

const tryBoard = [
	[0, 0, 8, 0, 0, 9, 0, 0, 0],
	[0, 0, 0, 0, 5, 0, 7, 0, 0],
	[0, 6, 0, 0, 0, 8, 0, 2, 0],
	[0, 2, 0, 0, 0, 0, 0, 9, 0],
	[0, 5, 7, 8, 0, 1, 0, 0, 0],
	[8, 9, 0, 7, 0, 3, 4, 5, 1],
	[0, 0, 0, 6, 0, 2, 9, 7, 8],
	[6, 7, 2, 9, 8, 4, 0, 1, 3],
	[0, 0, 0, 5, 0, 0, 6, 0, 2],
];
