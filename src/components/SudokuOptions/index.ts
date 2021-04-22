import { NumberBoard, Board, SudokuType } from '../Sudoku/types';
import { HTMLInputEvent } from '../SudokuOptions/types';
import { getSudoku, getUserSudoku } from '../../utils/sudokuFunctions';

export const handleNewGame = (
	setNewSudoku: (board: Board, solution: NumberBoard) => void,
	userSudoku?: SudokuType
): void => {
	const newSudoku = userSudoku || getSudoku();
	setNewSudoku(newSudoku.board, newSudoku.solution);
};

export const handleValidateSudoku = (
	isValidating: boolean,
	setValidating: (isValidating: boolean) => void
): void => {
	setValidating(!isValidating);
};

export const handleValidateFullBoard = (board: Board): void => {
	if (board.every((row) => row.every((cell) => cell.isValid))) {
		alert('Sudoku solved correctly');
	}
};

export const handleUploadBoard = (
	e: HTMLInputEvent,
	setNewSudoku: (board: Board, solution: NumberBoard) => void
): void => {
	const reader = new FileReader();
	const file = e.target.files![0];
	reader.readAsText(file);
	reader.onloadend = (e) => {
		if (e.target?.result) {
			const userInput: string | ArrayBuffer | null = reader.result;
			if (typeof userInput === 'string') {
				try {
					const userSudoku = getUserSudoku(userInput);
					if (!userSudoku.solution) {
						alert('Board is not solvable!');
						return;
					}
					handleNewGame(setNewSudoku, userSudoku);
					alert('User board set correctly!');
				} catch (e) {
					alert('Invalid user board !');
				}
			}
		}
	};
};
