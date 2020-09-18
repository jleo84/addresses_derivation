const bitcoinjs = require("bitcoinjs-lib");

const { deriveChildPublicKey } = require("./utils");

const { payments } = bitcoinjs;

const MAINNET = bitcoinjs.networks.bitcoin;

const getChildPubKeysFromXpubs = (xpub, derivationPath, chainIndex, startAddressIndex, endAddressIndex, network) => {
    const childPubKeys = [];
    for (let i = startAddressIndex; i < endAddressIndex; i++) {

        const childPubKeysBip32Path = `m/${chainIndex}/${i}`;
        const path = `${derivationPath}/${childPubKeysBip32Path.replace('m/', '')}`;

        const childPubKey = deriveChildPublicKey(xpub, childPubKeysBip32Path, network);

        childPubKeys.push({
            childPubKey,
            bip32derivation: {
                path
            }
        });

    }
    return childPubKeys;
}


const getAdressesFromPubKeys = (pubKeys, scriptType, network) => {
    return pubKeys.map((childPubKey, _) => {

        let address;

        let descriptor;

        if (scriptType === "p2wpkh") {
            address = payments.p2wpkh({ pubkey: Buffer.from(childPubKey.childPubKey, 'hex'), network: network });
            descriptor = `wpkh(${childPubKey.childPubKey})`;
        } else if (scriptType === "p2pkh") {
            address = payments.p2pkh({ pubkey: Buffer.from(childPubKey.childPubKey, 'hex'), network: network });
            descriptor = `pkh(${childPubKey.childPubKey})`;
        } else if (scriptType === "p2wpkh-p2sh") {
            redeem = payments.p2wpkh({ pubkey: Buffer.from(childPubKey.childPubKey, 'hex'), network: network });
            address = payments.p2sh({ redeem });
            descriptor = `sh(wpkh(${childPubKey.childPubKey}))`;

        } else {
            throw Error("Script Type not unrecognized");
        }

        address.bip32derivation = [childPubKey.bip32derivation];
        address.descriptor = descriptor;

        return address;
    });
}

const getAddressesFromXPub = async ({
    xpub,
    derivationPath = "m/84'/0'/0'",
    scriptType = "p2wpkh",
    receiveChainIndex = 0,
    changeChainIndex = 1,
    startAddressIndex = 0,
    endAddressIndex = 30,
    network = MAINNET } = {}) => {

    if (!xpub) {
        throw new Error("XPub should be set.");
    }

    const childReceivePubKeys = getChildPubKeysFromXpubs(xpub, derivationPath, receiveChainIndex, startAddressIndex, endAddressIndex, network);
    const childChangePubKeys = getChildPubKeysFromXpubs(xpub, derivationPath, changeChainIndex, startAddressIndex, endAddressIndex, network);

    const receiveAddresses = getAdressesFromPubKeys(childReceivePubKeys, scriptType, network);
    const changeAddresses = getAdressesFromPubKeys(childChangePubKeys, scriptType, network);

    return { receiveAddresses, changeAddresses };
}

module.exports = { getAddressesFromXPub };