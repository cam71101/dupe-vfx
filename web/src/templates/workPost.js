import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import SanityImage from 'gatsby-plugin-sanity-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import colours from '../styles/colours';
import sizes from '../styles/sizes';
import breakpoints from '../styles/breakpoints';
import Video from '../components/Video';

const Section = styled.section`
  width: 100%;
  padding-top: 4rem;
  margin-bottom: 10%;
`;

const Container = styled.div`
  width: ${({ theme }) => theme.containerMobileWidth};
  margin: auto;
  color: ${colours.white};
  > h1 {
    color: ${colours.offWhite};
  }

  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.laptop} {
    width: ${sizes.containerWidth};
  }
`;

const HeaderSection = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

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
  font-size: 5rem;
  @media ${({ theme }) => theme.laptop} {
    font-size: 10rem;
  }
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    width: 100%;
    order: 2;
  }
  > div > h3 {
    color: ${colours.offWhite};
  }
  > div > figure {
    display: flex;
    justify-content: center;
  }
  > div > figure > img {
    max-width: 100%;
  }
  margin-bottom: 10%;
  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`;

const VideoSection = styled.div`
  height: 500px;
  padding-bottom: 0;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.laptop} {
    overflow: none;
    padding-bottom: 56%;
    height: 0;
    margin-bottom: 105px;
  }
`;

const YouTubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
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
  padding-left: 0rem;
  order: 1;
  > h3 {
    margin-top: 2rem;
  }
  @media ${breakpoints.tablet} {
    padding-left: 10rem;
    order: 3;
  }
`;

/* <VideoPlayer
              style={{
                transform: 'scale(1.5) translate(16%, 10%)',
                transition: 'opacity 500ms ease',
              }}
              src={data.post.showReel}
              title={data.post.title}
              allow="autoplay; fullscreen"
              frameBorder="0"
              width="1920"
              height="1080"
            /> */

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

  console.log(data.post.showReel);

  //https: player.vimeo.com/video/410736873?app_id=122963?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1

  //https://player.vimeo.com/video/410351187?app_id=122963?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1

  return (
    <Layout article title={data.post.title} description={data.post.subtitle}>
      {/* <HeaderSection> */}
      <VideoSection>
        {data.post.showReel ? (
          <Video
            videoSrcURL={data.post.showReel}
            videoTitle={data.post.title}
          />
        ) : null}
        <>
          {isLoading && data.post.showReel ? (
            <PlayButton
              icon={faPlayCircle}
              color="white"
              onClick={() => handleLoad()}
              style={{ transition: 'opacity 500ms ease' }}
              size="lg"
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
            alt={data.post.title}
          />
        </>
      </VideoSection>
      {/* </HeaderSection> */}
      <Section>
        <Container>
          <h1>{data.post.title}</h1>

          <BodyContainer>
            <div>
              <h2>{data.post.subtitle}</h2>
              <BlockContent
                blocks={data.post.children}
                projectId="kbmcuoo3"
                dataset="production"
              />
            </div>
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
          {data.post.trailer && (
            <YouTubeContainer>
              <YouTube
                src={data.post.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                allowfullscreen
              />
            </YouTubeContainer>
          )}
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
  }
`;

export default WorkPost;
