import styled from '@emotion/styled';

// Constants
import {BREAKPOINTS} from 'lib/styles';

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  
  @media(min-width: ${BREAKPOINTS.sm}) {
    width: 750px;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    width: 1000px;
  }
  @media (min-width: ${BREAKPOINTS.lg}) {
    width: 1170px;
  }
  
`;

export default Container;
