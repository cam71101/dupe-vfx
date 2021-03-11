import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import JobCard from '../components/JobCard';
import { Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';

import colours from '../styles/theme';
import sizes from '../styles/sizes';

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
  width: ${sizes.containerWidth};
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

const TitleSection = styled.section`
  position: relative;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  position: absolute;
  padding-top: ${sizes.paddingTop};
  top: 0;
  width: 100%;
`;

const Title = styled.div`
  margin: auto;
  width: ${sizes.containerWidth};
`;

const JoinUs = ({ data }) => {
  return (
    <Layout color={'black'}>
      <Main>
        <TitleSection>
          <SanityImage
            {...data.allSanityJoinUs.edges[0].node.image}
            style={{
              position: 'absolute',
              opacity: 0.5,
              transition: 'opacity 500ms ease',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <TitleContainer>
            <Title>
              <h1>{data.allSanityJoinUs.edges[0].node.title}</h1>
            </Title>
          </TitleContainer>
        </TitleSection>
        <Section>
          <Container>
            <BlockContent
              blocks={data.allSanityJoinUs.nodes[0].children}
              projectId={process.env.SANITY_PROJECT_ID}
              dataset={process.env.SANITY_DATASET}
            />
            <JobsContainer>
              {data.allSanityJobPost.nodes.map((value) => {
                return (
                  <Link to={value.link}>
                    <JobCard
                      image={value.image}
                      location={value.location}
                      title={value.title}
                    />
                  </Link>
                );
              })}
            </JobsContainer>
            <div id="BambooHR">
              <script
                src="https://dupevfx.bamboohr.com/js/jobs2.php"
                type="text/javascript"
              ></script>
              <div id="BambooHR-Footer">
                Powered by
                <a
                  href="http://www.bamboohr.com/"
                  target="_blank"
                  rel="noopener external nofollow noreferrer"
                >
                  <img
                    src="https://resources.bamboohr.com/images/footer-logo.png"
                    alt="BambooHR - HR software"
                  />
                </a>
              </div>
            </div>
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
            ...ImageWithPreview
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
          ...ImageWithPreview
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
