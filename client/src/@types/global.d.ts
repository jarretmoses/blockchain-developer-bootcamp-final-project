import { ExternalProvider } from "@ethersproject/providers";

interface ConnectionInfo {
  chainId: number;
}

interface ProviderMessage {
  type: string;
  data: unknown;
}

type ExternalProviderExtended = {
  on(event: 'accountChanged', cb: (accounts: string[]) => void): void;
  on(event: 'chainChanged', cb: (chaindId: number) => void): void;
  on(event: 'connect', cb: (connectionInfo: ConnectionInfo) => void): void;
  on(event: 'disconnect', cb: () => void): void;
  on(event: 'message', cb: (message: ProviderMessage) => void): void;
}

declare global {
  interface Window {
    ethereum: ExternalProvider & ExternalProviderExtended;
  }
}

export {};
