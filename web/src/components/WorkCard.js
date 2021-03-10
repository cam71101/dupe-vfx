import React from 'react';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';
import { Link } from 'gatsby';
import colours from '../styles/colours';

const Title = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${colours.white};
  opacity: 1;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-content: center;
  > h2 {
    text-align: center;
    margin: auto;
  }
  @media ${({ theme }) => theme.laptop} {
    opacity: 0;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  position: relative;
  margin-bottom: 5%;
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
  &::after {
    opacity: 0.5;
    @media ${({ theme }) => theme.laptop} {
      opacity: 0;
    }
  }

  &:hover::after {
    opacity: 0.8;
  }

  &:hover {
    & > div {
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
      <Title>
        <h2>{title}</h2>
      </Title>
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
