const { TESTNET, MAINNET, generateWallet } = require("../index.js");
const { describe, it } = require('mocha');
var chai = require('chai');
var expect = chai.expect;

const mnemonic = "debris poem mouse great wing delay whip gift screen object siren learn shed author undo exit breeze live purchase combine recall away assume juice";

const startAddressIndex = 0;
const endAddressIndex = 30;

const receiveChainIndex = 0;
const changeChainIndex = 1;

const assertMainnetSegwitAddress = (receiveAddresses, changeAddresses) => {
    expect(receiveAddresses[0].address).to.equal("bc1q93agls4z8usce3prv6l9dn7l4f0a5sj48lmv0k");
    expect(receiveAddresses[1].address).to.equal("bc1q27qm0knej6n5w2d64sgelygdfjf05xczdsamml");
    expect(receiveAddresses[5].address).to.equal("bc1q33pp7aegwuq4jx0sca5qpssqq5k28ja5008gzv");
    expect(receiveAddresses[10].address).to.equal("bc1qunutju9zpedwzn9vjesc545dlfujz5zhj0k6g5");
    expect(receiveAddresses[20].address).to.equal("bc1qs9waah3aafvkeqa54fddygnp2jwf24l8mn32gq");
    expect(receiveAddresses[25].address).to.equal("bc1qnjzuwquj8u0vmn746uef436swsfwrjwkzmjkau");
    expect(receiveAddresses[29].address).to.equal("bc1qa9wcztnyku35tv2sshdnkumdgx7y03xjhrfl5z");

    expect(changeAddresses[0].address).to.equal("bc1qtd2uaqcvmxedu8sect4n6hkm5j4jscv5xa66x9");
    expect(changeAddresses[1].address).to.equal("bc1qz49qayjkaged650nfx3qgxxm79lgp3mlxpu8cy");
    expect(changeAddresses[5].address).to.equal("bc1qsw3kydrpg66x7dwcwpp5h3luqze4smplqenrsg");
    expect(changeAddresses[10].address).to.equal("bc1q408pjkcqngv9d2cvj4z4adkzcfu99s34djlp6e");
    expect(changeAddresses[20].address).to.equal("bc1qy0gqjhkrdhums86j8rvhrj22d0t6tzrjlrrqdg");
    expect(changeAddresses[25].address).to.equal("bc1qwydfkz6472m52378vaw6f3cyq5ef0645j7dkum");
    expect(changeAddresses[29].address).to.equal("bc1qzuqn2flc83a0wqwum9uxx5czar6x4z6ajdc9e9");
}

const assertMainnetLegacyAddresses = (receiveAddresses, changeAddresses) => {
    expect(receiveAddresses[0].address).to.equal("1fjApJgV7VffVbya8ccz2ZFmduKj2qDbR");
    expect(receiveAddresses[1].address).to.equal("15h4zTspqgaDHqofcG2qSomz3ozmmbVHgx");
    expect(receiveAddresses[2].address).to.equal("1MU1JwgK1ToygXCqAcLFLe7vLAzYfzD1RJ");
    expect(receiveAddresses[3].address).to.equal("1BBGVcoe9vNGcMCzZzUDPL4ccWw2orXmAs");
    expect(receiveAddresses[8].address).to.equal("16yDqi63a8uyHsgDLMPb7fuaodX61sRqqw");
    expect(receiveAddresses[12].address).to.equal("1AhYTeZvGk8ydyXofF7XWzad31hVVHJ9Yr");
    expect(receiveAddresses[17].address).to.equal("1BS5UE2Un5kt3Yubqn3jnrHeYiZ3e4qYBy");
    expect(receiveAddresses[18].address).to.equal("13rJuqCdes6XnQzssHs2NjxDHNXpQdeHP2");
    expect(receiveAddresses[19].address).to.equal("1BydRz2DdsccySsEZWJCct5cCmxjuw1e4K");

    expect(changeAddresses[0].address).to.equal("12CKFN2njAEvXkAyAtjGYTjJ2MzRYDpEi9");
    expect(changeAddresses[1].address).to.equal("1BgNq1ChaAXasjntUHS6sMbZ7U1rBKmGYJ");
    expect(changeAddresses[2].address).to.equal("1AxWSzCUidjovR7oAbBrEpGFbRjQn1Pz2z");
    expect(changeAddresses[3].address).to.equal("13UkD99x1E1jdarT3uW3Dg7q9oWZgmhy5c");
    expect(changeAddresses[4].address).to.equal("1JzRA3FWUyU2zjK4fU2mShvVudgNVA1xFE");
    expect(changeAddresses[6].address).to.equal("14yVaYmSWzGAF26PQeJhKctsWAXu9dhtYt");
    expect(changeAddresses[8].address).to.equal("164AnYncwRSPFyMB7F9EqvQorRgFSY48VR");
    expect(changeAddresses[9].address).to.equal("17ak6VXi1y1tqV3LYfSt8jKGGnUCd1tyry");
}

const assertMainnetCompatibilitySegwitAddresses = (receiveAddresses, changeAddresses) => {
    expect(receiveAddresses[0].address).to.equal("32YM7oKVq3KM9fdbnwcNniTZQLWMCnf7mh");
    expect(receiveAddresses[1].address).to.equal("3Hxt85NnRFwc4H4vLQw8ywwf2osxEHe4nQ");
    expect(receiveAddresses[2].address).to.equal("3AVPFUF3wLv4p97G6EBA5RsT7VbwtQLe8K");
    expect(receiveAddresses[3].address).to.equal("3AkCEZciG8w85Hpf2qvxZdFHx7ywFwoZf4");
    expect(receiveAddresses[8].address).to.equal("3Ld4GKVefKHj8RNe99iL2TG3TURyQrJKEf");
    expect(receiveAddresses[12].address).to.equal("3AgxFdDfRf7sZ1YVJDoZbcQiEMfZr5YnFf");
    expect(receiveAddresses[17].address).to.equal("3GyV2C2zYeViPw9Hz5muU3wZi5xAjaVXxj");
    expect(receiveAddresses[18].address).to.equal("3CyYz7XoarW6PbzFw1vhvnTABo9YXEPPUx");
    expect(receiveAddresses[19].address).to.equal("399SCHMnHGcjjm47PV5faKwM5SriDsRhPk");

    expect(changeAddresses[0].address).to.equal("3NxU2oRnw7KnX7ataxyeR749S5WDxbGDk7");
    expect(changeAddresses[1].address).to.equal("3EoXtQ2K4dyDMgW6XSZrZEnNEnifRTUWXA");
    expect(changeAddresses[2].address).to.equal("36vwfGocibNvoz5enNiCq8ERTXyTMfQtxW");
    expect(changeAddresses[3].address).to.equal("3AhWpN2y5SnVQ35BwZWeDMbM6vzMD6PTUm");
    expect(changeAddresses[4].address).to.equal("34SDnvpTSPURaQXExUT2ZuhQT3eB1btu7H");
    expect(changeAddresses[6].address).to.equal("3NqDaZBa1XcS4ZsoVKgPJCqBS3GeWz3wZP");
    expect(changeAddresses[8].address).to.equal("38DUtyBYMedkv7zTSuxtXWswp64VkN2eRe");
    expect(changeAddresses[9].address).to.equal("37keCg5BZoMf9JbFN7aL25tpTNbgb23cMi");
}

describe('generate addresses on mainet', () => {
    it(
        'can generate sequential standard BIP84 native segwit ' +
        'receive and change addresses from address index 0',
        async () => {

            const network = MAINNET;

            const derivationPath = "m/84'/0'/0'";
            const scriptType = "p2wpkh";

            const { addresses } = await generateWallet({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });
            const { receiveAddresses, changeAddresses } = addresses;

            assertMainnetSegwitAddress(receiveAddresses, changeAddresses);
        });

    it(
        'can generate sequential standard BIP44 legacy ' +
        'receive and change addresses from address index 0',
        async () => {

            const network = MAINNET;

            const derivationPath = "m/44'/0'/0'";
            const scriptType = "p2pkh";

            const { addresses } = await generateWallet({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });
            const { receiveAddresses, changeAddresses } = addresses;

            assertMainnetLegacyAddresses(receiveAddresses, changeAddresses);
        });

    it(
        'can generate sequential standard BIP49 compatibility segwit ' +
        'receive and change addresses from address index 0',
        async () => {

            const network = MAINNET;

            const derivationPath = "m/49'/0'/0'";
            const scriptType = "p2wpkh-p2sh";

            const { addresses } = await generateWallet({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });
            const { receiveAddresses, changeAddresses } = addresses;

            assertMainnetCompatibilitySegwitAddresses(receiveAddresses, changeAddresses);
        });
});