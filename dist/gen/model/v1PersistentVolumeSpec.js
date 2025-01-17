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
* PersistentVolumeSpec is the specification of a persistent volume.
*/
class V1PersistentVolumeSpec {
    static getAttributeTypeMap() {
        return V1PersistentVolumeSpec.attributeTypeMap;
    }
}
V1PersistentVolumeSpec.discriminator = undefined;
V1PersistentVolumeSpec.attributeTypeMap = [
    {
        "name": "accessModes",
        "baseName": "accessModes",
        "type": "Array<string>"
    },
    {
        "name": "awsElasticBlockStore",
        "baseName": "awsElasticBlockStore",
        "type": "V1AWSElasticBlockStoreVolumeSource"
    },
    {
        "name": "azureDisk",
        "baseName": "azureDisk",
        "type": "V1AzureDiskVolumeSource"
    },
    {
        "name": "azureFile",
        "baseName": "azureFile",
        "type": "V1AzureFilePersistentVolumeSource"
    },
    {
        "name": "capacity",
        "baseName": "capacity",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "cephfs",
        "baseName": "cephfs",
        "type": "V1CephFSPersistentVolumeSource"
    },
    {
        "name": "cinder",
        "baseName": "cinder",
        "type": "V1CinderPersistentVolumeSource"
    },
    {
        "name": "claimRef",
        "baseName": "claimRef",
        "type": "V1ObjectReference"
    },
    {
        "name": "csi",
        "baseName": "csi",
        "type": "V1CSIPersistentVolumeSource"
    },
    {
        "name": "fc",
        "baseName": "fc",
        "type": "V1FCVolumeSource"
    },
    {
        "name": "flexVolume",
        "baseName": "flexVolume",
        "type": "V1FlexPersistentVolumeSource"
    },
    {
        "name": "flocker",
        "baseName": "flocker",
        "type": "V1FlockerVolumeSource"
    },
    {
        "name": "gcePersistentDisk",
        "baseName": "gcePersistentDisk",
        "type": "V1GCEPersistentDiskVolumeSource"
    },
    {
        "name": "glusterfs",
        "baseName": "glusterfs",
        "type": "V1GlusterfsPersistentVolumeSource"
    },
    {
        "name": "hostPath",
        "baseName": "hostPath",
        "type": "V1HostPathVolumeSource"
    },
    {
        "name": "iscsi",
        "baseName": "iscsi",
        "type": "V1ISCSIPersistentVolumeSource"
    },
    {
        "name": "local",
        "baseName": "local",
        "type": "V1LocalVolumeSource"
    },
    {
        "name": "mountOptions",
        "baseName": "mountOptions",
        "type": "Array<string>"
    },
    {
        "name": "nfs",
        "baseName": "nfs",
        "type": "V1NFSVolumeSource"
    },
    {
        "name": "nodeAffinity",
        "baseName": "nodeAffinity",
        "type": "V1VolumeNodeAffinity"
    },
    {
        "name": "persistentVolumeReclaimPolicy",
        "baseName": "persistentVolumeReclaimPolicy",
        "type": "string"
    },
    {
        "name": "photonPersistentDisk",
        "baseName": "photonPersistentDisk",
        "type": "V1PhotonPersistentDiskVolumeSource"
    },
    {
        "name": "portworxVolume",
        "baseName": "portworxVolume",
        "type": "V1PortworxVolumeSource"
    },
    {
        "name": "quobyte",
        "baseName": "quobyte",
        "type": "V1QuobyteVolumeSource"
    },
    {
        "name": "rbd",
        "baseName": "rbd",
        "type": "V1RBDPersistentVolumeSource"
    },
    {
        "name": "scaleIO",
        "baseName": "scaleIO",
        "type": "V1ScaleIOPersistentVolumeSource"
    },
    {
        "name": "storageClassName",
        "baseName": "storageClassName",
        "type": "string"
    },
    {
        "name": "storageos",
        "baseName": "storageos",
        "type": "V1StorageOSPersistentVolumeSource"
    },
    {
        "name": "volumeMode",
        "baseName": "volumeMode",
        "type": "string"
    },
    {
        "name": "vsphereVolume",
        "baseName": "vsphereVolume",
        "type": "V1VsphereVirtualDiskVolumeSource"
    }
];
exports.V1PersistentVolumeSpec = V1PersistentVolumeSpec;
//# sourceMappingURL=v1PersistentVolumeSpec.js.map