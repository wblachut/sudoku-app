export type Cell = {
	value: number;
	readOnly: boolean;
	valid: boolean;
};

export type NumberBoard = number[][];

export type Board = Cell[][];

export type SudokuType = {
	board: Board;
	solution: NumberBoard;
};

export type BoxWrapProps = {
	board: Board;
};

export type SudoRowProps = {
	rowIndex: number;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type SudoCellProps = {
	rowIndex: number;
	cellIndex: number;
	cell: Cell;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type SudoEmptyCellProps = {
	rowIndex: number;
	cellIndex: number;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type CellInpElementProps = {
	rowIndex: number;
	cellIndex: number;
	board: Board;
	inputRef: React.MutableRefObject<HTMLInputElement | null>;
	popupState: any;
	// PopupState: React.ComponentType<Props>
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type PickerProps = {
	board: Board;
	inputRef: React.MutableRefObject<HTMLInputElement | null>;
	// popupState: any;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type PickerTileProps = {
	tileNumber: number;
	inputRef: React.MutableRefObject<HTMLInputElement | null>;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};
