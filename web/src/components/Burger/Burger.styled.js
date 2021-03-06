// Burger.styled.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
  visibility: visible;
  position: absolute;
  top: 40%;
  right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media ${({ theme }) => theme.tablet} {
    visibility: hidden;
  }

  div {
    width: 2rem;
    height: 0.12rem;
    background: ${({ theme }) => theme.offWhite};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
