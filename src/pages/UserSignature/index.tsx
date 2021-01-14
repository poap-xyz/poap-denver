import React, {FC, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

// Hooks
import {useStateContext} from 'lib/hooks/useWeb3State';

// Constants
import {ROUTES} from 'lib/helpers/constants';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import UserTokens from './components/UserTokens';

// Types
import {UserPoap} from 'lib/types';


const UserSignature: FC = () => {
  const { push } = useHistory();
  const {isConnected, poaps} = useStateContext();

  useEffect(() => {
    if(!isConnected) push(ROUTES.home);
  }, [isConnected]);

  return (
    <MainLayout>
      <UserTokens tokens={poaps as UserPoap[]} />
    </MainLayout>
  )
};

export default UserSignature;
