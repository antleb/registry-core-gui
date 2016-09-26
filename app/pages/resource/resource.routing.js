"use strict";
var router_1 = require('@angular/router');
var resource_list_component_1 = require("./resource-list.component");
var resource_detail_component_1 = require("./resource-detail.component");
var new_resource_component_1 = require("./new-resource.component");
var resourcesRoutes = [
    {
        path: 'resource',
        component: resource_list_component_1.ResourceListComponent
    },
    {
        path: 'resource/detail/:resourceType/:id',
        component: resource_detail_component_1.ResourceDetailsComponent
    },
    {
        path: 'resource/new',
        component: new_resource_component_1.NewResourceComponent,
    },
];
exports.resourcesRouting = router_1.RouterModule.forChild(resourcesRoutes);
//# sourceMappingURL=resource.routing.js.map