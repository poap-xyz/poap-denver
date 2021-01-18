import React, {FC} from 'react';
import styled from '@emotion/styled';

// Styled Components
const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    margin: 2px;
    border: 2px solid var(--main-color);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--main-color) transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`;

const Spinner: FC = () => (
  <SpinnerWrapper>
    <div />
    <div />
    <div />
    <div />
  </SpinnerWrapper>
);

export default Spinner;
