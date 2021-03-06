import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Card from '../components/NewsCard';
import sizes from '../styles/sizes';
import colours from '../styles/theme';

const Main = styled.main`
  min-height: 90vh;
  width: 100vw;
  background-color: ${colours.black};
  positon: absolute;
`;

const Content = styled.section`
  width: ${({ theme }) => theme.containerMobileWidth};
  margin: auto;
  padding-top: ${({ theme }) => theme.paddingTop};
  padding-bottom: 10%;
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
  flex-wrap: wrap;
  align-items: center;

  a:nth-child(odd) {
    background-color: #181818;
  }

  a:nth-child(even) {
    background-color: #282828;
  }

  visibility: hidden;

  > * {
    visibility: visible;
  }

  > * {
    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;
  }
  &:hover > * {
    opacity: 0.4;
    transform: scale(0.9);
  }
  > *:hover {
    opacity: 1;
    transform: scale(1);
    transition-delay: 0ms, 0ms;
  }
`;

const News = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Content>
          <h1>News</h1>
          <CardsContainer>
            {data.posts.nodes.map((value) => {
              return (
                <Card
                  title={value.title}
                  date={value.date}
                  image={value.image}
                  link={value.slug.current}
                />
              );
            })}
          </CardsContainer>
        </Content>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  {
    posts: allSanityNewsPost(sort: { order: DESC, fields: date }) {
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
      }
    }
  }
`;

export default News;
