const { TESTNET, MAINNET, generateWallet } = require("../index.js");
const { describe, it } = require('mocha');
var chai = require('chai');
var expect = chai.expect;

const mnemonic = "debris poem mouse great wing delay whip gift screen object siren learn shed author undo exit breeze live purchase combine recall away assume juice";

const startAddressIndex = 0;
const endAddressIndex = 30;

const receiveChainIndex = 0;
const changeChainIndex = 1;

describe('wallet structure', () => {
    it(
        'check the standard BIP84 native segwit wallet structure on mainnet',
        async () => {

            const network = MAINNET;

            const derivationPath = "m/84'/0'/0'";
            const scriptType = "p2wpkh";

            const wallet = await generateWallet({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });

            expect(wallet.mnemonic).to.equal(mnemonic);
            expect(wallet.descriptor).to.equal("wpkh([af552c16/84'/0'/0']xpub6DBqFu9HUCKRAoRKBZsakTQ4eXmaFHGP5AtjBBQYMKcchG3kyQzLhRQQ8pFL19tsXMpFbyhp5JCX1z7tGJV89211HDnBHEZmkZ4CWGttisP/0/*)");

            expect(wallet.slip0132.xpub).to.equal("zpub6rrMsEV7mZQNsPoYrHSqAdb4zU4U8XFNuPwAjyCK7LNNoTgDUjKTwYigBEAVzyCiLe3s6vtvzcucnZM1hhK9jVND1uB2T4CkJ1BVHQHZQjm");
            expect(wallet.slip0132.xprv).to.equal("zprvAds1TixDwBr5euj5kFupoVeLSSDyj4XXYB1ZwanhYzqPvfM4wC1DPkQCKxGHeX8S8kXcAYhShkMyg4NXochAWeGMR7S5fVnK31mEp9dLF5C");
            expect(wallet.slip0132.parentFingerprint.toString('hex')).to.equal("af552c16");

            expect(wallet.keys.xpub).to.equal("xpub6DBqFu9HUCKRAoRKBZsakTQ4eXmaFHGP5AtjBBQYMKcchG3kyQzLhRQQ8pFL19tsXMpFbyhp5JCX1z7tGJV89211HDnBHEZmkZ4CWGttisP");
            expect(wallet.keys.xprv).to.equal("xprv9zCUrPcPdpm7xKLr5YLaPKTL6Vw5qpYXhwy8Nnzvnz5dpTicRsg69d5vHYM7ehpbKUHzfbWKnResuV9QNDs8vAu9gS3EVg9LVZdx2z5sQKf");
            expect(wallet.keys.parentFingerprint.toString('hex')).to.equal("af552c16");

            expect(wallet.addresses.receiveAddresses.length).to.equal(30);
            expect(wallet.addresses.changeAddresses.length).to.equal(30);
        });

    it(
        'check the standard BIP49 compatibility segwit wallet structure on mainnet',
        async () => {

            const network = MAINNET;

            const derivationPath = "m/49'/0'/0'";
            const scriptType = "p2wpkh-p2sh";

            const wallet = await generateWallet({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });

            expect(wallet.mnemonic).to.equal(mnemonic);
            expect(wallet.descriptor).to.equal("sh(wpkh([af552c16/49'/0'/0']xpub6CHJwwB3nukoT7eMsJfcM8RTKUzPfH5LpFcSRbFGqRXHtUkAmPsz67Mo4mVe2vmPanBEaWyakwJ7arDE83L2U16BELTVJ1w5J8KVfyMqtzE/0/*))");

            expect(wallet.slip0132.xpub).to.equal("ypub6X7aFbqxwbJHJQqUhfTEZDWxVT8qbu4qjN8fCz9ADRuAwaZQ243YiB1w5yTE2qRJzRJ3Kza9DbefU8pnqjk3GEmn6g9usvkZZrP94VcBVdz");
            expect(wallet.slip0132.xprv).to.equal("yprvAJ8Dr6K57Djz5vm1bdvEC5aDwRJMCSLzN9D4QbjYf6NC4nEFUWjJANhTEghL3npior1TjTXW8vcuiaXoRGH8ZrEBn62qzPxbVKn6x5oY5vq");
            expect(wallet.slip0132.parentFingerprint.toString('hex')).to.equal("af552c16");

            expect(wallet.keys.xpub).to.equal("xpub6CHJwwB3nukoT7eMsJfcM8RTKUzPfH5LpFcSRbFGqRXHtUkAmPsz67Mo4mVe2vmPanBEaWyakwJ7arDE83L2U16BELTVJ1w5J8KVfyMqtzE");
            expect(wallet.keys.xprv).to.equal("xprv9yHxYRe9xYCWEdZtmH8byzUimT9uFpMVT2gqdCqfH5zK1gR2DrZjYK3KDUjk3tAoQCteyyvwgGGMqHvEhZs7mcYaukLRQV97DbiTZSJRaKC");
            expect(wallet.keys.parentFingerprint.toString('hex')).to.equal("af552c16");

            expect(wallet.addresses.receiveAddresses.length).to.equal(30);
            expect(wallet.addresses.changeAddresses.length).to.equal(30);
        });

    it(
        'check the standard BIP44 legacy wallet structure on mainnet',
        async () => {

            const network = MAINNET;

            const derivationPath = "m/44'/0'/0'";
            const scriptType = "p2pkh";

            const wallet = await generateWallet({ mnemonic, derivationPath, scriptType, receiveChainIndex, changeChainIndex, startAddressIndex, endAddressIndex, network });

            expect(wallet.mnemonic).to.equal(mnemonic);
            expect(wallet.descriptor).to.equal("pkh([af552c16/44'/0'/0']xpub6DLwFPyfkVYnNiXh6f8t4XtSu6WpPyDgdiXmnD3w2u6Rt8MQYR2Sukxynj6zjGGYUDyej39rG2PnT8D4LJnrUSnuZtka3S9rK2CXvQLobT7/0/*)");

            expect(wallet.slip0132.xpub).to.equal("xpub6DLwFPyfkVYnNiXh6f8t4XtSu6WpPyDgdiXmnD3w2u6Rt8MQYR2Sukxynj6zjGGYUDyej39rG2PnT8D4LJnrUSnuZtka3S9rK2CXvQLobT7");
            expect(wallet.slip0132.xprv).to.equal("xprv9zMaqtSmv7zVAETDzdbshPwiM4gKzWVqGVcAypeKUZZT1L2FzsiCMxeVwRpCKvGvnkhJD9wPMZKJdxSRyppQBZG5H31r9Xp14HW29YedngD");
            expect(wallet.slip0132.parentFingerprint.toString('hex')).to.equal("af552c16");

            expect(wallet.keys.xpub).to.equal("xpub6DLwFPyfkVYnNiXh6f8t4XtSu6WpPyDgdiXmnD3w2u6Rt8MQYR2Sukxynj6zjGGYUDyej39rG2PnT8D4LJnrUSnuZtka3S9rK2CXvQLobT7");
            expect(wallet.keys.xprv).to.equal("xprv9zMaqtSmv7zVAETDzdbshPwiM4gKzWVqGVcAypeKUZZT1L2FzsiCMxeVwRpCKvGvnkhJD9wPMZKJdxSRyppQBZG5H31r9Xp14HW29YedngD");
            expect(wallet.keys.parentFingerprint.toString('hex')).to.equal("af552c16");

            expect(wallet.addresses.receiveAddresses.length).to.equal(30);
            expect(wallet.addresses.changeAddresses.length).to.equal(30);
        });

    // TODO: Tests for arbritrary paths, like m/77'/0'/0' (should slip0132 be applied in this case ?)
});