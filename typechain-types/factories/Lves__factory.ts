/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lves, LvesInterface } from "../Lves";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "LogEntriesRecieved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "createdAt",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
    ],
    name: "LogEntryAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "LogRemoveEntry",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "LogToggleActive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "LogUserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "LogUserArchived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "createdAt",
        type: "string",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
    ],
    name: "addEntry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "archiveUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserEntries",
    outputs: [
      {
        internalType: "string[]",
        name: "entries",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "createdAt",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeEntry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "userExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600260006101000a81548160ff02191690831515021790555034801561002b57600080fd5b5061004861003d61004d60201b60201c565b61005560201b60201c565b610119565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61218d80620001296000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80635ce308a7116100715780635ce308a714610109578063715018a6146101255780638da5cb5b1461012f578063eae6d4da1461014d578063f2fde38b1461016b578063ffdab90914610187576100a9565b80631910b1de146100ae57806322f3e2d4146100b857806329c68dc1146100d657806343e986f8146100e0578063455c928c146100ff575b600080fd5b6100b66101a3565b005b6100c0610323565b6040516100cd9190611c18565b60405180910390f35b6100de610336565b005b6100e8610424565b6040516100f6929190611be1565b60405180910390f35b610107610934565b005b610123600480360381019061011e91906118c9565b610aad565b005b61012d610c94565b005b610137610d1c565b6040516101449190611b58565b60405180910390f35b610155610d45565b6040516101629190611c18565b60405180910390f35b610185600480360381019061018091906118a0565b610f3d565b005b6101a1600480360381019061019c9190611935565b611035565b005b60011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16151514610239576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023090611cd3565b60405180910390fd5b60011515600260009054906101000a900460ff1615151461028f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028690611c33565b60405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055507fa1d316000903cd0221494fad03d4aa856818e4eec0c0225685345fc17cade05d336040516103199190611b58565b60405180910390a1565b600260009054906101000a900460ff1681565b61033e6115d2565b73ffffffffffffffffffffffffffffffffffffffff1661035c610d1c565b73ffffffffffffffffffffffffffffffffffffffff16146103b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a990611c93565b60405180910390fd5b600260009054906101000a900460ff1615600260006101000a81548160ff0219169083151502179055507f18802ec3bb219e322926fb5687624ee01e4584f8d1035ee917012a73d98156d6600260009054906101000a900460ff1660405161041a9190611c18565b60405180910390a1565b60608060011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161515146104bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b490611cd3565b60405180910390fd5b60011515600260009054906101000a900460ff16151514610513576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050a90611c33565b60405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052908160008201805480602002602001604051908101604052809291908181526020016000905b828210156106da57838290600052602060002090600202016040518060400160405290816000820180546105b790611ec3565b80601f01602080910402602001604051908101604052809291908181526020018280546105e390611ec3565b80156106305780601f1061060557610100808354040283529160200191610630565b820191906000526020600020905b81548152906001019060200180831161061357829003601f168201915b5050505050815260200160018201805461064990611ec3565b80601f016020809104026020016040519081016040528092919081815260200182805461067590611ec3565b80156106c25780601f10610697576101008083540402835291602001916106c2565b820191906000526020600020905b8154815290600101906020018083116106a557829003601f168201915b50505050508152505081526020019060010190610584565b5050505081526020016001820160009054906101000a900460ff161515151581525050905080600001515167ffffffffffffffff811115610744577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561077757816020015b60608152602001906001900390816107625790505b50925080600001515167ffffffffffffffff8111156107bf577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156107f257816020015b60608152602001906001900390816107dd5790505b50915060005b835181101561092e578160000151818151811061083e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160200151848281518110610883577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250816000015181815181106108cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160000151838281518110610910577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250808061092690611f26565b9150506107f8565b50509091565b60011515600260009054906101000a900460ff1615151461098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190611c33565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615610a1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1190611c73565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055507f187047b56eb20e7a0313254e37dc60b8c1a9d25707114d2caaaee420b2b7ec2333604051610aa39190611b58565b60405180910390a1565b60011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16151514610b43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3a90611cd3565b60405180910390fd5b60011515600260009054906101000a900460ff16151514610b99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9090611c33565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180604001604052808481526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000019080519060200190610c3592919061169e565b506020820151816001019080519060200190610c5292919061169e565b5050507f5352abb7458867679de401276d0996216efdc39c9542137e3096f33c2e39427c338383604051610c8893929190611b73565b60405180910390a15050565b610c9c6115d2565b73ffffffffffffffffffffffffffffffffffffffff16610cba610d1c565b73ffffffffffffffffffffffffffffffffffffffff1614610d10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0790611c93565b60405180910390fd5b610d1a60006115da565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052908160008201805480602002602001604051908101604052809291908181526020016000905b82821015610f0d5783829060005260206000209060020201604051806040016040529081600082018054610dea90611ec3565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1690611ec3565b8015610e635780601f10610e3857610100808354040283529160200191610e63565b820191906000526020600020905b815481529060010190602001808311610e4657829003601f168201915b50505050508152602001600182018054610e7c90611ec3565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea890611ec3565b8015610ef55780601f10610eca57610100808354040283529160200191610ef5565b820191906000526020600020905b815481529060010190602001808311610ed857829003601f168201915b50505050508152505081526020019060010190610db7565b5050505081526020016001820160009054906101000a900460ff1615151515815250509050806020015191505090565b610f456115d2565b73ffffffffffffffffffffffffffffffffffffffff16610f63610d1c565b73ffffffffffffffffffffffffffffffffffffffff1614610fb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb090611c93565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611029576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102090611c53565b60405180910390fd5b611032816115da565b50565b60011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161515146110cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c290611cd3565b60405180910390fd5b60011515600260009054906101000a900460ff16151514611121576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111890611c33565b60405180910390fd5b600081101580156111765750600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905081105b6111b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ac90611cb3565b60405180910390fd5b60008190505b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905061120c9190611e05565b8110156114e457600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016001826112629190611daf565b81548110611299577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018281548110611321577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600082018160000190805461134390611ec3565b61134e929190611724565b50600182018160010190805461136390611ec3565b61136e929190611724565b50905050600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016001826113c19190611daf565b815481106113f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018281548110611480577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160008201816000019080546114a290611ec3565b6114ad929190611724565b5060018201816001019080546114c290611ec3565b6114cd929190611724565b5090505080806114dc90611f26565b9150506111bb565b50600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061155d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60019003818190600052602060002090600202016000808201600061158291906117b1565b60018201600061159291906117b1565b505090557f54fc2f9c289bef633b8cbe5b81e18411d53035a20d7af06bca83aa1a52cd695533826040516115c7929190611bb8565b60405180910390a150565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546116aa90611ec3565b90600052602060002090601f0160209004810192826116cc5760008555611713565b82601f106116e557805160ff1916838001178555611713565b82800160010185558215611713579182015b828111156117125782518255916020019190600101906116f7565b5b50905061172091906117f1565b5090565b82805461173090611ec3565b90600052602060002090601f01602090048101928261175257600085556117a0565b82601f1061176357805485556117a0565b828001600101855582156117a057600052602060002091601f016020900482015b8281111561179f578254825591600101919060010190611784565b5b5090506117ad91906117f1565b5090565b5080546117bd90611ec3565b6000825580601f106117cf57506117ee565b601f0160209004906000526020600020908101906117ed91906117f1565b5b50565b5b8082111561180a5760008160009055506001016117f2565b5090565b600061182161181c84611d18565b611cf3565b90508281526020810184848401111561183957600080fd5b611844848285611e81565b509392505050565b60008135905061185b81612129565b92915050565b600082601f83011261187257600080fd5b813561188284826020860161180e565b91505092915050565b60008135905061189a81612140565b92915050565b6000602082840312156118b257600080fd5b60006118c08482850161184c565b91505092915050565b600080604083850312156118dc57600080fd5b600083013567ffffffffffffffff8111156118f657600080fd5b61190285828601611861565b925050602083013567ffffffffffffffff81111561191f57600080fd5b61192b85828601611861565b9150509250929050565b60006020828403121561194757600080fd5b60006119558482850161188b565b91505092915050565b600061196a8383611a05565b905092915050565b61197b81611e39565b82525050565b600061198c82611d59565b6119968185611d7c565b9350836020820285016119a885611d49565b8060005b858110156119e457848403895281516119c5858261195e565b94506119d083611d6f565b925060208a019950506001810190506119ac565b50829750879550505050505092915050565b6119ff81611e4b565b82525050565b6000611a1082611d64565b611a1a8185611d8d565b9350611a2a818560208601611e90565b611a3381611ffc565b840191505092915050565b6000611a4982611d64565b611a538185611d9e565b9350611a63818560208601611e90565b611a6c81611ffc565b840191505092915050565b6000611a84602083611d9e565b9150611a8f8261200d565b602082019050919050565b6000611aa7602683611d9e565b9150611ab282612036565b604082019050919050565b6000611aca601383611d9e565b9150611ad582612085565b602082019050919050565b6000611aed602083611d9e565b9150611af8826120ae565b602082019050919050565b6000611b10601483611d9e565b9150611b1b826120d7565b602082019050919050565b6000611b33601383611d9e565b9150611b3e82612100565b602082019050919050565b611b5281611e77565b82525050565b6000602082019050611b6d6000830184611972565b92915050565b6000606082019050611b886000830186611972565b8181036020830152611b9a8185611a3e565b90508181036040830152611bae8184611a3e565b9050949350505050565b6000604082019050611bcd6000830185611972565b611bda6020830184611b49565b9392505050565b60006040820190508181036000830152611bfb8185611981565b90508181036020830152611c0f8184611981565b90509392505050565b6000602082019050611c2d60008301846119f6565b92915050565b60006020820190508181036000830152611c4c81611a77565b9050919050565b60006020820190508181036000830152611c6c81611a9a565b9050919050565b60006020820190508181036000830152611c8c81611abd565b9050919050565b60006020820190508181036000830152611cac81611ae0565b9050919050565b60006020820190508181036000830152611ccc81611b03565b9050919050565b60006020820190508181036000830152611cec81611b26565b9050919050565b6000611cfd611d0e565b9050611d098282611ef5565b919050565b6000604051905090565b600067ffffffffffffffff821115611d3357611d32611fcd565b5b611d3c82611ffc565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611dba82611e77565b9150611dc583611e77565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611dfa57611df9611f6f565b5b828201905092915050565b6000611e1082611e77565b9150611e1b83611e77565b925082821015611e2e57611e2d611f6f565b5b828203905092915050565b6000611e4482611e57565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611eae578082015181840152602081019050611e93565b83811115611ebd576000848401525b50505050565b60006002820490506001821680611edb57607f821691505b60208210811415611eef57611eee611f9e565b5b50919050565b611efe82611ffc565b810181811067ffffffffffffffff82111715611f1d57611f1c611fcd565b5b80604052505050565b6000611f3182611e77565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611f6457611f63611f6f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f436f6e7472616374206973206e6f742063757272656e746c7920616374697665600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f5573657220616c72656164792065786973747300000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f456e74727920646f6573206e6f74206578697374000000000000000000000000600082015250565b7f55736572206d7573742062652061637469766500000000000000000000000000600082015250565b61213281611e39565b811461213d57600080fd5b50565b61214981611e77565b811461215457600080fd5b5056fea2646970667358221220fcc53101100158f6ed82b85965024879952aa50334780803bee68079d20d73d964736f6c63430008040033";

type LvesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LvesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lves__factory extends ContractFactory {
  constructor(...args: LvesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lves> {
    return super.deploy(overrides || {}) as Promise<Lves>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lves {
    return super.attach(address) as Lves;
  }
  connect(signer: Signer): Lves__factory {
    return super.connect(signer) as Lves__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LvesInterface {
    return new utils.Interface(_abi) as LvesInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lves {
    return new Contract(address, _abi, signerOrProvider) as Lves;
  }
}
