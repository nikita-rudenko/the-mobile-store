import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;

  #modal {
    background: #fff;
     {
      i {
        font-size: 6rem;
        color: var(--btnDangerAccent);
      }
    }
  }
`;

export default ModalContainer;
