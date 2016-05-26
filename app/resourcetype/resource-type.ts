/**
 * Created by stefania on 4/11/16.
 */

import {IndexFields} from "./index-fields";

export interface ResourceType {
    id: string;
    name: string;
    schema: string;
    schemaUrl: string;
    payloadType: string;
    creationDate: Date;
    modificationDate: Date;
    indexMapperClass: String;
    indexFields : IndexFields[];
}