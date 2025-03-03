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
    blockchainIid: 1,
  });

  const account_id = Buffer.from(
    "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06",
    "hex"
  );

  const result = await chromiaClient.query("get_list_top_up_credit_history", {
    page: 1,
    page_size: 2,
  });

  console.log(serializeBigInt(result));
}

function serializeBigInt(obj: any): string {
  return JSON.stringify(obj, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
}

main();
