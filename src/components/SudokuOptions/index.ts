import { Board, SudokuType } from './types';
import {
	getSudoku,
	getUserSudoku,
	validateSudokuBoard,
	alertSudokuValidation,
} from '../../utils/sudokuFunctions';

export const handleNewGame = (
	setSudoku: React.Dispatch<React.SetStateAction<SudokuType>>,
	setCandidate: React.Dispatch<React.SetStateAction<Board>>,
	setValidating: React.Dispatch<React.SetStateAction<boolean>>,
	userSudoku?: SudokuType
): void => {
	const newSudoku = userSudoku || getSudoku();
	setSudoku(newSudoku);
	setCandidate(newSudoku.board);
	setValidating(false);
};

export const handleValidateSudoku = (
	board: Board,
	solution: Board,
	candidate: Board,
	isValidating: boolean,
	setBoard: React.Dispatch<React.SetStateAction<Board>>,
	setCandidate: React.Dispatch<React.SetStateAction<Board>>,
	setValidating: React.Dispatch<React.SetStateAction<boolean>>
): void => {
	if (!isValidating) {
		setCandidate(Object.assign(board));
		setBoard(validateSudokuBoard(candidate, true, solution));
	} else {
		setCandidate(Object.assign(board));
		setBoard(validateSudokuBoard(candidate, false));
	}
	setValidating((isValidating) => !isValidating);
};

export const handleValidateFullBoard = (
	board: Board,
	solution: Board
): void => {
	if (board.every((arr) => arr.every((el) => el !== 0))) {
		alertSudokuValidation(board, solution);
	}
};

export const handleFetchBoard = (
	setSudoku: React.Dispatch<React.SetStateAction<SudokuType>>,
	setCandidate: React.Dispatch<React.SetStateAction<Board>>,
	setValidating: React.Dispatch<React.SetStateAction<boolean>>
): void => {
	const userInput = prompt('paste board in form of JSON string');
	if (typeof userInput !== 'string' || userInput === '') return;
	try {
		const userSudoku = getUserSudoku(userInput);
		if (!userSudoku.solution) {
			alert('Board is not solvable!');
			return;
		}
		handleNewGame(setSudoku, setCandidate, setValidating, userSudoku);
		alert('User board set correctly...');
	} catch (e) {
		alert('Invalid sudoku input');
		console.error(e);
	}
};
