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
* DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. \"192.168.1.1/24\") that is allowed to the pods matched by a NetworkPolicySpec\'s podSelector. The except entry describes CIDRs that should not be included within this rule.
*/
class V1beta1IPBlock {
    static getAttributeTypeMap() {
        return V1beta1IPBlock.attributeTypeMap;
    }
}
V1beta1IPBlock.discriminator = undefined;
V1beta1IPBlock.attributeTypeMap = [
    {
        "name": "cidr",
        "baseName": "cidr",
        "type": "string"
    },
    {
        "name": "except",
        "baseName": "except",
        "type": "Array<string>"
    }
];
exports.V1beta1IPBlock = V1beta1IPBlock;
//# sourceMappingURL=v1beta1IPBlock.js.map