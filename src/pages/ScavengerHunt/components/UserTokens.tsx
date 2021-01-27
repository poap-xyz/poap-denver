import React, {FC} from 'react';
import styled from '@emotion/styled';

// Types
import {UserPoap, PoapEvent} from 'lib/types';

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
  events: PoapEvent[];
};

const UserTokens: FC<UserTokenProps> = ({tokens, events}) => {

  return (
    <Container>
      <Wrapper>
        <TokensWrapper>
          {events.map((event) => {
            const userHasPoap = tokens.filter((token) => token.event.id === event.id).length > 0;
            return (
              <Token image={event.image_url} name={event.name} key={event.id} withCheck={userHasPoap}
                     withOpacity={!userHasPoap}/>
            );
          })}
        </TokensWrapper>
      </Wrapper>
    </Container>
  )
};

export default UserTokens;
