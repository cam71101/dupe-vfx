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

const TextContainer = styled.div`
  color: ${colours.white};
  width: ${sizes.containerWidth};
  margin: auto;
  padding-top: ${sizes.paddingTop};
  display: 'flex';
  background-color: transparent !important;
  position: relative;
  z-index: 3;
  ${
    '' /* > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    max-width: 30%;
    margin-right: 20rem;
  } */
  }
`;

const Title = styled.div`
  width: 80%;
`;

const Text = styled.div`
  display: flex;
  width: 80%;
`;

const FirstText = styled.div`
  width: 40%;
  margin-right: 10%;
`;

const SecondText = styled.div`
  width: 50%;
`;

const About = ({ data }) => {
  return (
    <Layout>
      <Main>
        <TextContainer>
          <Title>
            <h1>{data.allSanityAbout.edges[0].node.title}</h1>
            <h1>{data.allSanityAbout.edges[0].node.secondTitle}</h1>
          </Title>
          {/* <BlockContent blocks={data.allSanityAbout.edges[0].node.desc} /> */}
          <Text>
            <FirstText>
              <p>
                We’re an open, friendly visual effects company with a penchant
                for doing the right thing. We carefully balance our incredible
                talent and professionalism with an approachable, can-do
                attitude. Practically that means we focus on excellent
                communication and high quality output, working closely with our
                clients to craft stunning visual effects for film and
                television. And we make sure our staff have a healthy work-life
                balance too.
              </p>
              <p>
                The results speak for themselves. Communicating well and
                treating our staff this way delivers the best visual effects
                possible.
              </p>
            </FirstText>

            <SecondText>
              <p>
                These values have helped us become the world’s first visual
                effects company with B Corporation certification - a global
                group of businesses doing the right thing for people, society
                and the planet.
              </p>
              <p>
                Whether we’re working on an indie short or a studio blockbuster
                – we bring all this to the table and give it everything we’ve
                got. Creating amazing work and getting the balance right.
              </p>
              <p>Happy team, happy clients. Everybody wins.</p>
            </SecondText>
          </Text>
        </TextContainer>
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
            right: '-4%',
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
          secondTitle
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
