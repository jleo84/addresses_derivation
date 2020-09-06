const { TESTNET, MAINNET, generateAddresses } = require("../index.js");
const { describe, it } = require('mocha');
var chai = require('chai');
var expect = chai.expect;

const mnemonic = "debris poem mouse great wing delay whip gift screen object siren learn shed author undo exit breeze live purchase combine recall away assume juice";

const startAddressIndex = 0;
const endAddressIndex = 30;

const receiveChainIndex = 0;
const changeChainIndex = 1;


const assertTestnetSegwitAddress = (receiveAddresses, changeAddresses) => {
    expect(receiveAddresses[0].address).to.equal("tb1q93agls4z8usce3prv6l9dn7l4f0a5sj4deql59");
    expect(receiveAddresses[1].address).to.equal("tb1q27qm0knej6n5w2d64sgelygdfjf05xcz8kxgqv");
    expect(receiveAddresses[2].address).to.equal("tb1qffpkh6y3mkja02m3ys6wa0njz34wc4yuvvmzhv");
    expect(receiveAddresses[3].address).to.equal("tb1qrsu59wa3v7h3k867sme8ekhar7kfjzh3ltjvs4");
    expect(receiveAddresses[8].address).to.equal("tb1q2skrqnvyhe7gc7ftwj0y3wdhw6st0cwld9nr46");
    expect(receiveAddresses[12].address).to.equal("tb1qktts3dv0gtarzrgcn4004mk0d4esdh0vlh889t");
    expect(receiveAddresses[17].address).to.equal("tb1qy7aztav3gntjpcf0qf0s4jsm7vsw2dpcfsayyy");
    expect(receiveAddresses[18].address).to.equal("tb1qj00yrw22xhkdnymup8569wyay93e8jajjqmzgy");
    expect(receiveAddresses[19].address).to.equal("tb1q95qvdhcms2uy85guw24g3lux07ls5curve374c");

    expect(changeAddresses[0].address).to.equal("tb1qtd2uaqcvmxedu8sect4n6hkm5j4jscv5vmpfak");
    expect(changeAddresses[1].address).to.equal("tb1qz49qayjkaged650nfx3qgxxm79lgp3mlv885rh");
    expect(changeAddresses[2].address).to.equal("tb1qsag69lwn2dr0umv6k2g06jjd2pacpu3nny45fu");
    expect(changeAddresses[3].address).to.equal("tb1qanl6akudslqa8rnacukvvykuwttvcmug4qu3jz");
    expect(changeAddresses[4].address).to.equal("tb1q5rnzjrz7y76rwup4ajragjsx0zzvajezmhqnkw");
    expect(changeAddresses[6].address).to.equal("tb1q4p47x64jwnf22jh3zvamlwa467xm23k78hctgc");
    expect(changeAddresses[8].address).to.equal("tb1qhpn8n83c5dehancnk8flx4lqsqewksh2pe723q");
    expect(changeAddresses[9].address).to.equal("tb1qpm3umsh0nvque87dtdxx94je4jx4etdctsvv0h");
}

const assertTestnetLegacyAddresses = (receiveAddresses, changeAddresses) => {
    expect(receiveAddresses[0].address).to.equal("mgBgTsPfJ8vvSc5bHhazowmaddW2jXJSPU");
    expect(receiveAddresses[1].address).to.equal("mkD2HWxoei1U4xHHKq1DGizJuobUjxztnj");
    expect(receiveAddresses[2].address).to.equal("n1yxbzmHpVFETdgStBJdAZLFCAbFatnrVs");
    expect(receiveAddresses[3].address).to.equal("mqhDnftcxwoXPTgcHZSbDFGwUWXjiLCPCL");
    expect(receiveAddresses[8].address).to.equal("mmVB8mB2PAME4z9q3vMxwb7ufd7nyASt6Y");
    expect(receiveAddresses[12].address).to.equal("mqDVkheu5maER61RNp5uLunwu1JCUJDafU");
    expect(receiveAddresses[17].address).to.equal("mqx2mH7Tb7C8pfPDZM27cmVyQi9kYswDHF");
    expect(receiveAddresses[18].address).to.equal("miNGCtHcTtXnZXUVarqQCfAY9N8XHinbCn");
    expect(receiveAddresses[19].address).to.equal("mrVaj37CSu3skZLrH5GaSoHw4mZSsxbm3q");

    expect(changeAddresses[0].address).to.equal("mgiGYR7mYBgBJreatTheNNwctMb8RcNayg");
    expect(changeAddresses[1].address).to.equal("mrCL84HgPBxqerGWBrQUhGosyTcZ3hv1F3");
    expect(changeAddresses[2].address).to.equal("mqUTk3HTXfB4hXbQtAAE4jUaTRL7kE2E3Z");
    expect(changeAddresses[3].address).to.equal("mhzhWCEvpFSzQhL4mUUR3bLA1o7GbCANDb");
    expect(changeAddresses[4].address).to.equal("myWNT6LVHzuHmqngP319Gd8pmdH5T81dvd");
    expect(changeAddresses[6].address).to.equal("mjVSsbrRL1hR28a18DH59Y7CNA8c7ceHHP");
    expect(changeAddresses[8].address).to.equal("mka85bsbkSse35pnpp7cfqd8iRGxJbhUbC");
    expect(changeAddresses[9].address).to.equal("mn6hPYcgpzT9cbWxGERFxeXb8n4uaoq5M8");
}

const assertTestnetCompatibilitySegwitAddresses = (receiveAddresses, changeAddresses) => {
    expect(receiveAddresses[0].address).to.equal("2Mt6ZBYFXSVphMTG9U5EFQfSpcgiX1yZKcH");
    expect(receiveAddresses[1].address).to.equal("2N9X6BpJp2iSxG4hU1YZ1btvvFA67xnJExY");
    expect(receiveAddresses[2].address).to.equal("2N23bKDB5YoRR1vjomMo2hNriKqp7faXtDE");
    expect(receiveAddresses[3].address).to.equal("2N2JQJJYjsbSUH5TChyYqBaEZAUC777kmK4");
    expect(receiveAddresses[8].address).to.equal("2NCBGL4RgGmo5LD1BpHLCeQFJfpe9CV7nNg");
    expect(receiveAddresses[12].address).to.equal("2N2FAKN9h37dDkoB2yMRSDZPyShsjfaf7Ts");
    expect(receiveAddresses[17].address).to.equal("2N8Xh5vy2A714bimqfDPn5zvpvSALZ68L1H");
    expect(receiveAddresses[18].address).to.equal("2N4Xm3rTqCK1SbPcoc9YaYjSRQ9MiMeESSE");
    expect(receiveAddresses[19].address).to.equal("2MzheG2Hotj85wYgf4chYCGvcHo4t32Nc9B");

    expect(changeAddresses[0].address).to.equal("2NEWg6YMpYZq8iuDSG6bX343QeRiPnHr5Tp");
    expect(changeAddresses[1].address).to.equal("2N6Mjx8xLg6UZZU8eCaBjBBmdT8vqC8FTMy");
    expect(changeAddresses[2].address).to.equal("2MxV9j1jeL3tH1miCTWL5T5DgftBd7rprBJ");
    expect(changeAddresses[3].address).to.equal("2N2Fit6xzguHqbphjch8WqJacKHCX5jxevn");
    expect(changeAddresses[4].address).to.equal("2MuzRrfkV3qymnC9ndc4uBrgffPrLqCUyv1");
    expect(changeAddresses[6].address).to.equal("2NEPReJ7bcz7nGMWMATJFv9pSePUpEg31Et");
    expect(changeAddresses[8].address).to.equal("2Mymgxi7Zy7977ud183am9TsD2SGfWQMzJr");
    expect(changeAddresses[9].address).to.equal("2MyJrGR1DBFs1M6Do3FCCe2t5fiorQtR93V");
}

describe('generate addresses on testnet', () => {
    it(
        'can generate sequential standard BIP84 native segwit ' +
        'receive and change addresses from address index 0',
        async () => {

            const network = TESTNET;

            const derivationPath = "m/84'/0'/0'";
            const scriptType = "p2wpkh";

            const { addresses } = await generateAddresses({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });
            const { receiveAddresses, changeAddresses } = addresses;

            assertTestnetSegwitAddress(receiveAddresses, changeAddresses);

        }
    );

    it(
        'can generate sequential standard BIP44 legacy ' +
        'receive and change addresses from address index 0',
        async () => {

            const network = TESTNET;

            const derivationPath = "m/44'/0'/0'";
            const scriptType = "p2pkh";

            const { addresses } = await generateAddresses({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });
            const { receiveAddresses, changeAddresses } = addresses;

            assertTestnetLegacyAddresses(receiveAddresses, changeAddresses);
        }
    );

    it(
        'can generate sequential standard BIP49 compatibility segwit ' +
        'receive and change addresses from address index 0',
        async () => {

            const network = TESTNET;

            const derivationPath = "m/49'/0'/0'";
            const scriptType = "p2wpkh-p2sh";

            const { addresses } = await generateAddresses({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });
            const { receiveAddresses, changeAddresses } = addresses;

            assertTestnetCompatibilitySegwitAddresses(receiveAddresses, changeAddresses);
        });
});
