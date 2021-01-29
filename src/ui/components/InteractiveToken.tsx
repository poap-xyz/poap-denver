import React, {FC} from 'react';
import styled from '@emotion/styled';

// Components
import Token from 'ui/components/Token';

// Assets
import checkSign from 'assets/images/checked.svg';

// Constants
import {BREAKPOINTS} from 'lib/styles';

// Types
type InteractiveTokenProps = {
  image: string;
  name: string;
  description: string;
  withCheck: boolean;
  withOpacity: boolean;
  onClick: () => void;
};

type TokenWrapperProps = {
  withOpacity: boolean;
}

// Styled Components
const InteractiveTokenWrapper = styled.div<TokenWrapperProps>`
  margin: 10px;
  position: relative;
  opacity: ${(props: TokenWrapperProps) => props.withOpacity ? 0.3 : 1};
  
  .check {
    position: absolute;
    top: 15px;
    right: -5px;
    @media (min-width: ${BREAKPOINTS.sm}) {
      right: 5px !important;
    }
    
    @media (min-width: ${BREAKPOINTS.md}) {
      right: 10px !important;
    }
  }
`;


const InteractiveToken: FC<InteractiveTokenProps> = ({image, name, description, withOpacity, withCheck, onClick}) => {

  return (
    <InteractiveTokenWrapper withOpacity={withOpacity} onClick={onClick}>
      <Token image={image} name={name} />
      {withCheck && (
        <img className={'check'} src={checkSign} alt={'Checked!'} />
      )}
    </InteractiveTokenWrapper>
  )
};

export default InteractiveToken;
