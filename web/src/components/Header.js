import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import logo from '../images/dupelogo.png';

const Root = styled.header`
  position: absolute;
  width: 100%;
  z-index: 100;
`;

const MainContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 10rem;
`;

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  height: 2rem;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  transition: color 3000ms ease-in-out;
  z-index: 1;
  width: 7rem;
  margin-left: 3rem;

  ${
    '' /* &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
    background-color: white;
  }
  &:focus {
    color: black;
  }

  &:hover::before {
    transform: scaleX(1);
  }
  &:focus::before {
    transform: scaleX(1);
  } */
  }
`;

const ImgContainer = styled.div`
  flex-grow: 4;
  padding: 2rem;
`;

const Image = styled(Img)`
  width: 10rem;
`;

const Text = styled.span`
  margin-left: 2rem;
  color: white;
  opacity: 0.8;
  transition: color 300ms ease-in-out;
  &:hover {
    text-shadow: 1px 1px 1px rgba(251, 12, 12, 1),
      0px -1px 3px rgba(12, 79, 251, 0.5), -1px 0px 2px rgba(52, 251, 12, 1);
  }
  ${
    '' /* 
    opacity: 1;
    cursor: pointer;
    color: black;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
    color: black;
  } */
  }
`;

const links = ['WORK', 'ABOUT', 'JOIN US', 'NEWS'];

const Header = ({ logo, bcorpLogo }) => {
  const StyledLink = styled(Link)`
    ${'' /* &:focus::before */}
  `;

  return (
    <Root>
      <MainContainer>
        <Link to="/">{logo ? <Image fluid={logo} /> : <Image />}</Link>
        <Container>
          {links.map((value) => (
            <TextContainer>
              {/* <StyledLink to={'/' + value.replace(' ', '').toLowerCase()}> */}
              <Text>{value} </Text>
              {/* </StyledLink> */}
            </TextContainer>
          ))}
        </Container>
      </MainContainer>
    </Root>
  );
};

export default Header;
