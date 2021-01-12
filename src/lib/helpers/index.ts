const reduceAddress = (address: string) => {
    if (address.length < 10) return address;
    return address.slice(0, 6) + '\u2026' + address.slice(-4);
}

const safeGetItem = (key: string, defaultValue = '{}') => {
    try {
        return JSON.parse(localStorage.getItem(key) || defaultValue);
    } catch (e) {
        console.log(e);
    }
    return JSON.parse(defaultValue);
};

export {
    reduceAddress,
    safeGetItem,
}
