"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = require("fs");
class FileAuth {
    constructor() {
        this.token = null;
        this.lastRead = null;
    }
    isAuthProvider(user) {
        return user.authProvider && user.authProvider.config && user.authProvider.config.tokenFile;
    }
    applyAuthentication(user, opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.token == null) {
                this.refreshToken(user.authProvider.config.tokenFile);
            }
            if (this.isTokenExpired()) {
                this.refreshToken(user.authProvider.config.tokenFile);
            }
            if (this.token) {
                opts.headers.Authorization = `Bearer ${this.token}`;
            }
        });
    }
    refreshToken(filePath) {
        // TODO make this async?
        this.token = fs.readFileSync(filePath).toString('UTF-8');
        this.lastRead = new Date();
    }
    isTokenExpired() {
        if (this.lastRead === null) {
            return true;
        }
        const now = new Date();
        const delta = (now.getTime() - this.lastRead.getTime()) / 1000;
        // For now just refresh every 60 seconds. This is imperfect since the token
        // could be out of date for this time, but it is unlikely and it's also what
        // the client-go library does.
        // TODO: Use file notifications instead?
        return delta > 60;
    }
}
exports.FileAuth = FileAuth;
//# sourceMappingURL=file_auth.js.map