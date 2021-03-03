import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import BlockContent from '@sanity/block-content-to-react';
import colours from '../styles/colours';
import Img from 'gatsby-image';
import Video from '../components/Video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import SanityImage from 'gatsby-plugin-sanity-image';

const Section = styled.section`
  width: 100%;

  padding-top: 4rem;
  margin-bottom: 10rem;
`;
const Container = styled.div`
  width: 65%;
  margin: auto;
  color: ${colours.white};
  > h1 {
    color: ${colours.offWhite};
  }
  ${'' /* > h2 {
    padding-bottom: 5rem;
  } */}
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const VideoSection = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const Image = styled(Img)``;

const PlayButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  > div:first-child {
    width: 100%;
  }
  > div > h3 {
    color: ${colours.offWhite};
  }
  > div > p {
    ${'' /* padding-right: 10rem; */}
  }
  margin-bottom: 7rem;
`;

const Test = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  -webkit-backface-visibility: hidden;
  outline: 1px solid transparent;
`;

const VideoPlayer = styled.iframe`
  ${
    '' /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%; */
  }

  ${
    '' /* position: absolute;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%; */
  }

  ${'' /* width: 100% */}
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;

const YouTube = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CreditsContainer = styled.div`
  padding-left: 10rem;
`;

const WorkPost = ({ data }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  let opacity = 1;

  if (!isLoading) {
    opacity = 0;
  }

  let buttonOpacity = 0.5;

  if (!isLoading) {
    buttonOpacity = 0;
  }

  console.log(data.post.showReel);
  return (
    <Layout>
      <VideoSection>
        {data.post.showReel ? (
          <Test>
            <VideoPlayer
              style={{
                transform: 'scale(1.5) translate(16%, 10%)',
                transition: 'opacity 500ms ease',
              }}
              // onLoad={onLoad}
              src={data.post.showReel}
              title={'test'}
              // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allow="autoplay; fullscreen"
              frameBorder="0"
              // webkitallowfullscreen="true"
              // mozallowfullscreen="true"
              // allowFullScreen
              width="1920"
              height="1080"
            />
          </Test>
        ) : null}
        <>
          {isLoading && data.post.showReel ? (
            <PlayButton
              icon={faPlayCircle}
              color="white"
              size={'10x'}
              onClick={() => handleLoad()}
              style={{ transition: 'opacity 500ms ease' }}
            />
          ) : null}

          <SanityImage
            {...data.post.image}
            style={{
              position: 'absolute',
              zIndex: 2,
              opacity: opacity,
              transition: 'opacity 500ms ease',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            alt="Sweet Christmas!"
          />
        </>
      </VideoSection>
      <Section>
        <Container>
          <h1>{data.post.title}</h1>
          <h2>{data.post.subtitle}</h2>
          <BodyContainer>
            <BlockContent
              blocks={data.post.children}
              projectId="kbmcuoo3"
              dataset="production"
              className="work-post-container"
            />
            {data.post._rawCredits ? (
              <CreditsContainer>
                <h3>Credits</h3>
                <BlockContent
                  blocks={data.post._rawCredits}
                  projectId="kbmcuoo3"
                  dataset="production"
                />
              </CreditsContainer>
            ) : null}
          </BodyContainer>
          <VideoContainer>
            {data.post.trailer && (
              <YouTube
                src={data.post.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                allowfullscreen
              />
            )}
          </VideoContainer>
        </Container>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query GetWorkPost($_id: String) {
    post: sanityWorkPost(_id: { eq: $_id }) {
      children: _rawBody
      _rawCredits
      showReel
      trailer
      title
      subtitle
      image {
        ...ImageWithPreview
      }
    }
    file(relativePath: { eq: "dupe_holographic-bubble_still_04.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default WorkPost;
