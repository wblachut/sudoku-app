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
	// *FIND BETTER SOLUTION* problems with deep cloning...
	const numberUserBoard = replaceNullWithZeros(parsedUserBoard);
	const numberUserSolution = replaceNullWithZeros(parsedUserSolution);
	const board = formatToBoardOfCells(numberUserBoard);
	const solution = solveUserBoard(numberUserSolution);

	return {
		board: board,
		solution: solution,
	};
};

export const alertSudokuValidation = (candidate: Board): void => {
	candidate.every((array: Cell[]) => {
		array.every((cell: Cell) => cell.isValid);
	});
};
