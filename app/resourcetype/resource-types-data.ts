/**
 * Created by stefania on 4/11/16.
 */
    
export class ResourceTypeData {
    createDb() {
        // let resourceTypes = [
        //     {"id": "18", "name": "Person", "schema": "Schema for resource type Person", "schemaUrl": "http://www.bla.com",
        //         "payloadType": "json", "creationDate": "today", "modificationDate": "today"},
        //     {"id": "19", "name": "Corpora", "schema": "Schema for resource type Corpora", "schemaUrl": "http://www.bla.com",
        //         "payloadType": "xml", "creationDate": "yesterday", "modificationDate": "today"},
        // ];
        // return {resourceTypes};
        let resourceTypePage = {"total":1,"from":0,"to":1, "results":[{"id": "18", "name": "Person", "schema": "Schema for resource type Person", "schemaUrl": "http://www.bla.com", "payloadType": "json", "creationDate": "today", "modificationDate": "today"}]};
        return {resourceTypePage};
    }
}

