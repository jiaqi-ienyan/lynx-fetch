import { CHAINS } from '@lynx-sdk/constants';
import { RPCProvidersKeys } from './providersUrls';
import { RequestInit, Response } from './fetch';
export type FetRPCUrl = (chainId: CHAINS) => string;
export interface FetchRPCOptions extends RequestInit {
    providers?: RPCProvidersKeys;
    urls?: (string | FetRPCUrl)[];
}
export type FetchRPC = (chainId: CHAINS, options: FetchRPCOptions) => Promise<Response>;
export type CreateRPCFetcher = (options: FetchRPCOptions) => FetchRPC;
export declare const fetchRPC: FetchRPC;
