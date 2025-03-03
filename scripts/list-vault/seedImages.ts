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
  async function seedImages(brid: string, dappName: string, imageName: string, url: string, dapp_content_type: dapp_content_type ) {
    const client = await createClient({
      nodeUrlPool: nodeURL,
      blockchainRid: brid,
    });
    const { status, statusCode, transactionRid } =
      await client.signAndSendUniqueTransaction(
        {
          operations: [
            {
              name: "create_dapp_media",
              args: [
                dappName,
                imageName,
                url,
                dapp_content_type
              ],
            },
          ],
          signers: [sigProvider.pubKey],
        },
        sigProvider
      );
      logger.info("transaction sent")
      logger.info(status)
      logger.info(statusCode!.toString())
      logger.info(transactionRid.toString('hex'))
  }
  enum dapp_content_type{
    landscape,
    portrait,
    promotional,
    video,
    icon
  }
  export { seedImages, dapp_content_type };