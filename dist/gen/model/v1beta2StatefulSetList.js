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
* StatefulSetList is a collection of StatefulSets.
*/
class V1beta2StatefulSetList {
    static getAttributeTypeMap() {
        return V1beta2StatefulSetList.attributeTypeMap;
    }
}
V1beta2StatefulSetList.discriminator = undefined;
V1beta2StatefulSetList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1beta2StatefulSet>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    }
];
exports.V1beta2StatefulSetList = V1beta2StatefulSetList;
//# sourceMappingURL=v1beta2StatefulSetList.js.map