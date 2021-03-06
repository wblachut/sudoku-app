type Difficulty = 'easy' | 'medium' | 'hard';
type Board = number[][];

export const getSudokuBoard = async (
	difficulty: Difficulty
): Promise<Board | undefined> => {
	try {
		const url = `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`;
		const response = await fetch(url);
		const data = await response.json();
		// console.log('fetching board with', data);
		return data.board;
	} catch (e) {
		new Error(e);
	}
};
