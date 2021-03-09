import React from 'react';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';
import { Link } from 'gatsby';
import colours from '../styles/colours';

const Title = styled.h2`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colours.white};
  opacity: 0;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  width: 100%;
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
    & > h2 {
      opacity: 1;
    }
  }
  @media ${({ theme }) => theme.laptop} {
    width: 49.01961%;
  }
`;

const WorkCard = ({ title, image, link }) => {
  return (
    <StyledLink to={link}>
      <Title>{title}</Title>
      <SanityImage
        {...image}
        width={1700}
        height={1000}
        style={{
          width: '100%',
        }}
        alt={title}
      />
    </StyledLink>
  );
};

export default WorkCard;
