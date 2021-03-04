import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import BlockContent from '@sanity/block-content-to-react';
import colours from '../styles/colours';
import { graphql } from 'gatsby';

const Section = styled.section`
  max-width: 100vw;
  padding-top: 15rem;
  padding-bottom: 15rem;
`;
const Container = styled.div`
  width: 52%;
  margin: auto;
  color: ${colours.white};
  > h1 {
    color: ${colours.offWhite};
  }

  > div > figure {
    margin: 0;
    margin-top: 2rem;
  }

  > div > figure > img {
    max-width: 100%;
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
    <Layout>
      <Section>
        <Container>
          <h4>{date}</h4>
          <h1>{data.post.title}</h1>
          <h2>{data.post.subheading}</h2>
          <BlockContent
            blocks={data.post.children}
            // imageOptions={{ w: 320, h: 240, fit: 'max' }}
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
