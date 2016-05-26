/**
 * Created by stefania on 4/8/16.
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
var resource_type_detail_component_1 = require("./resource-type-detail.component");
var resource_type_list_component_1 = require("./resource-type-list.component");
var ResourceTypeComponent = (function () {
    function ResourceTypeComponent() {
    }
    ResourceTypeComponent = __decorate([
        core_1.Component({
            selector: 'resource-type',
            templateUrl: 'app/resourcetype/resource-type.component.html',
            directives: [router_deprecated_1.RouterOutlet],
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'ResourceTypeList',
                component: resource_type_list_component_1.ResourceTypeListComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:name',
                name: 'ResourceTypeDetails',
                component: resource_type_detail_component_1.ResourceTypeDetailsComponent,
            },
        ]), 
        __metadata('design:paramtypes', [])
    ], ResourceTypeComponent);
    return ResourceTypeComponent;
}());
exports.ResourceTypeComponent = ResourceTypeComponent;
//# sourceMappingURL=resource-type.component.js.map