"use strict";
var router_1 = require('@angular/router');
var resource_type_list_component_1 = require("./resource-type-list.component");
var resource_type_detail_component_1 = require("./resource-type-detail.component");
var new_resource_type_component_1 = require("./new-resource-type.component");
var resourceTypesRoutes = [
    {
        path: 'resourceType',
        component: resource_type_list_component_1.ResourceTypeListComponent
    },
    {
        path: 'resourceType/detail/:name',
        component: resource_type_detail_component_1.ResourceTypeDetailsComponent
    },
    {
        path: 'resourceType/new',
        component: new_resource_type_component_1.NewResourceTypeComponent,
    },
];
exports.resourceTypesRouting = router_1.RouterModule.forChild(resourceTypesRoutes);
//# sourceMappingURL=resource-type.routing.js.map