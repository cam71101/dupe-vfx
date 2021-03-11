import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import theme from '../styles/theme';

const Root = styled.footer`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: ${({ theme }) => theme.offWhite};
`;

const Container = styled.div`
  width: ${({ theme }) => theme.containerMobileWidth};
  margin: auto;
  display: flex;
  align-items: center;
  padding-top: 4vh;
  padding-bottom: 4vh;
  @media ${({ theme }) => theme.laptop} {
    width: ${({ theme }) => theme.containerWidth};
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled(Img)`
  max-width: 50%;
`;

const Social = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    width: 3rem;
    display: flex;
    justify-content: center;
  }
`;

const Contact = styled.div`
  flex: 1;
  > h6 {
    color: ${({ theme }) => theme.black};
    text-align: end;
  }
`;

const StyledLink = styled(Link)`
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 0.7rem;

  @media ${({ theme }) => theme.mobileL} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.laptopL} {
    font-size: 1.5rem;
  }
`;

const Footer = ({ logo, color }) => {
  let bgColor = theme.offWhite;
  let fgColor = theme.black;

  if (color === 'black') {
    bgColor = theme.black;
    fgColor = theme.offWhite;
  }

  return (
    <Root style={{ backgroundColor: bgColor }}>
      <Container>
        <ImgContainer>
          <Image fluid={logo} />
        </ImgContainer>
        <Social>
          <StyledLink to="https://www.instagram.com/dupevfx/">
            <Icon icon={faInstagram} color={fgColor} size="md" />
          </StyledLink>
          <StyledLink to="https://www.linkedin.com/company/dupevfx/">
            <Icon icon={faLinkedinIn} color={fgColor} size="md" />
          </StyledLink>
          <a href="mailto:hello@dupevfx.com">
            <Icon icon={faEnvelope} color={fgColor} size="md" />
          </a>
        </Social>
        <Contact>
          <h6 style={{ color: fgColor }}>hello@dupevfx.com </h6>
          <h6 style={{ color: fgColor }}>18-22 Ashwin Street, London E8 3DL</h6>
        </Contact>
      </Container>
    </Root>
  );
};

export default Footer;
