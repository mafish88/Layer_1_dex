import { dapp_content_type } from "../list-vault/seedImages";
import { getClient } from "../utils";

export async function getDappDetails(isSideChain: boolean) {
  const chromiaClient = await getClient(isSideChain);

  const result = await chromiaClient.query("find_dapp_details", {
    dapp_rowid: 1,
    requested_content_types: ["icon"],
  });

  console.log(`Result:`, result);
}

export async function getAllMedia(isSideChain: boolean) {
  const chromiaClient = await getClient(isSideChain);

  const result = await chromiaClient.query("get_all_media", {});

  console.log(`Result:`, result);
}

getDappDetails(false);
// getAllMedia(true);
