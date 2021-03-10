import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from 'styled-components';

import colours from '../styles/colours';
import sizes from '../styles/sizes';

const Root = styled.footer`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: ${colours.offWhite};
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  display: flex;

  align-items: center;
  padding-top: 10%;
  padding-bottom: 10%;
  @media ${({ theme }) => theme.laptop} {
    width: ${sizes.containerWidth};
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
    ${'' /* margin: 1rem; */}
    width: 3rem;
    display: flex;
    justify-content: center;
  }
`;

const Contact = styled.div`
  flex: 1;
  ${'' /* display: flex;
  align-content: flex-end;
  flex-direction: column; */}
  > h6 {
    color: black;
    text-align: end;
  }
`;

const StyledLink = styled(Link)`
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Footer = ({ logo, color }) => {
  let bgColor = colours.offWhite;
  let fgColor = colours.black;

  if (color === 'black') {
    bgColor = colours.black;
    fgColor = colours.offWhite;
  }

  return (
    <Root style={{ backgroundColor: bgColor }}>
      <Container>
        <ImgContainer>
          <Image fluid={logo} />
        </ImgContainer>

        <Social>
          <StyledLink to="https://www.instagram.com/dupevfx/">
            <FontAwesomeIcon icon={faInstagram} color={fgColor} size="md" />
          </StyledLink>
          <StyledLink to="https://www.linkedin.com/company/dupevfx/">
            <FontAwesomeIcon icon={faLinkedinIn} color={fgColor} size="md" />
          </StyledLink>
          <a href="mailto:hello@dupevfx.com">
            <FontAwesomeIcon icon={faEnvelope} color={fgColor} size="md" />
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

// export const query = graphql`
//   query FooterQuery {
//     file(
//       relativePath: { eq: "dupe_logotype-visual-effects_rgb_off-white.png" }
//     ) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_noBase64
//         }
//       }
//     }
//   }
// `;

export default Footer;
