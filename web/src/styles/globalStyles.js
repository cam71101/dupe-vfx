import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';

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
    font-size: 40px; 
    font-weight: 400;
    color: ${theme.offWhite};
    margin-bottom: 1.5rem;
    font-family: 'Stanley Regular';
    margin-bottom: 5%;


    @media ${theme.mobileM} {
      font-size: 50px;  
    }

     @media ${theme.mobileL} {
      font-size: 60px;  
    }
    
    
    @media ${theme.tablet} {
      font-size: 100px;  
    }
    @media ${theme.laptop} {
      font-size: 110px;  
    }
     @media ${theme.laptopL} {
      font-size: 150px;  
    }
}

  h2 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Euclid Light';
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${theme.offWhite};
    @media ${theme.tablet} {
     font-size: 1.5rem;
    }
    
    @media ${theme.laptopL} {
     font-size: 3rem; 
    }
  }

  h3 {
    margin-bottom: 3%;
    font-size: 1.3rem;
    font-family: 'Stanley Regular';
    font-weight: 100;
    line-height: 1.6rem;
    letter-spacing: .01rem;


    @media ${theme.tablet} {
      font-size: 1.5rem;
      letter-spacing: .03rem;
    }


    @media ${theme.laptop} {
     font-size: 2rem;
     line-height: 2.5rem;
      letter-spacing: .08rem;
    }

    @media ${theme.laptopL} {
     font-size: 2.5rem;
     line-height: 3.5rem;
      letter-spacing: .1rem;
    }
    
  }
  h4 {
    margin: 0;
    font-size: .8rem;
    @media ${theme.tablet} {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
  h5 {
    margin: 0;
    font-size: .7rem;
    line-height: 1rem;
    @media ${theme.tablet} {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
  h6 {
    margin: 6px;
    font-size: .3rem;
    font-family: 'Euclid Light';

    @media ${theme.mobileL} {
       font-size: .7rem;
    }

    @media ${theme.laptopL} {
       font-size: .9rem;
    }
  }
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 2.1rem;
    @media ${theme.tablet} {
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
     @media ${theme.laptopL} {
       font-size: 1rem;
    }
  }
  ul {
    list-style-type: disc;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
    margin-left: 8%
  }

`;

export default GlobalStyle;
