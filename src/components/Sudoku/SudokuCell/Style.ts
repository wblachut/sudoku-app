import styled from 'styled-components';

export const CellDiv = styled.div`
	background-color: #21242a;
	color: #61dafb;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.6vmax;
	font-weight: bold;
	padding: 0;
	margin: 0;
	height: 8vw;
	width: 8vw;

	&:nth-of-type(9n + 4),
	&:nth-of-type(9n + 5),
	&:nth-of-type(9n + 6),
	&:nth-of-type(n + 28):nth-of-type(-n + 54) {
		background-color: #181c21;
	}
	&:nth-of-type(n + 28):nth-of-type(-n + 54):nth-of-type(9n + 4),
	&:nth-of-type(n + 28):nth-of-type(-n + 54):nth-of-type(9n + 5),
	&:nth-of-type(n + 28):nth-of-type(-n + 54):nth-of-type(9n + 6) {
		background-color: #21242a;
	}

	@media (min-width: 736px) {
		max-height: 4vw !important;
		max-width: 4vw !important;
	}
`;

export const InvalidSpan = styled.span`
	color: lightcoral;
	font-family: arial;
	font-weight: 400;
	font-size: 1.8vmax;
`;
export const ValidSpan = styled.span`
	color: springgreen;
	font-family: arial;
	font-weight: 400;
	font-size: 1.8vmax;
`;

// export const ValidateSpan = styled.span`
// 	color: ${(props) => (props.valid ? 'lightgreen' : 'lightcoral')};
// 	color: lightcoral;
// 	font-family: arial;
// 	font-weight: 400;
// `;
