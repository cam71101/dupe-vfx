import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import sizes from '../styles/sizes';
import Menu from './Menu/Menu';
import Burger from './Burger/Burger';

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
  width: ${({ theme }) => theme.containerMobileWidth};
  height: 8rem;
  @media ${({ theme }) => theme.laptop} {
    width: ${sizes.containerWidth};
  }
`;

const Container = styled.div`
  display: flex;
  visibility: hidden;
  overflow: hidden;
  width: 100%;
  justify-content: flex-end;
  @media ${({ theme }) => theme.tablet} {
    visibility: visible;
  }
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
  }
`;

const Image = styled(Img)`
  width: 5rem;
  @media ${({ theme }) => theme.laptop} {
    width: 10rem;
  }
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
`;

const BurgerContainer = styled.div``;

const links = ['WORK', 'ABOUT', 'JOIN US', 'NEWS'];

const Header = ({ logo, open, setOpen }) => {
  return (
    <Root>
      <MainContainer>
        <Link to="/">{logo ? <Image fluid={logo} /> : <Image />}</Link>
        <BurgerContainer>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </BurgerContainer>
        <Container>
          {links.map((value) => (
            <TextContainer>
              <Link to={'/' + value.replace(' ', '').toLowerCase()}>
                <Text>{value} </Text>
              </Link>
            </TextContainer>
          ))}
        </Container>
      </MainContainer>
    </Root>
  );
};

export default Header;
