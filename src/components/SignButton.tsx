import {Component} from "react";
import {connectWallet, signMessage} from "../poap-eth";
import Web3 from "web3";
import {Web3Provider} from "ethers/providers";

export default class SignButton extends
    Component<{web3: Web3 | null, provider: Web3Provider | null, address: string}, {signature: string}> {

    state = { signature: ""}

    sign = async () => {
        let { web3 } = await connectWallet();

        if (!web3) {
            return;
        }

        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) return null;
        const account = accounts[0];

        this.setState({signature: await web3.eth.personal.sign("a", account, "")});
        console.log("address", await web3.eth.personal.ecRecover("a", this.state.signature))
    }

    signV2 = async () => {
        const {web3, provider, address} = this.props;
        if (web3 && provider) {
            const response = await signMessage(web3, provider, address);
            this.setState({signature: response[0]});
        }
    }

    render(): JSX.Element {
        return (
            <div>
                <button className="btn" onClick={this.signV2}>
                    <span>Sign</span>
                </button>
                <p>Signature: {this.state.signature}</p>
            </div>
        );
    }
}