import {
  createClient,
  newSignatureProvider,
  encryption,
  logger,
} from "postchain-client";
import * as dotenv from "dotenv";
import { adminPrivKey, nodeURL } from "../keypair";
dotenv.config({ path: ".env" });
const sigProvider = newSignatureProvider(
  encryption.makeKeyPair(adminPrivKey)
);
logger.setLogLevel(4);
async function seedChain(
  brid: string,
  dappName: string,
  dappDescription: string,
  dappLaunchUrl: string,
  chainName: string
) {
  const client = await createClient({
    nodeUrlPool: nodeURL,
    blockchainRid: brid,
  });
  const genres = ["aarpg", "rpg", "fps", "rts", "adventure", "4xtbs"];
  var randomIndex = Math.floor(Math.random() * genres.length);
  var randomGenre = genres[randomIndex];
  var role = "test";
  const { status, statusCode, transactionRid } =
    await client.signAndSendUniqueTransaction(
      {
        operations: [
          {
            name: "create_or_update_dapp",
            args: [
              dappName,
              dappDescription,
              dappLaunchUrl,
              randomGenre,
            ],
          },
          {
            name: "create_or_update_blockchain",
            args: [dappName, Buffer.from(brid, "hex"), chainName, role],
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
