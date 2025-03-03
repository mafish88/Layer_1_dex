import {
  createAmount,
  createConnection,
  createInMemoryFtKeyStore,
  createKeyStoreInteractor,
  createSingleSigAuthDescriptorRegistration,
  crosschainTransfer,
  login,
  registerAccount,
  registrationStrategy,
} from "@chromia/ft4";
import { createClient, encryption } from "postchain-client";
import { getAssetBySymbol } from "../common/assets-query";
import { blockchainRid, blockchainRid2, nodeURL } from "../keypair";

const user1 = {
  privKey: Buffer.from(
    "DACA68A6085937879759F316D51310DFB5FB23006B1B5DFA63AE01308D17F67D",
    "hex"
  ),
  pubKey: Buffer.from(
    "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06",
    "hex"
  ),
};

async function main() {
  //   const sourceChainId =
  //     "D1E276944230836F65CAAA077E8AF89DC04D28605CE0F40FEDC1F13C67CECEF3";
  //   const targetChainId =
  //     "ED271FDA5403051BA5724ACB8A2969AE872441B2D27C2968DEA9A5D1FBE51415";

  //   console.log("Source chain ID: ", sourceChainId);
  //   console.log("Target chain ID: ", targetChainId);

  const client0 = await createClient({
    nodeUrlPool: nodeURL,
    // useStickyNode: true,
    // directoryNodeUrlPool: [nodeURL],
    // blockchainRid: sourceChainId,
    blockchainRid: blockchainRid,
  });

  const client1 = await createClient({
    nodeUrlPool: nodeURL,
    // useStickyNode: true,
    // directoryNodeUrlPool: [nodeURL],
    // blockchainRid: targetChainId,
    blockchainRid: blockchainRid2,
  });

  console.log(client1);
  const connection0 = createConnection(client0);

  const store0 = createInMemoryFtKeyStore(user1);
  //   console.log("Store 0: ", store0);
  const session0 = await createKeyStoreInteractor(client0, store0).getSession(
    user1.pubKey
  );

  const store1 = createInMemoryFtKeyStore(encryption.makeKeyPair());
  const { session: session1 } = await registerAccount(
    client1,
    store1,
    registrationStrategy.open(
      createSingleSigAuthDescriptorRegistration(["A", "T"], store1.id)
    )
  );

  const assetId = await getAssetBySymbol("ETH");

  console.log("\nAsset ID: ", assetId.toString("hex"));

  console.log(
    "\nUser 1 balance before transfer: ",
    (await session0.account.getBalanceByAssetId(assetId))?.amount.toString() ||
      "none"
  );

  console.log(
    "User 2 balance before transfer: ",
    (await session1.account.getBalanceByAssetId(assetId))?.amount.toString() ||
      "none"
  );

  console.log("\n\n===================\n\n");

  console.log("Prepare transfer");
  //   const newAuth = createAuthenticator(
  //     authenticator.accountId,
  //     authenticator.keyHandlers.concat(keyStore.createKeyHandler(ad)),
  //     authenticator.authDataService,
  //   );
  //   const transfer0 = crosschainTransfer(
  //     connection0,
  //     session0.account.authenticator,
  //     session1.blockchainRid,
  //     session1.account.id,
  //     assetId,
  //     createAmount(1, 6)
  //   );
  console.log(session0.client.config);
  const transfer0 = session0.account.crosschainTransfer(
    session1.blockchainRid,
    session1.account.id,
    assetId,
    createAmount(1, 6)
  );

  transfer0.on("init", () => {
    console.log("\tTransfer initialized.");
  });

  transfer0.on("hop", (brid) => {
    console.log(`\tHopped to chain: ${brid.toString("hex")}`);
  });

  console.log("Start transfer");
  await transfer0
    .then(() => {
      console.log("\tTransfer completed.");
    })
    .catch((error) => {
      console.error(`\tTransfer failed: ${error.message}`);
    });

  console.log("\nDone");

  console.log("\n\n===================\n\n");

  console.log(
    "User 1 balance after transfer: ",
    (await session0.account.getBalanceByAssetId(assetId))?.amount.toString() ||
      "none"
  );

  console.log(
    "User 2 balance after transfer: ",
    (await session1.account.getBalanceByAssetId(assetId))?.amount.toString() ||
      "none"
  );
}
main();
