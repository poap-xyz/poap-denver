import React, {FC} from 'react';
import styled from '@emotion/styled';

// Assets
import checkSign from 'assets/images/checked.svg';

// Constants
import {BREAKPOINTS} from 'lib/styles';

// Types
type TokenProps = {
  image: string;
  name: string;
  checked: boolean;
  opacity: boolean;
};

type TokenWrapperProps = {
  opacity: boolean;
}

// Styled Components
const TokensWrapper = styled.div<TokenWrapperProps>`
  position: relative;
  box-shadow: 0 10px 30px -5px rgba(101,52,255,.5);
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: var(--system-white);
  opacity: ${(props: TokenWrapperProps) => props.opacity ? 0.4 : 1};
  
  @media (min-width: ${BREAKPOINTS.sm}) {
    width: 90px;
    height: 90px;
    border-radius: 90px;
  }
  
  @media (min-width: ${BREAKPOINTS.md}) {
    width: 120px;
    height: 120px;
    border-radius: 120px;
  }
  
  .token {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
  
  .check {
    position: absolute;
    top: 0;
    right: -5px;
    @media (min-width: ${BREAKPOINTS.sm}) {
      right: 5px !important;
    }
    
    @media (min-width: ${BREAKPOINTS.md}) {
      right: 5px !important;
    }
  }
`;

const Token: FC<TokenProps> = ({image, name, opacity, checked}) => (
  <TokensWrapper opacity={opacity}>
    <img className={'token'} src={image} alt={name}/>
    {checked && (
      <img className={'check'} src={checkSign} alt={'Checked!'} />
    )}
  </TokensWrapper>
);

export default Token;
