import * as React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import Img from 'gatsby-image';

import bubble from '../images/dupe_holographic-bubble_still_03.png';

const Main = styled.main`
  height: calc(var(--vh, 1vh) * 100);
  background-color: black;
  positon: absolute;
  margin-bottom: 12rem;
`;

const Text = styled.div`
  color: white;
  width: 65%;
  margin: auto;
  padding-top: 15rem;

  display: 'flex';

  background-color: transparent !important;
  position: relative;
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

const Address = styled.div``;

const Image = styled(Img)`
  position: absolute !important;
  width: 50rem;
  z-index: 0;
  top: 35%;
  bottom: 0;
  left: 60%;
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
            <Image fluid={data.file.childImageSharp.fluid} />
          </Info>
        </Text>
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
    file(relativePath: { eq: "dupe_holographic-bubble_still_03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default About;
