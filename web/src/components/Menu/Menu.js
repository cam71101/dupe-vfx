import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/work">WORK</a>
      <a href="/about">ABOUT</a>
      <a href="/joinus">JOIN US</a>
      <a href="/news">NEWS</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
