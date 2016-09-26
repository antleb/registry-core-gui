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
/**
 * Created by stefania on 9/16/16.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var dashboard_component_1 = require("./dashboard.component");
var configuration_component_1 = require("./pages/configuration/configuration.component");
var resource_type_component_1 = require("./pages/resourcetype/resource-type.component");
var resource_component_1 = require("./pages/resource/resource.component");
var api_overview_component_1 = require("./pages/api/api-overview.component");
var api_resources_component_1 = require("./pages/api/api-resources.component");
var api_resource_types_component_1 = require("./pages/api/api-resource-types.component");
var api_search_component_1 = require("./pages/api/api-search.component");
var api_versions_component_1 = require("./pages/api/api-versions.component");
var resource_module_1 = require("./pages/resource/resource.module");
var resource_type_module_1 = require("./pages/resourcetype/resource-type.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                resource_module_1.ResourcesModule,
                resource_type_module_1.ResourceTypesModule,
                http_1.HttpModule,
                http_1.JsonpModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                configuration_component_1.ConfigurationComponent,
                resource_type_component_1.ResourceTypeComponent,
                resource_component_1.ResourceComponent,
                api_overview_component_1.APIOverviewComponent,
                api_resources_component_1.APIResourcesComponent,
                api_resource_types_component_1.APIResourceTypesComponent,
                api_search_component_1.APISearchComponent,
                api_versions_component_1.APIVersionsComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map