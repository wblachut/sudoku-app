import { NumberBoard, Board, SudokuType } from '../Sudoku/types';
import { HTMLInputEvent } from '../SudokuOptions/types';
import {
	getSudoku,
	getUserSudoku,
	toggleValidateSudokuBoard,
	alertSudokuValidation,
} from '../../utils/sudokuFunctions';

export const handleNewGame = (
	setSudoku: React.Dispatch<React.SetStateAction<SudokuType>>,
	setValidating: React.Dispatch<React.SetStateAction<boolean>>,
	userSudoku?: SudokuType
): void => {
	const newSudoku = userSudoku || getSudoku();
	setSudoku(newSudoku);
	setValidating(false);
	// dispatch()
};

export const handleValidateSudoku = (
	board: Board,
	solution: NumberBoard,
	isValidating: boolean,
	setBoard: React.Dispatch<React.SetStateAction<Board>>,
	setValidating: React.Dispatch<React.SetStateAction<boolean>>
): void => {
	if (!isValidating) {
		setBoard(toggleValidateSudokuBoard(board, true, solution));
	} else {
		setBoard(toggleValidateSudokuBoard(board, false));
	}
	setValidating((isValidating) => !isValidating);
	// dispatch(setValidating(sudokuGame.validating));
	// console.log(sudokuGame.validating);
};

export const handleValidateFullBoard = (board: Board): void => {
	if (board.every((arr) => arr.every((el) => el.value !== 0))) {
		alertSudokuValidation(board);
	}
};

// deprecated
const handleFetchBoard = (
	setSudoku: React.Dispatch<React.SetStateAction<SudokuType>>,
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
		handleNewGame(setSudoku, setValidating, userSudoku);
		alert('User board set correctly...');
	} catch (e) {
		alert('Invalid sudoku input');
		console.error(e);
	}
};

export const handleUploadBoard = (
	e: HTMLInputEvent,
	setSudoku: React.Dispatch<React.SetStateAction<SudokuType>>,
	setValidating: React.Dispatch<React.SetStateAction<boolean>>
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
				handleNewGame(setSudoku, setValidating, userSudoku);
				alert('User board set correctly...');
			}
		}
	};
};
