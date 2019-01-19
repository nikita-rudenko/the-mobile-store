import styled from 'styled-components';

export const ButtonContainer = styled.button`
	font-family: 'Roboto', sans-serif;
	text-transform: capitalize;
	font-size: 1.2rem;
	color: var(--mainWhite);
	background: transparent;
	border: none;
	border-radius: 0.3rem;
	padding: 0.2rem 0.8rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.1s ease-in-out;
	&:hover {
		background: var(--mainPrimary);
	}
	&:focus {
		outline: none;
	}
`;
