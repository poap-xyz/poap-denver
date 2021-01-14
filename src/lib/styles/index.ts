import {css} from '@emotion/react';

import NowayOET from 'assets/fonts/nowayround-regular-webfont.eot';
import NowayWOFF2 from 'assets/fonts/nowayround-regular-webfont.woff2';
import NowayWOFF from 'assets/fonts/nowayround-regular-webfont.woff';
import NowayTTF from 'assets/fonts/nowayround-regular-webfont.ttf';

export const BREAKPOINTS = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1200px',
  xl: '1400px'
};

export const FONT_SIZE = {
  md: '16px',
}

export const LINE_HEIGHT = {
  md: '20px',
}

export const mainStyles = css`

  :root {
    /* fonts */
    --main-font: 'noway_round', sans-serif;
    --alt-font: 'Comfortaa', sans-serif;
    
    /* colors */
    --main-color: #6534FF;
    --main-color-contrast: #efeaff;
    --footer-color: #8492CE;
    
    --font-color-1: #6873A4;
    
    --system-white: #FFFFFF;
    --system-light-grey: #EAEDF4;
    --grey-eth: #F7F7F7;
  }
  
  body {
    margin: 0;
  }

  /* Web3 Modal Hack*/
  #WEB3_CONNECT_MODAL_ID {
    position: relative;
    z-index: 50;
  }

  button {
    &:focus {
      box-shadow: none !important;
      outline: none;
    }
  }
  
`;

export const mainFonts = css`{
  @font-face {
    font-family: 'noway_round';
    src: url(${NowayOET});
    src: url(${NowayWOFF2}) format('woff2'),
    url(${NowayWOFF}) format('woff'),
    url(${NowayTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
}`;
