"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const openid_client_1 = require("openid-client");
class OpenIDConnectAuth {
    constructor() {
        // public for testing purposes.
        this.currentTokenExpiration = 0;
    }
    isAuthProvider(user) {
        if (!user.authProvider) {
            return false;
        }
        return user.authProvider.name === 'oidc';
    }
    /**
     * Setup the authentication header for oidc authed clients
     * @param user user info
     * @param opts request options
     * @param overrideClient for testing, a preconfigured oidc client
     */
    applyAuthentication(user, opts, overrideClient) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = yield this.getToken(user, overrideClient);
            if (token) {
                opts.headers.Authorization = `Bearer ${token}`;
            }
        });
    }
    getToken(user, overrideClient) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!user.authProvider.config) {
                return null;
            }
            if (!user.authProvider.config['client-secret']) {
                user.authProvider.config['client-secret'] = '';
            }
            if (!user.authProvider.config ||
                !user.authProvider.config['id-token'] ||
                !user.authProvider.config['client-id'] ||
                !user.authProvider.config['refresh-token'] ||
                !user.authProvider.config['idp-issuer-url']) {
                return null;
            }
            const client = overrideClient ? overrideClient : yield this.getClient(user);
            return this.refresh(user, client);
        });
    }
    refresh(user, client) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (Date.now() / 1000 > this.currentTokenExpiration) {
                const newToken = yield client.refresh(user.authProvider.config['refresh-token']);
                user.authProvider.config['id-token'] = newToken.id_token;
                user.authProvider.config['refresh-token'] = newToken.refresh_token;
                this.currentTokenExpiration = newToken.expires_at || 0;
            }
            return user.authProvider.config['id-token'];
        });
    }
    getClient(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const oidcIssuer = yield openid_client_1.Issuer.discover(user.authProvider.config['idp-issuer-url']);
            return new oidcIssuer.Client({
                client_id: user.authProvider.config['client-id'],
                client_secret: user.authProvider.config['client-secret'],
            });
        });
    }
}
exports.OpenIDConnectAuth = OpenIDConnectAuth;
//# sourceMappingURL=oidc_auth.js.map