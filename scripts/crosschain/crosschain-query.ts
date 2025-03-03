import { Asset, createConnection } from "@chromia/ft4";
import { getClient, getEvmSession, getSession, serializeBigInt } from "../utils";
import { admin_kp, admin_kp_evm, vi_a_Dung_kp_evm } from "../keypair";

export async function getPendingTransfer() {
  const client = await getClient();

  const session = await getEvmSession(
    client,
    admin_kp_evm,
    admin_kp_evm.accountId
  );

  const data = await session.account.getPendingCrosschainTransfers(null, null);

  console.log(serializeBigInt(data.data[0].tx));
}
getPendingTransfer();
