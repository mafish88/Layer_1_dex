import {
  encryption,
  createClient,
  newSignatureProvider,
} from "postchain-client";

import {
  adminPrivKey,
  blockchainRid,
  nodeURL,
  signerPrivKeyA,
} from "../../keypair";

async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    blockchainIid: 0,
  });

  const result = await chromiaClient.query("get_token_amount_add_liquidity", {
    asset_a_symbol: "USDC",
    asset_b_symbol: "ETH",
    amount_a_desired: BigInt(10000000),
  });

  console.log({ result });
}

main();
