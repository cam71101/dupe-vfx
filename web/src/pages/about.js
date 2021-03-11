import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import colours from '../styles/theme';
import sizes from '../styles/sizes';
import Img from 'gatsby-image';

const Main = styled.main`
  max-width: 100vw;
  background-color: ${colours.black};
  padding-bottom: 5%;
  positon: absolute;
  overflow: hidden;
  position: relative;
`;

const TextContainer = styled.div`
  color: ${colours.white};
  width: ${({ theme }) => theme.containerMobileWidth};
  padding-top: ${({ theme }) => theme.paddingTop};
  margin: auto;
  background-color: transparent !important;
  position: relative;
  z-index: 4;
  @media ${({ theme }) => theme.laptop} {
    width: ${({ theme }) => theme.containerTabletWidth};
  }
  @media ${({ theme }) => theme.laptopL} {
    width: ${({ theme }) => theme.containerWidth};
  }
`;

const Title = styled.div`
  width: 100%;
  h1:first-child {
    margin-bottom: 0;
  }
  @media ${({ theme }) => theme.desktop} {
    width: 80%;
  }
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media ${({ theme }) => theme.tablet} {
    flex-direction: row;
  }
  @media ${({ theme }) => theme.desktop} {
    width: 80%;
  }
`;

const FirstText = styled.div`
  width: 100%;
  margin-right: 10%;
  @media ${({ theme }) => theme.tablet} {
    width: 40%;
  }
`;

const SecondText = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.tablet} {
    width: 50%;
  }
`;

const BcorpLogo = styled(Img)`
  max-width: 35rem;
  filter: invert(100%);
`;

const BCorpTitle = styled(Title)`
  h1:first-child {
    margin-bottom: 5%;
  }
`;

const BcorpFirstText = styled(FirstText)`
  order: 3;
  @media ${({ theme }) => theme.tablet} {
    order: 1;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  order: 1;
  z-index: 4;
  @media ${({ theme }) => theme.tablet} {
    width: 50%;
    order: 3;
  }
`;

const FirstBubble = styled.div`
  position: absolute;
  zindex: 0;
  top: -2%;
  right: -120%;
  @media ${({ theme }) => theme.tablet} {
    top: -10%;
    right: -5%;
  }
`;

const SecondBubble = styled.div`
  position: absolute;
  zindex: 0;
  top: 60%;
  right: -120%;
  @media ${({ theme }) => theme.tablet} {
    top: 70%;
    right: -5%;
  }
`;

const ThirdBubble = styled.div`
  position: absolute;
  zindex: 0;
  top: 25%;
  left: -120%;
  @media ${({ theme }) => theme.tablet} {
    top: 25%;
    left: -15%;
  }
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
          <BCorpTitle>
            <h1>We are a B Corp!</h1>
            <h3>
              Stunning visual effects by treating people & the planet properly.
            </h3>
          </BCorpTitle>
          <Text>
            <BcorpFirstText>
              <p>
                What does it mean to be a B Corp organisation? We believe
                success isn’t just about how much money you make – or how many
                hours you work. It’s also about how you treat people, and the
                environment. What you put back into the world. That’s why we’re
                a B Corporation. We believe in sticking to the highest standards
                of social purpose as outlined by B Lab: a non-profit
                organisation changing how the world does business. It means our
                business is a force for good. After a long audit we certified in
                January 2020 and have joined a fantastic club of other
                businesses working together to make a positive change in the
                world.
              </p>
              <p>
                What are we committing to? These are the areas of our business
                we are tracking and measuring for 2020/21:
              </p>
              <ul>
                <li>
                  <p>Diversity in the workplace</p>
                </li>
                <li>
                  <p>Curbing our energy consumption</p>
                </li>
                <li>
                  <p>Maintaining equal pay</p>
                </li>
                <li>
                  <p>Aiming to be Carbon Neutral</p>
                </li>
                <li>
                  <p>Staff well-being</p>
                </li>
                <li>
                  <p>Corporate governance</p>
                </li>
                <li>
                  <p>Community/Local charitable donations</p>
                </li>
              </ul>
            </BcorpFirstText>
            <ImageContainer>
              <BcorpLogo
                fluid={data.allSanityAbout.edges[0].node.bCorpLogo.asset.fluid}
                // style={{ height: '50%' }}
              />
            </ImageContainer>
          </Text>
        </TextContainer>
        <FirstBubble>
          <Img
            fluid={data.allSanityAbout.edges[0].node.bgImageThree.asset.fluid}
            style={{
              width: '40rem',
            }}
          />
        </FirstBubble>
        <SecondBubble>
          <Img
            fluid={data.allSanityAbout.edges[0].node.bgImageTwo.asset.fluid}
            style={{
              width: '40rem',
            }}
          />
        </SecondBubble>
        <ThirdBubble>
          <Img
            fluid={data.allSanityAbout.edges[0].node.bgImageThree.asset.fluid}
            style={{
              width: '40rem',
            }}
          />
        </ThirdBubble>
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
          bCorpLogo {
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
