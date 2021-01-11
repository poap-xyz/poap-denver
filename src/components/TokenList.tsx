import {Component} from "react";

import {getTokensFor, TokenInfo} from '../api';

export default class TokenList extends Component<{ address: string }, { tokens: TokenInfo[]}> {

    state = {tokens: []}

    async componentDidUpdate(prevProps: Readonly<{ address: string }>, prevState: Readonly<{ tokens: TokenInfo[] }>, snapshot?: any) {
        if(this.props.address !== "" && this.state.tokens.length === 0) {
            this.setState({tokens: await getTokensFor(this.props.address)})
        }
        // If the user logout
        if(this.props.address === "" && this.state.tokens.length !== 0) {
            this.setState({tokens: []})
        }
    }

    async getTokens() {
        if(this.props.address !== '') {
        }
    }

    renderTokens(): JSX.Element[] {
        return this.state.tokens.map((token: TokenInfo) =>
            <a key={token.tokenId} href={`https://app.poap.xyz/token/${token.tokenId}`} target="_blank">
                <img width="100px" height="auto" style={{borderRadius: "50%", marginLeft: "30px"}} src={token.event.image_url}  alt={token.event.name}/>
            </a>
        )
    }

    render(): JSX.Element {
        console.log(this.state.tokens)
        return (
            <div>
                {this.renderTokens()}
            </div>

        );
    }
}