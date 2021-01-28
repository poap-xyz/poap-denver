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
  lg: '20px',
  xl: '28px',
  xxl: '48px',
}

export const LINE_HEIGHT = {
  md: '20px',
  lg: '30px',
  xl: '34px',
  xxl: '54px',
}

export const mainStyles = css`

  :root {
    /* fonts */
    --main-font: 'noway_round', sans-serif;
    --alt-font: 'Comfortaa', sans-serif;
    
    /* colors */
    --main-color: #6534FF;
    --main-color-contrast: #F6F9FF;
    
    --font-color-1: #6873A4;
    --font-color-2: #8492CE;
    
    --system-white: #FFFFFF;
    --system-light-grey: #EAEDF4;
    --system-success: #29A598;
    --system-error: #F76278;
    --grey-eth: #F7F7F7;
  }
  
  body {
    margin: 0;
  }

  /* Web3 Modal Hack*/
  #WEB3_CONNECT_MODAL_ID {
    position: relative;
    z-index: 50;
    .web3modal-provider-name,
    .web3modal-provider-description {
      font-family: var(--main-font) !important;
    }
  }

  button {
    border-style: solid;
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
