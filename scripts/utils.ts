import {
  aggregateSigners,
  AnyAuthDescriptor,
  AnyAuthDescriptorRegistration,
  Asset,
  AuthDescriptor,
  AuthDescriptorRegistration,
  AuthFlag,
  createConnection,
  createGenericEvmKeyStore,
  createInMemoryEvmKeyStore,
  createInMemoryFtKeyStore,
  createKeyStoreInteractor,
  createSingleSigAuthDescriptorRegistration,
  deriveAuthDescriptorId,
  FtKeyStore,
  MultiSig,
  registerAccount,
  registerAsset,
  registrationStrategy,
  SingleSig,
} from "@chromia/ft4";
import {
  createClient,
  encryption,
  formatter,
  gtv,
  gtx,
  IClient,
  SignatureProvider,
} from "postchain-client";
import { blockchainRid, blockchainRid2, nodeURL } from "./keypair";

export type User = {
  signatureProvider: SignatureProvider;
  //   authDescriptor: AuthDescriptor<SingleSig>;
  //   keyStore: FtKeyStore;
};

export function adminUser(): User {
  const keyPair = encryption.makeKeyPair(
    process.env.TEST_ADMIN_1_PRIV ||
      "DACA68A6085937879759F316D51310DFB5FB23006B1B5DFA63AE01308D17F67D"
  );

  const signatureProvider = gtx.newSignatureProvider(keyPair);
  //   const singleSigAuthDescriptor = createSingleSigAuthDescriptorRegistration(
  //     [AuthFlag.Account, AuthFlag.Transfer],
  //     signatureProvider.pubKey,
  //     null
  //   );
  return {
    signatureProvider,
    // authDescriptor: testAdFromRegistration(singleSigAuthDescriptor),
    // keyStore: createInMemoryFtKeyStore(keyPair),
  };
}
export async function createChromiaClient(nodeUrl?: string, iid = 0) {
  const url = nodeUrl || process.env.TEST_NODE_URL || "http://127.0.0.1:7740";
  return createClient({
    nodeUrlPool: url,
    blockchainIid: iid,
  });
}

export async function getNewAsset(
  client: IClient,
  name: string,
  symbol: string,
  decimals: number = 0,
  iconUrl: string = ""
): Promise<Asset> {
  const adminSignatureProvider = adminUser().signatureProvider;
  await registerAsset(
    client,
    adminSignatureProvider,
    name,
    symbol,
    decimals,
    iconUrl
  );
  const id = gtv.gtvHash([
    name,
    formatter.ensureBuffer(client.config.blockchainRid),
  ]);
  const asset = await createConnection(client).getAssetById(id);
  if (!asset) {
    throw new Error("Unable to fetch the new asset");
  }
  return asset;
}

export function getAccountIdFromAuthDescriptor(
  authDescriptor: AnyAuthDescriptor | AnyAuthDescriptorRegistration
): Buffer {
  const signers = aggregateSigners(authDescriptor);
  return gtv.gtvHash(
    signers.length === 1 ? signers[0] : signers.sort(Buffer.compare)
  );
}

export function testAdFromRegistration<T extends SingleSig | MultiSig>(
  reg: AuthDescriptorRegistration<T>
): AuthDescriptor<T> {
  return {
    ...reg,
    id: deriveAuthDescriptorId(reg as any),
    accountId: deriveAuthDescriptorId(reg as any),
    created: new Date(),
  };
}

export async function getClient(isSideChain?: boolean) {
  const blcRid =
    isSideChain == null || isSideChain == false
      ? blockchainRid
      : blockchainRid2;
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    blockchainRid: blcRid,
    // blockchainIid: 1,
  });

  return chromiaClient;
}

export async function getClientWithDirectionChain() {
  const chromiaClient = await createClient({
    nodeUrlPool: nodeURL,
    blockchainIid: 0
  });

  return chromiaClient;
}

export async function getSession(
  client: IClient,
  kp: { privKey: Buffer; pubKey: Buffer }
) {
  const store = createInMemoryFtKeyStore(kp);

  return await createKeyStoreInteractor(client, store).getSession(kp.pubKey);
}

export async function registerAccountFeeEVM(
  client: IClient,
  kp: { privKey: Buffer; pubKey: Buffer },
  asset: Asset
) {
  const store = createInMemoryEvmKeyStore(kp);

  await registerAccount(
    client,
    store,
    registrationStrategy.transferFee(
      asset,
      createSingleSigAuthDescriptorRegistration(["T"], store.id)
    )
  );
}

export async function registerAccountOpenEVM(
  client: IClient,
  kp: { privKey: Buffer; pubKey: Buffer }
) {
  const store = createInMemoryEvmKeyStore(kp);

  await registerAccount(
    client,
    store,
    registrationStrategy.open(
      createSingleSigAuthDescriptorRegistration(["A", "T"], store.id)
    )
  );
}

export async function registerAccountOpenFT(
  client: IClient,
  kp: { privKey: Buffer; pubKey: Buffer }
) {
  const store = createInMemoryFtKeyStore(kp);

  await registerAccount(
    client,
    store,
    registrationStrategy.open(
      createSingleSigAuthDescriptorRegistration(["A", "T"], store.id)
    )
  );
}

export async function getEvmSession(
  client: IClient,
  kp: { privKey: Buffer; pubKey: Buffer },
  accountId: Buffer
) {
  const store = createInMemoryEvmKeyStore(kp);
  return await createKeyStoreInteractor(client, store).getSession(accountId);
}

export function serializeBigInt(obj: any): string {
  return JSON.stringify(obj, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
}
