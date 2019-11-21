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
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
class V1AzureFileVolumeSource {
    static getAttributeTypeMap() {
        return V1AzureFileVolumeSource.attributeTypeMap;
    }
}
V1AzureFileVolumeSource.discriminator = undefined;
V1AzureFileVolumeSource.attributeTypeMap = [
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "secretName",
        "baseName": "secretName",
        "type": "string"
    },
    {
        "name": "shareName",
        "baseName": "shareName",
        "type": "string"
    }
];
exports.V1AzureFileVolumeSource = V1AzureFileVolumeSource;
//# sourceMappingURL=v1AzureFileVolumeSource.js.map