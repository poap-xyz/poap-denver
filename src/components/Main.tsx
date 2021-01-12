import React, { Component } from 'react';

import LoginButton from "./LoginButton";
import TokenList from "./TokenList";
import SignButton from "./SignButton";
import Web3 from "web3";
import {connectWallet, disconnectWallet, web3Modal} from "../poap-eth";
import {Web3Provider} from "ethers/providers";

export default class Main extends
    Component<{}, { address: string, web3: Web3 | null, provider: Web3Provider | null, isConnected: boolean }> {

    state = { address: "", web3: null, provider: null, isConnected: false };

    login = async () => {
        const {web3, provider, account} = await connectWallet();
        this.setState({address: account, web3, provider, isConnected: true});
    }

    logout = async () => {
        const {web3, isConnected} = this.state;
        if(isConnected && web3 !== null) {
            // @ts-ignore
            disconnectWallet(web3);
            this.setState({address: '', web3: null, provider: null, isConnected: false});
        }
    }

    async componentDidMount() {
        // Try to connect the wallet
        if (!this.state.isConnected && web3Modal && web3Modal.cachedProvider) {
            await this.login();
        }
    }

    render(): JSX.Element {
        const { address, web3, provider, isConnected } = this.state;
        return (
            <main id="site-main" role="main" className="app-content">
                <div className="container">
                    <div className="content-event" data-aos="fade-up" data-aos-delay="300">
                        <p>
                            Connect with your wallet and sing the message to prove the ownership of your address
                        </p>
                        <br />
                        <p>Address: {address}</p>
                        <br />
                        <LoginButton onLogin={this.login} onLogout={this.logout} isConnected={isConnected}/>
                        <br />
                        <br />
                        <TokenList address={address} />
                        <br />
                        <SignButton web3={web3} provider={provider} address={address} />
                    </div>
                </div>
            </main>
        );
    }
}