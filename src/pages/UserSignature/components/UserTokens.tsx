import React, {FC} from 'react';
import styled from '@emotion/styled';

// Types
import {UserPoap} from 'lib/types';

// UI Components
import Container from 'ui/styled/Container';
import Token from 'ui/components/Token';

// Styled Components
const Wrapper = styled.div`
  text-align: center;
  padding: 0;
`;
const TokensWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  div {
    margin: 10px;
  }
`;

// Component type
type UserTokenProps = {
  tokens: UserPoap[];
};

const UserTokens: FC<UserTokenProps> = ({tokens}) => {

  if (!tokens || (tokens && tokens.length === 0)) return <div/>

  return (
    <Container>
      <Wrapper>
        <TokensWrapper>
          {tokens.map((token) => {
            return (
              <Token image={token.event.image_url} name={token.event.name} key={token.tokenId} />
            );
          })}
        </TokensWrapper>
      </Wrapper>
    </Container>
  )
};

export default UserTokens;
