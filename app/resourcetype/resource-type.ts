/**
 * Created by stefania on 4/11/16.
 */
export interface ResourceType {
    id: string;
    name: string;
    schema: string;
    schemaUrl: string;
    payloadType: string;
    creationDate: Date;
    modificationDate: Date;
}