type Difficulty = 'easy' | 'medium' | 'hard';
type Board = (number | null)[][];

//
export const getSudokuBoard = async (difficulty: Difficulty): Promise<any> => {
	try {
		const url = `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`;
		const response = await fetch(url);
		const data = await response.json();
		return data.board;
	} catch (e) {
		new Error(e);
	}
};

// FETCHING SOLUTION - code and API from https://github.com/bertoort/sugoku
const encodeBoard = (board: Board) =>
	board.reduce(
		// row: (number | null)[]
		(result: string, row: any, i: number) =>
			result +
			`%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`,
		''
	);

const encodeParams = (params: any) =>
	Object.keys(params)
		.map((key) => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
		.join('&');

export const getSudokuSolution = async (board: Board): Promise<any> => {
	try {
		console.log('solution');
		const url = `https://sugoku.herokuapp.com/solve`;
		const response = await fetch(url, {
			method: 'POST',
			body: encodeParams(board),
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		});
		const data = await response.json();
		const solution = data.solution;
		console.log(solution);
		return solution;
	} catch (e) {
		new Error(e);
	}
};
