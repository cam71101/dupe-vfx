import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from '../styles/globalStyles';
import styled from 'styled-components';
import './Layout.css';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Seo from '../components/SEO';

const Main = styled.main`
  min-height: 100vh;
  max-width: 100vw;
`;

const Image = styled(Img)`
  position: fixed;
  z-index: 10;
  width: 15rem;
  transition: opacity ease 250ms;
  > img {
    filter: invert(100%);
  }
`;

const Layout = (props) => {
  const [isHide, setIsHide] = React.useState(0);

  // React.useEffect(() => {
  //   window.addEventListener('scroll', hideBar);
  // }, []);

  // const hideBar = () => {
  //   window.scrollY > 300 ? setIsHide(1) : setIsHide(0);
  // };

  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          logoOffWhite: file(
            relativePath: {
              eq: "dupe_logotype-visual-effects_rgb_off-white.png"
            }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          logoBlack: file(relativePath: { eq: "dupelogoblack.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          bcorpLogo: file(
            relativePath: { eq: "Certified-B-Corp-Logo-With-Tag.png" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <Main>
            <Seo
              article={props.article}
              title={props.title}
              description={props.description}
            />
            <GlobalStyle />
            <Image
              fluid={data.bcorpLogo.childImageSharp.fluid}
              style={{
                position: 'fixed',
                right: '2%',
                top: '20%',
                transform: 'translateX(-50%)',
                // opacity: isHide,
              }}
              imgStyle={{ filter: 'invert(100%)' }}
            />

            {props.logo ? (
              <Header />
            ) : (
              <Header
                logo={data.logoOffWhite.childImageSharp.fluid}
                bcorpLogo={data.bcorpLogo.childImageSharp.fluid}
              />
            )}
            {props.children}
            {props.footer ? null : props.color ? (
              <Footer
                logo={data.logoOffWhite.childImageSharp.fluid}
                color={props.color}
              />
            ) : (
              <Footer
                logo={data.logoBlack.childImageSharp.fluid}
                color={props.color}
              />
            )}
          </Main>
        );
      }}
    />
  );
};

export default Layout;
