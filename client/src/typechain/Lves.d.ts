/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LvesInterface extends ethers.utils.Interface {
  functions: {
    "addEntry(string,string)": FunctionFragment;
    "addUser()": FunctionFragment;
    "archiveUser()": FunctionFragment;
    "getUserEntries()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeEntry(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userExists()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addEntry",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "addUser", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "archiveUser",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserEntries",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeEntry",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userExists",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addEntry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "archiveUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserEntries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeEntry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userExists", data: BytesLike): Result;

  events: {
    "LogEntriesRecieved(address)": EventFragment;
    "LogEntryAdded(address,string,string)": EventFragment;
    "LogRemoveEntry(address,uint256)": EventFragment;
    "LogUserAdded(address)": EventFragment;
    "LogUserArchived(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogEntriesRecieved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogEntryAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogRemoveEntry"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUserArchived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type LogEntriesRecievedEvent = TypedEvent<
  [string] & { userAddress: string }
>;

export type LogEntryAddedEvent = TypedEvent<
  [string, string, string] & {
    userAddress: string;
    createdAt: string;
    text: string;
  }
>;

export type LogRemoveEntryEvent = TypedEvent<
  [string, BigNumber] & { userAddress: string; index: BigNumber }
>;

export type LogUserAddedEvent = TypedEvent<[string] & { userAddress: string }>;

export type LogUserArchivedEvent = TypedEvent<
  [string] & { userAddress: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class Lves extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LvesInterface;

  functions: {
    addEntry(
      createdAt: string,
      text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addUser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    archiveUser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getUserEntries(
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & { entries: string[]; createdAt: string[] }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeEntry(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userExists(overrides?: CallOverrides): Promise<[boolean]>;
  };

  addEntry(
    createdAt: string,
    text: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addUser(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  archiveUser(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getUserEntries(
    overrides?: CallOverrides
  ): Promise<[string[], string[]] & { entries: string[]; createdAt: string[] }>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeEntry(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userExists(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    addEntry(
      createdAt: string,
      text: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addUser(overrides?: CallOverrides): Promise<void>;

    archiveUser(overrides?: CallOverrides): Promise<void>;

    getUserEntries(
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & { entries: string[]; createdAt: string[] }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    removeEntry(index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userExists(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "LogEntriesRecieved(address)"(
      userAddress?: null
    ): TypedEventFilter<[string], { userAddress: string }>;

    LogEntriesRecieved(
      userAddress?: null
    ): TypedEventFilter<[string], { userAddress: string }>;

    "LogEntryAdded(address,string,string)"(
      userAddress?: null,
      createdAt?: null,
      text?: null
    ): TypedEventFilter<
      [string, string, string],
      { userAddress: string; createdAt: string; text: string }
    >;

    LogEntryAdded(
      userAddress?: null,
      createdAt?: null,
      text?: null
    ): TypedEventFilter<
      [string, string, string],
      { userAddress: string; createdAt: string; text: string }
    >;

    "LogRemoveEntry(address,uint256)"(
      userAddress?: null,
      index?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { userAddress: string; index: BigNumber }
    >;

    LogRemoveEntry(
      userAddress?: null,
      index?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { userAddress: string; index: BigNumber }
    >;

    "LogUserAdded(address)"(
      userAddress?: null
    ): TypedEventFilter<[string], { userAddress: string }>;

    LogUserAdded(
      userAddress?: null
    ): TypedEventFilter<[string], { userAddress: string }>;

    "LogUserArchived(address)"(
      userAddress?: null
    ): TypedEventFilter<[string], { userAddress: string }>;

    LogUserArchived(
      userAddress?: null
    ): TypedEventFilter<[string], { userAddress: string }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addEntry(
      createdAt: string,
      text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addUser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    archiveUser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getUserEntries(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeEntry(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userExists(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addEntry(
      createdAt: string,
      text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addUser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    archiveUser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getUserEntries(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeEntry(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userExists(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
