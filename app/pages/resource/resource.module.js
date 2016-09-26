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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var resource_list_component_1 = require('./resource-list.component');
var resource_detail_component_1 = require('./resource-detail.component');
var resource_service_1 = require('./../../services/resource.service');
var resource_routing_1 = require("./resource.routing");
var new_resource_component_1 = require("./new-resource.component");
var ResourcesModule = (function () {
    function ResourcesModule() {
    }
    ResourcesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                resource_routing_1.resourcesRouting
            ],
            declarations: [
                resource_list_component_1.ResourceListComponent,
                resource_detail_component_1.ResourceDetailsComponent,
                new_resource_component_1.NewResourceComponent
            ],
            providers: [
                resource_service_1.ResourceService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ResourcesModule);
    return ResourcesModule;
}());
exports.ResourcesModule = ResourcesModule;
//# sourceMappingURL=resource.module.js.map