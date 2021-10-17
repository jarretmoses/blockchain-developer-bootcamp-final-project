import { ExternalProvider } from "@ethersproject/providers";

type ExternalProviderExtended = {
  on(event: 'accountChanged', cb: (accounts: string[]) => void): void;
  off(event: 'accountChanged'): void;
  on(event: 'chainChanged', cb: (chaindId: number) => void): void;
  off(event: 'chainChanged'): void;
}

declare global {
  interface Window {
    ethereum: ExternalProvider & ExternalProviderExtended;
  }
}

export {};
