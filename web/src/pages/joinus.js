import * as React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import JobCard from '../components/JobCard';
import { Link } from 'gatsby';

import colours from '../styles/colours';

const Main = styled.main`
  background-color: black;
  positon: absolute;
`;

const Section = styled.section`
  max-width: 100vw;
  padding-top: 4rem;
  background-color: ${colours.offWhite};
`;

const Container = styled.div`
  width: 65%;
  margin: auto;
  color: ${colours.black};
  > div > h2 {
    color: ${colours.black};
  }
`;

const JobsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Image = styled(Img)`
  opacity: 0.6;
`;

const TitleSection = styled.section`
  position: relative;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const JoinUs = ({ data }) => {
  return (
    <Layout color={'black'}>
      <Main>
        <TitleSection>
          <Image fixed={data.allSanityJoinUs.edges[0].node.image.asset.fixed} />
          <TitleContainer>
            <h1>{data.allSanityJoinUs.edges[0].node.title.toUpperCase()}</h1>
          </TitleContainer>
        </TitleSection>

        <Section>
          <Container>
            <BlockContent
              blocks={data.allSanityJoinUs.nodes[0].children}
              // imageOptions={{ w: 320, h: 240, fit: 'max' }}
              projectId="kbmcuoo3"
              dataset="production"
            />
            <JobsContainer>
              {data.allSanityJobPost.nodes.map((value) => {
                return (
                  <Link to={value.link}>
                    <JobCard
                      image={value.image.asset.fluid}
                      location={value.location}
                      title={value.title}
                    />
                  </Link>
                );
              })}
            </JobsContainer>
          </Container>
        </Section>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query JoinUs {
    allSanityJoinUs {
      nodes {
        children: _rawBody
      }
      edges {
        node {
          title
          body {
            children: _rawChildren
          }
          image {
            asset {
              fixed(width: 3000) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
    allSanityJobPost {
      nodes {
        location
        title
        link
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default JoinUs;
