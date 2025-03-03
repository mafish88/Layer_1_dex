import {
  createInMemoryFtKeyStore,
  createKeyStoreInteractor,
} from "@chromia/ft4";
import {
  createClient,
  encryption,
  newSignatureProvider,
} from "postchain-client";
import {
  admin_kp,
  adminPrivKey,
  adminPubKeyB,
  nodeURL,
  vi_c_Nhu_kp_evm,
} from "../keypair";
import { getAssetBySymbol } from "./assets-query";
import { getClient, getEvmSession, getSession } from "../utils";

const list_token = [
    { symbol: "USDC", decimal: 6 },
  { symbol: "CHR", decimal: 18 },
  { symbol: "Color", decimal: 18 },
  { symbol: "bUSDC", decimal: 6 },
  { symbol: "ETH", decimal: 18 },
    { symbol: "BTC", decimal: 18 },
    { symbol: "POL", decimal: 18 },
    { symbol: "SOL", decimal: 18 },
    { symbol: "XRP", decimal: 18 },
    { symbol: "DOGE", decimal: 18 },
    { symbol: "TON", decimal: 18 },
    { symbol: "ADA", decimal: 18 },
];

export async function mintAssets(to: string) {
  const client = await getClient();

  const session = await getSession(client, admin_kp);

  for (const token of list_token) {
    const assetId = await getAssetBySymbol(token.symbol);

    const result = await session.call({
      name: "ft4.admin.mint",
      args: [
        Buffer.from(to, "hex"),
        assetId,
        BigInt("10000000000000000000000000000000000"),
      ],
    });

    console.log(result);
  }
}

export async function transferAssets(to: string) {
  const client = await getClient();

  // const session = await getSession(client, admin_kp);
  const session = await getEvmSession(
    client,
    vi_c_Nhu_kp_evm,
    vi_c_Nhu_kp_evm.accountId
  );

  const assetId = await getAssetBySymbol("xQN3");

  const data = await session.call({
    name: "ft4.transfer",
    args: [Buffer.from(to, "hex"), assetId, BigInt("100000000000000000000")],
  });

  console.log(data);
}

export async function burnAssets(assetSymbol: string) {
  const client = await getClient();

  const session = await getSession(client, admin_kp);

  const assetId = await getAssetBySymbol(assetSymbol);

  const result = await session.call({
    name: "ft4.burn",
    args: [assetId, BigInt(10 * 10 ** 18)],
  });

  console.log(result);
}

export async function adminRegisterAsset(
  name: string,
  symbol: string,
  decimals: number,
  iconUrl: string,
  isSideChain?: boolean
) {
  const client = await getClient(isSideChain);

  const keypair = encryption.makeKeyPair(adminPrivKey);
  const signatureProviderAdmin = newSignatureProvider(keypair);

  console.log("register_asset");

  const { status, statusCode, transactionRid } =
    await client.signAndSendUniqueTransaction(
      {
        name: "ft4.admin.register_asset",
        args: [name, symbol, decimals, iconUrl],
      },
      signatureProviderAdmin
    );

  console.log({ status, statusCode, transactionRid });
}

// adminRegisterAsset(
//   "USDC-Mockchain2",
//   "USDC-Mockchain2",
//   6,
//   "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
//   true
// );

// adminRegisterAsset(
//   "ETH-Mockchain2",
//   "ETH-Mockchain2",
//   18,
//   "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
//   true
// );

// adminRegisterAsset(
//   "BTC-Mockchain2",
//   "BTC-Mockchain2",
//   18,
//   "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
//   true
// );

// adminRegisterAsset(
//   "POL-Mockchain2",
//   "POL-Mockchain2",
//   18,
//   "https://assets.coingecko.com/coins/images/4713/standard/polygon.png",
//   true
// );

// adminRegisterAsset(
//   "SOL-Mockchain2",
//   "SOL-Mockchain2",
//   18,
//   "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
//   true
// );

// adminRegisterAsset(
//   "bUSDC",
//   "bUSDC",
//   6,
//   "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
//   false
// );

// adminRegisterAsset(
//   "Color",
//   "Color",
//   18,
//   "https://assets.coingecko.com/coins/images/50439/standard/K_2nunVb_400x400-removebg-preview.png?1727765376",
//   false
// );

// mintAssets(
//   "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06"
// );

// mintAssets("3b490e50046da7e1372084bd0c03a3de5133b496bbfe94e98187e6780cb3bf2a");

transferAssets(
  "ced67f62e8436fb3b36119da31b48c908939899517286f4cba1f4586fce031c1"
);

// burnAssets("NG3");
