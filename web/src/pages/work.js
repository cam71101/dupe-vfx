import React from 'react';
import Layout from '../components/Layout';
import WorkCard from '../components/WorkCard';

import styled from 'styled-components';
import colours from '../styles/theme';
import sizes from '../styles/sizes';
import { graphql } from 'gatsby';

const Main = styled.main`
  min-height: 90vh;
  width: 100vw;
  background-color: ${colours.black};
`;

const Section = styled.section`
  width: ${({ theme }) => theme.containerMobileWidth};
  margin: auto;
  padding-top: ${({ theme }) => theme.paddingTop};
  padding-bottom: 10vh;
  background-color: transparent;
  z-index: 1;
  @media ${({ theme }) => theme.laptop} {
    width: ${({ theme }) => theme.containerTabletWidth};
  }
  @media ${({ theme }) => theme.laptopL} {
    width: ${({ theme }) => theme.containerWidth};
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-box-align: start;
  align-items: flex-start;
`;

const Work = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Section>
          <h1>Work</h1>
          <CardsContainer>
            {data.posts.nodes.map((value) => {
              let image;
              value.thumbnail
                ? (image = value.thumbnail)
                : (image = value.image);
              return (
                <WorkCard
                  title={value.title}
                  image={image}
                  link={value.slug.current}
                />
              );
            })}
          </CardsContainer>
        </Section>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  {
    posts: allSanityWorkPost(sort: { order: DESC, fields: date }) {
      nodes {
        slug {
          current
        }
        body {
          _rawChildren
        }
        title
        date
        image {
          ...ImageWithPreview
        }
        thumbnail {
          ...ImageWithPreview
        }
      }
    }
  }
`;

export default Work;
