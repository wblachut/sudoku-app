import { makepuzzle, solvepuzzle } from 'sudoku';

const getFormattedBoard = (raw: any) => {
	const board = raw.map((e: number | null) => (e === null ? 0 : e + 1));
	return formatBoard(board);
};

const getFormattedSolution = (rawSolution: any) => {
	const solutionBoard = rawSolution.map((e: number) => e + 1);
	return formatBoard(solutionBoard);
};

const formatBoard = (unformatted: any) => {
	const board: number[][] = [];
	for (let i = 0; i < 9; i++) {
		const row: number[] = [];
		for (let j = 0; j < 9; j++) {
			const value = unformatted[i * 9 + j];
			const col: number = value;
			row.push(col);
		}
		board.push(row);
	}
	return board;
};

export const getSudoku = () => {
	const raw = makepuzzle();
	const rawSolution = solvepuzzle(raw);

	const result = {
		board: getFormattedBoard(raw),
		solution: getFormattedSolution(rawSolution),
	};
	const sol2 = [...result.solution];
	console.log(sol2);
	console.log(result.solution);
	console.log(sol2 == result.solution);
	console.log(sol2 === result.solution);
	console.log(validateSudoku(sol2, result.solution));
	return result;
};

export const validateSudoku = (candidate: any, solution: any) => {
	if (
		candidate.length === solution.length &&
		candidate.every((value: number, index: number) => value === solution[index])
	)
		return true;
};
