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
var resource_type_list_component_1 = require('./resource-type-list.component');
var resource_type_detail_component_1 = require('./resource-type-detail.component');
var resource_type_service_1 = require('./../../services/resource-type.service');
var resource_type_routing_1 = require("./resource-type.routing");
var new_resource_type_component_1 = require("./new-resource-type.component");
var ResourceTypesModule = (function () {
    function ResourceTypesModule() {
    }
    ResourceTypesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                resource_type_routing_1.resourceTypesRouting
            ],
            declarations: [
                resource_type_list_component_1.ResourceTypeListComponent,
                resource_type_detail_component_1.ResourceTypeDetailsComponent,
                new_resource_type_component_1.NewResourceTypeComponent
            ],
            providers: [
                resource_type_service_1.ResourceTypeService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ResourceTypesModule);
    return ResourceTypesModule;
}());
exports.ResourceTypesModule = ResourceTypesModule;
//# sourceMappingURL=resource-type.module.js.map