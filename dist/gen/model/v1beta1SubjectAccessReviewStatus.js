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
* SubjectAccessReviewStatus
*/
class V1beta1SubjectAccessReviewStatus {
    static getAttributeTypeMap() {
        return V1beta1SubjectAccessReviewStatus.attributeTypeMap;
    }
}
V1beta1SubjectAccessReviewStatus.discriminator = undefined;
V1beta1SubjectAccessReviewStatus.attributeTypeMap = [
    {
        "name": "allowed",
        "baseName": "allowed",
        "type": "boolean"
    },
    {
        "name": "denied",
        "baseName": "denied",
        "type": "boolean"
    },
    {
        "name": "evaluationError",
        "baseName": "evaluationError",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    }
];
exports.V1beta1SubjectAccessReviewStatus = V1beta1SubjectAccessReviewStatus;
//# sourceMappingURL=v1beta1SubjectAccessReviewStatus.js.map