import { getClient, getClientWithDirectionChain } from "../utils";

export async function getAllBridName(brids: string[]) {
  for (const brid of brids) {
    const chromiaClient = await getClientWithDirectionChain();

    const data = await chromiaClient.query("get_blockchain_info", {
      rid: Buffer.from(brid, "hex"),
    });

    console.log({ data });
  }
}
getAllBridName([
  "EF71D90A01B5A3743EB954BDC5AD0592E46891A0B26FE52169F4143D879B0DB0",
  "DC28052E646AB87D61E8779FC7FAB4D98F1EA64E9DE73B0E7460B8B7B1BD374A",
  "FA667A86AEDBC66E8F9D0870987A5DF167DD6938D70ED993E6395ABA1D7EA9DD",
  "5CD19E0D8CC289C74AF5F877A4B19E4CFE83C323A97E5C6D1C33BFFD3890DCAE",
]);
