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
} from "../keypair";

async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    // blockchainRid: blockchainRid,
    blockchainIid: 1,
  });

  const result = await chromiaClient.query("get_staking_pair", {
    user: "904ff21e5bba39b96a661302acb500791d39f81ce4df33b7a8a60b34cae79f09".toUpperCase(),
  });

  // const result = await chromiaClient.query("get_staking_pair_detail_by_symbol", {
  //   user: "904ff21e5bba39b96a661302acb500791d39f81ce4df33b7a8a60b34cae79f09".toUpperCase(),
  //   symbol: "ETH"
  // });

  console.log(result);
}

main();
