const { describe, it } = require('mocha');
var chai = require('chai');
var expect = chai.expect;

const { getKeys, generateMnemonic, TESTNET, MAINNET } = require("../index");

const { getNetworkSlip0132Version } = require("./../utils");

const mnemonic = "virus render razor system brown worry learn pipe spread layer heavy elite day horn foster payment bean garlic tribe rocket throw crane ticket nest";

describe('mnemonic generation', () => {
    it("with 256 bits of entropy ", () => expect(generateMnemonic().split(" ").length).to.equal(24))
    it("with 128 bits of entropy ", () => expect(generateMnemonic(128).split(" ").length).to.equal(12))
});

describe('keys generation on mainnet', () => {

    it("with derivationPath = m/84'/0'/0' with SLIP 0132 deactivated",
        async () => {
            const derivationPath = "m/84'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, MAINNET);

            expect(keys.xpub).to.equal("xpub6CHpk2roZesSDRgxMLRio3uuqtKZ2vj21UggJDdCoJSyLN4FG381MTFyHWmpGG3yHJJsNg9zGanEVkxh1jm4Lvhp8qWAKtZJACQxHJAyRTK");
            expect(keys.xprv).to.equal("xprv9yJULXKujHK8zwcVFJtiRuyBHrV4dU1AeFm5VqDbExuzTZj6iVokoewVSFospDbNn3UScJadBURC2jDdZXVsrH4ZN3jnvYwdhqwFZLe2Y8i");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/84'/0'/0' and SLIP 0132 activated",
        async () => {

            const scriptType = "p2wpkh";
            const network = getNetworkSlip0132Version(scriptType, MAINNET);

            const derivationPath = "m/84'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, network);

            expect(keys.xpub).to.equal("zpub6qxMMNCds1xPv25C23zyDE6vBpcSvAi1qhj7s1QyZKCjSZghmMT8baaFKvgzG5Mp6aYUsdM7BuVLGLBpT8b5wQ51sWu1ViCGheYF4RVYQBE");
            expect(keys.xprv).to.equal("zprvAcxzwrfk2eQ6hXziv2Txr6ABdnmxWhzAUUoX4d1MzyfkZmMZDp8t3nFmUfj3p2uDbKi47Fmk6o8HoJSkzvKuSkRm6j8e6NacFJ4YLZVbKe7");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/44'/0'/0' with SLIP 0132 deactivated",
        async () => {
            const derivationPath = "m/44'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, MAINNET);

            expect(keys.xpub).to.equal("xpub6DAyAbEriQ9kZZGbDFcKq5B1nFHqxNyqynanfTEp3FfmnuyFtLkUnotykaTXxU9mK79LaWMFaYZAKN52fzJVT7QbeaFxwRGKroX7owLUXNX");
            expect(keys.xprv).to.equal("xprv9zBcm5hxt2bTM5C87E5KTwEHEDTMYvFzcZfBs4qCUv8nv7e7LoSEF1aVuJT4k1TgFU7rnGMDipd1mkDAmgXULoQP3BT68mpBRAUdKi34AeP");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/44'/0'/0' with SLIP 0132 activated",
        async () => {

            const scriptType = "p2pkh";
            const network = getNetworkSlip0132Version(scriptType, MAINNET);

            const derivationPath = "m/44'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, network);

            expect(keys.xpub).to.equal("xpub6DAyAbEriQ9kZZGbDFcKq5B1nFHqxNyqynanfTEp3FfmnuyFtLkUnotykaTXxU9mK79LaWMFaYZAKN52fzJVT7QbeaFxwRGKroX7owLUXNX");
            expect(keys.xprv).to.equal("xprv9zBcm5hxt2bTM5C87E5KTwEHEDTMYvFzcZfBs4qCUv8nv7e7LoSEF1aVuJT4k1TgFU7rnGMDipd1mkDAmgXULoQP3BT68mpBRAUdKi34AeP");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/49'/0'/0' with SLIP 0132 deactivated",
        async () => {
            const derivationPath = "m/49'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, MAINNET);

            expect(keys.xpub).to.equal("xpub6DMnWV2k6qXr8QAWjRJArFLm1THPdCW9P6QpWYYHgpYdin4KhD58BZicVXTW7RPdFBbeQ3qz8UTbLECP114n7eegyNnWrCUhMYpP5UwvQWm");
            expect(keys.xprv).to.equal("xprv9zNS6yVrGTyYuv63dPmAV7Q2TRSuDjnJ1sVDiA8g8V1eqyjB9fksdmQ8eG4bE2k4naGVJF1K83AVMWrKztfPCwV8MToNF742uA31oNfj7sU");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/49'/0'/0' with SLIP 0132 activated",
        async () => {
            const scriptType = "p2wpkh-p2sh";
            const network = getNetworkSlip0132Version(scriptType, MAINNET);

            const derivationPath = "m/49'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, network);

            expect(keys.xpub).to.equal("ypub6YC3p9hfFX5KyhMdZn5o4LSGBRRqZpVeJCw3HwSB4pvWmssYwsEgodNkWjR67L3YepiT9XSYb8p9DWowihUnutLHqiUwS7JBdGt2Tz4VXwf");
            expect(keys.xprv).to.equal("yprvAKChQeAmR9X2mDHATkYnhCVXdPbMAMmnvz1SVZ2ZWVPXu5YQQKvSFq4GfU2BDwPzCDPJ3ibsahX3EoTtib5Q1BAjDoVnq1sXAt6fC2z9htt");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )
});


describe('keys generation on testnet', () => {
    it("with derivationPath = m/84'/0'/0' with SLIP 0132 deactivated",
        async () => {
            const derivationPath = "m/84'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, TESTNET);

            expect(keys.xpub).to.equal("tpubDCfTGGgVGvptVDsooXQozyFHB1RD2KE5Z7GyemgM9DCs5eixLFy6VtvoXYrbnm1D5CqmzFfrogcHBwTJQbcJENA7CSFU1RDXkA1N3PKMwwY");
            expect(keys.xprv).to.equal("tprv8fyR7reF8Z9Dbkr1uskDbZbAbyuGrz3AyogCNFe3iwQUFAUBhs9WKQJwMRyXpayh9V1DcQCPLpzzVamNgjqpfLL9tgx6aufgcwgg18FhhTZ");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/84'/0'/0' and SLIP 0132 activated",
        async () => {

            const scriptType = "p2wpkh";
            const network = getNetworkSlip0132Version(scriptType, TESTNET);

            const derivationPath = "m/84'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, network);

            expect(keys.xpub).to.equal("vpub5YdJ8hWyGHnUWqJigcrUNsiuVx2f9gk2BFeEjRqS3HhDEARnkint7KwhF6reGSk8U25FsixsMG58jBjZaLw2kTLcQA7KA4vKckHfW7YoTbU");
            expect(keys.xprv).to.equal("vprv9KdwjBz5RvEBJMEFabKU1jnAwvCAkE2Ap2idw3RpUxAEMN6eDBUdZXdDPqthpQHXxmEq7MPWG9i6G9zW88frFohMdNLwkjJfAPoxnGxFDh6");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/44'/0'/0' with SLIP 0132 deactivated",
        async () => {
            const derivationPath = "m/44'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, TESTNET);

            expect(keys.xpub).to.equal("tpubDDYbgq4YRg7CqMTSfSbR2zWP7NPVwmUuXRB621HxPARfYCdxxZbZwFZozcYKUy7171gFC5s87ePD1YZe4r9jLYrtiB1GcwvZSm7XZx3Z4qL");
            expect(keys.xprv).to.equal("tprv8grZYR2JHJRXwtRemnvpdarGYLsZnSHzx7aJjVFextdGhiPCLAmykkwwpUcikNqzcuednMxytBCpEbkuttsR9rfyZpfPo8YELGE3mQ5oMiq");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/44'/0'/0' with SLIP 0132 activated",
        async () => {

            const scriptType = "p2pkh";
            const network = getNetworkSlip0132Version(scriptType, TESTNET);

            const derivationPath = "m/44'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, network);

            expect(keys.xpub).to.equal("tpubDDYbgq4YRg7CqMTSfSbR2zWP7NPVwmUuXRB621HxPARfYCdxxZbZwFZozcYKUy7171gFC5s87ePD1YZe4r9jLYrtiB1GcwvZSm7XZx3Z4qL");
            expect(keys.xprv).to.equal("tprv8grZYR2JHJRXwtRemnvpdarGYLsZnSHzx7aJjVFextdGhiPCLAmykkwwpUcikNqzcuednMxytBCpEbkuttsR9rfyZpfPo8YELGE3mQ5oMiq");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/49'/0'/0' with SLIP 0132 deactivated",
        async () => {
            const derivationPath = "m/49'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, TESTNET);

            expect(keys.xpub).to.equal("tpubDDjR2irRp7VJQCMNBcHG4Ag8LaP3cb1Cvj17s6bS2jJXU4j2mRvDL1PSjZYHdvLs368Z1dMrfaHe2QgzPrv2166z2yXpXj8vwWQnqQm1uq6");
            expect(keys.xprv).to.equal("tprv8h3NtJpBfjodWjKaHxcfem21mYs7TFpJMRQLaaZ8cTW8daUG936d9WmaZSEFEQ8PA1oGJLd5HPkHpNQ5871L1zkit71fuTn5pFnSF5RJMA4");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )

    it("with derivationPath = m/49'/0'/0' with SLIP 0132 activated",
        async () => {
            const scriptType = "p2wpkh-p2sh";
            const network = getNetworkSlip0132Version(scriptType, TESTNET);

            const derivationPath = "m/49'/0'/0'";
            const keys = await getKeys(mnemonic, derivationPath, network);

            expect(keys.xpub).to.equal("upub5ErzbV1zenuQaWbAELwJDz4FVYr3oLXedkrAAMrdYoQzZUcdwEaSKNkCRuak7hRs2GFE9d4JkVPwgNMgqupjiwbtNMhF6U2EYNdSukgb2hu");
            expect(keys.xprv).to.equal("uprv91seByV6pRM7N2Wh8KQHrr7WwX1ZPsooGXvZMyT1zTt1ggHVPhGBmaRiaeBqEJnJZev53pDdk46qhf1dqoRLpESKkSi6VNba5yr5deCf9ER");
            expect(keys.parentFingerprint.toString('base64')).to.equal("SWk00Q==");
        }
    )
});