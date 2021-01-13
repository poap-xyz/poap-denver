import React, { FC } from 'react';
import styled from '@emotion/styled';

// Constants
import {FONT_SIZE, LINE_HEIGHT} from 'lib/styles';

// Types
type ButtonProps = {
  text: string;
  action: () => void;
  disabled?: boolean;
};

// Styled Components
const StyledButton = styled.button`
  text-transform: uppercase;
  color: var(--main-color);
  border-color: var(--main-color);
  font-size: ${FONT_SIZE.md};
  line-height: ${LINE_HEIGHT.md};
  border-radius: 100px;
  padding: 12px 48px 10px;
  font-family: var(--main-font) !important;
  background: transparent;
  cursor: pointer;
  
  &:hover {
    background: var(--main-color-contrast);
  }
`;


const Button: FC<ButtonProps> = ({text, action, disabled= false}) => (
  <StyledButton onClick={action} disabled={disabled}>
    {text}
  </StyledButton>
);

export default Button;
