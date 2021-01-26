import React, {FC, useState} from 'react';
import styled from '@emotion/styled';

// Constants
import {BREAKPOINTS, FONT_SIZE, LINE_HEIGHT} from 'lib/styles';
import {EVENTS} from 'lib/helpers/constants';

// Assets
import background from 'assets/images/background.png';
import devcon from 'assets/images/devcon6.png';

// Types
import {LocalEvent} from 'lib/types';

// UI Components
import Button from 'ui/components/Button';
import Token from 'ui/components/Token';
import Container from 'ui/styled/Container';

// Styled Components
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 100px 0 50px;
  position: relative;
  z-index: 3;
  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
  }
`;
const DiscountWrapper = styled.div`
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
      <BackgroundImage />
      <Container>
        <HeroWrapper>
          <DiscountWrapper>
            <div className={'main-title'}>
              Apply for a Devcon Builder Discount with your POAP collection
            </div>
            <p>
              Your collection can be used to prove that you are committed to certain activities and content and give you access to preferential opportunities like discounts and giveaways. Connect to your web3 wallet to sign a message and confirm ownership of your collection.
            </p>
            <div className={'cta'}>
              <Button action={connectAction} text={'Connect wallet'} loading={isLoading}/>
            </div>
          </DiscountWrapper>
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
                <Token image={devcon} name={'Devcon 6'}/>
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
