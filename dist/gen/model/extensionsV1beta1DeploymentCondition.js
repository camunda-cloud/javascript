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
* DeploymentCondition describes the state of a deployment at a certain point.
*/
class ExtensionsV1beta1DeploymentCondition {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1DeploymentCondition.attributeTypeMap;
    }
}
ExtensionsV1beta1DeploymentCondition.discriminator = undefined;
ExtensionsV1beta1DeploymentCondition.attributeTypeMap = [
    {
        "name": "lastTransitionTime",
        "baseName": "lastTransitionTime",
        "type": "Date"
    },
    {
        "name": "lastUpdateTime",
        "baseName": "lastUpdateTime",
        "type": "Date"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.ExtensionsV1beta1DeploymentCondition = ExtensionsV1beta1DeploymentCondition;
//# sourceMappingURL=extensionsV1beta1DeploymentCondition.js.map