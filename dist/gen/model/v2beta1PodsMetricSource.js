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
* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
*/
class V2beta1PodsMetricSource {
    static getAttributeTypeMap() {
        return V2beta1PodsMetricSource.attributeTypeMap;
    }
}
V2beta1PodsMetricSource.discriminator = undefined;
V2beta1PodsMetricSource.attributeTypeMap = [
    {
        "name": "metricName",
        "baseName": "metricName",
        "type": "string"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    },
    {
        "name": "targetAverageValue",
        "baseName": "targetAverageValue",
        "type": "string"
    }
];
exports.V2beta1PodsMetricSource = V2beta1PodsMetricSource;
//# sourceMappingURL=v2beta1PodsMetricSource.js.map