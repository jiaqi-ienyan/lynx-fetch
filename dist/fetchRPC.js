"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRPC = void 0;
var tiny_invariant_1 = require("tiny-invariant");
var fetchWithFallbacks_1 = require("./fetchWithFallbacks");
var providersUrls_1 = require("./providersUrls");
var fetchRPC = function (chainId, options) {
    var _a = options.providers, providers = _a === void 0 ? {} : _a, _b = options.urls, urls = _b === void 0 ? [] : _b, init = __rest(options, ["providers", "urls"]);
    var customUrls = urls.map(function (value) {
        var url = value;
        if (typeof value === 'function')
            url = value(chainId);
        (0, tiny_invariant_1.default)(typeof url === 'string', 'URL should be a string');
        return url;
    });
    var providersUrls = (0, providersUrls_1.getRPCUrls)(chainId, providers);
    var combinedUrls = __spreadArray(__spreadArray([], customUrls, true), providersUrls, true);
    (0, tiny_invariant_1.default)(combinedUrls.length > 0, 'There are no API keys or URLs provided');
    return (0, fetchWithFallbacks_1.fetchWithFallbacks)(combinedUrls, __assign({ method: 'POST' }, init));
};
exports.fetchRPC = fetchRPC;
