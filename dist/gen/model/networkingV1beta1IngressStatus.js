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
* IngressStatus describe the current state of the Ingress.
*/
class NetworkingV1beta1IngressStatus {
    static getAttributeTypeMap() {
        return NetworkingV1beta1IngressStatus.attributeTypeMap;
    }
}
NetworkingV1beta1IngressStatus.discriminator = undefined;
NetworkingV1beta1IngressStatus.attributeTypeMap = [
    {
        "name": "loadBalancer",
        "baseName": "loadBalancer",
        "type": "V1LoadBalancerStatus"
    }
];
exports.NetworkingV1beta1IngressStatus = NetworkingV1beta1IngressStatus;
//# sourceMappingURL=networkingV1beta1IngressStatus.js.map