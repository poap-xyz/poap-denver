import {Component} from "react";

import {getTokensFor} from '../api';

export default class TokenList extends Component<{ address: string }, {}> {

    async getTokens() {
        if(this.props.address !== '') {
            console.log(await getTokensFor(this.props.address))
        }
    }

    render(): JSX.Element {
        this.getTokens();
        return (
            <p>List for address: {this.props.address}</p>
        );
    }
}