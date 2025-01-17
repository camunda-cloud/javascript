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
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
*/
class V1QuobyteVolumeSource {
    static getAttributeTypeMap() {
        return V1QuobyteVolumeSource.attributeTypeMap;
    }
}
V1QuobyteVolumeSource.discriminator = undefined;
V1QuobyteVolumeSource.attributeTypeMap = [
    {
        "name": "group",
        "baseName": "group",
        "type": "string"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "registry",
        "baseName": "registry",
        "type": "string"
    },
    {
        "name": "tenant",
        "baseName": "tenant",
        "type": "string"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "string"
    },
    {
        "name": "volume",
        "baseName": "volume",
        "type": "string"
    }
];
exports.V1QuobyteVolumeSource = V1QuobyteVolumeSource;
//# sourceMappingURL=v1QuobyteVolumeSource.js.map