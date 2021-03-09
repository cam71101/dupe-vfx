import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Video from '../components/Video';
import Img from 'gatsby-image';
import colours from '../styles/colours';
import sizes from '../styles/sizes';
import WorkCard from '../components/WorkCard';
import BlockContent from '@sanity/block-content-to-react';
import breakpoints from '../styles/breakpoints';

const VideoSection = styled.section`
  ${
    '' /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center; */
  }
  height: 0;
  position: relative;
  padding-bottom: 56%;
  overflow: hidden;
  background-color: #000;
`;

const LogoContainer = styled.div`
  ${
    '' /* color: white;
  background-color: transparent !important;
  z-index: 6;
  max-width: 1204px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  }

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: #fff;
  text-align: center;
  z-index: 1;
`;

const Section = styled.section`
  max-width: 100vw;
  background-color: ${colours.black};
`;

const Container = styled.div`
  width: ${sizes.containerWidth};
  margin: auto;
`;

const DescriptionSection = styled(Section)`
  margin-bottom: 15%;
`;

const DescriptionContainer = styled(Container)`
  padding-top: 6rem;
  padding-bottom: 6rem;

  color: ${colours.offWhite};

  > * > h1 {
    color: ${colours.offWhite};
    margin-bottom: 5rem;
  }
  > div {
  }
`;

const FeaturedWorkSection = styled(Section)`
  background-color: ${colours.offWhite};
  transform: skewY(11deg);
  padding-bottom: 15%;
  margin-bottom: -18rem;
`;

const FeaturedWorkContainer = styled(Container)`
  transform: skewY(-11deg);
  padding-top: 10rem;
  padding-bottom: 15rem;

  > div > h1 {
    color: ${colours.black};
    margin-bottom: 5rem;
  }
`;

const WorkCardsContainer = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-box-align: start;
  align-items: flex-start;
`;

const BcorpSection = styled(Section)`
  ${'' /* position: relative; */}

  height: 0;
  position: relative;
  padding-bottom: 56%;
  overflow: hidden;
  background-color: #000;
`;

const BcorpLogoContainer = styled.div`
  width: 120rem;
`;

const BcorpContainer = styled(Container)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 1;
  margin: auto;
  justify-content: center;
  align-items: center;
  > * > h3 {
    margin-bottom: 2rem;
  }
  color: ${colours.white};
`;

const StudiosSection = styled(Section)`
  background-color: ${colours.offWhite};
`;

const StudiosContainer = styled(Container)`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StudiosImage = styled(Img)`
  width: 4rem;
  margin: auto;

  @media ${breakpoints.laptop} {
    width: 6rem;
  }
  @media ${breakpoints.laptopL} {
    width: 8rem;
  }
`;

const DupeLogo = styled(Img)`
  height: 100%;
  min-width: 10rem;
  width: 10rem;
  margin: auto;
  @media ${breakpoints.tablet} {
    width: 20rem;
  }
  @media ${breakpoints.laptopL} {
    width: 30rem;
  }
`;

const BcorpLogo = styled(Img)`
  width: 100%;
  filter: invert(100%);
`;

const LettersContainer = styled.div`
  width: 30rem;
  position: relative;
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
  animation-fill-mode: forwards;
`;

const LetterContainer = styled.div`
  width: 25rem;
  position: absolute;
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s;
  animation-fill-mode: forwards;
`;

const UContainer = styled(LetterContainer)`
  left: 120px;
`;
const PContainer = styled(LetterContainer)`
  left: 240px;
`;

const EContainer = styled(LetterContainer)`
  left: 360px;
`;

const Letter = styled.h2`
  font-size: 12rem;
  color: ${colours.offWhite};
  margin: 10px;
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
  animation-fill-mode: forwards;
  transform: translate(0px, 0px) rotate(0deg);
`;

const D = styled(Letter)`
  ${'' /* transform: translate(263px, 39px) rotate(180deg); */}
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
  animation-fill-mode: forwards;
  transform: translate(0px, 0px) rotate(0deg);
  ${'' /* transform: translate(263px, 39px) rotate(180deg); */}
`;

const Test = styled.div`
  width: 700px;
  height: 420px;
  overflow: hidden;
  position: relative;
  margin: 400px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage = ({ data }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  // const [isRotating, setIsRotating] = React.useState(0);

  // React.useEffect(() => {
  //   window.addEventListener('scroll', hideBar);
  // }, []);

  const hideBar = () => {
    // console.log(window.scrollY);
    // if (window.scrollY > 300) {
    // setIsRotating(
    //   `translate(${window.scrollY - 300}px) rotate(${
    //     window.scrollY - 300
    //   }deg)`
    // );
    //   setIsRotating(`rotate(180deg)`);
    // } else {
    //   setIsRotating(`translate(0px, 0px) rotate(0deg)`);
    // }
    // window.scrollY > 300
    //   ? setIsRotating(`rotate(-${window.scrollY - 300}deg)`)
    //   : setIsRotating('rotate(0deg)');
  };

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  let rotate;

  return (
    <Layout color={'black'} logo>
      {/* <Video
        videoSrcURL={data.allSanityHome.edges[0].node.mainVideo}
        videoTitle="Gangs"
        onLoad={() => handleLoad()}
        loaded={isLoading}
      /> */}
      <VideoSection>
        <LogoContainer>
          {!isLoading ? (
            <DupeLogo
              fluid={data.allSanityHome.edges[0].node.dupeLogo.asset.fluid}
            />
          ) : /* <LettersContainer>
              <LetterContainer style={{ transform: isRotating }}>
                <D>d</D>
              </LetterContainer> */
          /* <UContainer>
                <Letter>u</Letter>
              </UContainer>
              <PContainer>
                <Letter>p</Letter>
              </PContainer>
              <EContainer>
                <Letter>e</Letter>
              </EContainer> */
          /* </LettersContainer> */
          null}
        </LogoContainer>
        <Video
          videoSrcURL={data.allSanityHome.edges[0].node.mainVideo}
          videoTitle="Gangs"
          onLoad={() => handleLoad()}
          loaded={isLoading}
        />
      </VideoSection>

      <DescriptionSection>
        <DescriptionContainer>
          {/* <BlockContent
            blocks={data.allSanityHome.nodes[0].children}
            projectId="kbmcuoo3"
            dataset="production"
          /> */}
          <h1
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            We're Dupe.
          </h1>
          <h3
            data-sal="fade"
            data-sal-delay="600"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            We carefully balance our talent and professionalism with an
            approachable, can-do attitude. Crafting stunning visual effects for
            film and television. And we make sure our staff have a healthy
            work-life balance too.
          </h3>
        </DescriptionContainer>
      </DescriptionSection>
      <FeaturedWorkSection>
        <FeaturedWorkContainer>
          <div
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <h1>Featured Work</h1>
          </div>

          <div
            data-sal="fade"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <WorkCardsContainer>
              {data.posts.nodes.map((value) => {
                let image = value.image;
                if (value.thumbnail) {
                  image = value.thumbnail;
                }
                return (
                  <WorkCard
                    title={value.title}
                    image={image}
                    link={'work/' + value.slug.current}
                  />
                );
              })}
            </WorkCardsContainer>
          </div>
        </FeaturedWorkContainer>
      </FeaturedWorkSection>
      <BcorpSection>
        <Video
          videoSrcURL="https://player.vimeo.com/video/363119176?app_id=122963?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1"
          videoTitle="Bubble"
        />

        <BcorpContainer
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="800"
        >
          <BcorpLogoContainer>
            <BcorpLogo
              fluid={data.allSanityHome.edges[0].node.bcorpLogo.asset.fluid}
              alt="logo"
            />
          </BcorpLogoContainer>

          <BlockContent
            blocks={data.allSanityHome.nodes[0]._rawBcorpText}
            projectId="kbmcuoo3"
            dataset="production"
          />
        </BcorpContainer>
      </BcorpSection>
      <StudiosSection>
        <StudiosContainer>
          {data.allSanityHome.nodes[0].partnersGallery.map((value) => {
            return (
              <StudiosImage
                fluid={value.logoImage.asset.fluid}
                imgStyle={{ width: '100%', height: 'auto' }}
              />
            );
          })}
        </StudiosContainer>
      </StudiosSection>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allSanityHome {
      nodes {
        children: _rawDupeTagLine
        _rawBcorpText
        partnersGallery {
          link
          logoImage {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
      edges {
        node {
          mainVideo
          bcorpLogo {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          bcorpText {
            _rawChildren
          }
          bcorpVideo
          dupeLogo {
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          dupeTagLine {
            _rawChildren
          }
        }
      }
    }
    posts: allSanityWorkPost(filter: { featured: { eq: true } }) {
      nodes {
        slug {
          current
        }
        title
        thumbnail {
          ...ImageWithPreview
        }
        image {
          ...ImageWithPreview
        }
      }
    }
  }
`;

export default IndexPage;
