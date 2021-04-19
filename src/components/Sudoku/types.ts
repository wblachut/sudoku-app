export type Board = number[][];

export type SudokuType = {
	board: Board;
	solution: Board;
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
	cellValue: number;
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
	popupState: any;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export type PickerTileProps = {
	tileNumber: number;
	inputRef: React.MutableRefObject<HTMLInputElement | null>;
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
};
