## Set up project (skip if cloning)

### Create a new directory for your project and navigate into it:

```
mkdir shushi-swap-rell
cd shushi-swap-rell
```

### Create new project with Rell:

```
chr create-rell-dapp shushi-swap-rell --template=plain
```

## Configure

### Generate an admin key pair that will be used for registering accounts and assets:

```
chr keygen --file .chromia/ft4-admin.keypair
```

### Configure FT4 in chromia.yml. Replace with your admin_pkey

### Install chr in for FT4 library

```
chr install
```

## Deploy token

make init_masterchef cid=1
make init_staking cid=1
make init_uniswap cid=1

# Testnet
chr tx --secret /Users/sotatek/Documents/rell/masterchef/.secret -a init_masterchef  --api-url https://node0.testnet-asgard.chromia.com:7740 -brid EF71D90A01B5A3743EB954BDC5AD0592E46891A0B26FE52169F4143D879B0DB0
chr tx --secret /Users/sotatek/Documents/rell/masterchef/.secret -a init_staking  --api-url https://node0.testnet-asgard.chromia.com:7740 -brid EF71D90A01B5A3743EB954BDC5AD0592E46891A0B26FE52169F4143D879B0DB0
chr tx --secret /Users/sotatek/Documents/rell/masterchef/.secret -a init_uniswap  --api-url https://node0.testnet-asgard.chromia.com:7740 -brid EF71D90A01B5A3743EB954BDC5AD0592E46891A0B26FE52169F4143D879B0DB0

# Create token in chain

make deploy_token name=USDC0 symbol=USDC0 decimal=6 icon=https://assets.coingecko.com/coins/images/6319/standard/usdc.png cid=0
make deploy_token name=ETH0 symbol=ETH0 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=0
make deploy_token name=BTC0 symbol=BTC0 decimal=18 icon=https://assets.coingecko.com/coins/images/1/standard/bitcoin.png cid=0  
make deploy_token name=POLYGON0 symbol=POL0 decimal=18 icon=https://assets.coingecko.com/coins/images/4713/standard/polygon.png cid=0
make deploy_token name=SOLANA0 symbol=SOL0 decimal=18 icon=https://assets.coingecko.com/coins/images/4128/standard/solana.png cid=0
make deploy_token name=XRP0 symbol=XRP0 decimal=18 icon=https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png cid=0

make deploy_token name=USDC1 symbol=USDC1 decimal=6 icon=https://assets.coingecko.com/coins/images/6319/standard/usdc.png cid=2
make deploy_token name=ETH1 symbol=ETH1 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=2
make deploy_token name=BTC1 symbol=BTC1 decimal=18 icon=https://assets.coingecko.com/coins/images/1/standard/bitcoin.png cid=2  
make deploy_token name=POLYGON1 symbol=POL1 decimal=18 icon=https://assets.coingecko.com/coins/images/4713/standard/polygon.png cid=2
make deploy_token name=SOLANA1 symbol=SOL1 decimal=18 icon=https://assets.coingecko.com/coins/images/4128/standard/solana.png cid=2
make deploy_token name=XRP1 symbol=XRP1 decimal=18 icon=https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png cid=2

make deploy_token name=bUSDC symbol=bUSDC decimal=6 icon=https://assets.coingecko.com/coins/images/6319/standard/usdc.png cid=1
make deploy_token name=Color symbol=Color decimal=18 icon=https://assets.coingecko.com/coins/images/50439/standard/K_2nunVb_400x400-removebg-preview.png?1727765376 cid=1
make deploy_token name=USDC symbol=USDC decimal=6 icon=https://assets.coingecko.com/coins/images/6319/standard/usdc.png cid=1
make deploy_token name=ETH symbol=ETH decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=BTC symbol=BTC decimal=18 icon=https://assets.coingecko.com/coins/images/1/standard/bitcoin.png cid=1  
make deploy_token name=POLYGON symbol=POL decimal=18 icon=https://assets.coingecko.com/coins/images/4713/standard/polygon.png cid=1
make deploy_token name=SOLANA symbol=SOL decimal=18 icon=https://assets.coingecko.com/coins/images/4128/standard/solana.png cid=1
make deploy_token name=XRP symbol=XRP decimal=18 icon=https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png cid=1
make deploy_token name=Dogecoin symbol=DOGE decimal=18 icon=https://assets.coingecko.com/coins/images/5/standard/dogecoin.png cid=1  
make deploy_token name=Toncoin symbol=TON decimal=18 icon=https://assets.coingecko.com/coins/images/17980/standard/photo_2024-09-10_17.09.00.jpeg cid=1
make deploy_token name=Cardano symbol=ADA decimal=18 icon=https://assets.coingecko.com/coins/images/975/standard/cardano.png cid=1

make deploy_token name=MinhDA symbol=MinhDA decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=MinhDB symbol=MinhDB decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=MinhDC symbol=MinhDC decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=MinhDD symbol=MinhDD decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=MinhDE symbol=MinhDE decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1

make deploy_token name=HOA1 symbol=HOA1 decimal=6 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=HOA2 symbol=HOA2 decimal=6 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=HOA3 symbol=HOA3 decimal=6 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=HOAUSDC symbol=HOAUSDC decimal=6 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1

make deploy_token name=HANG1 symbol=HANG1 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=HANG2 symbol=HANG2 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=HANG3 symbol=HANG3 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=HANG4 symbol=HANG4 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=HANG5 symbol=HANG5 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1

make deploy_token name=NAM1 symbol=NAM1 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NAM2 symbol=NAM2 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NAM3 symbol=NAM3 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NAMUSDC symbol=NAMUSDC decimal=6 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1

make deploy_token name=NGAN1 symbol=NGAN1 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NGAN2 symbol=NGAN2 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NGAN3 symbol=NGAN3 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NGAN4 symbol=NGAN4 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NGAN5 symbol=NGAN5 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NGAN6 symbol=NGAN6 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1

make deploy_token name=NHU1 symbol=NHU1 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NHU2 symbol=NHU2 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NHU3 symbol=NHU3 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NHU4 symbol=NHU4 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NHU5 symbol=NHU5 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NHU6 symbol=NHU6 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NHU7 symbol=NHU7 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=NHU8 symbol=NHU8 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1

make deploy_token name=QUAN1 symbol=QUAN1 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=QUAN2 symbol=QUAN2 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=QUAN3 symbol=QUAN3 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1

make deploy_token name=M1 symbol=M1 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=M2 symbol=M2 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=M3 symbol=M3 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=M4 symbol=M4 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1
make deploy_token name=M5 symbol=M5 decimal=18 icon=https://assets.coingecko.com/coins/images/279/standard/ethereum.png cid=1

## AddLiqudity

make add_liquidity token_a=USDC token_b=ETH amount_a=2400000000L amount_b=1000000000000000000L to_user=02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06 cid=1

make add_liquidity token_a=BTC token_b=ETH amount_a=2400000000000000000000L amount_b=65000000000000000000000L to_user=02697A349D92481F231D5154975F951591EB60A6D386904AD7B26429CBA39B0E06 cid=1

# Add LP to masterchef

CLP:MinhDB+MinhDA
CLP:NAM3+NAMUSDC
CLP:NAMUSDC+NAM1
CLP:NAMUSDC+NAM2
CLP:NGAN3+USDC
CLP:USDC+HOA1

make add_lp_masterchef lp_name="CLP:MinhDB+MinhDA" alloc_point=2000 cid=1  
make add_lp_masterchef lp_name="CLP:NAM3+NAMUSDC" alloc_point=1000 cid=1
make add_lp_masterchef lp_name="CLP:NAMUSDC+NAM1" alloc_point=3000 cid=1
make add_lp_masterchef lp_name="CLP:NAMUSDC+NAM2" alloc_point=2000 cid=1
make add_lp_masterchef lp_name="CLP:NGAN3+USDC" alloc_point=2000 cid=1
make add_lp_masterchef lp_name="CLP:QUAN3+QUAN1" alloc_point=2000 cid=1

make add_lp_masterchef lp_name="CLP:HANG3+HANG1" alloc_point=2000 cid=1
make add_lp_masterchef lp_name="CLP:HANG2+HANG1" alloc_point=1000 cid=1
make add_lp_masterchef lp_name="CLP:HANG2+HANG3" alloc_point=2000 cid=1

# Deposit to masterchef

make deposit_masterchef lp_name="ColorPool LP Token: USDC ETH" amount=100000000L nonce=2L

# Add mapping token

make add_mapping_token symbol=USDC cid=1
make add_mapping_token symbol=ETH cid=1
make add_mapping_token symbol=BTC cid=1
make add_mapping_token symbol=POL cid=1
make add_mapping_token symbol=SOL cid=1
make add_mapping_token symbol=XRP cid=1
make add_mapping_token symbol=DOGE cid=1
make add_mapping_token symbol=TON cid=1
make add_mapping_token symbol=ADA cid=1

make add_mapping_token symbol=NHU1 cid=1
make add_mapping_token symbol=NHU2 cid=1
make add_mapping_token symbol=NHU3 cid=1
make add_mapping_token symbol=NHU4 cid=1
make add_mapping_token symbol=NHU5 cid=1
make add_mapping_token symbol=NHU6 cid=1
make add_mapping_token symbol=NHU7 cid=1
make add_mapping_token symbol=NHU8 cid=1

make add_mapping_token symbol=HOA1 cid=1
make add_mapping_token symbol=HOA2 cid=1

# Set pool alloc point

make set_pool_alloc_point symbol="CLP:NAM3+NAMUSDC" alloc_point=0 cid=1
