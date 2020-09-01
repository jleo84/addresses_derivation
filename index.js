const bitcoinjs = require("bitcoinjs-lib");
const bip39 = require("bip39");

const { getAddresses } = require("./derivation")

const { getNetworkSlip0132Version } = require("./utils");

const TESTNET = bitcoinjs.networks.testnet;

const MAINNET = bitcoinjs.networks.bitcoin;

const generateMnemonic = (bitsOfEntropy = 256) => bip39.generateMnemonic(bitsOfEntropy);

const getKeys = async (mnemonic, derivationPath, network) => {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const root = bitcoinjs.bip32.fromSeed(seed, network);
    const child = root.derivePath(derivationPath).neutered();
    const xpub = child.toBase58();
    const xprv = root.derivePath(derivationPath).toBase58();
    const parentFingerprint = root.fingerprint;
    return { xpub, xprv, parentFingerprint };
}

const generateAddresses = async ({
    mnemonic = generateMnemonic(),
    derivationPath = "m/84'/0'/0'",
    scriptType = "p2wpkh",
    receiveChainIndex = 0,
    changeChainIndex = 1,
    startAddressIndex = 0,
    endAddressIndex = 20,
    network = MAINNET,
    applySlip0132 = false }) => {

    let _network = network;

    if (applySlip0132) {
        _network = getNetworkSlip0132Version(scriptType, _network);
    }

    let keys = await getKeys(mnemonic, derivationPath, _network);

    const addresses = await getAddresses(keys, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, _network);
    return { mnemonic, keys, addresses };
}

const main = async () => {
    const mnemonic = "debris poem mouse great wing delay whip gift screen object siren learn shed author undo exit breeze live purchase combine recall away assume juice";

    const network = MAINNET; //zMAINNET;

    const derivationPath = "m/49'/0'/0'";
    const scriptType = "p2wpkh-p2sh";

    const startAddressIndex = 0;
    const endAddressIndex = 30;

    const receiveChainIndex = 0;
    const changeChainIndex = 1;

    const { addresses } = await generateAddresses(mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network, false);
    const { receiveAddresses, changeAddresses } = addresses;

    console.log(receiveAddresses.map(a => a.address));
}

//main();

module.exports = {
    TESTNET,
    MAINNET,
    generateMnemonic,
    getKeys,
    generateAddresses
}