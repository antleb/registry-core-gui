System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RESOURCE_TYPES;
    return {
        setters:[],
        execute: function() {
            exports_1("RESOURCE_TYPES", RESOURCE_TYPES = [
                { "id": "18", "name": "Person", "schema": "Schema for resource type Person", "schemaUrl": "http://www.bla.com",
                    "payloadType": "json", "creationDate": "today", "modificationDate": "today" },
                { "id": "19", "name": "Corpora", "schema": "Schema for resource type Corpora", "schemaUrl": "http://www.bla.com",
                    "payloadType": "xml", "creationDate": "yesterday", "modificationDate": "today" },
            ]);
        }
    }
});
//# sourceMappingURL=mock-resource-types.js.map