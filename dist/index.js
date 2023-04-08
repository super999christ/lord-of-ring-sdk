"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = __importDefault(require("./lib/sdk"));
const sdk = new sdk_1.default({ accessToken: 'Ivj6m3kLrHVVKCqJFYug' });
const movieSdk = sdk.getMovieInstance();
movieSdk.getAll().then(res => {
    console.log(res);
});
exports.default = sdk_1.default;
//# sourceMappingURL=index.js.map