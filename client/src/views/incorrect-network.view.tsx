interface Props {
  requiredChainId: number;
};

const getNeededChainName = (chainId: number) => (
  {
    1337: 'Localhost:8545',
    3: 'Rinkeby'
  }[chainId]
);

export const IncorrectNetworkView = ({requiredChainId}: Props) => (
  <header className='App-header'>
    Please connect your metamask wallet to {getNeededChainName(requiredChainId)}
  </header>
)
