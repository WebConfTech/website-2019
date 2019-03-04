import styled from 'styled-components';

export const CircleButton = styled.button`
  cursor: pointer;
  display: block;
  border-radius: 100%;
  border: 0;
  background-color: ${({ theme }) => theme.palette.secondary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.56625rem;
  span {
    display: block;
    width: 8.1175rem;
    line-height: 8.1175rem;
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
  }
`;
