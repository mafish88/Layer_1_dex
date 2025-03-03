import { createClient } from "postchain-client";

import { blockchainRid, nodeURL } from "../../keypair";

async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    // blockchainIid: 1,
    blockchainRid: blockchainRid
  });

  const result = await chromiaClient.query("get_brid_supported_chains", {});

  console.log({ result });
}

main();
