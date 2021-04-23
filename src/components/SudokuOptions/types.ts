import { Board, NumberBoard } from '../Sudoku/types';

export type UserInput = string | ArrayBuffer | null;

export type SudokuType = {
	board: Board;
	solution: NumberBoard;
};

export type SudoOptionsProps = {
	board: Board;
};

export interface HTMLInputEvent extends Event {
	target: HTMLInputElement & EventTarget;
}
