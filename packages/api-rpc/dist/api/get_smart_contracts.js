"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var get_smart_contracts = function (query) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint_1, smart_contract_name, records_count, limit, upper_bound, options, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                endpoint_1 = query.endpoint, smart_contract_name = query.smart_contract_name, records_count = query.records_count;
                limit = Math.min(parseInt(records_count) || 100, 100);
                upper_bound = "";
                // calculate the upper_bound
                if (typeof smart_contract_name !== 'undefined') {
                    upper_bound = smart_contract_name + 'z'.repeat(12 - smart_contract_name.length);
                }
                options = {
                    "json": true,
                    "code": "eosio.contrs",
                    "scope": "eosio",
                    "table": "contracts",
                    "table_key": "",
                    "lower_bound": smart_contract_name,
                    "upper_bound": upper_bound,
                    "limit": limit,
                    "key_type": "",
                    "index_position": "",
                    "encode_type": "dec",
                    "reverse": false,
                    "show_payer": false
                };
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        request.post({ url: endpoint_1 + "/v1/chain/get_table_rows", json: true, body: options }, function (err, resp, body) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                // console.log("body: ", body);
                                resolve(body.rows);
                            }
                        });
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
            case 2:
                error_1 = _a.sent();
                console.error('Caught exception in get all permissions query: ', error_1.stack);
                return [2 /*return*/, []];
            case 3:
                ;
                return [2 /*return*/];
        }
    });
}); };
exports.default = get_smart_contracts;