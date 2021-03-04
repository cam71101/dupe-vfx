import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import colours from '../styles/colours';

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
  width: 65%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
`;

const Image = styled(Img)`
  width: 10rem;
  margin: 1rem;
`;

const Social = styled.div`
  > * {
    margin: 1rem;
    width: 3rem;
  }
`;

const Contact = styled.div`
  > h6 {
    color: black;
  }
`;

const Footer = ({ logo, color }) => {
  let bgColor = colours.offWhite;
  let fgColor = colours.black;

  if (color == 'black') {
    bgColor = colours.black;
    fgColor = colours.offWhite;
  }

  return (
    <Root style={{ backgroundColor: bgColor }}>
      <Container>
        <Image fluid={logo} />
        <Social>
          <Link to="https://www.instagram.com/dupevfx/">
            <FontAwesomeIcon icon={faInstagram} color={fgColor} size="lg" />
          </Link>
          <Link to="https://www.linkedin.com/company/dupevfx/">
            <FontAwesomeIcon icon={faLinkedinIn} color={fgColor} size="lg" />
          </Link>
          <a href="mailto:hello@dupevfx.com">
            <FontAwesomeIcon icon={faEnvelope} color={fgColor} size="lg" />
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
