export type Address = string;

export interface TokenInfo {
    tokenId: string;
    owner: string;
    event: PoapEvent;
    ownerText?: string;
    layer: string;
}
export interface PoapEvent {
    id: number;
    fancy_id: string;
    signer: Address;
    signer_ip: string;
    name: string;
    description: string;
    city: string;
    country: string;
    event_url: string;
    event_template_id: number;
    from_admin: boolean;
    image_url: string;
    year: number;
    start_date: string;
    end_date: string;
    virtual_event: boolean;
}
export interface PoapFullEvent extends PoapEvent {
    secret_code?: number;
}

export type ENSQueryResult = { valid: false } | { valid: true; ens: string };

export type AddressQueryResult = { valid: false } | { valid: true; ens: string };

const API_BASE = 'http://localhost:8080'

async function fetchJson<A>(input: RequestInfo, init?: RequestInit): Promise<A> {
    const res = await fetch(input, init);

    if (!res.ok) {
        const data = await res.json();
        if (data && data.message) throw new Error(data.message);
    }

    return await res.json();
}

export function resolveENS(name: string): Promise<ENSQueryResult> {
    return fetchJson(`${API_BASE}/actions/ens_resolve?name=${encodeURIComponent(name)}`);
}

export function getENSFromAddress(address: Address): Promise<AddressQueryResult> {
    return fetchJson(`${API_BASE}/actions/ens_lookup/${address}`);
}

export function getTokensFor(address: string): Promise<TokenInfo[]> {
    console.log(API_BASE);
    return fetchJson(`${API_BASE}/actions/scan/${address}`);
}

export function getTokenInfo(tokenId: string): Promise<TokenInfo> {
    return fetchJson(`${API_BASE}/token/${tokenId}`);
}
