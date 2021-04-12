export type Board = number[][];

export type SudokuType = {
	board: Board;
	solution: Board;
};

export type BoxWrapProps = {
	board: Board;
};

export type SudoCellProps = {
	i: number;
	j: number;
	val: number;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};
