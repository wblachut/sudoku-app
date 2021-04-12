// code and API from https://github.com/bertoort/sugoku

type Board = number[][];

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

export const getSudokuSolution = async (
	board: Board
): Promise<Board | undefined> => {
	try {
		console.log('getting solution for', { board: board });
		const url = `https://sugoku.herokuapp.com/solve`;
		const response = await fetch(url, {
			method: 'POST',
			body: encodeParams({ board: board }),
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		});
		const data = await response.json();
		console.log(data);
		const solution = data.solution;
		return solution;
	} catch (e) {
		new Error(e);
	}
};
