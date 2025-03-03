import {
  createInMemoryFtKeyStore,
  createKeyStoreInteractor,
} from "@chromia/ft4";
import { createClient } from "postchain-client";
import { admin_kp, admin_kp_evm, adminPubKeyB, nodeURL } from "../keypair";
import { getClient, getEvmSession, getSession } from "../utils";

export async function admin_withdraw_swap_fee(symbol: string) {
  const client = await getClient();

  const session = await getEvmSession(
    client,
    admin_kp_evm,
    admin_kp_evm.accountId
  );

  const result = await session.call({
    name: "admin_withdraw_swap_fee",
    args: [symbol],
  });

  console.log(result);
}

admin_withdraw_swap_fee("USDC")
