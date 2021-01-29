import React, {FC} from 'react';
import styled from '@emotion/styled';

// Constants
import {FONT_SIZE, LINE_HEIGHT, BREAKPOINTS} from 'lib/styles';

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
const Subtitle = styled.div` 
  display: block;
  text-align: center;
  color: var(--font-color-2);
  font-size: ${FONT_SIZE.lg};
  line-height: ${LINE_HEIGHT.lg};
  @media (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;


const PageTitle: FC = () => {

  return (
    <Container>
      <Wrapper>
        <Title>
          Keep growing your ETHDenver 2021 collection!
        </Title>
        <Subtitle>
          Tap on any POAP to learn how to get it
        </Subtitle>
      </Wrapper>
    </Container>
  )
};

export default PageTitle;
