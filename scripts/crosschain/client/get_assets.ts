import { createClient } from "postchain-client";

import { nodeURL } from "../../keypair";

async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    // blockchainIid: 1,
    blockchainRid:
      "F91E683BF7FB5EBE32F4F7ADE4AB85EB6492EBD8461C417654ECCC08252C6B55",
  });

//   console.log("chromiaClient", chromiaClient);

  const result = await chromiaClient.query("get_asset_supported_on_chain", {
    blockchain_rid: Buffer.from(
      "DC28052E646AB87D61E8779FC7FAB4D98F1EA64E9DE73B0E7460B8B7B1BD374A",
      "hex"
    ),
  });

  console.log({ result });
}

main();
