import React, {FC} from 'react';
import styled from '@emotion/styled';

// Types
type TokenProps = {
  image: string;
  name: string;
};

// Styled Components
const TokensWrapper = styled.div`
  box-shadow: 0 10px 30px -5px rgba(101,52,255,.5);
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background: var(--sytem-white);
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
