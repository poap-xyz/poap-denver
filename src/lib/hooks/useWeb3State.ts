import { useState, useEffect } from 'react';
import constate from 'constate';
import {ethers} from 'ethers';
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
      const providerConnect = await web3Modal.connect();
      const _provider = new ethers.providers.Web3Provider(providerConnect);
      const signer = await _provider.getSigner(0);
      const _account = await signer.getAddress();

      if (_account) {
        setAccount(_account);
        setIsConnected(true);
        setProvider(_provider);
        return _account;
      }
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
