import {
	NumberBoard,
	Cell,
	Board,
	SudokuType,
} from '../components/Sudoku/types';
import { makepuzzle, solvepuzzle } from 'sudoku';
import { solveUserBoard } from './solverFunction';

export const getSudoku = (): SudokuType => {
	const raw = makepuzzle();
	const rawSolution = solvepuzzle(raw);

	const sudoku = {
		board: getFormattedBoard(raw),
		solution: getFormattedSolution(rawSolution),
	};
	return sudoku;
};

const getFormattedBoard = (raw: number[]): Board => {
	const board = raw.map((e: number) => (e === null ? 0 : e + 1));
	const formatted = formatToNumberBoard(board);
	return formatToBoardOfCells(formatted);
};

const getFormattedSolution = (rawSolution: number[]): NumberBoard => {
	const solutionBoard = rawSolution.map((e: number) => e + 1);
	return formatToNumberBoard(solutionBoard);
};

export const formatToBoardOfCells = (numberBoard: NumberBoard): Board => {
	const boardOfCells = Object.assign(numberBoard);
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const value = numberBoard[i][j];
			const cell: Cell = {
				value: value,
				isStatic: value !== 0,
				isValid: value !== 0,
			};
			boardOfCells[i][j] = cell;
		}
	}
	return boardOfCells;
};

const formatToNumberBoard = (unformatted: number[]): NumberBoard => {
	const board: number[][] = [];
	for (let i = 0; i < 9; i++) {
		const row: number[] = [];
		for (let j = 0; j < 9; j++) {
			const value = unformatted[i * 9 + j];
			const cell: number = value;
			row.push(cell);
		}
		board.push(row);
	}
	return board;
};

export const replaceNullWithZeros = (board: NumberBoard): NumberBoard => {
	const formatted = Object.assign(board);
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (formatted[i][j] === null) {
				formatted[i][j] = 0;
			}
		}
	}
	return formatted;
};

export const getUserSudoku = (userInput: string): SudokuType => {
	const parsedUserBoard = JSON.parse(userInput).board;
	const parsedUserSolution = JSON.parse(userInput).board;
	// problems with deep cloning...
	const numberUserBoard = replaceNullWithZeros(parsedUserBoard);
	const numberUserSolution = replaceNullWithZeros(parsedUserSolution);
	const board = formatToBoardOfCells(numberUserBoard);
	const solution = solveUserBoard(numberUserSolution);

	return {
		board: board,
		// board: [],
		solution: solution,
		// solution: [],
	};
};

export const toggleValidateSudokuBoard = (
	board: Board,
	validating: boolean,
	solution?: NumberBoard
): Board => {
	board.forEach((array: Cell[], y: number) => {
		array.forEach((cell: Cell, x: number) => {
			if (!validating && !cell.isStatic && solution) {
				if (cell.value === solution[y][x]) {
					board[y][x].isValid = true;
				}
				if (cell.value !== solution[y][x] && cell.value !== 0) {
					board[y][x].isValid = false;
					// change valid to boolean to state = valid string
				}
				// Go back to state = input => normal
			}
		});
	});
	return board;
};

export const alertSudokuValidation = (candidate: Board): void => {
	candidate.every((array: Cell[]) => {
		array.every((cell: Cell) => cell.isValid);
		alert('Sudoku solved correctly');
	});
};

const checkNumberBoardShape = (board: NumberBoard) => {
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
