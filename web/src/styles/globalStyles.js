import { createGlobalStyle } from 'styled-components';

import colors from './colours';

const GlobalStyle = createGlobalStyle`  
html {
    font-size: 15.5px;
  }
body {
  margin: 0;
  font-family: 'Euclid Regular';
  list-style-type: none;
  background-color: black;
  box-sizing: border-box;
}

h2, h3, h4, h5, h6, p {
  color: inherit;
}
 h1 {
    margin: 0;
    font-size: 200px;
    font-weight: 600;
    color: ${colors.offWhite}
  }
  h2 {
    margin: 0;
    font-size: 5.2rem;
    font-weight: 600;
    font-family: 'Euclid Light';
  }
  h3 {
    margin: 0;
    font-size: 2.1rem;
    font-family: 'Euclid Light';
    font-weight: 100;
  }
  h4 {
    margin: 0;
    font-size: 1.4rem
  }
  h5 {
    margin: 0;
    font-size: 1.3rem
  }
  h6 {
    margin: 5px;
    font-size: .9rem;
    font-family: 'Euclid Light';
  }
  p {
    font-size: 1.2rem;
    line-height: 2.1rem;
  }
  li {
  font-size: 1.2rem;
  }
`;

export default GlobalStyle;
