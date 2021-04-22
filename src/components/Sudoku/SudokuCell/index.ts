import { Board, NumberBoard } from '../types';

export const onCellInput = (
	e: React.SyntheticEvent<HTMLInputElement>,
	board: Board,
	solution: NumberBoard,
	cords: [number, number],
	setBoard: (board: Board) => void
): void => {
	// console.log(e.nativeEvent.data);
	//e.currentTarget.value = e.nativeEvent.data;
	if (isNaN(+e.currentTarget.value)) {
		e.currentTarget.value = '';
		return;
	}
	if (board && cords) {
		const value = +e.currentTarget.value;
		assignValueToCell(value, board, solution, cords, setBoard);
	}
};

export const onPickerClick = (
	e: React.MouseEvent<HTMLDivElement>,
	board: Board,
	solution: NumberBoard,
	cords: [number, number],
	setBoard: (board: Board) => void
): void => {
	const val = e.currentTarget.innerHTML;
	assignValueToCell(+val, board, solution, cords, setBoard);
};

const assignValueToCell = (
	value: number,
	board: Board,
	solution: NumberBoard,
	cords: [number, number],
	setBoard: (board: Board) => void
): void => {
	const x = cords[1];
	const y = cords[0];
	console.log(value, cords);
	// const updatedBoard = Object.create(board);
	// const updatedBoard = { ...board };
	// *THIS CODE SHOULD BE FIXED* fix to normal deep clone
	const updatedBoard = JSON.parse(JSON.stringify(board));
	// console.log(Object.is(updatedBoard, board));
	updatedBoard[y][x].value = value;
	updatedBoard[y][x].isValid = checkForValidValue(value, solution[y][x]);

	// console.log(updatedBoard[y][x].value);
	setBoard(updatedBoard);
};

const checkForValidValue = (boardVal: number, solutionVal: number): boolean => {
	return boardVal === solutionVal;
};
