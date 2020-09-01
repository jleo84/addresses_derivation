
const { bip32, networks } = require("bitcoinjs-lib");

function deriveChildPublicKey(extendedPublicKey, bip32Path, network) {
    if (bip32Path.slice(0, 2) === "m/") {
        return deriveChildPublicKey(extendedPublicKey, bip32Path.slice(2), network);
    }
    const node = bip32.fromBase58(extendedPublicKey, network);
    const child = node.derivePath(bip32Path);
    return toHexString(child.publicKey);
}

function toHexString(byteArray) {
    return Array.prototype.map.call(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
}

const EXTENDED_PRV_PUB_KEY_SILP_0132_VERSIONS = [
    { keys: "xprv/xpub", prv: 0x0488ade4, pub: 0x0488b21e, network: networks.bitcoin, encoding: "p2pkh" },
    { keys: "xprv/xpub", prv: 0x0488ade4, pub: 0x0488b21e, network: networks.bitcoin, encoding: "p2sh" },
    { keys: "yprv/ypub", prv: 0x049d7878, pub: 0x049d7cb2, network: networks.bitcoin, encoding: "p2wpkh-p2sh" },
    { keys: "zprv/zpub", prv: 0x04b2430c, pub: 0x04b24746, network: networks.bitcoin, encoding: "p2wpkh" },
    { keys: "Yprv/Ypub", prv: 0x0295b005, pub: 0x0295b43f, network: networks.bitcoin, encoding: "p2wsh-p2sh" },
    { keys: "Zprv/Zpub", prv: 0x02aa7a99, pub: 0x02aa7ed3, network: networks.bitcoin, encoding: "p2wsh" },
    { keys: "tprv/tpub", prv: 0x04358394, pub: 0x043587cf, network: networks.testnet, encoding: ["p2pkh", "p2sh"] },
    { keys: "uprv/upub", prv: 0x044a4e28, pub: 0x044a5262, network: networks.testnet, encoding: ["p2wpkh-p2sh"] },
    { keys: "vprv/vpub", prv: 0x045f18bc, pub: 0x045f1cf6, network: networks.testnet, encoding: ["p2wpkh"] },
    { keys: "Uprv/Upub", prv: 0x024285b5, pub: 0x024289ef, network: networks.testnet, encoding: ["p2wsh-p2sh"] },
    { keys: "Vprv/Vpub", prv: 0x02575048, pub: 0x02575483, network: networks.testnet, encoding: ["p2wsh"] }
]

function getNetworkSlip0132Version(_encoding, _network) {

    const xKeys = EXTENDED_PRV_PUB_KEY_SILP_0132_VERSIONS.find(k => k.network == _network && k.encoding == _encoding);

    if (!xKeys) return _network;

    const xBip32 = { ...xKeys.network.bip32 };
    const xNetwork = { ...xKeys.network };

    xBip32.public = xKeys.pub;
    xBip32.private = xKeys.prv;

    xNetwork.bip32 = xBip32;

    return xNetwork
}

module.exports = {
    deriveChildPublicKey,
    getNetworkSlip0132Version
}