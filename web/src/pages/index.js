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

const VideoSection = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  color: white;
  background-color: transparent !important;
  z-index: 6;
  max-width: 1204px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  margin-bottom: 18rem;
`;

const DescriptionContainer = styled(Container)`
  padding-top: 6rem;
  padding-bottom: 6rem;
  > * > h3 {
    color: ${colours.offWhite};
  }
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
  padding-bottom: 18rem;
  margin-bottom: -18rem;
`;

const FeaturedWorkContainer = styled(Container)`
  transform: skewY(-11deg);
  padding-top: 10rem;
  padding-bottom: 20rem;

  > h1 {
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
  position: relative;
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
  padding-top: 8rem;
  padding-bottom: 8rem;
`;

const StudiosImage = styled(Img)`
  width: 20rem;
`;

const DupeLogo = styled(Img)`
  height: 100%;
  min-width: 10rem;
  width: 30rem;
`;

const BcorpLogo = styled(Img)`
  width: 100%;
  filter: invert(100%);
`;

const IndexPage = ({ data }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Layout color={'black'} logo>
      <Video
        videoSrcURL={data.allSanityHome.edges[0].node.mainVideo}
        videoTitle="Gangs"
        onLoad={() => handleLoad()}
        loaded={isLoading}
      />
      <VideoSection>
        <LogoContainer>
          {!isLoading ? (
            <DupeLogo
              fluid={data.allSanityHome.edges[0].node.dupeLogo.asset.fluid}
            />
          ) : null}
        </LogoContainer>
      </VideoSection>

      <DescriptionSection>
        <DescriptionContainer>
          <BlockContent
            blocks={data.allSanityHome.nodes[0].children}
            projectId="kbmcuoo3"
            dataset="production"
          />
        </DescriptionContainer>
      </DescriptionSection>
      <FeaturedWorkSection>
        <FeaturedWorkContainer>
          <h1>Featured Work</h1>
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
        </FeaturedWorkContainer>
      </FeaturedWorkSection>
      <BcorpSection>
        <Video
          videoSrcURL="https://player.vimeo.com/video/363119176?app_id=122963?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1"
          videoTitle="Bubble"
        />
        <BcorpContainer>
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
                style={{ width: '15rem', margin: 'auto' }}
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
