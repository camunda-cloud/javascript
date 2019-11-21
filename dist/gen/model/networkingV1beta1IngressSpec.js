"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* IngressSpec describes the Ingress the user wishes to exist.
*/
class NetworkingV1beta1IngressSpec {
    static getAttributeTypeMap() {
        return NetworkingV1beta1IngressSpec.attributeTypeMap;
    }
}
NetworkingV1beta1IngressSpec.discriminator = undefined;
NetworkingV1beta1IngressSpec.attributeTypeMap = [
    {
        "name": "backend",
        "baseName": "backend",
        "type": "NetworkingV1beta1IngressBackend"
    },
    {
        "name": "rules",
        "baseName": "rules",
        "type": "Array<NetworkingV1beta1IngressRule>"
    },
    {
        "name": "tls",
        "baseName": "tls",
        "type": "Array<NetworkingV1beta1IngressTLS>"
    }
];
exports.NetworkingV1beta1IngressSpec = NetworkingV1beta1IngressSpec;
//# sourceMappingURL=networkingV1beta1IngressSpec.js.map