import React, {FC} from 'react';

// Hooks
import {useStateContext} from 'lib/hooks/useWeb3State';

// Types
import {UserPoap} from 'lib/types';

// UI components
import Layout from 'ui/styled/Layout';
import Content from 'ui/styled/Content';
import Header from 'ui/components/Header';
import Footer from 'ui/components/Footer';


const MainLayout: FC = ({children}) => {
  const {isConnected, connectWallet, disconnectWallet, account, poaps} = useStateContext();

  return (
    <Layout>
      <Header
        isConnected={isConnected}
        connectAction={connectWallet}
        disconnectAction={disconnectWallet}
        account={account}
        tokens={poaps as UserPoap[]}
      />
      <Content>{children}</Content>
      <Footer/>
    </Layout>
  )
};

export default MainLayout;
