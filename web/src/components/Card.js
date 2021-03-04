import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';

const StyledLink = styled(Link)`
  overflow: hidden;
  width: 25%;
  position: relative;
  :hover {
    cursor: pointer;
  }
  :before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 100%;
  }
`;

const Dummy = styled(SanityImage)`
  position: absolute; /
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; 
  width: 100%; 
  height: 100%; 

  object-fit: cover; 
`;

const TextContainer = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
  & > h5 {
    margin: 0;
  }
  & > h4 {
    margin: 0;
    padding: 0;
  }
  background-color: inherit;
`;

const Card = ({ date, title, image, link }) => {
  return (
    <StyledLink to={link}>
      <Dummy {...image} style={{ width: '100%', objectPosition: 'center' }} />

      <TextContainer>
        <h6>{date}</h6>
        <h5>{title}</h5>
      </TextContainer>
    </StyledLink>
  );
};

export default Card;
