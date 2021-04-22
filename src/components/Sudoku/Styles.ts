import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: #282c34;
	height: 100%;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

export const SudokuBoard = styled.div`
	// min-width: 100vw;
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	grid-template-rows: repeat(9, 1fr);
	grid-gap: 2px;
	z-index: 0;
`;
