import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Video from '../components/Video';
import Img from 'gatsby-image';
import WorkCard from '../components/WorkCard';
import BlockContent from '@sanity/block-content-to-react';

const VideoSection = styled.section`
  height: 500px;
  padding-bottom: 0;
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.laptop} {
    overflow: none;
    padding-bottom: 56%;
    height: 0;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 1;
`;

const DupeLogo = styled(Img)`
  height: 100%;
  width: 8rem;
  margin: auto;

  @media ${({ theme }) => theme.mobileM} {
    width: 10rem;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 20rem;
  }
  @media ${({ theme }) => theme.laptopL} {
    width: 30rem;
    }
  }
`;

const Section = styled.section`
  max-width: 100vw;
  background-color: ${({ theme }) => theme.black};
`;

const Container = styled.div`
  width: ${({ theme }) => theme.containerMobileWidth};
  margin: auto;
  @media ${({ theme }) => theme.laptop} {
    width: ${({ theme }) => theme.containerTabletWidth};
  }
  @media ${({ theme }) => theme.laptopL} {
    width: ${({ theme }) => theme.containerWidth};
  }
`;

const DescriptionSection = styled(Section)`
  margin-bottom: 15%;
`;

const DescriptionContainer = styled(Container)`
  padding-top: 10%;
  padding-bottom: 6%;
  color: ${({ theme }) => theme.offWhite};
`;

const FeaturedWorkSection = styled(Section)`
  background-color: ${({ theme }) => theme.offWhite};
  transform: skewY(11deg);
  padding-bottom: 12%;
  margin-bottom: -18rem;
`;

const FeaturedWorkContainer = styled(Container)`
  transform: skewY(-11deg);
  padding-top: 12%;
  padding-bottom: 17rem;
  > div > h1 {
    color: ${({ theme }) => theme.black};
    margin-bottom: 5%;
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
  flex-direction: column;
  @media ${({ theme }) => theme.laptop} {
    flex-direction: row;
  }
`;

const BcorpSection = styled(VideoSection)`
  height: 700px;
  margin-bottom: 0;
  background-color: ${({ theme }) => theme.black};
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
  flex-direction: column;
  @media ${({ theme }) => theme.tablet} {
    flex-direction: row;
  }
  > * > h3 {
    margin-bottom: 1rem;
    @media ${({ theme }) => theme.laptop} {
      margin-bottom: 2rem;
    }
  }
  color: ${({ theme }) => theme.white};
`;

const BcorpLogo = styled(Img)`
  width: 10rem;
  filter: invert(100%);
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
  }
`;

const StudiosSection = styled(Section)`
  background-color: ${({ theme }) => theme.offWhite};
`;

const StudiosContainer = styled(Container)`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const StudiosImage = styled(Img)`
  width: 2rem;
  margin: auto;
  @media ${({ theme }) => theme.mobileM} {
    width: 3rem;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 4rem;
  }

  @media ${({ theme }) => theme.laptop} {
    width: 6rem;
  }
  @media ${({ theme }) => theme.laptopL} {
    width: 8rem;
  }
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
      <VideoSection>
        <LogoContainer>
          {!isLoading && (
            <DupeLogo
              fluid={data.allSanityHome.edges[0].node.dupeLogo.asset.fluid}
            />
          )}
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
            data-sal-delay="450"
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
            data-sal-delay="400"
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
          bCorp
        />

        <BcorpContainer
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="800"
        >
          <BcorpLogo
            fluid={data.allSanityHome.edges[0].node.bcorpLogo.asset.fluid}
            alt="logo"
            style={{}}
          />

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
