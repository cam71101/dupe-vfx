import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import colours from '../styles/colours';

const Container = styled.div`
  max-width: 50rem;
  margin-bottom: 3rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 10px;
  :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
    transform: scale(1px);
  }
  margin: 1rem;
  transition: all 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  width: 23rem;
  height: 23rem;
  overflow: hidden;
`;

const Image = styled(Img)`
  height: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  flex-direction: column;
  & > * {
    color: black;
  }
  & > h5 {
    margin: 0;
    color: black;
  }
  & > h6 {
    margin: 0;
    padding: r ${'' /* color: black; */};
  }
`;

const JobCard = ({ location, title, image }) => {
  return (
    <Container>
      <ImageContainer>
        <Image fluid={image} />
      </ImageContainer>
      <TextContainer>
        <h5>{title}</h5>
        <h6>{location}</h6>
      </TextContainer>
    </Container>
  );
};

export default JobCard;
