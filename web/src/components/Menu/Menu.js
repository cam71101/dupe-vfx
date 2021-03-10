import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { Link } from 'gatsby';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/">HOME</Link>
      <Link href="/work">WORK</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/joinus">JOIN US</Link>
      <Link href="/news">NEWS</Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
