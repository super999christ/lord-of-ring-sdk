"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
;
class LordSDK {
    constructor(options) {
        const { accessToken } = options;
        this.movie = new core_1.Movie({ path: '/movie', accessToken });
    }
    getMovieInstance() {
        return this.movie;
    }
}
;
exports.default = LordSDK;
//# sourceMappingURL=sdk.js.map