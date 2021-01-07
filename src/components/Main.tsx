import React, { Component } from 'react';

import LoginButton from "./LoginButton";
import TokenList from "./TokenList";

export default class Main extends Component<{}, { address: string }> {
    state = { address: "" };

    onAddress = (address: string) => {
        this.setState({address});
    }

    render(): JSX.Element {
        const { address } = this.state;
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
                        <LoginButton onAddress={this.onAddress}/>
                        <TokenList address={this.state.address} />
                    </div>
                </div>
            </main>
        );
    }
}