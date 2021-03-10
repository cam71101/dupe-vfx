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
    font-size: 30px; 
    font-weight: 400;
    color: ${colors.offWhite};
    margin-bottom: 1.5rem;
    font-family: 'Stanley Regular';

    @media ${breakpoints.mobileS} {
      font-size: 40px;  
    }

    @media ${breakpoints.mobileM} {
      font-size: 50px;  
    }

     @media ${breakpoints.mobileL} {
      font-size: 60px;  
    }
    
    
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
    margin-bottom: 3%;
    font-size: 1rem;
    font-family: 'Stanley Regular';
    font-weight: 100;
    line-height: 1.2rem;
    letter-spacing: .01rem;


    @media ${breakpoints.mobileL} {
      font-size: 1.7rem;
      letter-spacing: .03rem;
      line-height: 2rem;
    }


    @media ${breakpoints.laptop} {
     font-size: 2rem;
     line-height: 2.5rem;
      letter-spacing: .08rem;
    }
    
    ${
      '' /* @media ${breakpoints.laptopL} {
     font-size: 2rem;
     line-height: 3rem;
     letter-spacing: .15rem;
    } */
    }
  }
  h4 {
    margin: 0;
    font-size: 1.4rem
  }
  h5 {
    margin: 0;
    font-size: .7rem;
    line-height: 1rem;
    @media ${breakpoints.tablet} {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
  h6 {
    margin: 6px;
    font-size: .3rem;
    font-family: 'Euclid Light';

    @media ${breakpoints.mobileL} {
       font-size: .7rem;
    }

    @media ${breakpoints.laptopL} {
       font-size: .9rem;
    }
  }
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 2.1rem;
    @media ${breakpoints.tablet} {
      font-size: 1.1rem;
    }

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
    '' /* .svg-inline--fa {
    font-size: .7rem;

    @media ${breakpoints.mobileL} {
      font-size: 1rem;
    }

    @media ${breakpoints.laptopL} {
      font-size: 1.5rem;
    }
  } */
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
