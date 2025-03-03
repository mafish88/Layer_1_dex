import { blockchainRid, blockchainRid2 } from "../keypair";
import { seedChain } from "./seedChain";
import { seedImages, dapp_content_type } from "./seedImages";
async function main(bRID: string, name: string) {
  await seedChain(
    bRID,
    name,
    "Chromia Dex System that includes Uniswap, Farming, Staking, and more",
    "https://dex-uat.colorpool.xyz/",
    name
  );
  //1
  await seedImages(
    bRID,
    name,
    "Dapp1-Landscape@3x.png",
    "https://dex-uat.colorpool.xyz/assets/logo.svg",
    dapp_content_type.landscape
  );
  //2
  await seedImages(
    bRID,
    name,
    "Dapp1-Promotional1@3x.png",
    "https://dex-uat.colorpool.xyz/assets/logo.svg",
    dapp_content_type.promotional
  );
  //3
  await seedImages(
    bRID,
    name,
    "Dapp1-Promotional2@3x.png",
    "https://dex-uat.colorpool.xyz/assets/logo.svg",
    dapp_content_type.promotional
  );
  //4
  await seedImages(
    bRID,
    name,
    "Dapp1-Promotional3@3x.png",
    "https://dex-uat.colorpool.xyz/assets/logo.svg",
    dapp_content_type.promotional
  );
  //5
  await seedImages(
    bRID,
    name,
    "Dapp1-Promotional4@3x.png",
    "https://dex-uat.colorpool.xyz/assets/logo.svg",
    dapp_content_type.promotional
  );
  //6
  await seedImages(
    bRID,
    name,
    "Dapp1-Promotional5@3x.png",
    "https://dex-uat.colorpool.xyz/assets/logo.svg",
    dapp_content_type.promotional
  );
  //7
  await seedImages(
    bRID,
    name,
    "Dapp1-Vertical@3x.png",
    "https://dex-uat.colorpool.xyz/assets/logo.svg",
    dapp_content_type.portrait
  );
  //8
  await seedImages(
    bRID,
    name,
    "Dapp1-Icon3x.png",
    "https://dex-uat.colorpool.xyz/assets/logo.svg",
    dapp_content_type.icon
  );
}
main(blockchainRid, "ChromiaDEX")
  .then(() => process.exit())
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
