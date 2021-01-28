import React, {FC} from 'react';
import styled from '@emotion/styled';

// Constants
import {FONT_SIZE, LINE_HEIGHT} from 'lib/styles';

// Types
// import {UserPoap} from 'lib/types';

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
  padding-bottom: 20px;
`;

// Component type
type UserTokenProps = {
  // tokens: UserPoap[];
};

const PageTitle: FC<UserTokenProps> = () => {

  return (
    <Container>
      <Wrapper>
        <Title>
          Keep growing your ETHDenver 2021 collection!
        </Title>
      </Wrapper>
    </Container>
  )
};

export default PageTitle;
