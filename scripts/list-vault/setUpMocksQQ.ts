import { seedChain, Dapp } from "./seedChainQQ";

import { promisify } from "util";
import * as exec from "child_process";

async function main() {
  //1 quantumquest
  const quantumQuest: Dapp = {
    name: "Quantum Quest",
    description:
      "Embark on a multidimensional puzzle adventure where players explore quantum realms. Solve puzzles, battle quantum entities, and upgrade your gear. The game is connected to four blockchain chains, ensuring a secure and transparent gaming experience.",
    launch_url: "https://quantumquest.game/launch",
    genre: "Multidimensional Puzzle Adventure",
  };

  await seedChain(
    "298F40052C8B1F6157AE82C927CEF9F77DEA89C02FA1766B420A2986279FB3B5",
    "Eldritch_Enigma",
    quantumQuest
  );

  // var temprid = "123";
  const name =  "Ether_Warden"
  // const {stdout, stderr} = await promisify(exec.exec)(`chr deploy create -d originalnet --blockchain "${name}" --secret .config -s rell/chromia_test_dapps_empty_qq.yml -y | sed -n -e \'s/^.*${name}: x//p\' | tr -d \'"\'`)
  // // exec(`chr deploy create -d originalnet --blockchain "${name}" --secret .config -s rell/chromia_test_dapps_empty_qq.yml -y | sed -n -e \'s/^.*${name}: x//p\' | tr -d \'"\'`,
  // //       (error, stdout, stderr) => {
  // //           console.log(stdout);
  // //           temprid = stdout;
  // //           console.log(stderr);
  // //           if (error !== null) {
  // //               console.log(`exec error: ${error}`);
  // //           }
  // //       });

  // // console.log(temprid)

  // console.log(stdout)
  // console.log(stderr)

  await seedChain(
    "3231B58BBEC3EE305319B4EB8DBDF15B5B7B35815B2A9EB537B0C5EA9339E657",
      name,
      quantumQuest
    );

  await seedChain(
    "8E73206C1783E6BD2B7BBACC99C3050382EFEDFB1A1CA28F6802EBABE9EC155D",
    "Rune_Nebula_Forge",
    quantumQuest
  );
  await seedChain(
    "3488BAB7F5000009BDBA24A9C2F9DE3B2198A5AFA860A5EF4ABBDAD2D1C32233",
    "HyperLink_Scepter",
    quantumQuest
  );

  //2 ThisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace
  const thisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace: Dapp = {
    name: "ThisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace",
    description:
      "Enter the arena of decentralized combat. Crypto Clash is a strategic battle game where players assemble unique blockchain-powered warriors. The game integrates five blockchain chains, enhancing security and decentralization.",
    launch_url: "https://ThisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace.game/launch",
    genre: "Decentralized Strategy Battler",
  };
  await seedChain(
    "7D9D34BD6FD555F3D4669A4CE1F42194ECF4B7AF053C22EE95B5921B637D7D83",
    "Spartan_Sanctum",
    thisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace
  );
  await seedChain(
    "EB0683B37BC18CA505FE86F87AECAC71BD846DEBC13743092F749D73CAD80310",
    "GlitchGladiatorStrongholdOneGlitchGladiatorStrongholdTwoGlitch",
    thisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace
  );
  await seedChain(
    "6A0EB22DE47E5ED481278B4D88BC2073DB3A4A1232D9E33C259EDE2D6B537BE8",
    "Etherial_Enclave",
    thisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace
  );
  await seedChain(
    "1B6A9782F2364516B616E3A611BD43911A9CF666A4C4AA55DD94836CCD005818",
    "PolyPulse_Fury",
    thisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace
  );
  await seedChain(
    "3C332314030235BE39DA63AF822C0FE8EEAF4C84933AAE55AC0599C28ECC5DDC",
    "Nova_Nexus_Citadel",
    thisIsABattleGameMadeOnEarthHowDoIKnowBecauseThereIsNoSpace
  );

  //3 Pixel Pandemonium
  const pixelPandemonium: Dapp = {
    name: "Pixel Pandemonium",
    description:
      "Immerse yourself in the pixelated chaos of Pixel Pandemonium. This blockchain game features retro-inspired challenges and mind-bending puzzles. With six blockchain chains, it ensures a tamper-proof and entertaining gaming experience.",
    launch_url: "https://pixelpandemonium.game/launch",
    genre: "Retro-Inspired Puzzle Adventure",
  };
  await seedChain(
    "1337A8A6D91DB1C3080795A94BFD1AB0239B8EA333B0076F9C690CAFADBAFBE5",
    "Rune_Maze_Haven",
    pixelPandemonium
  );
  await seedChain(
    "20D40A507E43FE14616EEBF15DD590EEAF01B01071DDE48F88915584D74D1545",
    "Pixelated_Portal_Hollow",
    pixelPandemonium
  );
  await seedChain(
    "241BDC69C2BDF3EE173ED34176998AC0A734BF42CE0329FB8ABFAE6F1E4E4643",
    "Ether_Grid_Enigma",
    pixelPandemonium
  );
  await seedChain(
    "E3D577D358E2E32D00144259CE7F88D693CD2EAF3F029438C91B58B2A2A9B615",
    "Quantum_Quirk_Quarters",
    pixelPandemonium
  );
  await seedChain(
    "44DE2E6E62184049E1E99491C40FC5D910BDD4EE3189C7CCBEBC12B92E4D95D3",
    "Chromatic_Chaos_Citadel",
    pixelPandemonium
  );
  await seedChain(
    "DB8B561986FB43FE097D4ABB060038FC6AB84B35C94BE27DBD172B02AAC99F0A",
    "Eldritch_Nebula_Forge",
    pixelPandemonium
  );

  //4 Digi Dynasty
  const digiDynasty: Dapp = {
    name: "Digi Dynasty",
    description:
      "Build your digital empire in DigiDynasty. This blockchain strategy game combines resource management and blockchain technology across seven chains, providing a secure and engaging gaming environment.",
    launch_url: "https://digidynasty.game/launch",
    genre: "Blockchain-Based Strategy Empire Builder",
  };
  await seedChain(
    "43D8CD5EE6E426E0227C9288EC060051E301B720F1D4C3E62F8EE3B998947620",
    "Cryptic_Citadel_Dominion",
    digiDynasty
  );
  await seedChain(
    "B72F828CB2C385066C93DFEF3BFAF9060C54DF8CE1E9765C534EF6784FF3DF6D",
    "Ether_Empire_Enclave",
    digiDynasty
  );
  await seedChain(
    "7D40FD43535B732236469E1DE406871C99092357D691B77535B0D5EB7C1286C5",
    "Rune_Dynasty_Domain_Fortress",
    digiDynasty
  );
  await seedChain(
    "B9239487D86EAB28C1C96BFBFD35A6D7BFB987E03D5FA92A52F83A1988A1E3D1",
    "Quantum_Quarters_Stronghold",
    digiDynasty
  );
  await seedChain(
    "3FAD9EBB77DA236CC9B22AA088ED07EA1198F083BB04A7D805532190A75A05A7",
    "Pixel_Palace_Province",
    digiDynasty
  );
  await seedChain(
    "1D9CC09EC6F47F17A5740E3A408AD79902863AC5614A506288177EEC2948DA5B",
    "DynaDome_Citadel",
    digiDynasty
  );
  await seedChain(
    "53D029AFB28FEEDDAFDD43E029E68142FA87A9E19A4E616A573B5A0F5401FE8C",
    "Nova_Nexus_Fief",
    digiDynasty
  );

  // 5 Ether Epic
  const etherEpic: Dapp = {
    name: "Ether Epic",
    description:
      "Dive into the epic world of EtherEpic, a blockchain RPG that seamlessly integrates eight blockchain chains. Embark on quests, defeat mythical creatures, and level up your character in this decentralized gaming universe.",
    launch_url: "https://etherepic.game/launch",
    genre: "Blockchain RPG Adventure",
  };
  await seedChain(
    "584069BCEB374920920DE9882F6F0A020CE98D45674CAFCBCDFD92CBE03E8F40",
    "Etherial_Saga_Realm",
    etherEpic
  );
  await seedChain(
    "EE1F0FBB02E285854CCA1BC777EB0240DF58D25D607257E864191D66B4A8207E",
    "Cryptic_Cavern_Keep",
    etherEpic
  );
  await seedChain(
    "62AC376BF4B6E8FC282B593F240F3614FC1D8DBCA472BA1A3F0D24B48DDDA27F",
    "Rune_Bane_Lair_Stronghold",
    etherEpic
  );
  await seedChain(
    "A883E2A0EDD6DFDBF4A6A5493D34C07CE4F576FA735275CABC65321868AD73CA",
    "Quantum_Quandary_Citadel",
    etherEpic
  );

  await seedChain(
    "EB74077198FB0AF053A73F8CDAAC7A20495C72C9AED62DC10632C380B3293BAD",
    "Pixelated_Portal_Plaza",
    etherEpic
  );
  await seedChain(
    "87FC429109423AA90592D9D64CDAAD3256C56EF2663E75EA300D60FDB1CC119A",
    "Nova_Nebula_Fief",
    etherEpic
  );
  await seedChain(
    "E0EB1D518AD61001294552033A7677AE664D836C40C533CC8FA17926998644B5",
    "Ether_Enigma_Enclave",
    etherEpic
  );
  await seedChain(
    "6400B1B544D1466ECFACC5DE0C9A313FA4C2F5533288E03E73906B9A14C1F57A",
    "Dynastic_Dungeon_Domain",
    etherEpic
  );

  // 6 Chain Crafters
  const chainCrafters: Dapp = {
    name: "Chain Crafters",
    description:
      "Unleash your creativity in ChainCrafters, a blockchain-based crafting and building game. With nine blockchain chains, players can securely trade resources and showcase their masterpieces in a decentralized virtual world.",
    launch_url: "https://chaincrafters.game/launch",
    genre: "Blockchain-Based Crafting and Building",
  };
  await seedChain(
    "837132CF0EFFD1C619C8FE904DC29F2FC8A0E52FFB578C4C9F22108C869ABE3C",
    "Eldritch_Forge_Fortress",
    chainCrafters
  );
  await seedChain(
    "FDF6225EE274D690BDF8B2064100D85344F00A5982CA3121E2D77D2CF3377B05",
    "Cryptic_Craftsman_Guild",
    chainCrafters
  );
  await seedChain(
    "520347C62D0B4A9657F2DD28A45C28FA803D38FFD4D56FEF10390996B947BB8E",
    "Rune_Built_Bazaar_Stronghold",
    chainCrafters
  );
  await seedChain(
    "0FB41B3F0F9290612FE3491E96CF8CA237BF8F5A7AF74DB7B860581BD7848645",
    "Quantum_Quilt_Quarters",
    chainCrafters
  );
  await seedChain(
    "94003372371EA4237CB4EA2CEA15B7CE66663472C64341BE2CA78917F436E726",
    "Pixelated_Plaza_Promenade",
    chainCrafters
  );
  await seedChain(
    "45665E120000018D631A7998BEC88A1BB81C58BC1C26BEDD9EC43637462BA2BF",
    "Nova_Nexus_Nook",
    chainCrafters
  );
  await seedChain(
    "292FE0136D8BC83BEAB741E769D188BD1E2477318C8348DB5560621C62A24200",
    "Dynastic_Design_District",
    chainCrafters
  );
  await seedChain(
    "6283C68024B8E0849CC000A7D97D90E1CB73B52B5422DB85DAA23FB10984B125",
    "Chained_Chisel_Citadel",
    chainCrafters
  );
  await seedChain(
    "913D67F03EDF39EAA684CD9D1AEE41FE4CDED661700B514A5CE6FEFE15C9DE4E",
    "Enchanted_Edifice_Enclave",
    chainCrafters
  );

  //7 Pixel Pirate
  const pixelPirate: Dapp = {
    name: "Pixel Pirate",
    description:
      "Sail the blockchain seas in PixelPirate, a decentralized pirate adventure. This game integrates ten blockchain chains, ensuring fair distribution of loot and a secure environment for all virtual pirates.",
    launch_url: "https://pixelpirateyaaaaar.game/launch",
    genre: "Decentralized Pirate Adventure",
  };
  await seedChain(
    "9240B7D369B64840E33039D5C70C74420C937E72BF16FF257055F7C637F56B3C",
    "Eldritch Buccaneer Bay",
    pixelPirate
  );
  await seedChain(
    "646DAB626D188CF500997B4A659AA63B4678952B0963CBD02AF40D46B2AF8584",
    "Cryptic Corsair Cove",
    pixelPirate
  );
  await seedChain(
    "EA5AECA7071B0FCC1DE1411D02661256974BE50A7CB465150C5D929355EFDDC0",
    "Rune Bound Buccaneer Isle",
    pixelPirate
  );
  await seedChain(
    "31F5CA5C28B4479DE8F3AE8E2D598DF6003BBAF5EFB6C8DAD91BAE59C83E4CFF",
    "Quantum Quasar Quay",
    pixelPirate
  );
  await seedChain(
    "0C3F4717EAA5394599AB052C28C3BA262348458FC2E26EE17C10AB67EB2F0977",
    "Pixelated Plunder Port",
    pixelPirate
  );
  await seedChain(
    "24DAA1603F83A313B79B9F8746683FAE7C3E805782472848AC39D6E6B27D1D25",
    "Nova Nautical Nexus",
    pixelPirate
  );
  await seedChain(
    "C7E87684516990E5F9E78F0E60B461ACBE2BF3EF89C6000535FACA65076C8BAA",
    "Dynastic Dread Docks",
    pixelPirate
  );
  await seedChain(
    "A72DD855FE804A104F7A8DF710BEC21B62CF2114C61C5895FBD1C25EBA998551",
    "Chained Cove Harbor",
    pixelPirate
  );
  await seedChain(
    "4D02F6773F2720119FF62842F546F710F1A890389F678B606F639E5208788E85",
    "Enchanted Expedition Expanse",
    pixelPirate
  );
  await seedChain(
    "BE169526347801FE352E561431867CF60A8DF7B779CE88B7BA8B5FA3A635E69F",
    "Pirate Pixel Point",
    pixelPirate
  );

  //8 Ether Exoplanet
  const etherExoplanet: Dapp = {
    name: "Ether Exoplanet",
    description:
      "Explore distant planets in EtherExoplanet, a blockchain-based space exploration game. With eleven blockchain chains, this game ensures secure intergalactic trade and a decentralized gaming experience.",
    launch_url: "https://etherexoplanet.game/launch",
    genre: "Space Exploration Strategy",
  };
  await seedChain(
    "E0FF7CC6100A3874ACA295C1AD3C4F98302433FB805DB4277C4595B2AD14B47F",
    "Cryptic Cosmos Cluster",
    etherExoplanet
  );
  await seedChain(
    "CA65FD8E83EB819FFBECC6841E0302C72EF97F16210187C1F8D37E11EBEEF32A",
    "Etherial Exploration Expanse",
    etherExoplanet
  );
  await seedChain(
    "7F86E9A1E9A015D1DFB4F89AEF3BBA8D9329F356EB01BC17AFF0F6B52E180006",
    "Rune Bound Black Hole Haven",
    etherExoplanet
  );
  await seedChain(
    "7F6020EDA305F3DC43E9B39156B4291231FFDC1411BF1104BBD2875435E09F5E",
    "Quantum Quasar Quadrant",
    etherExoplanet
  );
  await seedChain(
    "A13746A5BB82C3ADF720CE305F302A636F61EE3BD2633307D44566E0D072506D",
    "Pixelated Planetary Plaza",
    etherExoplanet
  );
  await seedChain(
    "294013C9B51430A9364B91C06D8146B33A5A90DEA39C96C0BB2F30CB60AFA7AA",
    "Nebula Nexus Nook",
    etherExoplanet
  );
  await seedChain(
    "59DC2C10BE36AAF4038355F3AE8EC70409C03031530306B297DD1C31A371EF3E",
    "Dynastic Distant Domain",
    etherExoplanet
  );
  await seedChain(
    "B4A2CF535EEE3D5E1B3596EB70D910E2D388D9B476B47D03AAD86534CDAC67A0",
    "Chained Celestial Cove",
    etherExoplanet
  );
  await seedChain(
    "6CCAFA1BA816EBADA1659F6C22FA853E03E10DCC11917571D082C64659783AAF",
    "Enchanted Expanse Exploration",
    etherExoplanet
  );
  await seedChain(
    "CACAD3EFA1C03D4CB0DADCE5CB9AC170B6B57D824B77063741316B985EC8A56B",
    "Astrological Arcade Asteroid",
    etherExoplanet
  );
  await seedChain(
    "1AAE6B1C427598B1E9415C7D171350CBBFAAFF9FE519B60C5AD771DCD39B80C8",
    "Stellar Stream Star",
    etherExoplanet
  );

  // 9 Quantum Qube
  const quantumQube: Dapp = {
    name: "Quantum Qube",
    description:
      "Enter the quantum realm in QuantumQube, a mind-bending puzzle game. With twelve blockchain chains, players can securely manipulate quantum states to solve complex puzzles in a decentralized gaming environment.",
    launch_url: "https://qqube.game/launch",
    genre: "Mind-Bending Puzzle Adventure",
  };
  await seedChain(
    "C0A9011A7B233F2721BF5E31940A6C36CDBD1D3C42ECD8AD42FD9AB78E1BFB28",
    "Etherial Entangle Enclave",
    quantumQube
  );
  await seedChain(
    "0B1DA1967A8D7C30F73E18C934E82CE00B0A3039DDAE5C83A5F4E2884D37D7D9",
    "Cryptic Cube Citadel",
    quantumQube
  );
  await seedChain(
    "647BB588633102E04B5DCF67F576C9A843987FA40BDD70FE74E7848071B9B511",
    "Rune Bound Brainteaser Bastion",
    quantumQube
  );
  await seedChain(
    "23ABCD08D99DF61AF47B0AD2DF7C52DF7315A1BB08B49B5672405035120CDAC9",
    "Quantum Quasar Quarters",
    quantumQube
  );
  await seedChain(
    "880255F021B6901A66A5B619F8150E34E7AED1B0F06A98EE6AC741AACA0B2A53",
    "Pixelated Puzzle Promenade",
    quantumQube
  );
  await seedChain(
    "E8FE477765982A36E9CCCAB616787EA4C9D56921F249844767BDF14B55E6BD1B",
    "Nebula Nexus Nook",
    quantumQube
  );
  await seedChain(
    "A4E9A453214616E788E1C6D0AAC5DCE8552A90AA09B3910C06B4DBC47BC7AECE",
    "Dynastic Dimension Domain",
    quantumQube
  );
  await seedChain(
    "D8A0CF6F228EBC8B39027AEFF99D4D91571C51908ED24A6DFFBF2659600B8F78",
    "Chained Challenge Citadel",
    quantumQube
  );
  await seedChain(
    "B0D29E82553AB72759870F9815337674A2184A1A0705A1073C92091B58278EDA",
    "Enchanted Enclave Exploration",
    quantumQube
  );
  await seedChain(
    "289342EDC170DC7653043CF461C1DC866D0B58281BEA25CF4D322EE102617F62",
    "Quantum Quandary Quarters",
    quantumQube
  );
  await seedChain(
    "86E2F3015F85EAF95AEA4080786751FF1FB4E3F9C2100A8B5F51F9C6463FBE61",
    "Pixelated Paradox Plaza",
    quantumQube
  );
  await seedChain(
    "882A64B3C4993E30EB34D0B79E2BFDEA593723527B3102602E97AB872ED2705A",
    "Eldritch Enigma Enclave",
    quantumQube
  );
}
main()
  .then(() => process.exit())
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
