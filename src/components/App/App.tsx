import React from 'react';
import './App.scss';
import Sudoku from '../Sudoku/Sudoku';

export const App = (): JSX.Element => {
	return (
		<div className="App sudoku-wrapper">
			<Sudoku />
		</div>
	);
};

export default App;
