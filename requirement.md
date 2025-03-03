# Requirements
## DEX
- ColorPool is a cloned of Uniswap@v2.
- Solidity source:
    - [Uniswap V2 periphery](https://github.com/Uniswap/v2-periphery)
    - [Uniswap V2 Core](https://github.com/Uniswap/v2-core)
## Farming & Staking
### Terms
- Native dex token (COLOR) is issued by the DEX.

**Note:** all the settings in this file is temporary for testing purposes

### Farming
- Deposit LP token to get COLOR
- Model: Sushi MasterChef 
- Solidity source: [https://github.com/sushiswap/masterchef](https://github.com/sushiswap/masterchef)
- COLOR per block: 100
- Bonus multiplier: x10
- Pools:

| Pool ID | LP TOKEN  | Pool Weight |
|----|-----------|--------|
| 1  | CHR-USD   | 10     |
| 2  | CHR-COLOR | 20     |


### Staking
Stake COLOR to get more COLOR

- Model: [SushiBar](https://docs.sushi.com/what-is-sushi#4-the-xsushi-token)
- Solidity source: [https://github.com/1coinswap/core/blob/master/contracts/SushiBar.sol](https://github.com/1coinswap/core/blob/master/contracts/SushiBar.sol)

- COLOR reward is get from the trading fee
- Conversion period is every hour
    - Get the fee from the dex fee address
    - Sell it to get COLOR
    - Send COLOR to the staking contract
