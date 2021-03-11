import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import './Layout.css';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Seo from '../components/SEO';
import theme from '../styles/theme';

const Main = styled.main`
  max-width: 100vw;
  -ms-overflow-style: none;
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

const BcorpContainer = styled.div`
  position: fixed;
  right: 0%;
  bottom: 10%;
  z-index: 10;
  width: 10rem;
  @media ${({ theme }) => theme.mobileL} {
    width: 15rem;
  }
  @media ${({ theme }) => theme.desktop} {
    width: 20rem;
    right: 0%;
    top: 50%;
  }
`;

const Layout = (props) => {
  const [isHide, setIsHide] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [open]);

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
          <ThemeProvider theme={theme}>
            <Main style={{ overflow: 'hidden' }}>
              <Seo
                article={props.article}
                title={props.title}
                description={props.description}
              />
              <GlobalStyle />
              <BcorpContainer>
                <Image
                  fluid={data.bcorpLogo.childImageSharp.fluid}
                  style={{ width: '100%' }}
                  imgStyle={{ filter: 'invert(100%)' }}
                />
              </BcorpContainer>

              {props.logo ? (
                <Header open={open} setOpen={setOpen} />
              ) : (
                <Header
                  logo={data.logoOffWhite.childImageSharp.fluid}
                  bcorpLogo={data.bcorpLogo.childImageSharp.fluid}
                  open={open}
                  setOpen={setOpen}
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
          </ThemeProvider>
        );
      }}
    />
  );
};

export default Layout;
