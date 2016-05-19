/**
 * Created by stefania on 4/11/16.
 */
import {ResourceType} from "./resource-type";

export var RESOURCE_TYPES: ResourceType[] = [
    {"id": "18", "name": "Person", "schema": "Schema for resource type Person", "schemaUrl": "http://www.bla.com",
        "payloadType": "json", "creationDate": "today", "modificationDate": "today"},
    {"id": "19", "name": "Corpora", "schema": "Schema for resource type Corpora", "schemaUrl": "http://www.bla.com",
        "payloadType": "xml", "creationDate": "yesterday", "modificationDate": "today"},
];