import { CHAINS } from '@lido-sdk/constants';
export declare const getInfuraRPCUrl: (chainId: CHAINS, apiKey: string) => string;
export declare const getAlchemyRPCUrl: (chainId: CHAINS, apiKey: string) => string;
export interface RPCProvidersKeys {
    infura?: string;
    alchemy?: string;
}
export declare const getRPCUrls: (chainId: CHAINS, keys: RPCProvidersKeys) => string[];
