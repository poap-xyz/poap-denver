import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Hooks
import {useStateContext} from 'lib/hooks/useWeb3State';

// Constants
import {ROUTES} from 'lib/helpers/constants';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import Hero from './components/Hero';


const Home: FC = () => {
  const { push } = useHistory();
  const {connectWallet, isConnected} = useStateContext();

  useEffect(() => {
    if(isConnected) push(ROUTES.userSignature);
  }, [isConnected, push]);

  return (
    <MainLayout>
      <Hero
        connectAction={connectWallet}
        isConnected={isConnected}
      />
    </MainLayout>
  )
};

export default Home;
