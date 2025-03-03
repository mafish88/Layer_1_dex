import {
  createClient,
  encryption,
  newSignatureProvider,
} from "postchain-client";
import {
  admin_kp,
  admin_kp_evm,
  adminPrivKey,
  adminPubKeyB,
  blockchainRid,
  blockchainRid2,
  new_thao_wallet_kp_evm,
  nodeURL,
  vi_a_Dung_3_kp_evm,
  vi_a_Dung_kp_evm,
  vi_c_Minh_6_kp_evm,
} from "../keypair";
import { getClient, getEvmSession, getSession } from "../utils";
import { getAssetBySymbol } from "../common/assets-query";
import { createAmount, getAssetById } from "@chromia/ft4";

export async function initCrosschainTransfer() {
  const client = await getClient(true);

  const session = await getEvmSession(
    client,
    vi_a_Dung_3_kp_evm,
    vi_a_Dung_3_kp_evm.accountId
  );

  const result = await session.call({
    name: "ft4.crosschain.init_transfer",
    args: [
      session.account.id,
      await getAssetBySymbol("CHR"),
      BigInt("50000000000000000"),
      [Buffer.from(blockchainRid, "hex")],
      10000000000000,
    ],
  });

  console.log(result);
}

export async function applyCrosschainTransfer() {
  const client = await getClient();

  const session = await getEvmSession(
    client,
    admin_kp_evm,
    admin_kp_evm.accountId
  );

  const result = await session.call({
    name: "ft4.crosschain.apply_transfer",
    args: [
      session.account.id,
      await getAssetBySymbol("CHR"),
      BigInt("10000000000"),
      [Buffer.from(blockchainRid2, "hex")],
      10000000000000,
    ],
  });

  console.log(result);
}

export async function crosschainTransfer() {
  const client = await getClient(true);

  const session = await getEvmSession(
    client,
    new_thao_wallet_kp_evm,
    new_thao_wallet_kp_evm.accountId
  );

  const assetId = await getAssetBySymbol("CHR");

  const result = session.account.crosschainTransfer(
    blockchainRid,
    session.account.id,
    assetId,
    createAmount(100, 18)
  );

  result.on("init", () => {
    console.log("\tTransfer initialized.");
  });

  result.on("hop", (brid) => {
    console.log(`\tHopped to chain: ${brid.toString("hex")}`);
  });

  console.log("Start transfer");
  await result
    .then(() => {
      console.log("\tTransfer completed.");
    })
    .catch((error) => {
      console.error(`\tTransfer failed: ${error.message}`);
    });

  console.log("\nDone");

  console.log("\n\n===================\n\n");
}

export async function admin_register_crosschain_asset(
  symbol: string,
  issuingBlockchainRid: Buffer,
  originBlockchainRid: Buffer
) {
  const clientMainChain = await getClient();

  const getAssetDataSidechainID = await getAssetBySymbol(symbol);

  const sessionMainchain = await getEvmSession(
    clientMainChain,
    admin_kp_evm,
    admin_kp_evm.accountId
  );
  const assetData = await sessionMainchain.getAssetById(
    getAssetDataSidechainID
  );

  const client = await getClient(true);

  const keypair = encryption.makeKeyPair(adminPrivKey);
  const signatureProviderAdmin = newSignatureProvider(keypair);

  console.log("register_crosschain_asset");

  const { status, statusCode, transactionRid } =
    await client.signAndSendUniqueTransaction(
      {
        name: "ft4.admin.register_crosschain_asset",
        args: [
          assetData!.name,
          symbol,
          assetData!.decimals,
          issuingBlockchainRid,
          assetData!.iconUrl,
          originBlockchainRid,
        ],
      },
      signatureProviderAdmin
    );

  console.log({ status, statusCode, transactionRid });
}

export async function operator_register_crosschain_asset(
  sidechainSymbol: string
) {
  const clientSideChain = await getClient(true);

  const getAssetDataSidechainID = await getAssetBySymbol(sidechainSymbol, true);

  const sessionSidechain = await getEvmSession(
    clientSideChain,
    admin_kp_evm,
    admin_kp_evm.accountId
  );
  const assetData = await sessionSidechain.getAssetById(
    getAssetDataSidechainID
  );

  const client = await getClient(false);

  const session = await getEvmSession(
    client,
    admin_kp_evm,
    admin_kp_evm.accountId
  );

  const data = await session.call({
    name: "register_crosschain_asset_by_operator",
    args: [
      assetData!.name,
      assetData!.symbol,
      assetData!.decimals,
      assetData!.blockchainRid,
      assetData!.iconUrl,
      Buffer.from(clientSideChain.config.blockchainRid, "hex"),
    ],
  });

  console.log(data);
}

// crosschainTransfer();
// initCrosschainTransfer();

// operator_register_crosschain_asset("USDC-crosschain-sidechain");
// operator_register_crosschain_asset("ETH-crosschain-sidechain");
// operator_register_crosschain_asset("BTC-crosschain-sidechain");
// operator_register_crosschain_asset("POL-crosschain-sidechain");
// operator_register_crosschain_asset("SOL-crosschain-sidechain");

// admin_register_crosschain_asset(
//   "CHR",
//   Buffer.from(blockchainRid, "hex"),
//   Buffer.from(blockchainRid, "hex")
// );

admin_register_crosschain_asset(
  "UNI-V2:USDC+QN3",
  Buffer.from(blockchainRid, "hex"),
  Buffer.from(blockchainRid, "hex")
);

// admin_register_crosschain_asset(
//   "Color",
//   Buffer.from(blockchainRid, "hex"),
//   Buffer.from(blockchainRid, "hex")
// );
