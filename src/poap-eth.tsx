import Web3 from 'web3';
import Web3Modal from 'web3modal';
import Portis from '@portis/web3';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';
import {Web3Provider} from "ethers/providers";
import { SmartWalletUtils } from '@argent/smartwallet-utils';

type RPCResponse = {
    id: number;
    result: string;
    jsonrpc: string;
};

export const NETWORK = process.env.REACT_APP_ETH_NETWORK || '';

export const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.REACT_APP_INFURA_ID,
        },
    },
    portis: {
        package: Portis,
        options: {
            id: process.env.REACT_APP_PORTIS_APP_ID,
        },
    },
};

export const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
});

export const disconnectWallet = (web3: Web3) => {
    try {
        // @ts-ignore
        web3?.currentProvider.close();
    } catch (e) {}
    web3Modal.clearCachedProvider();
};

export const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3: Web3 = new Web3(provider);

    // TODO - review why _web3.eth.getAccounts() is not working
    let account = '';
    if (provider.selectedAddress) {
        account = provider.selectedAddress;
    }
    if (provider.accounts) {
        account = provider.accounts[0];
        }
    return {
        web3,
        provider,
        account
    }
};

// EIP712 signature
const web3Send = (params: any, web3: Web3): Promise<RPCResponse | null> =>
    new Promise((resolve, reject) => {
        if (web3?.currentProvider && typeof web3.currentProvider !== 'string' && web3.currentProvider.send) {
            web3.currentProvider.send(params, (err: any, res: any) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res as RPCResponse);
            });
        }
    });

export const signMessage = async (web3: Web3, provider: Web3Provider, account: string): Promise<string[]> => {
    if (!account || !web3 || !provider ) return ['', ''];

    const domain = [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'salt', type: 'bytes32' },
    ];
    const participant = [
        { name: 'wallet', type: 'address' },
    ];

    const domainData = {
        name: 'POAP.fun',
        version: '1',
        chainId: 1,
        salt: "0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558",
    };
    const message = {
        wallet: account,
    };

    const data = JSON.stringify({
        types: {
            EIP712Domain: domain,
            Participant: participant,
        },
        domain: domainData,
        primaryType: 'Participant',
        message: message,
    });

    // Check if account is Smart Contract Wallet
    const swu = new SmartWalletUtils(provider, account);
    const walletHelper = await swu.getWalletHelper();
    if (walletHelper.getName() !== 'EOA') {
        return [walletHelper.getName(), data];
    }

    try {
        const result = await web3Send({
            method: 'eth_signTypedData_v4',
            params: [account, data, 'dsadskodas'],
            from: account,
            id: 1,
        }, web3);
        return [result && result.result ? result.result : '', data];
    } catch (e) {
        console.log('Error >> EIP712 signature');
        console.log(e);
        if (e.message.toLowerCase().indexOf('not supported on this device') > -1) {
            return [`unsupported-signature-${localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')}`, data];
        }
    }
    return ['', ''];
};

export const shortAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`;
