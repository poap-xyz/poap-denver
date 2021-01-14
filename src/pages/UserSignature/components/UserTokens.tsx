import React, {FC} from 'react';
import styled from '@emotion/styled';

// Constants
import {BREAKPOINTS, FONT_SIZE, LINE_HEIGHT} from 'lib/styles';

// Types
import {UserPoap} from 'lib/types';

// UI Components
import Container from 'ui/styled/Container';
import Token from 'ui/components/Token';

// Styled Components
const Wrapper = styled.div`
  text-align: center;
  padding: 100px 0;
`;
const Title = styled.div`
  font-family: var(--alt-font);
  color: var(--main-color);
  font-size: ${FONT_SIZE.xl};
  line-height: ${LINE_HEIGHT.xl};
  padding: 20px 0;
`;
const Subtitle = styled.div`
  color: var(--font-color-2);
  font-size: ${FONT_SIZE.lg};
  line-height: ${LINE_HEIGHT.lg};
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

  if (!tokens) return <div/>

  if (tokens && tokens.length === 0) {
    return (
      <Container>
        <Wrapper>
          <Title>
            Sorry, you don't have any POAP
          </Title>
          <Subtitle>
            You are not eligible because you don't hold any POAP in this wallet.
            <br/>
            Please check if you are connected with the correct account.
          </Subtitle>
        </Wrapper>
      </Container>
    )
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          You're eligible for a discount!
        </Title>
        <Subtitle>
          Sign a message to prove ownership and submit it to the Devcon form.
        </Subtitle>
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
