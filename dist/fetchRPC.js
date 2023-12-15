var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import invariant from 'tiny-invariant';
import { fetchWithFallbacks } from './fetchWithFallbacks';
import { getRPCUrls } from './providersUrls';
export const fetchRPC = (chainId, options) => {
    const { providers = {}, urls = [] } = options, init = __rest(options, ["providers", "urls"]);
    const customUrls = urls.map(value => {
        let url = value;
        if (typeof value === 'function')
            url = value(chainId);
        invariant(typeof url === 'string', 'URL should be a string');
        return url;
    });
    const providersUrls = getRPCUrls(chainId, providers);
    const combinedUrls = [...customUrls, ...providersUrls];
    invariant(combinedUrls.length > 0, 'There are no API keys or URLs provided');
    return fetchWithFallbacks(combinedUrls, Object.assign({ method: 'POST' }, init));
};
