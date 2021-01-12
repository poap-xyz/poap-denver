import {css} from '@emotion/react';

import NowayOET from 'assets/fonts/nowayround-regular-webfont.eot';
import NowayWOFF2 from 'assets/fonts/nowayround-regular-webfont.woff2';
import NowayWOFF from 'assets/fonts/nowayround-regular-webfont.woff';
import NowayTTF from 'assets/fonts/nowayround-regular-webfont.ttf';

export const mainStyles = css`

  :root {
    /* fonts */
    --main-font: 'noway_round', sans-serif;
    --alt-font: 'Comfortaa', sans-serif;
  }

  /* Web3 Modal Hack*/
  #WEB3_CONNECT_MODAL_ID {
    position: relative;
    z-index: 50;
  }

  button {
    &:focus {
      box-shadow: none !important;
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
