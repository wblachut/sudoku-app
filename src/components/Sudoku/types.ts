export type Board = number[][];

export type SudokuType = {
	board: Board;
	solution: Board;
};

export type BoxWrapProps = {
	board: Board;
};

export type SudoRowProps = {
	array: number[];
	row: number;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type SudoCellProps = {
	col: number;
	row: number;
	element: number;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type SudoEmptyCellProps = {
	col: number;
	row: number;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type CellInpElementProps = {
	col: number;
	row: number;
	board: Board;
	inputRef: React.MutableRefObject<HTMLInputElement | null>;
	popupState: any;
	// PopupState: React.ComponentType<Props>
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type PickerProps = {
	board: Board;
	inputRef: React.MutableRefObject<HTMLInputElement | null>;
	popupState: any;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type PickerTileProps = {
	element: number;
	inputRef: React.MutableRefObject<HTMLInputElement | null>;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};
