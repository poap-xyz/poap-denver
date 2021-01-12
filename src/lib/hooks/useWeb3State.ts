import { useState, useEffect } from 'react';
import constate from 'constate';
import Web3Modal from 'web3modal';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';

// Hooks
import { usePoaps } from 'lib/hooks/usePoaps';

// Types
// import { Transaction } from 'lib/types';

// Helpers
// import { safeGetItem } from 'lib/helpers';

const useWeb3State = () => {
  // Web3Modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.REACT_APP_INFURA_KEY,
      },
    },
  };

  // State
  const [account, setAccount] = useState<string>('');
  const [web3Modal, setWeb3Modal] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const { data: poaps, isLoading: isFetchingPoaps } = usePoaps({ account });

  // Effects
  useEffect(() => {
    if (!web3Modal) {
      try {
        setWeb3Modal(
          new Web3Modal({
            network: 'mainnet',
            cacheProvider: true,
            providerOptions,
          }),
        );
      } catch (e) {
        console.log('Error while creating Web3Modal');
      }
    }
  }, []); //eslint-disable-line
  useEffect(() => {
    if (!isConnected && web3Modal && web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal, isConnected]); //eslint-disable-line

  // Functions
  const connectWallet = async (): Promise<string> => {
    try {
      const _provider = await web3Modal.connect();
      setIsConnected(true);
      setProvider(_provider);

      // TODO - review why _web3.eth.getAccounts() is not working
      let _account = '';
      if (_provider.selectedAddress) {
        _account = _provider.selectedAddress;
        setAccount(_account);
      }
      if (_provider.accounts) {
        _account = _provider.accounts[0];
        setAccount(_account);
      }
      return _account;
    } catch (e) {
      console.log('Error > Connecting wallet');
      console.log(e);
    }
    return '';
  };
  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setIsConnected(false);
    setAccount('');
  };

  return {
    connectWallet,
    disconnectWallet,
    isConnected,
    account,
    poaps,
    provider,
    isFetchingPoaps
  };
};

const [StateProvider, useStateContext] = constate(useWeb3State);

export { StateProvider, useStateContext };
