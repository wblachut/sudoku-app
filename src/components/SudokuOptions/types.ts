export type Board = number[][];
export type UserBoard = Board | JSON;

export type SudokuType = {
	board: Board;
	solution: Board;
};

export type SudoOptionsProps = {
	board: Board;
	solution: Board;
	setSudoku: React.Dispatch<React.SetStateAction<SudokuType>>;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};
