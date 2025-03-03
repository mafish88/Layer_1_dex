import {
  encryption,
  createClient,
  newSignatureProvider,
} from "postchain-client";

import {
  adminPrivKey,
  blockchainRid,
  nodeURL,
  signerPrivKeyA,
} from "../keypair";

async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    // blockchainRid,
    blockchainIid: 1,
  });

  const signatureProviderAdmin = newSignatureProvider({
    privKey: adminPrivKey,
  });

  const { status, statusCode, transactionRid } =
    await chromiaClient.signAndSendUniqueTransaction(
      {
        operations: [
          {
            name: "admin_change_credit_daily_amount",
            args: [BigInt(1000)],
          },
        ],
        signers: [signatureProviderAdmin.pubKey],
      },
      signatureProviderAdmin
    );

  console.log({ status, statusCode, transactionRid });
}

main();
