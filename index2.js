const { getAddresses } = require("./derivationXPub")
const { ExtendedPublicKey, convertExtendedPublicKey } = require("unchained-bitcoin")
const bitcoinjs = require("bitcoinjs-lib");

const TESTNET = bitcoinjs.networks.testnet;

const MAINNET = bitcoinjs.networks.bitcoin;


const generateAddressesFromXPub = async ({
    xpub,
    derivationPath = "m/84'/0'/0'",
    scriptType = "p2wpkh",
    receiveChainIndex = 0,
    changeChainIndex = 1,
    startAddressIndex = 0,
    endAddressIndex = 20,
    network = MAINNET } = {}) => {

    const _xpub = convertExtendedPublicKey(xpub, (network == MAINNET) ? "xpub" : "tpub");

    console.log(_xpub);

    const addresses = await getAddresses(_xpub, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network);
    return addresses;
}

const main = async () => {
    const addrs = await generateAddresses({
        xpub: "vpub5YdJ8hWyGHnUWqJigcrUNsiuVx2f9gk2BFeEjRqS3HhDEARnkint7KwhF6reGSk8U25FsixsMG58jBjZaLw2kTLcQA7KA4vKckHfW7YoTbU",
        network: TESTNET
    });

    console.log(addrs.changeAddresses.map(a => a.address))
}

main();