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
    blockchainIid: 1,
  });

  const result = await chromiaClient.query("query_get_amounts_out", {
    amount_in: BigInt("100000000000000000000"),
    path: ["MinhDA", "MinhDB"],
  });

  console.log({ result });
}

main();
