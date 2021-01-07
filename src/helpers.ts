import * as yup from 'yup';
import {getDefaultProvider} from 'ethers';
import {getAddress} from 'ethers/utils';


function isValidAddress(str: string): boolean {
    try {
        getAddress(str);
        return true;
    } catch (error) {
        return false;
    }
}

async function isValidAddressOrENS(str: string): Promise<boolean> {
    if (isValidAddress(str)) {
        return true;
    } else {
        try {
            let response = await resolveName(str);
            if (response) return true;
        } catch (error) {
            return false;
        }
    }
    return false;
}

async function resolveName(name: string): Promise<string> {
    const mainnetProvider = getDefaultProvider('homestead');
    return await mainnetProvider.resolveName(name);
}

const isValidEmail = (email: string) => {
    return yup.string().email().isValidSync(email);
}


const reduceAddress = (address: string) => {
    if (address.length < 10) return address;
    return address.slice(0, 6) + '\u2026' + address.slice(-4);
}

export {
    isValidAddress,
    isValidAddressOrENS,
    reduceAddress,
    isValidEmail,
}
