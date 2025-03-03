import {
  encryption,
  createClient,
  newSignatureProvider,
} from "postchain-client";

import { blockchainRid, nodeURL } from "../../keypair";

async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    blockchainRid,
  });
}

main();
