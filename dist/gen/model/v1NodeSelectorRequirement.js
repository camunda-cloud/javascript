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
* A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
*/
class V1NodeSelectorRequirement {
    static getAttributeTypeMap() {
        return V1NodeSelectorRequirement.attributeTypeMap;
    }
}
V1NodeSelectorRequirement.discriminator = undefined;
V1NodeSelectorRequirement.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    },
    {
        "name": "operator",
        "baseName": "operator",
        "type": "string"
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<string>"
    }
];
exports.V1NodeSelectorRequirement = V1NodeSelectorRequirement;
//# sourceMappingURL=v1NodeSelectorRequirement.js.map