import { newSignatureProvider } from "postchain-client";

import { adminPrivKey } from "../keypair";
import { getClient } from "../utils";

export async function change_stake(amount: bigint) {
  const client = await getClient();

  const signatureProviderAdmin = newSignatureProvider({
    privKey: adminPrivKey,
  });

  const { status, statusCode, transactionRid } =
    await client.signAndSendUniqueTransaction(
      {
        operations: [
          {
            name: "admin_change_stake_credit_amount",
            args: [amount],
          },
        ],
        signers: [signatureProviderAdmin.pubKey],
      },
      signatureProviderAdmin
    );

  console.log({ status, statusCode, transactionRid });
}

export async function change_unstake(amount: bigint) {
  const client = await getClient();

  const signatureProviderAdmin = newSignatureProvider({
    privKey: adminPrivKey,
  });

  const { status, statusCode, transactionRid } =
    await client.signAndSendUniqueTransaction(
      {
        operations: [
          {
            name: "admin_change_unstake_credit_amount",
            args: [amount],
          },
        ],
        signers: [signatureProviderAdmin.pubKey],
      },
      signatureProviderAdmin
    );

  console.log({ status, statusCode, transactionRid });
}

change_stake(BigInt(-200));
// change_unstake(BigInt(-1));
