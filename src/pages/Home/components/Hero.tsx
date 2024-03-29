import React, {FC, useState} from 'react';
import styled from '@emotion/styled';

// Constants
import {BREAKPOINTS, FONT_SIZE, LINE_HEIGHT} from 'lib/styles';
import {EVENTS} from 'lib/helpers/constants';

// Assets
import background from 'assets/images/background.png';

// Types
import {LocalEvent} from 'lib/types';

// UI Components
import Button from 'ui/components/Button';
import Token from 'ui/components/Token';
import Container from 'ui/styled/Container';

// Styled Components
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  position: relative;
  z-index: 3;
  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    padding: 100px 0 50px;
  }
`;
const TitleWrapper = styled.div`
  flex: 1;
  
  @media (max-width: ${BREAKPOINTS.md}) {
    text-align: center;
    div {
      padding: 20px 0;
    }
  }
  .main-title {
    color: var(--main-color);
    font-family: var(--alt-font);
    font-size: ${FONT_SIZE.xxl};
    line-height: ${LINE_HEIGHT.xxl};
    max-width: 530px;
  
    @media (max-width: ${BREAKPOINTS.md}) {
      margin: 0 auto;
      font-size: ${FONT_SIZE.xl};
      line-height: ${LINE_HEIGHT.xl};
    }
  }
  p {
    color: var(--font-color-2);
    font-size: ${FONT_SIZE.lg};
    line-height: ${LINE_HEIGHT.lg};
    max-width: 530px;
  
    @media (max-width: ${BREAKPOINTS.md}) {
      margin: 0 auto;
    }
    
    a {
      text-decoration: none !important;
      color: var(--main-color) !important;
      &:visited {
        color: var(--main-color) !important;
      }
    }
  }
`;
const TokensWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .token-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .first-col {
      margin: 0 0 0 auto;
    }
    .second-col {
      margin: 0 auto;
    }
    .third-col {
      margin: 0 auto 0 0;
    }
    .first-col,
    .second-col,
    .third-col {
      div {
        margin: 0 0 60px;
      }
    }
  }
`;
const BackgroundImage = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: url(${background}) no-repeat right;
  background-size: contain;
  z-index: 1;
  opacity: 0.5;
`;

// Component type
type HeroProps = {
  isConnected: boolean;
  connectAction: () => void;
  isLoading: boolean;
};

// Component constants
const sortedEvents = EVENTS.sort(() => Math.random() - 0.5);

const Hero: FC<HeroProps> = ({connectAction, isConnected, isLoading}) => {
  const [tokens] = useState<LocalEvent[]>(sortedEvents.slice(0, 7));
  return (
    <>
      <BackgroundImage/>
      <Container>
        <HeroWrapper>
          <TitleWrapper>
            <div className={'main-title'}>
              Collect your POAPs from ETHDenver Virtual 2021
            </div>
            <p>
              Join us virtually for <a href={'https://www.ethdenver.com/'}
                                       target={'_blank'}
                                       rel={'noreferrer'}>ETHDenver and Colorado Jam 2021</a> and grow your <a
              href={'https://www.poap.xyz'}
              target={'_blank'}
              rel={'noreferrer'}>POAP</a> collection.
              Earn NFT badges by finding collectible gems, making a move on the dance floor, bidding on a piece of art,
              and much more! Connect your wallet and start collecting.
            </p>
            <div className={'cta'}>
              <Button action={connectAction} text={'Connect wallet'} loading={isLoading}/>
            </div>
          </TitleWrapper>
          <TokensWrapper>
            <div className={'token-holder'}>
              <div className={'first-col'}>
                <Token image={tokens[0].image} name={tokens[0].name}/>
                <Token image={tokens[1].image} name={tokens[1].name}/>
              </div>
            </div>
            <div className={'token-holder'}>
              <div className={'second-col'}>
                <Token image={tokens[2].image} name={tokens[2].name}/>
                <Token image={tokens[3].image} name={tokens[3].name}/>
                <Token image={tokens[4].image} name={tokens[4].name}/>
              </div>
            </div>
            <div className={'token-holder'}>
              <div className={'third-col'}>
                <Token image={tokens[5].image} name={tokens[5].name}/>
                <Token image={tokens[6].image} name={tokens[6].name}/>
              </div>
            </div>
          </TokensWrapper>
        </HeroWrapper>
      </Container>
    </>
  )
};

export default Hero;
