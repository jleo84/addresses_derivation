const { TESTNET, getAddressesFromXPub } = require("../index.js");
const { describe, it } = require('mocha');
var chai = require('chai');
var expect = chai.expect;

describe("generate addresses from xpub, mainnet", () => {
    it(
        "m/84'/0'/0', p2wpkh",
        async () => {

            const xpub = "xpub6DBqFu9HUCKRAoRKBZsakTQ4eXmaFHGP5AtjBBQYMKcchG3kyQzLhRQQ8pFL19tsXMpFbyhp5JCX1z7tGJV89211HDnBHEZmkZ4CWGttisP";
            const { receiveAddresses, changeAddresses } = await getAddressesFromXPub({ xpub });

            expect(receiveAddresses[0].address).to.equal("bc1q93agls4z8usce3prv6l9dn7l4f0a5sj48lmv0k");
            expect(receiveAddresses[0].descriptor).to.equal("wpkh(02752400a9e6e5c39189049da0fecc6eb294525e5aedea5b2bff194d498e98eaf4)");

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

        }),

        it(
            "m/44'/0'/0', p2pkh",
            async () => {

                const xpub = "xpub6DLwFPyfkVYnNiXh6f8t4XtSu6WpPyDgdiXmnD3w2u6Rt8MQYR2Sukxynj6zjGGYUDyej39rG2PnT8D4LJnrUSnuZtka3S9rK2CXvQLobT7";
                const derivationPath = "m/44'/0'/0'";
                const scriptType = "p2pkh";

                const { receiveAddresses, changeAddresses } = await getAddressesFromXPub({ xpub, derivationPath, scriptType });

                expect(receiveAddresses[0].address).to.equal("1fjApJgV7VffVbya8ccz2ZFmduKj2qDbR");
                expect(receiveAddresses[0].descriptor).to.equal("pkh(038c25c37bd7f9d504f0948665eebeaa50f61309db978c17e5e84102b41a4c27ab)");

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
        )

    it(
        "m/49'/0'/0', p2wpkh-p2sh",
        async () => {

            const xpub = "xpub6CHJwwB3nukoT7eMsJfcM8RTKUzPfH5LpFcSRbFGqRXHtUkAmPsz67Mo4mVe2vmPanBEaWyakwJ7arDE83L2U16BELTVJ1w5J8KVfyMqtzE";
            const derivationPath = "m/49'/0'/0'";
            const scriptType = "p2wpkh-p2sh";

            const { receiveAddresses, changeAddresses } = await getAddressesFromXPub({ xpub, derivationPath, scriptType });

            expect(receiveAddresses[0].address).to.equal("32YM7oKVq3KM9fdbnwcNniTZQLWMCnf7mh");
            expect(receiveAddresses[0].descriptor).to.equal("sh(wpkh(02f6e09968d9a5de9ec5d44e8f9d341d05a4e251e4ce767308ec4dcef7c80929b3))");

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
    )

    describe("generate addresses from xpub, testnet", () => {
        it(
            "m/84'/0'/0', p2wpkh",
            async () => {
                const tpub = "tpubDDZTn8xyBUGsSbcAdkrfxNjRyesEEfmScoV2XjTghENWSYiU3dqRqs5ENrL7Xer7KGMADZDgcQ2ZiAcVfALN2TTJLpXUxmE1LWecGLBsRqe";

                const { receiveAddresses, changeAddresses } = await getAddressesFromXPub({ xpub: tpub, network: TESTNET });

                expect(receiveAddresses[0].address).to.equal("tb1q93agls4z8usce3prv6l9dn7l4f0a5sj4deql59");
                expect(receiveAddresses[0].descriptor).to.equal("wpkh(02752400a9e6e5c39189049da0fecc6eb294525e5aedea5b2bff194d498e98eaf4)");

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
        )

        it(
            "m/44'/0'/0', p2pkh",
            async () => {

                const tpub = "tpubDDiZmdoMTmWEeWiYYr7yGTDpEDcUPMikBM858m75NorKdR27cdsY4Cdp2mBnFmDnG8WZLcfio8Dq9JhfjAe6MtFCdVVsixp5tynwgQkfHYk";
                const derivationPath = "m/44'/0'/0'";
                const scriptType = "p2pkh";

                const { receiveAddresses, changeAddresses } = await getAddressesFromXPub({ xpub: tpub, derivationPath, scriptType, network: TESTNET });

                expect(receiveAddresses[0].address).to.equal("mgBgTsPfJ8vvSc5bHhazowmaddW2jXJSPU");
                expect(receiveAddresses[0].descriptor).to.equal("pkh(038c25c37bd7f9d504f0948665eebeaa50f61309db978c17e5e84102b41a4c27ab)");

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
        )

        it(
            "m/44'/0'/0', p2pkh",
            async () => {

                const tpub = "tpubDCewUAzjWBiFiuqDKVehZ3kpec63efaQMtCjn9JRBLHBdmQsqcj5EZ2dJoaRZRidNgi9C6VTJ38AH2hqWuBGMSYUHwCnyYbJt5uuRvm6hCf";
                const derivationPath = "m/49'/0'/0'";
                const scriptType = "p2wpkh-p2sh";

                const { receiveAddresses, changeAddresses } = await getAddressesFromXPub({ xpub: tpub, derivationPath, scriptType, network: TESTNET });

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
        )
    })
})
