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
* WebhookClientConfig contains the information to make a connection with the webhook
*/
class V1alpha1WebhookClientConfig {
    static getAttributeTypeMap() {
        return V1alpha1WebhookClientConfig.attributeTypeMap;
    }
}
V1alpha1WebhookClientConfig.discriminator = undefined;
V1alpha1WebhookClientConfig.attributeTypeMap = [
    {
        "name": "caBundle",
        "baseName": "caBundle",
        "type": "string"
    },
    {
        "name": "service",
        "baseName": "service",
        "type": "V1alpha1ServiceReference"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    }
];
exports.V1alpha1WebhookClientConfig = V1alpha1WebhookClientConfig;
//# sourceMappingURL=v1alpha1WebhookClientConfig.js.map