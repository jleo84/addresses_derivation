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

const getDescriptor = (scriptType, fingerprint, path, xpub, chainIndex) => {

    let descriptor;

    const mIndex = path.indexOf('/');
    const descPath = `[${fingerprint}${path.slice(mIndex)}]`;

    if (scriptType === "p2wpkh") {
        descriptor = `wpkh(${descPath}${xpub}/${chainIndex}/*)`;
    } else if (scriptType === "p2pkh") {
        descriptor = `pkh(${descPath}${xpub}/${chainIndex}/*)`;
    } else if (scriptType === "p2wpkh-p2sh") {
        descriptor = `sh(wpkh(${descPath}${xpub}/${chainIndex}/*))`;
    } else {
        throw Error("Script Type not unrecognized");
    }

    return descriptor;
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

    const data = {};

    // if (applySlip0132) {
    const xNetwork = getNetworkSlip0132Version(scriptType, network);
    data.slip0132 = await getKeys(mnemonic, derivationPath, xNetwork);
    // }

    let keys = await getKeys(mnemonic, derivationPath, network);
    let descriptor = getDescriptor(scriptType, keys.parentFingerprint.toString('hex'), derivationPath, keys.xpub, receiveChainIndex);

    const addresses = await getAddresses(keys, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network);
    return { ...data, mnemonic, descriptor, keys, addresses };
}

const main = async () => {
    // const mnemonic = "debris poem mouse great wing delay whip gift screen object siren learn shed author undo exit breeze live purchase combine recall away assume juice";
    const mnemonic = "trim width hundred claw artefact surprise industry where primary fuel gas begin scrub gate topple rude language sport trend regret lottery empower monster average";

    const network = MAINNET; //zMAINNET;

    const derivationPath = "m/84'/0'/0'";
    const scriptType = "p2wpkh"; //"p2wpkh-p2sh";// //"p2pkh";

    const startAddressIndex = 0;
    const endAddressIndex = 30;

    const receiveChainIndex = 0;
    const changeChainIndex = 1;

    applySlip0132 = false;

    const { addresses } = await generateAddresses({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network, applySlip0132 });
    const { receiveAddresses, changeAddresses } = addresses;

    //console.log(receiveAddresses.map(a => a.address));
    //console.log(receiveAddresses.map(a => ({ address: a.address, bip32derivation: a.bip32derivation[0].pubkey, descriptor: a.descriptor })));
}

main();

module.exports = {
    TESTNET,
    MAINNET,
    generateMnemonic,
    getKeys,
    generateAddresses
}