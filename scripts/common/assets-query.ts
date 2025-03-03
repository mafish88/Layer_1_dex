import { Asset } from "@chromia/ft4";
import { getClient } from "../utils";
import { new_thao_wallet_kp_evm, vi_a_Dung_kp_evm } from "../keypair";

export async function getAccountByPubkey(pubkey: string) {
  const chromiaClient = await getClient();

  const result = await chromiaClient.query("get_account_by_pubkey", {
    pubkey: Buffer.from(pubkey, "hex"),
  });

  console.log(`Account by pubkey: ${pubkey}:`, result);
}

export async function getAllAssets(
  pageSize: number | null,
  pageCursor: string | null,
  isSideChain?: boolean
) {
  const chromiaClient = await getClient(isSideChain);

  const allAssets = await chromiaClient.query("ft4.get_all_assets", {
    page_size: pageSize,
    page_cursor: pageCursor,
  });

  console.log("All assets:", allAssets);
}

export async function getListTokensBalanceOf(pubkey: string) {
  const chromiaClient = await getClient();

  const result = await chromiaClient.query("get_list_tokens_balance_of", {
    user: pubkey,
  });

  console.log("List tokens balance of:", result);
}

export async function getAssetAllowedWithRule(
  senderId: string,
  recipientId: string
) {
  const chromiaClient = await getClient();

  const assetAllowedWithRule = await chromiaClient.query(
    "ft4.get_allowed_assets",
    {
      sender_blockchain_rid: Buffer.from(
        chromiaClient.config.blockchainRid,
        "hex"
      ),
      sender_id: Buffer.from(senderId, "hex"),
      recipient_id: Buffer.from(recipientId, "hex"),
    }
  );

  console.log("Asset allowed with rule:", assetAllowedWithRule);
}

export async function getAssetBalance(
  accountId: string,
  assetSymbol: string,
  isSideChain?: boolean
) {
  const chromiaClient = await getClient(isSideChain);

  const assetId = await getAssetBySymbol(assetSymbol);

  const assetBalance = await chromiaClient.query("ft4.get_asset_balance", {
    account_id: Buffer.from(accountId, "hex"),
    asset_id: assetId,
  });

  console.log("Asset balance:", assetBalance);
}

export async function getAssetBySymbol(
  assetSymbol: string,
  isSideChain?: boolean
) {
  const chromiaClient = await getClient(isSideChain);

  const result: Asset = await chromiaClient.query("ft4.get_asset_by_symbol", {
    symbol: assetSymbol,
  });

  if (!result) {
    throw new Error("No asset found");
  }

  console.log("Asset by symbol:", result);
  return result.id;
}

export async function getLiquidityBySymbol(
  pubkey: string,
  assetSymbol: string
) {
  const chromiaClient = await getClient();

  const result = await chromiaClient.query("get_liquidity_by_symbol", {
    pubkey: Buffer.from(pubkey, "hex"),
    asset_symbol: assetSymbol,
  });

  console.log("Liquidity by symbol:", result);
}

export async function getTransactionHistory() {
  const chromiaClient = await getClient();

  const result = await chromiaClient.query("ft4.get_transfer_history", {
    account_id: vi_a_Dung_kp_evm.accountId,
    filter: [0],
    page_size: null,
    page_cursor: null,
  });

  console.log("Transaction history:", result);
}

export async function getPendingTransfer(accountId: Buffer) {
  const chromiaClient = await getClient();

  const result = await chromiaClient.query("get_pending_transfer", {
    recipient_id: accountId,
  });

  console.log(result);
}

// getPendingTransfer(new_thao_wallet_kp_evm.accountId);

// getTransactionHistory();

// getAccountByPubkey(
//   "228985087B1818714F67E494A076CA0284C060FABC5D2BA66885B4AC60F801D3F5"
// );
// getAllAssets(null, null, true);
// getListTokensBalanceOf(
//   "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06"
// );
// getAssetAllowedWithRule(
//   "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06",
//   "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06"
// );
// getAssetBalance(
//   "b568d90eb6f2c3145a59e816bed63731f6d30ca4762121c8cff1a524065d6a57",
//   "CHR",
//   true
// );
// getLiquidityBySymbol(
//   "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06",
//   "CHR"
// );
