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
    font-size: 60px; 
    font-weight: 400;
    color: ${colors.offWhite};
    margin-bottom: 1.5rem;
    font-family: 'Stanley Regular';
    @media ${breakpoints.tablet} {
      font-size: 100px;  
    }
    @media ${breakpoints.laptop} {
      font-size: 110px;  
    }
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
    margin-bottom: .5rem;
    font-size: .4rem;
    font-family: 'Stanley Regular';
    font-weight: 100;
    line-height: .7rem;
    letter-spacing: .01rem;


    @media ${breakpoints.mobileM} {
      font-size: .5rem;
      line-height: .7rem;
      letter-spacing: .02rem;
    } 
    
    @media ${breakpoints.mobileL} {
      font-size: .7rem;
      letter-spacing: .03rem;
      line-height: 1.2rem;
    }

    @media ${breakpoints.tablet} {
      font-size: 1.2rem;
      line-height: 1.8rem;
      letter-spacing: .02rem;

    }

    @media ${breakpoints.laptop} {
     font-size: 1.3rem;
     line-height: 2rem;
    letter-spacing: .08rem;
    }
    
    @media ${breakpoints.laptopL} {
     font-size: 2rem;
     line-height: 3rem;
     letter-spacing: .15rem;
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
