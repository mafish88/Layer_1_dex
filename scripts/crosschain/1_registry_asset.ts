// import { createConnection } from "@chromia/ft4/ft-session";
import {
  applyTransfer,
  AuthFlag,
  BufferId,
  createAmount,
  createConnection,
  getAssetsByName,
  initTransfer,
  noopAuthenticator,
  registerCrosschainAsset,
  transactionBuilder,
} from "@chromia/ft4";
import { createChromiaClientToMultichain } from "../keypair";
import { adminUser, getNewAsset } from "../utils";
import AccountBuilder from "./account-builder";
import { Operation, RawGtx } from "postchain-client";
// import

async function main() {
  const multichain00 = {
    rid: Buffer.from(
      "3C315D2295F40DFA8C9199A4CFD71B52DBB6F63F7394120671CD3EB96333B663",
      "hex"
    ),
  };

  const multichain01 = {
    rid: Buffer.from(
      "B16046CB6A69863059D09136D10E9FF54941535B40FED27D3C0F96B01652FBF2",
      "hex"
    ),
  };

  console.log("Creating connections...");

  const connection00 = createConnection(
    await createChromiaClientToMultichain(multichain00.rid)
  );

  const connection01 = createConnection(
    await createChromiaClientToMultichain(multichain01.rid)
  );

  console.log("Creating assets...");

  const asset00 = (await getAssetsByName(connection00.client, "ETH")).data[0];

  const account00 = await AccountBuilder.account(connection00)
    .withAuthFlags(AuthFlag.Account, AuthFlag.Transfer)
    .withBalance(asset00, createAmount(100, asset00.decimals))
    .build();

  const account01 = await AccountBuilder.account(connection01)
    .withAuthFlags(AuthFlag.Account, AuthFlag.Transfer)
    .build();

  const tb = transactionBuilder(account00.authenticator, connection00.client);

  const initOperation = initTransfer(
    account01.id,
    asset00.id,
    createAmount(100, asset00.decimals),
    [multichain01.rid],
    10000000000000
  );

  let transferTransactionRid: Buffer | undefined = undefined;

  console.log("Sending transaction...", initOperation);

  await new Promise<void>((resolve, reject) => {
    const onAnchoredHandler = async (
      data: {
        operation: Operation;
        opIndex: number;
        tx: RawGtx;
        createProof: (blockchainRid: BufferId) => Promise<Operation>;
      } | null,
      error: Error | null
    ) => {
      console.log("hahaaaa", { data });
      if (error) {
        reject(error);
        return;
      }
      if (!data) {
        reject(new Error("No data provided"));
        return;
      }
      const iccfProofOperation = await data.createProof(multichain01.rid);
      console.log({ iccfProofOperation });
      try {
        await transactionBuilder(account00.authenticator, connection01.client)
          .add(iccfProofOperation, {
            authenticator: noopAuthenticator,
          })
          .add(applyTransfer(data.tx, data.opIndex, data.tx, data.opIndex, 0), {
            authenticator: noopAuthenticator,
          })
          .buildAndSend();
      } catch (error) {
        reject(error);
      }

      resolve();
    };

    tb.add(initOperation, { onAnchoredHandler })
      .buildAndSendWithAnchoring()
      .then((res) => {
        console.log("Transaction receipt", res.receipt);
        transferTransactionRid = res.receipt.transactionRid;
      });
  });
}
main();
