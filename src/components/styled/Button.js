import styled from 'styled-components';

const ButtonContainer = styled.button`
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
  font-size: 1.2rem;
  color: var(--mainWhite);
  background: ${props =>
    props.cart ? 'var(--btnBlueMain)' : 'var(--mainDark)'};
  border: none;
  opacity: ${props => (props.disabled ? '0.7' : '1')};
  border-radius: 0.3rem;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? 'var(--btnBlueAccent)' : 'var(--mainAccent)'};
  }
  &:focus {
    outline: none;
  }
`;

export default ButtonContainer;
