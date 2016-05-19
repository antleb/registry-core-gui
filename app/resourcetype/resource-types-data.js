System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ResourceTypeData;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by stefania on 4/11/16.
             */
            ResourceTypeData = (function () {
                function ResourceTypeData() {
                }
                ResourceTypeData.prototype.createDb = function () {
                    // let resourceTypes = [
                    //     {"id": "18", "name": "Person", "schema": "Schema for resource type Person", "schemaUrl": "http://www.bla.com",
                    //         "payloadType": "json", "creationDate": "today", "modificationDate": "today"},
                    //     {"id": "19", "name": "Corpora", "schema": "Schema for resource type Corpora", "schemaUrl": "http://www.bla.com",
                    //         "payloadType": "xml", "creationDate": "yesterday", "modificationDate": "today"},
                    // ];
                    // return {resourceTypes};
                    var resourceTypePage = { "total": 1, "from": 0, "to": 1, "results": [{ "id": "18", "name": "Person", "schema": "Schema for resource type Person", "schemaUrl": "http://www.bla.com", "payloadType": "json", "creationDate": "today", "modificationDate": "today" }] };
                    return { resourceTypePage: resourceTypePage };
                };
                return ResourceTypeData;
            }());
            exports_1("ResourceTypeData", ResourceTypeData);
        }
    }
});
//# sourceMappingURL=resource-types-data.js.map