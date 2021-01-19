import React, {FC} from 'react';
import styled from '@emotion/styled';

// Constants
import {FONT_SIZE, LINE_HEIGHT} from 'lib/styles';

// Types
import {UserPoap} from 'lib/types';

// UI Components
import Container from 'ui/styled/Container';

// Styled Components
const Wrapper = styled.div`
  text-align: center;
  padding: 0;
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

// Component type
type UserTokenProps = {
  tokens: UserPoap[];
};

const PageTitle: FC<UserTokenProps> = ({tokens}) => {

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
      </Wrapper>
    </Container>
  )
};

export default PageTitle;
