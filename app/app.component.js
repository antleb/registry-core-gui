/**
 * Created by stefania on 3/21/16.
 */
System.register(['angular2/core', 'angular2/router', './dashboard.component', "./resourcetype/resource-type.component", "./resource/resource.component", "./configuration/configuration.component", "./api/api-overview.component", "./api/api-resources.component", "./api/api-resource-types.component", "./api/api-search.component", "./api/api-versions.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dashboard_component_1, resource_type_component_1, resource_component_1, configuration_component_1, api_overview_component_1, api_resources_component_1, api_resource_types_component_1, api_search_component_1, api_versions_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (resource_type_component_1_1) {
                resource_type_component_1 = resource_type_component_1_1;
            },
            function (resource_component_1_1) {
                resource_component_1 = resource_component_1_1;
            },
            function (configuration_component_1_1) {
                configuration_component_1 = configuration_component_1_1;
            },
            function (api_overview_component_1_1) {
                api_overview_component_1 = api_overview_component_1_1;
            },
            function (api_resources_component_1_1) {
                api_resources_component_1 = api_resources_component_1_1;
            },
            function (api_resource_types_component_1_1) {
                api_resource_types_component_1 = api_resource_types_component_1_1;
            },
            function (api_search_component_1_1) {
                api_search_component_1 = api_search_component_1_1;
            },
            function (api_versions_component_1_1) {
                api_versions_component_1 = api_versions_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Metadata Registry Service';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'metadata-registry-service',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
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
                            path: '/resourceType',
                            name: 'ResourceType',
                            component: resource_type_component_1.ResourceTypeComponent,
                        },
                        {
                            path: '/resource',
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
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map