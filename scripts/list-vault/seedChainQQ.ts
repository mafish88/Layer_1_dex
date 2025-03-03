import {
  createClient,
  newSignatureProvider,
  encryption,
  logger,
} from "postchain-client";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
const sigProvider = newSignatureProvider(
  encryption.makeKeyPair(process.env.ADMIN_PRIV_KEY)
);
logger.setLogLevel(4);
async function seedChain(brid: string, blockchainName: string,  dapp: Dapp) {
  const client = await createClient({
    nodeUrlPool: process.env.NODE_URL,
    blockchainRid: brid,
  });
  var role = "test";
  const { status, statusCode, transactionRid } =
    await client.signAndSendUniqueTransaction(
      {
        operations: [
          {
            name: "create_or_update_dapp",
            args: [
              dapp.name,
              dapp.description,
              dapp.launch_url,
              dapp.genre,
            ],
          },
          {
            name: "create_or_update_blockchain",
            args: [
              1,
              Buffer.from(brid, "hex"),
              blockchainName,
              role,
            ],
          },
        ],
        signers: [sigProvider.pubKey],
      },
      sigProvider
    );
  logger.info("transaction sent");
  logger.info(status);
  logger.info(statusCode!.toString());
  logger.info(transactionRid.toString("hex"));
}
export { seedChain };

export type Dapp = {
  name: string;
  description: string;
  launch_url: string;
  genre: string;
};
