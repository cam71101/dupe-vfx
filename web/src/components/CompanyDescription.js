import * as React from 'react';

import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 40rem;
  background-color: #ede8de;
`;

const Container = styled.div`
  padding: 4rem;
`;

const CompanyDescription = () => {
  return (
    <Section>
      <Container>
        <h2>We’re dupe.</h2>
        <h3>
          We carefully balance our talent and professionalism with an
          approachable, can-do attitude. Crafting stunning visual effects for
          film and television.
        </h3>
        <h3>
          And we make sure our staff have a healthy work-life balance too.
        </h3>
      </Container>
    </Section>
  );
};

export default CompanyDescription;
