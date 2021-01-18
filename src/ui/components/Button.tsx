import React, { FC } from 'react';
import styled from '@emotion/styled';

// Constants
import {FONT_SIZE, LINE_HEIGHT} from 'lib/styles';

// UI Components
import Spinner from 'ui/components/Spinner';

// Types
type ButtonProps = {
  text: string;
  action: () => void;
  disabled?: boolean;
  loading?: boolean;
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
  width: 250px;
  height: 46px;
  
  &:hover {
    background: var(--main-color-contrast);
  }
  
  &:disabled {
    cursor: not-allowed;
    background: var(--main-color-contrast);
    border: 0;
  }
`;


const Button: FC<ButtonProps> = ({text, action, disabled= false, loading= false}) => (
  <StyledButton onClick={action} disabled={disabled || loading}>
    {loading && <Spinner />}
    {!loading && text}
  </StyledButton>
);

export default Button;
