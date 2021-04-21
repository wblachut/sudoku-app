import { Board } from '../types';

export const onCellInput = (
	e: React.SyntheticEvent<HTMLInputElement>,
	board: Board,
	setBoard: React.Dispatch<React.SetStateAction<Board>>
): void => {
	const cords = e.currentTarget.getAttribute('data-cord');
	// console.log(e.nativeEvent.data);
	//e.currentTarget.value = e.nativeEvent.data;
	if (isNaN(+e.currentTarget.value)) {
		e.currentTarget.value = '';
		return;
	}
	if (board && cords) {
		assignValueToCell(+e.currentTarget.value, board, cords, setBoard);
	}
};

export const onPickerClick = (
	e: React.MouseEvent<HTMLDivElement>,
	board: Board,
	inputRef: React.MutableRefObject<any>,
	setBoard: React.Dispatch<React.SetStateAction<Board>>
): void => {
	const cords = inputRef.current.parentNode.parentNode.getAttribute(
		'data-cord'
	);
	const val = e.currentTarget.innerHTML;
	inputRef.current.value = val;
	assignValueToCell(+val, board, cords, setBoard);
};

const assignValueToCell = (
	value: number,
	board: Board,
	cords: string,
	setBoard: React.Dispatch<React.SetStateAction<Board>>
): void => {
	const x = cords[2];
	const y = cords[0];
	const updatedBoard = Object.assign(board);
	updatedBoard[y][x].value = value;
	// updatedBoard[y][x].type = 'filled';
	setBoard(updatedBoard);
};
