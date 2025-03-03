import { BufferId } from "@chromia/ft4";
import { createClient } from "postchain-client";
import secp256k1 from "secp256k1";

export const blockchainRid =
  "31816BD55D217B42E7D4F955CF1E757CAFEF88362599742249F413DC66FF9BC1";

// dev
// export const blockchainRid =
//   "2528CB695E6577BBEF9C2A7F8844299B2BE0D3C3A0FC6C4675A9202D3368C22A";

//local
// export const blockchainRid =
//   "30B0FB9ECF938F7862391018FB91BC55C9F419F0CD3C76082FCD6CA81E48AF03";

//Sidechain2
export const blockchainRid2 =
  "DC28052E646AB87D61E8779FC7FAB4D98F1EA64E9DE73B0E7460B8B7B1BD374A";

// Mockchain
// export const blockchainRid2 =
//   "FA667A86AEDBC66E8F9D0870987A5DF167DD6938D70ED993E6395ABA1D7EA9DD";

// Mockchain2
// export const blockchainRid2 =
//   "5CD19E0D8CC289C74AF5F877A4B19E4CFE83C323A97E5C6D1C33BFFD3890DCAE";
//local
// export const blockchainRid2 =
//   "BC4E2B7D086251BAA894916E3584D68D2C1C0598092626FF3D70EC4D969B53CE";

export const nodeURL = "https://node0.testnet-asgard.chromia.com:7740";
// export const nodeURL = "http://10.4.11.35:7740";
// export const nodeURL = "http://127.0.0.1:7740";

export const signerPrivKeyA = Buffer.alloc(32, "a");
export const signerPubKeyA = secp256k1.publicKeyCreate(signerPrivKeyA);

export const signerPrivKeyB = Buffer.alloc(32, "b");
export const signerPubKeyB = secp256k1.publicKeyCreate(signerPrivKeyB);

export const adminPrivKey = Buffer.from(
  "DACA68A6085937879759F316D51310DFB5FB23006B1B5DFA63AE01308D17F67D",
  "hex"
);
export const adminPubKeyB = secp256k1.publicKeyCreate(adminPrivKey);

export const admin_kp = {
  privKey: Buffer.from(
    "DACA68A6085937879759F316D51310DFB5FB23006B1B5DFA63AE01308D17F67D",
    "hex"
  ),
  pubKey: Buffer.from(
    "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06",
    "hex"
  ),
};

export const admin_kp_evm = {
  privKey: Buffer.from(
    "DACA68A6085937879759F316D51310DFB5FB23006B1B5DFA63AE01308D17F67D",
    "hex"
  ),
  pubKey: Buffer.from("cDa9647154F455D0f0786B9C90651c5A4594B36A", "hex"),

  accountId: Buffer.from(
    "4A5788892B630D8317848FA99CCAFC50AAF7833913D5F69835D1A4C801F79107",
    "hex"
  ),
};

export const vi_a_Dung_kp_evm = {
  privKey: Buffer.from(
    "f4f28ccee88df9badc69765f46203a49e05ca52601445088ece71544956a0edf",
    "hex"
  ),
  pubKey: Buffer.from("433c7C66Efa01dE60FeAd644430E4fbd17315b80", "hex"),

  accountId: Buffer.from(
    "6e7d00b35ee984b05ef34d3096944697553c526f9d6a8bceaee78275fb0dce85",
    "hex"
  ),
};

export const vi_a_Dung_2_kp_evm = {
  privKey: Buffer.from(
    "c3a4591c47c3f1449f21ce2fec49f7f8f9873b8ae2cf181ea40c9c832fe7070f",
    "hex"
  ),
  pubKey: Buffer.from("970bA0a733A09608DbBa00f1d92b64FcFa6eCD67", "hex"),

  accountId: Buffer.from(
    "c22e815a0da9c8c5013742a56dcd707a4130872d0d07d518d22b7845607cdf9f",
    "hex"
  ),
};

export const vi_a_Dung_3_kp_evm = {
  privKey: Buffer.from(
    "332f7a38d5a6e95bd8db0fae576d2c9681adb54fdda074512c6563eac06845ba",
    "hex"
  ),
  pubKey: Buffer.from("DC81eA69ce0F61BcB5FBB2646D618c6e4a85Ac46", "hex"),

  accountId: Buffer.from(
    "3b490e50046da7e1372084bd0c03a3de5133b496bbfe94e98187e6780cb3bf2a",
    "hex"
  ),
};

export const vi_c_Minh_kp_evm = {
  privKey: Buffer.from(
    "eab06765869d37ceeae71c232b815a18773dd1d07d7676de14dbf461ed754718",
    "hex"
  ),
  pubKey: Buffer.from("a3B9f504a41D666981DEF9bA52994E5A20709119", "hex"),

  accountId: Buffer.from(
    "15088b9400229fcca77623e9954a5bf1de505b4425985579011d560365a8d527",
    "hex"
  ),
};

export const vi_c_Minh_2_kp_evm = {
  privKey: Buffer.from(
    "ad973390edc1143366af5d325787d772051e9df968dfc6ad1ea02ff3a4982098",
    "hex"
  ),
  pubKey: Buffer.from("1F8E1D7a38Da5669c3bf9EB8AB857497dA837aDd", "hex"),

  accountId: Buffer.from(
    "825ea5b5f92e82a1a1e81fc4e5f2946c2b93b10e94409c227a9332fe4bb13718",
    "hex"
  ),
};

export const vi_c_Minh_3_kp_evm = {
  privKey: Buffer.from(
    "ee766e7827d0232329e0a81f9cd2f73f3e59697aabb2e6e104e3773f4b12ae5c",
    "hex"
  ),
  pubKey: Buffer.from("52e97Ba0694bd7A2804784a1d599bEb4E9cF2A6e", "hex"),

  accountId: Buffer.from(
    "96a9ee9009856a2755396031c2daa89675d5e24b061993fc8b9f8e5f4f1f4baf",
    "hex"
  ),
};

export const vi_c_Minh_4_kp_evm = {
  privKey: Buffer.from(
    "b1e719178b41f62debd1fb652cb90aba2bc0f32c16303e9f571462ec15f9ae8e",
    "hex"
  ),
  pubKey: Buffer.from("335A9186d6128E89368E1eE3ab725FAD1A9b0138", "hex"),

  accountId: Buffer.from(
    "fd8ebc790bc4c2f6ce7832056db5ae4d5efc2006586bdde8e2a973579916f12c",
    "hex"
  ),
};

export const vi_c_Minh_5_kp_evm = {
  privKey: Buffer.from(
    "20ae97a7d479ceb3c241733826ee760399423781e6553d8833212e0e10d337b1",
    "hex"
  ),
  pubKey: Buffer.from("6D5d02017bE2c6BB108492c0D9133e31545ba508", "hex"),

  accountId: Buffer.from(
    "452272c375f624bbd95dee767597c3bdb070542dd1e61cd99f90b05bfd111e6d",
    "hex"
  ),
};

export const vi_c_Minh_6_kp_evm = {
  privKey: Buffer.from(
    "111328e6538d3c1463a7c46cf1c95e0b97e0a571eeefe3b12d9ffed183668a3f",
    "hex"
  ),
  pubKey: Buffer.from("CD65f08a637D6a1b1Fdac1428be67b57d358Bd65", "hex"),

  accountId: Buffer.from(
    "b41f9a492d60d49f7a59e77f0a0579cc48a6710c6544c45277858aa91c4341d1",
    "hex"
  ),
};

export const vi_c_Nhu_kp_evm = {
  privKey: Buffer.from(
    "332f7a38d5a6e95bd8db0fae576d2c9681adb54fdda074512c6563eac06845ba",
    "hex"
  ),
  pubKey: Buffer.from("DC81eA69ce0F61BcB5FBB2646D618c6e4a85Ac46", "hex"),

  accountId: Buffer.from(
    "3b490e50046da7e1372084bd0c03a3de5133b496bbfe94e98187e6780cb3bf2a",
    "hex"
  ),
};

export const vi_Huong_kp_evm = {
  privKey: Buffer.from(
    "908c2103302acad760f25eb857ef0fafb4ec03b22f7e493570fb331319423431",
    "hex"
  ),
  pubKey: Buffer.from("7e97f91698300c6dB8adc8B334A84802E85cdD03", "hex"),

  accountId: Buffer.from(
    "d3975a8a4bba65263d77ec7cea048c8c9378e7f2902dd29a2894168bc5f02a18",
    "hex"
  ),
};

export const vi_Huong_2_kp_evm = {
  privKey: Buffer.from(
    "0f341f7df65b29992c4a2a0f7f2e7e790b05607b54125f9906a7db19a9c70ff0",
    "hex"
  ),
  pubKey: Buffer.from("819B68eb0ef37F8572620C1a7502cA437983DB80", "hex"),

  accountId: Buffer.from(
    "2af322a645f78fe13939594734a1204b5129fe5a7efe9dc08f035892c385b046",
    "hex"
  ),
};

export const fuji_wallet_kp_evm = {
  privKey: Buffer.from(
    "cd69b980681fe4b5e9cd0dd09537432b8b40a1583b12a409208814cf062db6f7",
    "hex"
  ),
  pubKey: Buffer.from("9C0f5Fa34D46947b9339fBCCA6fF2C77445e5605", "hex"),

  accountId: Buffer.from(
    "ccd6cd522884abaeaac91d59e93e72664182447f21aa1d573f2f1555c633bdb8",
    "hex"
  ),
};

export const new_thao_wallet_kp_evm = {
  privKey: Buffer.from(
    "6c1d63f432685ac07d19058000c92aa24b393880ebb860222d1bcc870b5a84ab",
    "hex"
  ),
  pubKey: Buffer.from("99B7D33BA84b9Fab2D331509FFd4906548A681FC", "hex"),

  accountId: Buffer.from(
    "b568d90eb6f2c3145a59e816bed63731f6d30ca4762121c8cff1a524065d6a57",
    "hex"
  ),
};

export async function createChromiaClientToMultichain(
  blockchainRid: BufferId,
  nodeUrl?: string
) {
  const url = nodeUrl || process.env.TEST_NODE_URL || "http://10.4.11.35:7740";

  console.log(blockchainRid.toString("hex"));

  return createClient({
    nodeUrlPool: url,
    blockchainRid: blockchainRid.toString("hex"),
  });
}
