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
/**
* ResourceFieldSelector represents container resources (cpu, memory) and their output format
*/
export declare class V1ResourceFieldSelector {
    /**
    * Container name: required for volumes, optional for env vars
    */
    'containerName'?: string;
    /**
    * Specifies the output format of the exposed resources, defaults to \"1\"
    */
    'divisor'?: string;
    /**
    * Required: resource to select
    */
    'resource': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
