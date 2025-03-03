import {
  encryption,
  createClient,
  newSignatureProvider,
  IClient,
} from "postchain-client";

import {
  adminPrivKey,
  blockchainRid,
  nodeURL,
  signerPrivKeyA,
} from "../../keypair";
import { allowedAssets, Asset } from "@chromia/ft4";

export async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    blockchainIid: 1,
  });

  const result: Asset = await chromiaClient.query(
    "get_token_amounts_remove_liquidity",
    {
      asset_symbol_a: "BTC",
      asset_symbol_b: "USDC",
      liquidity: BigInt("707106781186546524"),
    }
  );

  console.log(serializeBigInt(result));
  return result.id;
}

function serializeBigInt(obj: any): string {
  return JSON.stringify(obj, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
}

main();
