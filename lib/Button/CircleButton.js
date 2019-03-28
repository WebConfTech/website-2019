import styled from 'styled-components';
import { loadingStyles } from './helpers';

export const CircleButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.56625rem;
  cursor: pointer;
  border-radius: 100%;
  border: 0;
  background-color: ${({ theme }) => theme.palette.secondary};
  font-family: inherit;

  span {
    width: 7.746875rem;
    height: 7.746875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: white;
    box-shadow: 0 0 0 0.1875rem white;
    border-style: solid;
    border-width: 0.1875rem;
    border-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.secondary};
    font-size: 1.375rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

    ${({ isLoading }) => (isLoading ? loadingStyles(50) : '')}
  }
`;
