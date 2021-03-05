import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import colours from '../styles/colours';
import sizes from '../styles/sizes';

const Letter = styled.h2`
  font-size: 12rem;
  color: ${colours.offWhite};
  margin: 10px;
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
  animation-fill-mode: forwards;
  ${'' /* transform: translate(0px, 0px) rotate(0deg); */}
`;

const LetterContainer = styled.div`
  width: 25rem;
  position: absolute;
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s;
  animation-fill-mode: forwards;
  top: 400px;
  transform: rotate(0deg);
  animation-direction: alternate;
`;

const D = styled(Letter)`
  ${'' /* transform: translate(263px, 39px) rotate(180deg); */}
  -webkit-transition: all 1.5s ease;
  transition: all 1.5s ease;
  animation-fill-mode: forwards;
  transform: rotate(0deg);
  animation-direction: alternate;
  ${'' /* transform: translate(0px, 0px) rotate(0deg); */}
  ${'' /* transform: translate(263px, 39px) rotate(180deg); */};
`;

const Rotate = () => {
  const [isRotating, setIsRotating] = React.useState('rotate(0)');

  React.useEffect(() => {
    setTimeout(() => {
      setIsRotating(`rotate(180deg)`);
    }, 100);
  }, []);

  console.log(isRotating);

  return (
    <Layout>
      <h2 className="test" style={{ transform: isRotating }}>
        d
      </h2>
    </Layout>
  );
};

export default Rotate;
