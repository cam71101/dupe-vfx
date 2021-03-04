import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SanityImage from 'gatsby-plugin-sanity-image';

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
  }
`;

const JobCard = ({ location, title, image }) => {
  return (
    <Container>
      <ImageContainer>
        <SanityImage {...image} style={{ height: '100%' }} />
      </ImageContainer>
      <TextContainer>
        <h5>{title}</h5>
        <h6>{location}</h6>
      </TextContainer>
    </Container>
  );
};

export default JobCard;
