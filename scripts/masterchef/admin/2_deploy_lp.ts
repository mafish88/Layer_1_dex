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
            name: "deploy_lpToken",
            args: ["LP-USDC", "LP-USD", 6, "https://url-to-asset-1-icon"],
          },
        ],
        signers: [signatureProviderAdmin.pubKey],
      },
      signatureProviderAdmin
    );

  console.log({ status, statusCode, transactionRid });
}

main();
