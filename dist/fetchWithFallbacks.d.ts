import { RequestInfo, RequestInit, Response } from './fetch';
export interface FetchWithFallbacksOptions extends RequestInit {
    fetch?: (url: RequestInfo, init?: RequestInit) => Promise<Response>;
}
export type FetchWithFallbacks = (inputs: RequestInfo[], options?: FetchWithFallbacksOptions) => Promise<Response>;
export declare const fetchWithFallbacks: FetchWithFallbacks;
