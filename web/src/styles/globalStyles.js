import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';

import reset from 'styled-reset';

import colors from './colours';

const GlobalStyle = createGlobalStyle` 
   ${reset}

html {
    font-size: 15.5px;
     box-sizing: border-box;
  }

*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: 'Euclid Regular', "Helvetica", "Arial", sans-serif;
  list-style-type: none;
  background-color: black;
  box-sizing: border-box;
} 

h2, h3, h4, h5, h6, p {
  color: inherit;
}

h1 {
    margin: 0;
    font-size: 110px; 
    font-weight: 400;
    color: ${colors.offWhite};
    margin-bottom: 1.5rem;
    font-family: 'Stanley Regular';
    @media ${breakpoints.laptopL} {
      font-size: 150px;  
    }
}

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Euclid Light';
    margin-bottom: 2rem;
    margin-top: 2rem;
    text-transform: uppercase;
    color: ${colors.offWhite};
    @media ${breakpoints.laptopL} {
     font-size: 2.3rem; 
    }
  }



  h3 {
    margin-bottom: 1rem;
    font-size: 1.6rem;
    font-family: 'Stanley Regular';
    font-weight: 100;
    line-height: 2.5rem;
    letter-spacing: .05rem;
    @media ${breakpoints.laptopL} {
     font-size: 2.1rem;
     line-height: 3rem;
    letter-spacing: .1rem;
    }
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
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 2.1rem;
  }
  li {
  font-size: 1.2rem;
  }
  figure {
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
  span {
    font-size: .7rem;
     @media ${breakpoints.laptopL} {
       font-size: 1rem;
    }
  }
  ${
    '' /* [data-lqip] {
      width: 100rem
    }
  [data-loading] {
      width: 100rem
    } */
  }
`;

export default GlobalStyle;

// ${reset}
// *, *:before, *:after {
//   box-sizing: border-box;
// }
