import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import colours from '../styles/colours';
import sizes from '../styles/sizes';
import Img from 'gatsby-image';

const Main = styled.main`
  height: 100vh;
  max-width: 100vw;
  background-color: ${colours.black};
  positon: absolute;
  overflow: hidden;
  position: relative;
`;

const Text = styled.div`
  color: ${colours.white};
  width: ${sizes.containerWidth};
  margin: auto;
  padding-top: 15rem;
  display: 'flex';
  background-color: transparent !important;
  position: relative;
  z-index: 3;
`;

const Info = styled.div`
  display: flex;
  max-width: 120rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  margin-right: 20rem;
`;

const Title = styled.h1`
  margin-bottom: 4rem;
`;

const About = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Text>
          <Title>{data.allSanityAbout.edges[0].node.title}</Title>
          <Info>
            <Description>
              <BlockContent blocks={data.allSanityAbout.edges[0].node.desc} />
            </Description>
          </Info>
        </Text>
        <Img
          fluid={data.allSanityAbout.edges[0].node.bgImageOne.asset.fluid}
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '50rem',
            top: '-10%',
            right: '-10%',
          }}
        />
        <Img
          fluid={data.allSanityAbout.edges[0].node.bgImageTwo.asset.fluid}
          style={{
            position: 'absolute',
            zIndex: 2,
            width: '60rem',
            top: '55%',
            right: '25%',
          }}
        />
        <Img
          fluid={data.allSanityAbout.edges[0].node.bgImageThree.asset.fluid}
          style={{
            position: 'absolute',
            zIndex: 2,
            width: '60rem',
            top: '-30%',
            left: '-20%',
          }}
        />
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    allSanityAbout {
      edges {
        node {
          title
          bgImageOne {
            ...ImageWithPreview
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          bgImageTwo {
            ...ImageWithPreview
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          bgImageThree {
            ...ImageWithPreview
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          desc {
            _key
            _type
            style
            list
            children: _rawChildren
          }
        }
      }
    }
  }
`;

export default About;
