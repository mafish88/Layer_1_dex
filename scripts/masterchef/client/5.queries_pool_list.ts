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

type lp_pool_info = {
  acc_reward_per_share: bigint;
  lp_asset_name: string;
  last_update_time: bigint;
  lp_asset: any;
  reward_debt: bigint;
  reward_per_day: bigint;
  staked_liquidity: bigint;
  total_reward_per_year: bigint;
  total_staked_liquidity: bigint;
  user_staked_amount: bigint;
};

type final_pool_info = lp_pool_info & {
  earned_rewards: bigint;
};

async function main() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    blockchainIid: 0,
  });

  const result = await chromiaClient.query("get_lp_pool_info", {
    user: "02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06",
  });

  var final_result = [];

  if (result && Array.isArray(result)) {
    for (const item of result) {
      // Process each item here
      const poolInfo = item as unknown as lp_pool_info;

      // update to current data

      // update to current data
      if (poolInfo.lp_asset) {
        const current_time: bigint = BigInt(Math.floor(Date.now() / 1000));
        const elapsed_time: bigint = current_time - poolInfo.last_update_time;
        const reward_per_second =
          poolInfo.total_reward_per_year / BigInt(31536000);
        console.log({ reward_per_second, elapsed_time });
        const reward_per_elapsed_time = reward_per_second * elapsed_time;
        const new_acc_reward_per_share =
          poolInfo.staked_liquidity == BigInt(0)
            ? poolInfo.acc_reward_per_share
            : poolInfo.acc_reward_per_share +
              (reward_per_elapsed_time * BigInt(1000000000000)) /
                poolInfo.staked_liquidity;

        // Add the processed item to final_result
        final_result.push({
          ...poolInfo,
          acc_sushi_per_share: new_acc_reward_per_share,
          earned_rewards:
            (poolInfo.user_staked_amount * new_acc_reward_per_share) /
              BigInt(1000000000000) -
            poolInfo.reward_debt,
        });
      } else {
        console.log("Item is not a valid lp_pool_info object");
      }
    }
  } else {
    console.log("Result is not an array or is null");
  }

  console.log({ result, final_result });
}

main();
