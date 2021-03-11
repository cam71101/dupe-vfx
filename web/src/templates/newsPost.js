import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import BlockContent from '@sanity/block-content-to-react';
import colours from '../styles/theme';
import { graphql } from 'gatsby';

const Section = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.paddingTop};
  padding-bottom: 15rem;
`;
const Container = styled.div`
  width: ${({ theme }) => theme.containerMobileWidth};
  margin: auto;
  color: ${({ theme }) => theme.white};

  @media ${({ theme }) => theme.laptop} {
    width: 52%;
  }
  > h1 {
    color: ${colours.offWhite};
  }

  > div > figure {
    margin: 0;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div > figure > img {
    max-width: 100%;
  }

  > div > * {
    font-family: 'Euclid Regular';
  }
`;

const NewsPost = ({ data }) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date(data.post.date);

  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  const day = d.getDay();

  const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const date = day + nth(day) + ' ' + month + ' ' + year;

  return (
    <Layout article title={data.post.title} description={data.post.subheading}>
      <Section>
        <Container>
          <h4>{date}</h4>
          <h1>{data.post.title}</h1>
          <h2>{data.post.subheading}</h2>
          <BlockContent
            blocks={data.post.children}
            projectId="kbmcuoo3"
            dataset="production"
          />
        </Container>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query GetNewsPost($_id: String) {
    post: sanityNewsPost(_id: { eq: $_id }) {
      children: _rawBody
      title
      date
      subheading
    }
  }
`;

export default NewsPost;
