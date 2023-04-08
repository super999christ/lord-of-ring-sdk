"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
class Movie extends base_1.default {
    constructor(options) {
        super(options);
    }
    getOne(id) {
        return super._getOne(id);
    }
    getAll() {
        return super._getAll();
    }
    async getQuotes(id) {
        const url = `${this.baseUrl}/${id}/quote`;
        try {
            const responseData = await super._getResponse(url);
            return responseData;
        }
        catch (error) {
            throw error;
        }
    }
}
;
exports.default = Movie;
//# sourceMappingURL=movie.js.map