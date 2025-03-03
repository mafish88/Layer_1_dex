import { getAssetBySymbol } from "../common/assets-query";
import { admin_kp_evm, vi_c_Nhu_kp_evm } from "../keypair";
import { getClient, getEvmSession } from "../utils";

export async function adminTransferToMasterchef() {
  const chromiaClient = await getClient();

  const masterchefAcc = await chromiaClient.query(
    "get_lock_acc_from_masterchef_acc_treasury",
    {}
  );

  console.log("Masterchef account:", masterchefAcc);

  const session = await getEvmSession(
    chromiaClient,
    admin_kp_evm,
    admin_kp_evm.accountId
  );

  const assetId = await getAssetBySymbol("Color");

  const data = await session.call({
    name: "ft4.transfer",
    args: [
      masterchefAcc,
      assetId,
      BigInt("100000000000000000000"),
    ],
  });

  console.log(data);
}

adminTransferToMasterchef();
