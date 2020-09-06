const bitcoinjsLib = require("bitcoinjs-lib");

const { deriveChildPublicKey } = require("./utils");

const { payments } = bitcoinjsLib;

const getChildPubKeysFromXpubs = (keys, bip32derivationPath, chainIndex, startAddressIndex, endAddressIndex, network) => {
    const childPubKeys = [];
    for (let i = startAddressIndex; i < endAddressIndex; i++) {

        const childPubKeysBip32Path = `m/${chainIndex}/${i}`;
        const path = `${bip32derivationPath}/${childPubKeysBip32Path.replace('m/', '')}`;

        const childPubKey = deriveChildPublicKey(keys.xpub, childPubKeysBip32Path, network);

        childPubKeys.push({
            childPubKey,
            bip32derivation: {
                masterFingerprint: Buffer.from(keys.parentFingerprint, 'hex'),
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

const getAddresses = async (keys, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network) => {

    const childReceivePubKeys = getChildPubKeysFromXpubs(keys, derivationPath, receiveChainIndex, startAddressIndex, endAddressIndex, network);
    const childChangePubKeys = getChildPubKeysFromXpubs(keys, derivationPath, changeChainIndex, startAddressIndex, endAddressIndex, network);

    const derivedReceiveAddresses = getAdressesFromPubKeys(childReceivePubKeys, scriptType, network);
    const derivedChangeAddresses = getAdressesFromPubKeys(childChangePubKeys, scriptType, network);

    return { receiveAddresses: derivedReceiveAddresses, changeAddresses: derivedChangeAddresses };
}

module.exports = { getAddresses };