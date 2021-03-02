import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';

const Container = styled.div`
  max-width: 50rem;
  margin-bottom: 3rem;
  background-color: inherit;
  :hover {
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  width: 30rem;
  ${'' /* max-height: 22rem; */}
  overflow: hidden;
`;

const Image = styled(Img)`
  width: 100%;
  height: 20rem;
`;

const StyledLink = styled(Link)`
  ${'' /* width: 25%;
  margin-bottom: 3rem;
  background-color: inherit; */}
  ${'' /* position: relative; */}
  ${'' /* display: table; */}
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
    padding-top: 100%; /*trick here*/
  }
`;

const Dummy = styled(SanityImage)`
  position: absolute; /* Take your picture out of the flow */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; /* Make the picture taking the size of it's parent */

  width: 100%; /* This if for the object-fit */
  height: 100%; /* This if for the object-fit */

  object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
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
      {/* <Image fluid={image} style={{ height: '100%' }} /> */}
      {/* <Dummy> */}
      {/* <SanityImage
          {...image}
          // width={300}
          style={{
            width: '100%',
          }}
        /> */}
      {/* <ImageContainer> */}
      {/* <Image fluid={image.asset.fluid} style={{ height: '100%' }} /> */}

      <Dummy {...image} style={{ width: '100%', objectPosition: 'center' }} />
      {/* </ImageContainer> */}
      {/* </Dummy> */}
      {/* <div
        style={{
          height: '100%',
        }}
      ></div> */}
      <TextContainer>
        <h6>{date}</h6>
        <h5>{title}</h5>
      </TextContainer>
    </StyledLink>
  );
};

export default Card;
