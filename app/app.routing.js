"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require("./dashboard.component");
var configuration_component_1 = require("./pages/configuration/configuration.component");
var api_overview_component_1 = require("./pages/api/api-overview.component");
var api_resource_types_component_1 = require("./pages/api/api-resource-types.component");
var api_resources_component_1 = require("./pages/api/api-resources.component");
var api_search_component_1 = require("./pages/api/api-search.component");
var api_versions_component_1 = require("./pages/api/api-versions.component");
var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
    },
    {
        path: 'configuration',
        component: configuration_component_1.ConfigurationComponent,
    },
    {
        path: 'api/overview',
        component: api_overview_component_1.APIOverviewComponent,
    },
    {
        path: 'api/resourceTypes',
        component: api_resource_types_component_1.APIResourceTypesComponent,
    },
    {
        path: 'api/resources',
        component: api_resources_component_1.APIResourcesComponent,
    },
    {
        path: 'api/search',
        component: api_search_component_1.APISearchComponent,
    },
    {
        path: 'api/versions',
        component: api_versions_component_1.APIVersionsComponent,
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map