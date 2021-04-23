export type Cell = {
	value: number;
	isStatic: boolean;
	isValid: boolean;
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
};

export type SudoCellProps = {
	rowIndex: number;
	cellIndex: number;
	cell: Cell;
	board: Board;
};

export type SudoEmptyCellProps = {
	rowIndex: number;
	cellIndex: number;
	board: Board;
};

export type CellInpElementProps = {
	cords: [number, number];
	board: Board;
	solution: NumberBoard;
	popupState: any;
	// PopupState: React.ComponentType<Props>
	setBoard: (board: Board) => void;
};

export type PickerProps = {
	cords: [number, number];
	board: Board;
	solution: NumberBoard;
	// popupState: any;
	setBoard: (board: Board) => void;
};

export type PickerTileProps = {
	cords: [number, number];
	tileNumber: number;
	board: Board;
	solution: NumberBoard;
	setBoard: (board: Board) => void;
};

export type SetSudokuType = {
	board: Board;
	solution: NumberBoard;
	validating: false;
};
