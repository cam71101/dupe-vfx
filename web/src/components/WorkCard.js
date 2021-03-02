import React from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import Image from 'gatsby-plugin-sanity-image';
import { Link } from 'gatsby';

const Title = styled.h3`
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  width: 49.01961%;
  position: relative;
  margin-bottom: 60px;
  :hover {
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    transition: transform 300ms ease-in-out;
    background-color: black;
    opacity: 0;
  }

  &:hover::after {
    opacity: 0.8;
  }

  &:hover {
    & > h3 {
      opacity: 1;
    }
  }
`;

const WorkCard = ({ title, image, link }) => {
  return (
    <StyledLink to={link}>
      <Title>{title}</Title>
      <Image
        {...image}
        width={1700}
        height={1000}
        style={{
          width: '100%',
        }}
      />
    </StyledLink>
  );
};

export default WorkCard;
