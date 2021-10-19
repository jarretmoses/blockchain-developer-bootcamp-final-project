import { render } from '@testing-library/react';
import { ethers } from 'ethers';
import { LvesContext, LvesContextProps } from '../../context/lves.context';
import { LvesView } from '../lves.view';

jest.mock('ethers');

describe('<LvesView />', () => {
  let contextProps: LvesContextProps;

  beforeEach(() => {
    contextProps = {
      isCorrectChain: jest.fn(() => true),
      chainId: undefined,
      setChainId: () => {},
      setActiveAccount: () => {},
      activeAccount: undefined,
      userExists: false,
      setUserExists: () => {},
      // @ts-ignore
      wallet: {
        getSigner: jest.fn()
      } as ethers.providers.Web3Provider
    }
  })

  it('should render', () => {
    const Component = render(
      <LvesContext.Provider value={contextProps}>
        <LvesView />
      </LvesContext.Provider>
    );


    Component.debug();
  })
})
