import {
  createInMemoryFtKeyStore,
  createKeyStoreInteractor,
} from "@chromia/ft4";
import { createClient } from "postchain-client";
import { admin_kp, admin_kp_evm, adminPubKeyB, nodeURL } from "../keypair";
import { getAssetBySymbol } from "./assets-query";
import { getClient, getEvmSession, getSession } from "../utils";

export async function addOperator(operator: string) {
  const client = await getClient(false);

  const session = await getEvmSession(
    client,
    admin_kp_evm,
    admin_kp_evm.accountId
  );

  const result = await session.call({
    name: "add_operator",
    args: [operator],
  });

  console.log(result);
}

export async function inactiveOperator(operator: string) {
  const client = await getClient(false);

  const session = await getEvmSession(
    client,
    admin_kp_evm,
    admin_kp_evm.accountId
  );

  const result = await session.call({
    name: "inactive_operator",
    args: [operator],
  });

  console.log(result);
}

// addOperator("02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06");

// inactiveOperator(
//   "128985087B1818714F67E494A076CA0284C060FABC5D2BA66885B4AC60F801D3F5"
// );

const main = async () => {
  switch (process.argv[2]) {
    case "add":
      await addOperator(process.argv[3]);
      break;
    case "inactive":
      await inactiveOperator(process.argv[3]);
      break;
    
    default:
      console.log("Invalid argument");
      break;
  }
};

main();
