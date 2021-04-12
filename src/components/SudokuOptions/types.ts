export type Board = number[][];

export type Sudoku = {
	board: Board;
	solution: Board;
};

export type SudoOptionsProps = {
	board: Board;
	solution: Board;
	setSudoku: React.Dispatch<React.SetStateAction<Sudoku>>;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};
