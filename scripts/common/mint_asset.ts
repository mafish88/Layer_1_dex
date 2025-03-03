import {
  chromiaClient,
  createClient,
  encryption,
  newSignatureProvider,
} from "postchain-client";

import { adminPrivKey, nodeURL } from "../keypair";
import { getAssetBySymbol } from "./assets-query";
import { getClient } from "../utils";

const list_token = [
  //   { symbol: "USDC", decimal: 6 },
  // { symbol: "USDC-sidechain2", decimal: 6 },
  // { symbol: "ETH-sidechain2", decimal: 18 },
  // { symbol: "BTC-sidechain2", decimal: 18 },
  // { symbol: "POL-sidechain2", decimal: 18 },
  // { symbol: "SOL-sidechain2", decimal: 18 },

  // { symbol: "USDC-Mockchain", decimal: 6 },
  // { symbol: "ETH-Mockchain", decimal: 18 },
  // { symbol: "BTC-Mockchain", decimal: 18 },
  // { symbol: "POL-Mockchain", decimal: 18 },
  // { symbol: "SOL-Mockchain", decimal: 18 },

  // { symbol: "USDC-Mockchain2", decimal: 6 },
  // { symbol: "ETH-Mockchain2", decimal: 18 },
  { symbol: "BTC-Mockchain2", decimal: 18 },
  // { symbol: "POL-Mockchain2", decimal: 18 },
  // { symbol: "SOL-Mockchain2", decimal: 18 },
  // { symbol: "Color", decimal: 18 },
  // { symbol: "ETH", decimal: 18 },
  //   { symbol: "BTC", decimal: 18 },
  //   { symbol: "POL", decimal: 18 },
  //   { symbol: "SOL", decimal: 18 },
  //   { symbol: "XRP", decimal: 18 },
  //   { symbol: "DOGE", decimal: 18 },
  //   { symbol: "TON", decimal: 18 },
  //   { symbol: "ADA", decimal: 18 },

  //   { symbol: "QN16", decimal: 27 },
];

async function main(to: string, isSideChain?: boolean) {
  const client = await getClient(isSideChain);

  for (const token of list_token) {
    const keypair = encryption.makeKeyPair(adminPrivKey);
    const signatureProviderAdmin = newSignatureProvider(keypair);

    const assetId = await getAssetBySymbol(token.symbol, isSideChain);

    const { status, statusCode, transactionRid } =
      await client.signAndSendUniqueTransaction(
        {
          operations: [
            {
              name: "ft4.admin.mint",
              args: [
                Buffer.from(to, "hex"),
                assetId,
                BigInt("1000" + "".padStart(token.decimal, "0")),
              ],
            },
          ],
          signers: [signatureProviderAdmin.pubKey],
        },
        signatureProviderAdmin
      );

    console.log({ status, statusCode, transactionRid });
  }
}

main("b41f9a492d60d49f7a59e77f0a0579cc48a6710c6544c45277858aa91c4341d1", true);
