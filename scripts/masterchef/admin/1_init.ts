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
} from "../../keypair";

async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    blockchainRid,
  });

  const signatureProviderAdmin = newSignatureProvider({
    privKey: adminPrivKey,
  });

  const { status, statusCode, transactionRid } =
    await chromiaClient.signAndSendUniqueTransaction(
      {
        operations: [
          {
            name: "init",
            args: [],
          },
        ],
        signers: [signatureProviderAdmin.pubKey],
      },
      signatureProviderAdmin
    );

  console.log({ status, statusCode, transactionRid });
}

main();
