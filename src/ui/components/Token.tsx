import React, {FC} from 'react';
import styled from '@emotion/styled';

// Constants
import {BREAKPOINTS} from 'lib/styles';

// Types
type TokenProps = {
  image: string;
  name: string;
};

// Styled Components
const TokensWrapper = styled.div`
  box-shadow: 0 10px 30px -5px rgba(101,52,255,.5);
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: var(--sytem-white);
  
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
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
`;

const Token: FC<TokenProps> = ({image, name}) => (
  <TokensWrapper>
    <img src={image} alt={name}/>
  </TokensWrapper>
);

export default Token;
