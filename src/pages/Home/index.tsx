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
  const {connectWallet, isConnected, isFetchingPoaps} = useStateContext();

  useEffect(() => {
    if(isConnected && !isFetchingPoaps) push(ROUTES.userSignature);
  }, [isConnected, isFetchingPoaps, push]);

  return (
    <MainLayout>
      <Hero
        connectAction={connectWallet}
        isConnected={isConnected}
        isLoading={isFetchingPoaps}
      />
    </MainLayout>
  )
};

export default Home;
