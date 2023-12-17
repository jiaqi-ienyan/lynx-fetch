"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRPCUrls = exports.getAlchemyRPCUrl = exports.getInfuraRPCUrl = void 0;
var constants_1 = require("@lido-sdk/constants");
var invariant = require("tiny-invariant");
var getInfuraRPCUrl = function (chainId, apiKey) {
    invariant(apiKey && typeof apiKey === 'string', 'API key should be a string');
    switch (chainId) {
        case constants_1.CHAINS.Mainnet:
            return "https://mainnet.infura.io/v3/".concat(apiKey);
        case constants_1.CHAINS.Ropsten:
            return "https://ropsten.infura.io/v3/".concat(apiKey);
        case constants_1.CHAINS.Rinkeby:
            return "https://rinkeby.infura.io/v3/".concat(apiKey);
        case constants_1.CHAINS.Goerli:
            return "https://goerli.infura.io/v3/".concat(apiKey);
        case constants_1.CHAINS.Kovan:
            return "https://kovan.infura.io/v3/".concat(apiKey);
        default:
            invariant(false, 'Chain is not supported');
    }
};
exports.getInfuraRPCUrl = getInfuraRPCUrl;
var getAlchemyRPCUrl = function (chainId, apiKey) {
    invariant(apiKey && typeof apiKey === 'string', 'API key should be a string');
    switch (chainId) {
        case constants_1.CHAINS.Mainnet:
            return "https://eth-mainnet.alchemyapi.io/v2/".concat(apiKey);
        case constants_1.CHAINS.Ropsten:
            return "https://eth-ropsten.alchemyapi.io/v2/".concat(apiKey);
        case constants_1.CHAINS.Rinkeby:
            return "https://eth-rinkeby.alchemyapi.io/v2/".concat(apiKey);
        case constants_1.CHAINS.Goerli:
            return "https://eth-goerli.alchemyapi.io/v2/".concat(apiKey);
        case constants_1.CHAINS.Kovan:
            return "https://eth-kovan.alchemyapi.io/v2/".concat(apiKey);
        default:
            invariant(false, 'Chain is not supported');
    }
};
exports.getAlchemyRPCUrl = getAlchemyRPCUrl;
var getRPCUrls = function (chainId, keys) {
    var urls = [];
    if (keys.alchemy)
        urls.push((0, exports.getAlchemyRPCUrl)(chainId, keys.alchemy));
    if (keys.infura)
        urls.push((0, exports.getInfuraRPCUrl)(chainId, keys.infura));
    return urls;
};
exports.getRPCUrls = getRPCUrls;
