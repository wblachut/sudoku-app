import { Board } from '../components/Sudoku/types';

export const solveUserBoard = (board: Board): any => {
	// only works for 3x3
	if (checkForSolved(board)) {
		return board;
	} else {
		const allPossibilities = getAllPossibleBoards(board);
		const candidates = filterCandidates(allPossibilities);
		return searchForSolution(candidates);
	}
};

function checkForSolved(board: Board) {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === 0) {
				return false;
			}
		}
	}
	return true;
}

const searchForSolution = (candidates: Board[]): Board | boolean => {
	if (candidates.length < 1) {
		return false;
	} else {
		const currentCandidate = candidates.shift();
		const currentCheck = solveUserBoard(currentCandidate!);
		if (currentCheck !== false) {
			return currentCheck;
		} else {
			return searchForSolution(candidates);
		}
	}
};

const filterCandidates = (candidates: Board[]): any => {
	const filtered = [];
	if (!candidates) return;
	for (let i = 0; i < candidates.length; i++) {
		if (checkBoard(candidates[i])) {
			filtered.push(candidates[i]);
		}
	}
	return filtered;
};

const getAllPossibleBoards = (board: Board): Board[] => {
	const candidates = [];
	const emptySquare = getFirstEmptySquare(board);
	if (emptySquare !== undefined) {
		const yCord = emptySquare[0];
		const xCord = emptySquare[1];
		for (let n = 1; n <= 9; n++) {
			const newCandidate = [...board];
			const row = [...newCandidate[yCord]];
			row[xCord] = n;
			newCandidate[yCord] = row;
			candidates.push(newCandidate);
		}
	}
	return candidates;
};

const getFirstEmptySquare = (board: Board): number[] | undefined => {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === 0) {
				return [i, j];
			}
		}
	}
};

const checkBoard = (board: Board): boolean | undefined => {
	if (checkRows(board) && checkColumns(board) && checkBoxes(board)) return true;
};

const checkRows = (board: Board): boolean => {
	for (let row = 0; row < board.length; row++) {
		const used: number[] = [];
		for (let i = 0; i < board.length; i++) {
			const value = board[row][i];
			if (used.includes(value)) {
				return false;
			} else if (value !== 0) {
				used.push(value);
			}
		}
	}
	return true;
};

const checkColumns = (board: Board): boolean => {
	for (let col = 0; col < board.length; col++) {
		const used: number[] = [];
		for (let i = 0; i < board.length; i++) {
			const value = board[i][col];
			if (used.includes(value)) {
				return false;
			} else if (value !== 0) {
				used.push(value);
			}
		}
	}
	return true;
};

const checkBoxes = (board: Board): boolean => {
	const startingBoxCords = [
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 1],
		[1, 2],
		[2, 0],
		[2, 1],
		[2, 2],
	];

	for (let row = 0; row < board.length; row += 3) {
		for (let col = 0; col < board.length; col += 3) {
			const used: number[] = [];
			for (let i = 0; i < board.length; i++) {
				const yCord = startingBoxCords[i][0] + row;
				const xCord = startingBoxCords[i][1] + col;
				const value = board[yCord][xCord];
				if (used.includes(value)) {
					return false;
				} else if (value !== 0) {
					used.push(value);
				}
			}
		}
	}
	return true;
};
