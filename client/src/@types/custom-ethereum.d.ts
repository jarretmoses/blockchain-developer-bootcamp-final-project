// TODO: Get better types for abi
declare namespace AbiJson {
  interface AbiInput {
    inputs: Record<string, any>[];
    name: string;
    outputs: Record<string, any>[];
    stateMutability: string;
    type: string;
    constant: boolean;
  }

  interface AbiNetwork {
    events: Record<string, any>,
    links: Record<string, any>,
    address: string;
    transactionHash: string;
  }

  interface Abi {
    networks: {
      [key: number]: AbiNetwork
    }
    abi: AbiItem;
  }
}
