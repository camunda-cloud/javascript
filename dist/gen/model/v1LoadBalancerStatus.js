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
* LoadBalancerStatus represents the status of a load-balancer.
*/
class V1LoadBalancerStatus {
    static getAttributeTypeMap() {
        return V1LoadBalancerStatus.attributeTypeMap;
    }
}
V1LoadBalancerStatus.discriminator = undefined;
V1LoadBalancerStatus.attributeTypeMap = [
    {
        "name": "ingress",
        "baseName": "ingress",
        "type": "Array<V1LoadBalancerIngress>"
    }
];
exports.V1LoadBalancerStatus = V1LoadBalancerStatus;
//# sourceMappingURL=v1LoadBalancerStatus.js.map