import { createConnection, getAssetById } from "@chromia/ft4";
import {
  admin_kp,
  admin_kp_evm,
  fuji_wallet_kp_evm,
  new_thao_wallet_kp_evm,
  vi_a_Dung_2_kp_evm,
  vi_a_Dung_3_kp_evm,
  vi_a_Dung_kp_evm,
  vi_c_Minh_2_kp_evm,
  vi_c_Minh_3_kp_evm,
  vi_c_Minh_4_kp_evm,
  vi_c_Minh_5_kp_evm,
  vi_c_Minh_6_kp_evm,
  vi_c_Minh_kp_evm,
  vi_Huong_2_kp_evm,
  vi_Huong_kp_evm,
} from "../keypair";
import {
  getClient,
  getSession,
  registerAccountFeeEVM,
  registerAccountOpenEVM,
  registerAccountOpenFT,
} from "../utils";
import { registrationStrategy } from "@chromia/ft4/dist/types/registration";
import { getAssetBySymbol } from "./assets-query";

export async function registerAccountEVM() {
  const client = await getClient();

  const asset = await createConnection(client).getAssetById(
    await getAssetBySymbol("CHR")
  );

  await registerAccountFeeEVM(client, new_thao_wallet_kp_evm, asset!);
}

export async function registerAccountOpen() {
  const client = await getClient(true);

  await registerAccountOpenFT(client, admin_kp);
}

export async function registerAccountOpenEvmExternal() {
  const client = await getClient(true);

  const data = await registerAccountOpenEVM(client, vi_Huong_2_kp_evm);

  console.log(data);
}

// registerAccountEVM();
// registerAccountOpen();
// registerAccountOpenEvmExternal();
const main = async () => {
  switch (process.argv[2]) {
    case "evm":
      await registerAccountEVM();
      break;
    case "open":
      await registerAccountOpen();
      break;
    case "open-evm":
      await registerAccountOpenEvmExternal();
      break;
    default:
      console.log("Invalid argument");
      break;
  }
};

main();
