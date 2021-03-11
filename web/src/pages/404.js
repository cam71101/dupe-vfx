import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';

// styles

const Main = styled.section`
  max-width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.black};
  padding-top: 10%;
`;

const Container = styled.div`
  width: ${({ theme }) => theme.containerMobileWidth};
  margin: auto;
  color: white;
  @media ${({ theme }) => theme.laptop} {
    width: ${({ theme }) => theme.containerWidth};
  }
  > h4 {
    margin-bottom: 2%;
  }
  > ul {
    margin-bottom: 2%;
    > li {
      margin-left: 6%;
      margin-bottom: 1%;
    }
  }
`;

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Main>
        <Container>
          <h4>We couldn't find the page you were looking for.</h4>
          <ul>
            <li>
              There is an error in the URL entered into your web browser. Please
              check the URL and try again.
            </li>
            <li>The page you are looking for has been moved or deleted.</li>
          </ul>
          <h4>
            You can return to our homepage by clicking here, or you can try
            searching for the content you are seeking by clicking{' '}
            <Link to={'/'}>here.</Link>
          </h4>
        </Container>
      </Main>
    </Layout>
  );
};

export default NotFoundPage;
