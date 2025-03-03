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

  const signatureProviderA = newSignatureProvider({
    privKey: signerPrivKeyA,
  });

  console.log(signatureProviderA.pubKey);

  // const { status, statusCode, transactionRid } =
  //   await chromiaClient.signAndSendUniqueTransaction(
  //     {
  //       operations: [
  //         {
  //           name: "create_user",
  //           args: [signatureProviderA.pubKey, "Alice"],
  //         },
  //       ],
  //       signers: [signatureProviderA.pubKey],
  //     },
  //     signatureProviderA
  //   );

  // console.log({ status, statusCode, transactionRid });
}

main();
