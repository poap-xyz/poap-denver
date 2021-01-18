import React, {FC, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from '@emotion/styled';

// Hooks
import {useStateContext} from 'lib/hooks/useWeb3State';

// Constants
import {ROUTES} from 'lib/helpers/constants';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import UserTokens from './components/UserTokens';
import SignatureForm from './components/SignatureForm';

// Types
import {UserPoap} from 'lib/types';

// Styled Components
const Wrapper = styled.div`
  padding: 100px 0 200px;
`;


const UserSignature: FC = () => {
  const { push } = useHistory();
  const {isConnected, poaps, account, disconnectWallet, signMessage} = useStateContext();

  useEffect(() => {
    if(!isConnected) push(ROUTES.home);
  }, [isConnected, push]);

  return (
    <MainLayout>
      <Wrapper>
        <UserTokens tokens={poaps as UserPoap[]} />
        <SignatureForm
          account={account}
          tokens={poaps as UserPoap[]}
          fallbackAction={disconnectWallet}
          mainAction={signMessage}
        />
      </Wrapper>
    </MainLayout>
  )
};

export default UserSignature;
