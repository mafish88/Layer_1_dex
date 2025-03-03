# Chromia DEX Project Setup Guide

This source code is a decentralized finance (DeFi) project that combines functionalities of Uniswap (a decentralized exchange) with MasterChef and Staking mechanisms. The primary purpose of this project is to enable users to:

Swap tokens seamlessly using an Automated Market Maker (AMM) model.

Provide liquidity to earn rewards.

Stake tokens to receive additional incentives from swapping.

By integrating Uniswap's AMM design and MasterChef's reward distribution logic, this project allows users to maximize their earnings from liquidity provision and staking.

---

## Referenced Repositories

This project builds upon the ideas and functionalities of the following projects:

[Uniswap V2 periphery](https://github.com/Uniswap/v2-periphery) [Uniswap V2 Core](https://github.com/Uniswap/v2-core): Automated Market Maker (AMM) for swapping and liquidity provisioning.

[MasterChef](https://github.com/sushiswap/masterchef): A reward distribution contract for liquidity providers.

[Staking Mechanisms](https://github.com/1coinswap/core/blob/master/contracts/SushiBar.sol): Token staking functionalities for additional rewards.

Make sure to review these repositories to understand the foundational components of this project.

## System Overview

Our system incorporates various mechanisms to ensure a smooth, fair, and secure experience for all users. This document outlines the key features, including the Credit System, Antispam Measures, and the FT4 Rate-Limiter.

---

### Credit System

The Credit System is a core feature that regulates user actions by requiring credits for various operations within the system. This ensures balanced usage and incentivizes meaningful interactions. Below are the key aspects of the credit system:

- Daily Credit Allocation:

  - Each user is granted 1,000 free credits daily.

  - These credits are automatically reset at the start of each day.

- Pay-As-You-Go System:

  - Users need to pay credits for specific actions within the system (e.g., add_liquidity, remove_liquidity, swap_exact_tokens_for_tokens, swap_tokens_for_exact_tokens, ...).

  - The cost for each action is clearly defined in the system's interface.

- Top-Up Options:

  - Users can purchase additional credits if their free allocation is insufficient for their needs.

  - Multiple payment methods are supported for top-ups, ensuring convenience and accessibility.

---

### FT4 Rate-Limiter

The FT4 Rate-Limiter adds an extra layer of security and fairness during the account registration process. Users must make a small payment using one of three predefined assets to create an account, effectively reducing spam registrations:

- Payment Options:

  - 2 bUSDC
  - 10 CHR
  - 10 000 Color

This system encourages fair usage while providing flexibility for power users.

## **1. Configuration**

### Generate Admin Key Pair

1. Generate an admin key pair for registering accounts and assets:
   ```bash
   chr keygen --file .chromia/ft4-admin.keypair
   ```

### Update Configuration

2. Open `chromia.yml` and replace the `admin_pkey` with your generated public key.

### Install FT4 Library

3. Install required dependencies:

   ```bash
   chr install
   ```

4. Run unit test:
   ```bash
   chr test
   ```

### Initialize Modules

5. Initialize required modules localnet:

   ```bash
   make init_masterchef cid=1
   make init_staking cid=1
   make init_uniswap cid=1
   ```

   For testnet/mainnet:

   ```bash
   chr tx --secret <YOUR_PATH_TO_SECRET> -a \
      init_masterchef  --api-url https://node0.testnet-asgard.chromia.com:7740 \
      -brid <YOUR_RID>
   chr tx --secret <YOUR_PATH_TO_SECRET> -a \
      init_staking  --api-url https://node0.testnet-asgard.chromia.com:7740 \
      -brid <YOUR_RID>
   chr tx --secret <YOUR_PATH_TO_SECRET> -a \
      init_uniswap  --api-url https://node0.testnet-asgard.chromia.com:7740 \
      -brid <YOUR_RID>
   ```

---

## **2. Deploy Tokens**

### Deploy Tokens to Blockchain

For localnet:

```bash
make deploy_token name=USDC symbol=USDC decimal=6 icon=https://assets.coingecko.com/coins/images/6319/standard/usdc.png cid=1
make deploy_token name=bUSDC symbol=bUSDC decimal=6 icon=https://assets.coingecko.com/coins/images/6319/standard/usdc.png cid=1
make deploy_token name=ETH symbol=ETH decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
```

For testnet/mainnet:

```bash
chr tx --secret <YOUR_PATH_TO_SECRET> -a \
   ft4.admin.register_asset <TOKEN_NAME> <TOKEN_SYMBOL> <TOKEN_DECIMALS> <TOKEN_ICON_URL> \
   --api-url https://node0.testnet-asgard.chromia.com:7740 \
   -brid <YOUR_RID>
```

Repeat the command for each token to be deployed.

---

## **3. Add Liquidity**

1. Add liquidity between token pairs:

For localnet:

```bash
make add_liquidity token_a=USDC token_b=ETH amount_a=2400000000L amount_b=1000000000000000000L to_user=YOUR_USER_ADDRESS cid=1
```

For testnet/mainnet:

```bash
chr tx --secret <YOUR_PATH_TO_SECRET> -a \
   --ft-auth \
   add_liquidity \
   <TOKEN_A> <TOKEN_B> <AMOUNT_A> <AMOUNT_B> <MIN_AMOUNT_A> <MIN_AMOUNT_B> <DEADLINE> <TO_USER_ADDRESS> \
   --api-url https://node0.testnet-asgard.chromia.com:7740 \
   -brid <YOUR_RID>
```

---

## **3. To setup more, you need to be a operator**

Replace {YOUR_OPERATOR_ADDRESS} with your operator address. [operator-operation.ts](./scripts/common/operator-operations.ts#L44)

```bash
   npx ts-node scripts/common/operator-operations.ts add <YOUR_OPERATOR_ADDRESS>
```

## **4. Farming Configuration**

### Add Liquidity Pools

1. Add liquidity pools to the MasterChef:

   For localnet:

   ```bash
   make add_lp_masterchef lp_name="UNI-V2:USDC+ETH" alloc_point=1000 cid=1
   ```

   For testnet/mainnet:

   ```bash
   chr tx --secret <YOUR_PATH_TO_SECRET> -a \
      --ft-auth \
      add_lp_token \
      <LP_NAME> <ALLOC_POINT> \
      --api-url https://node0.testnet-asgard.chromia.com:7740 \
      -brid <YOUR_RID>
   ```

### Set Pool Allocation Points

2. Adjust allocation points for a pool:

   For localnet:

   ```bash
   make set_pool_alloc_point symbol="UNI-V2:USDC+ETH" alloc_point=500 cid=1
   ```

   For testnet/mainnet:

   ```bash
   chr tx --secret <YOUR_PATH_TO_SECRET> -a \
      --ft-auth \
      set_pool_alloc_point \
      <SYMBOL> <ALLOC_POINT> \
      --api-url https://node0.testnet-asgard.chromia.com:7740 \
      -brid <YOUR_RID>
   ```

3. Reward users for masterchef is Color, need to transfer Color to masterchef:

   ```bash
   npx ts-node scripts/master/admin_transfer_to_masterchef.ts
   ```

---

## **5. Staking Configuration**

Map tokens for use in the system:

```bash
make add_mapping_token symbol=USDC cid=1
make add_mapping_token symbol=ETH cid=1
```

```bash
chr tx --secret <YOUR_PATH_TO_SECRET> -a \
      --ft-auth \
      add_staking_pair \
      <SYMBOL> \
      --api-url https://node0.testnet-asgard.chromia.com:7740 \
      -brid <YOUR_RID>
```

# Function list

## **1. Uniswap Function**

### **1.1 Function Name: `add_liquidity`**

#### Description: Creates a new liquidity pool or adds liquidity to an existing one.

| **Parameter Name** | **Description**                                             |
| ------------------ | ----------------------------------------------------------- |
| `asset_a_symbol`   | The symbol of the first asset (e.g., `USDC`)                |
| `asset_b_symbol`   | The symbol of the second asset (e.g., `ETH`)                |
| `amount_a_desired` | The desired amount of asset A to add to the pool            |
| `amount_b_desired` | The desired amount of asset B to add to the pool            |
| `amount_a_min`     | The minimum amount of asset A to add to the pool            |
| `amount_b_min`     | The minimum amount of asset B to add to the pool            |
| `deadline`         | The deadline by which the transaction must be confirmed     |
| `to_id`            | The recipient's address or ID (where the liquidity is sent) |

### **1.2 Function Name: `remove_liquidity`**

#### Description: Removes liquidity from an existing pool.

| **Parameter Name** | **Description**                                             |
| ------------------ | ----------------------------------------------------------- |
| `asset_a_symbol`   | The symbol of the first asset (e.g., `USDC`)                |
| `asset_b_symbol`   | The symbol of the second asset (e.g., `ETH`)                |
| `liquidity`        | The amount of liquidity to remove from the pool             |
| `amount_a_min`     | The minimum amount of asset A to remove from the pool       |
| `amount_b_min`     | The minimum amount of asset B to remove from the pool       |
| `deadline`         | The deadline by which the transaction must be confirmed     |
| `to_id`            | The recipient's address or ID (where the liquidity is sent) |

### **1.3 Function Name: `swap_exact_tokens_for_tokens`**

#### Description: Swaps a specific amount of input tokens for tokens of another type.

| **Parameter Name** | **Description**                                           |
| ------------------ | --------------------------------------------------------- |
| `amount_in`        | The amount of tokens to swap                              |
| `amount_out_min`   | The minimum amount of tokens to receive                   |
| `path`             | The list of tokens to swap through                        |
| `to`               | The recipient's address or ID (where the tokens are sent) |
| `deadline`         | The deadline by which the transaction must be confirmed   |

### **1.4 Function Name: `swap_tokens_for_exact_tokens`**

#### Description: Swaps tokens to receive a specific amount of output tokens.

| **Parameter Name** | **Description**                                           |
| ------------------ | --------------------------------------------------------- |
| `amount_out`       | The amount of tokens to swap                              |
| `amount_in_max`    | The maximum amount of tokens to receive                   |
| `path`             | The list of tokens to swap through                        |
| `to`               | The recipient's address or ID (where the tokens are sent) |
| `deadline`         | The deadline by which the transaction must be confirmed   |

## Operator Function

### **1.5 Function Name: `set_fee_to`**

#### Description: Sets the address that receives trading fees.

| **Parameter Name** | **Description**        |
| ------------------ | ---------------------- |
| `new_fee_to`       | The new fee to address |

### **1.6 Function Name: `set_fee_to_setter`**

#### Description: Sets the address authorized to change the fee recipient.

| **Parameter Name**  | **Description**               |
| ------------------- | ----------------------------- |
| `new_fee_to_setter` | The new fee to setter address |

### **1.7 Function Name: `set_fee_on`**

#### Description: Enables or disables trading fees.

| **Parameter Name** | **Description**       |
| ------------------ | --------------------- |
| `fee_on`           | The new fee on or off |

## **2. Staking Function**

### **2.1 Function Name: `enter`**

#### Description: Stakes a specified amount of an asset.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |
| `amount`           | The amount of asset to enter           |

### **2.2 Function Name: `exit`**

#### Description: Unstakes a specified amount of an asset.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |
| `amount_x_asset`   | The amount of asset to exit            |

## Operator Function

### **2.3 Function Name: `admin_withdraw_swap_fee`**

#### Description: Allows an admin to withdraw accumulated swap fees for a specific asset to reward staking user.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |

### **2.4 Function Name: `admin_withdraw_all_swap_fee`**

#### Description: Allows an admin to withdraw all accumulated swap fees.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |

### **2.5 Function Name: `add_staking_pair`**

#### Description: Adds a new staking pair.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |

## **3. MasterChef Function**

### **3.1 Function Name: `deposit`**

#### Description: Deposits LP tokens into the MasterChef contract.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |
| `amount`           | The amount of asset to deposit         |

### **3.2 Function Name: `withdraw`**

#### Description: Withdraws LP tokens from the MasterChef contract.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |
| `amount`           | The amount of asset to withdraw        |

### **3.3 Function Name: `harvest`**

#### Description: Claims accumulated rewards.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |

### **3.4 Function Name: `emergency_withdraw`**

#### Description: Allows for emergency withdrawal of LP tokens without rewards.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |

## Operator Function

### **3.5 Function Name: `add_lp_token`**

#### Description: Adds a new LP token pool to the MasterChef.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |
| `alloc_point`      | The allocation point of the asset      |

### **3.6 Function Name: `set_pool_alloc_point`**

#### Description: Updates the allocation point for an existing pool.

| **Parameter Name** | **Description**                        |
| ------------------ | -------------------------------------- |
| `asset_symbol`     | The symbol of the asset (e.g., `USDC`) |
| `alloc_point`      | The allocation point of the asset      |

## **4. Credits Function**

## Operator Function

### **4.1 Function Name: `top_up_credit_for_user`**

#### Description: Adds credits to a user's account.

| **Parameter Name** | **Description**                |
| ------------------ | ------------------------------ |
| `account_id`       | The account id of the user     |
| `amount`           | The amount of credit to top up |

## Admin Function

### **4.2 Function Name: `admin_change_credit_daily_amount`**

#### Description: Changes the daily credit allowance.

| **Parameter Name** | **Description**                |
| ------------------ | ------------------------------ |
| `amount`           | The amount of credit to top up |

### **4.3 Function Name: `admin_change_stake_credit_amount`**

#### Description: Changes the credit amount associated with staking.

| **Parameter Name** | **Description**                |
| ------------------ | ------------------------------ |
| `amount`           | The amount of credit to top up |

### **4.4 Function Name: `admin_change_unstake_credit_amount`**

#### Description: Changes the credit amount associated with unstaking.

| **Parameter Name** | **Description**                |
| ------------------ | ------------------------------ |
| `amount`           | The amount of credit to top up |

## **5. Common Function**

### **5.1 Function Name: `add_operator`**

#### Description: Adds a new operator address.

| **Parameter Name** | **Description**          |
| ------------------ | ------------------------ |
| `new_operator`     | The new operator address |

### **5.2 Function Name: `active_operator`**

#### Description: Activates a previously added operator.

| **Parameter Name** | **Description** |
| ------------------ | --------------- |
| `operator_id`      | The operator id |

### **5.3 Function Name: `inactive_operator`**

#### Description: Inactive an operator

| **Parameter Name** | **Description** |
| ------------------ | --------------- |
| `operator_id`      | The operator id |

### **5.4 Function Name: `remove_operator`**

#### Description: Remove operator

| **Parameter Name** | **Description**          |
| ------------------ | ------------------------ |
| `old_operator`     | The old operator address |

### **5.5 Function Name: `register_crosschain_asset_by_operator`**

#### Description: Register crosschain asset by operator

| **Parameter Name**       | **Description**            |
| ------------------------ | -------------------------- |
| `name`                   | The name of the asset      |
| `symbol`                 | The symbol of the asset    |
| `decimals`               | The decimals of the asset  |
| `issuing_blockchain_rid` | The issuing blockchain rid |
| `icon_url`               | The icon url of the asset  |
| `origin_blockchain_rid`  | The origin blockchain rid  |

---

This guide outlines the basic steps for setting up, configuring, and maintaining your Uniswap Swap Rell project. Modify parameters as necessary for your specific use case.

For further assistance, consult the Chromia documentation or contact support.
