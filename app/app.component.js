/**
 * Created by stefania on 3/21/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require('./dashboard.component');
var resource_type_component_1 = require("./resourcetype/resource-type.component");
var resource_component_1 = require("./resource/resource.component");
var configuration_component_1 = require("./configuration/configuration.component");
var api_overview_component_1 = require("./api/api-overview.component");
var api_resources_component_1 = require("./api/api-resources.component");
var api_resource_types_component_1 = require("./api/api-resource-types.component");
var api_search_component_1 = require("./api/api-search.component");
var api_versions_component_1 = require("./api/api-versions.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Metadata Registry Service';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'metadata-registry-service',
            templateUrl: 'app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/configuration',
                name: 'Configuration',
                component: configuration_component_1.ConfigurationComponent,
            },
            {
                path: '/resourceType/...',
                name: 'ResourceType',
                component: resource_type_component_1.ResourceTypeComponent,
            },
            {
                path: '/resource/...',
                name: 'Resource',
                component: resource_component_1.ResourceComponent,
            },
            {
                path: '/api/overview',
                name: 'APIOverview',
                component: api_overview_component_1.APIOverviewComponent,
            },
            {
                path: '/api/resourceTypes',
                name: 'APIResourceTypesDocumentation',
                component: api_resource_types_component_1.APIResourceTypesComponent,
            },
            {
                path: '/api/resources',
                name: 'APIResourcesDocumentation',
                component: api_resources_component_1.APIResourcesComponent,
            },
            {
                path: '/api/search',
                name: 'APISearchDocumentation',
                component: api_search_component_1.APISearchComponent,
            },
            {
                path: '/api/versions',
                name: 'APIVersionsDocumentation',
                component: api_versions_component_1.APIVersionsComponent,
            },
            {
                path: '/**',
                redirectTo: ['Dashboard']
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map