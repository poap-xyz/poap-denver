import { useState, useEffect } from 'react';
import constate from 'constate';
import {ethers} from 'ethers';
import Web3Modal from 'web3modal';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';
import {JsonRpcSigner} from '@ethersproject/providers/src.ts/json-rpc-provider';

// Hooks
import { usePoaps } from 'lib/hooks/usePoaps';

// Types

// Helpers

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
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
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
            cacheProvider: false,
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
      const _signer = await _provider.getSigner(0);
      setSigner(_signer);

      const _account = await _signer.getAddress();

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
  const signMessage = async (message: string): Promise<string> => {
    if (!signer) {
      throw Error;
    }

    if (provider.provider.wc) {
      console.log('Here!');
      const messageLength = new Blob([message]).size;
      const ethereumMessage = ethers.utils.toUtf8Bytes(
        "\x19Ethereum Signed Message:\n" + messageLength + message
      );
      const hashedMessage = ethers.utils.keccak256(ethereumMessage);
      const params = [
        account,
        hashedMessage,
      ];
      let signature = await provider.provider.connector.signMessage(params);
      return signature
    }

    let signature = await signer.signMessage(message);
    return signature;
  }

  return {
    connectWallet,
    disconnectWallet,
    signMessage,
    isConnected,
    account,
    poaps,
    provider,
    isFetchingPoaps
  };
};

const [StateProvider, useStateContext] = constate(useWeb3State);

export { StateProvider, useStateContext };
