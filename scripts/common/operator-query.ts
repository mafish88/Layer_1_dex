import { Asset } from "@chromia/ft4";
import { getClient } from "../utils";

export async function getOperators() {
  const client = await getClient();

  const result = await client.query("get_operators", {
    page: 1,
    page_size: 10,
  });

  console.log(result);
}

getOperators();
