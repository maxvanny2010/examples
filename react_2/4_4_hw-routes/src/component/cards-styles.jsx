import styled from 'styled-components';

export const CardBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	overflow-y: auto;
	max-height: 80vh;
`;

export const Card = styled.div`
	background-color: lightgray;
	color: #1e1e1e;
	font-weight: normal;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 4px;
	text-align: center;
	flex: 1 1 200px;
	max-width: 200px;
	margin: 10px;
	box-sizing: border-box;
`;


export const Image = styled.img`
	width: 100%;
	border-radius: 8px;
`;

export const Name = styled.h2`
	margin: 10px 0;
	font-size: 18px;
`;

export const Info = styled.p`
	margin: 5px 0;
	font-size: 14px;
`;
