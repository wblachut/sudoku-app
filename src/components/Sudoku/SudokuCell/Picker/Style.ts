import styled from 'styled-components';

export const PickerDiv = styled.div`
	border-radius: 5px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
`;

export const TileDiv = styled.div`
	background-color: rgb(255, 255, 255);
	padding: 15px 15px;
	border: 1px solid rgb(80, 80, 80);
	border-radius: 5px;
	display: flex;
	justify-content: center
	text-align: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	color: #9e9e9e;
	width: 20px;
	height: 20px;
`;
