import React from 'react';
import styled from 'styled-components';
import MenuNegativeIcon from 'lib/assets/icon-menu-negative.svg';

const MenuIconButton = styled.a`
  display: none;
  text-decoration: none;

  &:hover {
    border: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const MenuIconText = styled.span`
  margin-right: 0.8125rem;
  margin-top: 0.2rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.secondary};
`;

const MenuIconImageContainer = styled.div`
  height: ${({ dark }) => (dark ? '2.5rem' : '2.784375rem')};
  width: 2.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ dark, theme }) => (dark ? theme.palette.secondary : 'transparent')};

  img {
    height: ${({ dark }) => (dark ? '1.5rem' : '2.784375rem')};
  }
`;

export const MenuIconMobile = ({ short, dark, ...props }) => (
  <MenuIconButton {...props}>
    {!short ? <MenuIconText>Menú</MenuIconText> : null}
    <MenuIconImageContainer dark={dark}>
      <img src={MenuNegativeIcon} alt="Abrir menú" />
    </MenuIconImageContainer>
  </MenuIconButton>
);
