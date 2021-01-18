import React, {FC} from 'react';
import styled from '@emotion/styled';

// Constants
import {BREAKPOINTS} from 'lib/styles';

// Assets
import logo from 'assets/images/POAP.svg';
import devcon from 'assets/images/devcon.png';

// UI
import Nabvar from 'ui/styled/Navbar';
import Container from 'ui/styled/Container';
import Button from 'ui/components/Button';
import AddressWithPopover from 'ui/components/AddressWithPopover';

// Types
import {UserPoap} from 'lib/types';

type HeaderProps = {
  isConnected: boolean;
  connectAction: () => void;
  disconnectAction: () => void;
  account: string;
  tokens: UserPoap[];
};

// Styled Components
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-height: 70px;
  .poap {
    height: 83px;
    position: relative;
    top: 18px;
  }
  .devcon {
    margin-left: 30px;
    height: 40px;
    position: relative;
  }
`;
const ActionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-height: 70px;
`;
const ConnectButtonWrapper = styled.div`
  @media(max-width: ${BREAKPOINTS.xs}) {
    display: none;
  }
`;

const Header: FC<HeaderProps> = ({isConnected, connectAction, disconnectAction, account, tokens}) => (
  <Nabvar>
    <Container>
      <HeaderWrapper>
        <LogoContainer>
          <img src={logo} alt={'POAP'} className={'poap'}/>
          <img src={devcon} alt={'Devcon'} className={'devcon'}/>
        </LogoContainer>
        <ActionContainer>
          {isConnected && (
            <AddressWithPopover
              account={account}
              tokens={tokens}
              disconnectAction={disconnectAction}
            />
          )}
          {!isConnected && (
            <ConnectButtonWrapper>
              <Button text={'Connect Wallet'} action={connectAction}/>
            </ConnectButtonWrapper>
          )}
        </ActionContainer>
      </HeaderWrapper>
    </Container>
  </Nabvar>
);

export default Header;
