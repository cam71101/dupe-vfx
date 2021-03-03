import React from 'react';
import Layout from '../components/Layout';
import WorkCard from '../components/WorkCard';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';

import { Container, Row, Col } from 'styled-bootstrap-grid';

const Main = styled.main`
  width: 100vw;
  background-color: black;
`;

const Content = styled.section`
  width: 65%;
  margin: auto;
  padding-top: 15rem;
  padding-bottom: 15rem;
  background-color: transparent;
  z-index: 1;
`;

const CardContainer = styled.div`
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
        <Content>
          <h1>Work</h1>
          <CardContainer>
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
          </CardContainer>
        </Content>
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
