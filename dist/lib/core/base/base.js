"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../env/data");
const helpers_1 = require("../../helpers");
class Base {
    constructor(options) {
        const { path, accessToken } = options;
        this.baseUrl = `${data_1.BASE_URL}/${data_1.VERSION}${path}`;
        this.accessToken = accessToken;
        this.headers = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
    }
    async _getResponse(url) {
        try {
            const response = await helpers_1.NetworkHelper.fetchData(url, this.headers);
            const responseData = response.data;
            return responseData;
        }
        catch (error) {
            throw error;
        }
    }
    ;
    async _getOne(id) {
        const url = `${this.baseUrl}/${id}`;
        try {
            const responseData = await this._getResponse(url);
            return responseData.docs[0];
        }
        catch (error) {
            throw error;
        }
    }
    async _getAll() {
        const url = this.baseUrl;
        return this._getResponse(url);
    }
}
;
exports.default = Base;
//# sourceMappingURL=base.js.map