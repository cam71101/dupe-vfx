import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import SanityImage from 'gatsby-plugin-sanity-image';

const Main = styled.main`
  height: 100vh;
  max-width: 100vw;
  background-color: black;
  positon: absolute;
  ${'' /* margin-bottom: 12rem; */}
  overflow: hidden;
  position: relative;
`;

const Text = styled.div`
  color: white;
  width: 65%;
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
            {/* <Image fluid={data.allSanityAbout.edges[0].node.bgImage} /> */}
          </Info>
        </Text>
        <SanityImage
          {...data.allSanityAbout.edges[0].node.bgImageOne}
          style={{
            position: 'absolute',
            zIndex: 1,
            transition: 'opacity 500ms ease',
            width: '50rem',
            top: '-10%',
            right: '-10%',
          }}
          alt={data.allSanityAbout.edges[0].node.title}
        />
        <SanityImage
          {...data.allSanityAbout.edges[0].node.bgImageTwo}
          style={{
            position: 'absolute',
            zIndex: 2,
            transition: 'opacity 500ms ease',
            width: '60rem',
            top: '55%',
            right: '25%',
          }}
          alt={data.allSanityAbout.edges[0].node.title}
        />
        <SanityImage
          {...data.allSanityAbout.edges[0].node.bgImageThree}
          style={{
            position: 'absolute',
            zIndex: 2,
            transition: 'opacity 500ms ease',
            width: '60rem',
            top: '-30%',
            left: '-20%',
          }}
          alt={data.allSanityAbout.edges[0].node.title}
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
          }
          bgImageTwo {
            ...ImageWithPreview
          }
          bgImageThree {
            ...ImageWithPreview
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
