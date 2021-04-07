import React, { useState } from 'react';
import './App.scss';
import Sudoku from '../Sudoku/Sudoku';
import SudokuOptions from '../SudokuOptions/SudokuOptions';

export const App = (): JSX.Element => {
	const [difficulty, setDifficulty] = useState('easy');

	return (
		<div className="App sudoku-wrapper">
			<Sudoku />
			<SudokuOptions difficulty={difficulty} setDifficulty={setDifficulty} />
		</div>
	);
};

export default App;
