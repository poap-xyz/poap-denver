import {Component} from "react";
import {connectWallet} from "../poap-eth";

export default class LoginButton extends Component<{ onAddress: (address: string) => void }, {}> {

    doLogin = async () => {
        let { web3 } = await connectWallet();

        if (!web3) {
            return;
        }
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) return null;
        const account = accounts[0];
        if (account) {
            this.props.onAddress(account)
        }
    }

    render(): JSX.Element {
        return (
            <button className="btn" onClick={this.doLogin}>
                <span>Connect with my wallet</span>
            </button>
        );
    }
}