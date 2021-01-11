import {Component} from "react";
import {connectWallet} from "../poap-eth";

export default class LoginButton extends
    Component<{ onLogin: () => void, onLogout: () => void, isConnected: boolean }, {}> {

    render(): JSX.Element {
        if(this.props.isConnected) {
            return (
                <button className="btn" onClick={this.props.onLogout}>
                    <span>Logout</span>
                </button>
            );
        } else {
            return (
                <button className="btn" onClick={this.props.onLogin}>
                    <span>Login with my wallet</span>
                </button>
            );
        }

    }
}