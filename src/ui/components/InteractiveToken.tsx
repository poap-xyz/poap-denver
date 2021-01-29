import React, {FC, useState} from 'react';
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
    top: 0;
    right: -8px;
    @media (min-width: ${BREAKPOINTS.sm}) {
      top: 5px;
      right: -5px;
    }
    
    @media (min-width: ${BREAKPOINTS.md}) {
      top: 5px;
      right: 0;
    }
  }
`;
const TokenHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  div {
    text-transform: uppercase;
    border: 1px solid white;
    border-radius: 20px;
    padding: 7px 10px 5px;
    font-size: 14px;
    font-weight: bold;
  }
`;


const InteractiveToken: FC<InteractiveTokenProps> = ({image, name, description, withOpacity, withCheck, onClick}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseHoverIn = () => setIsHovering(true);
  const handleMouseHoverOut = () => setIsHovering(false);

  return (
    <InteractiveTokenWrapper
      withOpacity={withOpacity && !isHovering}
      onClick={onClick}
      onMouseEnter={handleMouseHoverIn}
      onMouseLeave={handleMouseHoverOut}
    >
      <Token image={image} name={name} />
      {withCheck && (
        <img className={'check'} src={checkSign} alt={'Checked!'} />
      )}
      {isHovering && !withCheck && (
        <TokenHover>
          <div>How to get</div>
        </TokenHover>
      )}
    </InteractiveTokenWrapper>
  )
};

export default InteractiveToken;
