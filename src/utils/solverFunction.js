// import { SudoCellProps } from '../types';

const solveUserBoard = (board) => {
	if (!isFullBoard(board)) {
		const allPossibilities = getAllPossibleBoards(board);
		const candidates = filterCandidates(allPossibilities);
		return searchForSolution(candidates);
	} else {
		return board;
	}
};

export const isFullBoard = (board) => {
	if (board.every((row) => row.every((el) => el !== 0 || el !== null))) {
		return true;
	}
	return false;
};

const searchForSolution = (candidates) => {
	if (candidates.length < 1) {
		return false;
	} else {
		const currentCandidate = candidates.shift();
		const currentCheck = solveUserBoard(currentCandidate);
		if (currentCheck) {
			return currentCheck;
		} else {
			return searchForSolution(candidates);
		}
	}
};

const filterCandidates = (candidates) => {
	let filtered = [];
	for (var i = 0; i < candidates.length; i++) {
		if (checkBoard(candidates[i])) {
			filtered.push(candidates[i]);
		}
	}
	return filtered;
};

function getAllPossibleBoards(board) {
	let candidates = [];
	const emptySquare = getFirstEmptySquare();
	if (!emptySquare) return;
	const yCord = emptySquare[0];
	const xCord = emptySquare[1];
	for (let n = 1; n <= 9; n++) {
		let newCandidate = [...board];
		let row = [...newCandidate[yCord]];
		row[xCord] = n;
		newCandidate[yCord] = row;
		candidates.push(newCandidate);
	}
	return candidates;
}

function getFirstEmptySquare(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] === null && board[i][j] === 0) {
				return [i, j];
			}
		}
	}
}

const checkBoard = (board) => {
	if (checkRows(board) && checkColumns(board) && checkBoxes(board)) return true;
};

const checkRows = (board) => {
	for (let row = 0; row < board.length; row++) {
		let used = [];
		for (let i = 0; i < board.length; i++) {
			const value = board[row][i];
			if (used.includes(value)) {
				return false;
			} else if (value !== null && value !== 0) {
				used.push(value);
			}
		}
	}
	return true;
};

const checkColumns = (board) => {
	for (let col = 0; col < board.length; col++) {
		let used = [];
		for (let i = 0; i < board.length; i++) {
			const value = board[i][col];
			if (used.includes(value)) {
				return false;
			} else if (value !== null && value !== 0) {
				used.push(value);
			}
		}
	}
	return true;
};

const checkBoxes = (board) => {
	// only works for 3x3 make it working for other board sizes?
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
			let used = [];
			for (let i = 0; i < board.length; i++) {
				const yCord = startingBoxCords[i][0] + row;
				const xCord = startingBoxCords[i][1] + col;
				const value = board[yCord][xCord];
				if (used.includes(value)) {
					return false;
				} else if (value !== null && value !== 0) {
					used.push(value);
				}
			}
		}
	}
	return true;
};

// const exampleInput = "{"board":[[0,0,8,0,0,9,0,0,0],[0,0,0,0,5,0,7,0,0],[0,6,0,0,0,8,0,2,0],[0,2,0,0,0,0,0,9,0],[0,5,7,8,0,1,0,0,0],[8,9,0,7,0,3,4,5,1],[0,0,0,6,0,2,9,7,8],[6,7,2,9,8,4,0,1,3],[0,0,0,5,0,0,6,0,2]]}"

// return {
// 	board: board,
// 	solution: sudokuSolution(board) || 'unsolvable',
// };
