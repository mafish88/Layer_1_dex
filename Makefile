
init_masterchef:
	@current_folder=$$(pwd); \
	chr tx --secret $$current_folder/.secret -a init_masterchef --cid=${cid}; 


init_staking:
	@current_folder=$$(pwd); \
	chr tx --secret $$current_folder/.secret -a init_staking --cid=${cid}; 


init_uniswap:
	@current_folder=$$(pwd); \
	chr tx --secret $$current_folder/.secret -a init_uniswap --cid=${cid}; 

deploy_token:
	@current_folder=$$(pwd); \
	chr tx --secret $$current_folder/.secret -a ft4.admin.register_asset \
		${name} \
		${symbol} \
		${decimal} \
		${icon} --cid=${cid};	

mint_token:
	@current_folder=$$(pwd); \
	chr tx --secret $$current_folder/.secret -a ft4.admin.mint \
		${SENDER_ACCOUNT_ID} \
		${ASSET_ID} \
		${AMOUNT_WITH_DECIMALS} --cid=${cid};	

add_liquidity:
	@current_folder=$$(pwd); \
	chr tx \
		--secret $$current_folder/.secret \
		-a --ft-auth \
		add_liquidity \
			${token_a} \
			${token_b} \
			${amount_a} \
			${amount_b} \
			${amount_a} \
			${amount_b} \
			1000000000000000000L \
			${to_user} --cid=${cid}; 

add_lp_masterchef:
	@current_folder=$$(pwd); \
	chr tx \
		--secret $$current_folder/.secret \
		-a --ft-auth \
		add_lp_token \
			"${lp_name}" \
			${alloc_point} --cid=${cid};

swap_exact_tokens_for_tokens:
	@current_folder=$$(pwd); \
	chr tx \
		--secret $$current_folder/.secret \
		-a --ft-auth \
		swap_exact_tokens_for_tokens \
			1000000L \
			0L \
			'["USDC", "ETH"]' \
			${to_user} \
			1000000000000000000L --cid=${cid}; 


deposit_masterchef:
	@current_folder=$$(pwd); \
	chr tx \
		--secret $$current_folder/.secret \
		-a --ft-auth \
		deposit \
			"${lp_name}" \
			${amount} --cid=${cid};

add_mapping_token:
	@current_folder=$$(pwd); \
	chr tx \
		--secret $$current_folder/.secret \
		-a --ft-auth \
		add_staking_pair \
			"${symbol}" \
			--cid=${cid};

set_pool_alloc_point:
	@current_folder=$$(pwd); \
	chr tx \
		--secret $$current_folder/.secret \
		-a --ft-auth \
		set_pool_alloc_point \
			"${symbol}" \
			${alloc_point} \
			--cid=${cid};

		

