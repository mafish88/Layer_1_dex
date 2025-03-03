import { new_thao_wallet_kp_evm } from "../keypair";
import { getClient } from "../utils";

export async function getPendingCreditForUser(account_id: Buffer) {
    const chromiaClient = await getClient();
  
  const result = await chromiaClient.query("get_pending_credit_for_user", {
    account_id: account_id,
  });

  console.log("Pending credit for user:", result);
}

getPendingCreditForUser(new_thao_wallet_kp_evm.accountId);
