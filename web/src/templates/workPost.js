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
  > h2 {
    padding-bottom: 5rem;
  }
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

const VideoPlayer = styled.iframe`
  width: 90%;
  height: 600px;
  justify-self: center;
  align-self: center;
  margin: 3rem;
  border: none;
`;

const VideoSection = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: relative;
  height: 80rem;
  overflow: hidden;
`;

const Image = styled(Img)``;

const PlayButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    padding-right: 10rem;
  }
`;

const CreditsContainer = styled.div``;

const WorkPost = ({ data }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  console.log(data.post.image);

  return (
    <Layout>
      <VideoSection>
        {/* <Image
          fixed={data.post.image.asset.fixed}
          style={{ width: '100%', position: 'absolute' }}
        /> */}
        <SanityImage
          {...data.post.image}
          width={2000}
          style={{ position: 'absolute' }}
          alt="Sweet Christmas!"
        ></SanityImage>
      </VideoSection>

      <Section>
        <Container>
          <h1>{data.post.title}</h1>
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
