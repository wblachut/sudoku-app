import { NumberBoard, Board, SudokuType } from '../Sudoku/types';
import { HTMLInputEvent } from '../SudokuOptions/types';
import {
	getSudoku,
	getUserSudoku,
	alertSudokuValidation,
} from '../../utils/sudokuFunctions';

export const handleNewGame = (
	setNewSudoku: (board: Board, solution: NumberBoard) => void,
	setValidating: (isValidating: boolean) => void,
	userSudoku?: SudokuType
): void => {
	const newSudoku = userSudoku || getSudoku();
	setNewSudoku(newSudoku.board, newSudoku.solution);
	setValidating(false);
};

export const handleValidateSudoku = (
	isValidating: boolean,
	setValidating: (isValidating: boolean) => void
): void => {
	setValidating(!isValidating);
};

export const handleValidateFullBoard = (board: Board): void => {
	if (board.every((arr) => arr.every((el) => el.value !== 0))) {
		alertSudokuValidation(board);
	}
};

// deprecated !
const handleFetchBoard = (
	setNewSudoku: (board: Board, solution: NumberBoard) => void,
	setValidating: (isValidating: boolean) => void
): void => {
	const userInput = prompt('paste board in form of JSON string');
	if (typeof userInput !== 'string' || userInput === '') return;
	try {
		const userSudoku = getUserSudoku(userInput);
		if (!userSudoku.solution) {
			alert('Board is not solvable!');
			return;
		}
		handleNewGame(setNewSudoku, setValidating, userSudoku);
		alert('User board set correctly...');
	} catch (e) {
		alert('Invalid sudoku input');
		console.error(e);
	}
};

export const handleUploadBoard = (
	e: HTMLInputEvent,
	setNewSudoku: (board: Board, solution: NumberBoard) => void,
	setValidating: (isValidating: boolean) => void
): void => {
	const reader = new FileReader();
	const file = e.target.files![0];
	reader.readAsText(file);
	reader.onloadend = (e) => {
		if (e.target?.result) {
			const userInput: string | ArrayBuffer | null = reader.result;
			if (typeof userInput === 'string') {
				const userSudoku = getUserSudoku(userInput);
				if (!userSudoku.solution) {
					alert('Board is not solvable!');
					return;
				}
				handleNewGame(setNewSudoku, setValidating, userSudoku);
				alert('User board uploaded correctly!');
			}
		}
	};
};
