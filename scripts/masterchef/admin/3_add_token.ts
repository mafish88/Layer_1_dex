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
            name: "ft_auth",
            args: [signatureProviderAdmin.pubKey],
          },
          {
            name: "add_lp_token",
            args: ["LP-USDC", 2000],
          },
        ],
        signers: [signatureProviderAdmin.pubKey],
      },
      signatureProviderAdmin
    );

  console.log({ status, statusCode, transactionRid });
}

main();

//chr tx --secret /Users/sotatek/Documents/rell/masterchef/.secret -a --blockchain-rid AA8F34AD6257E426D42CEAE222DD92DDE0E9475E05B33FF46466A9D1B3F27FC7 --ft-auth add_lp_token LP-USDC 2000
