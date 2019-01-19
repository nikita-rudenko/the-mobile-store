import styled from 'styled-components';

export const ButtonContainer = styled.button`
	font-family: 'Roboto', sans-serif;
	text-transform: capitalize;
	font-size: 1.2rem;
	background: var(--mainPrimary);
	border: 1.5px solid var(--mainPrimary);
	color: var(--mainWhite);
	border-radius: 0.3rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.1s ease-in-out;
	&:hover {
		background: var(--mainLight);
		border: 1.5px solid var(--mainLight);
	}
	&:focus {
		outline: none;
	}
`;
