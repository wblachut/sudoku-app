import { getSudoku, alertSudokuValidation } from '../../utils/sudokuFunctions';
import { Board, Sudoku } from './types';

type UserBoard = Board | JSON;

export const handleNewGame = (
	setSudoku: any,
	setCandidate: any,
	setValidating: any,
	getSudokuFunc: any = getSudoku()
	// setSudoku?: React.Dispatch<React.SetStateAction<Sudoku>>
): void => {
	const newSudoku = getSudokuFunc;
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
	candidate: Board,
	solution: Board,
	isValidating: boolean,
	setBoard: React.Dispatch<React.SetStateAction<Board>>,
	setValidating: React.Dispatch<React.SetStateAction<boolean>>,
	setCandidate: React.Dispatch<React.SetStateAction<Board>>
): void => {
	if (board.every((arr) => arr.every((el) => el !== 0))) {
		setBoard(validateSudokuBoard(board, true, solution));
		handleValidateSudoku(
			board,
			solution,
			candidate,
			isValidating,
			setBoard,
			setCandidate,
			setValidating
		);
		alertSudokuValidation(board, solution);
	}
	const inputs = document.getElementsByTagName('input').length;
	console.log(inputs);
};

const validateSudokuBoard = (
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

export const handleFetchBoard = (
	userBoard: UserBoard,
	setSudoku: any,
	setCandidate: any,
	setValidating: any
	// setSudoku?: React.Dispatch<React.SetStateAction<Sudoku>>
): void => {
	// try parse
	if (typeof userBoard === 'string') JSON.parse(userBoard);
	// if (object is not type of number[][]) return;
	// if validate user sudoku is true =>
	handleNewGame(
		setSudoku,
		setCandidate,
		setValidating,
		getUserSudoku(userBoard)
	);
	// if validate user sudoku is false => alert('provided board is incorrect)
	console.log('handle fetch board');
};

export const getUserSudoku = (board: any): Sudoku => {
	return {
		board: board,
		solution: board,
		// solution: getUserBoardSolution(board),
	};
};

const getUserBoardSolution = (board: Board): Board => {
	// do something
	return board;
};

const validateUserSudoku = (board: Board): Board | boolean => {
	if (getUserBoardSolution(board)) return true;
	return false;
};
