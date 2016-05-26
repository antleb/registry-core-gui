/**
 * Created by stefania on 5/17/16.
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
var resource_type_service_1 = require('./resource-type.service');
var ResourceTypeDetailsComponent = (function () {
    function ResourceTypeDetailsComponent(resourceTypeService, routeParams) {
        this.resourceTypeService = resourceTypeService;
        this.routeParams = routeParams;
    }
    ResourceTypeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.routeParams.get('name');
        this.resourceTypeService.getResourceType(name).subscribe(function (resourceType) { return _this.resourceType = resourceType; }, 
        // resourceTypes => this.resourceTypes = resourceTypes,
        function (error) { return _this.errorMessage = error; });
    };
    ResourceTypeDetailsComponent.prototype.goBack = function () {
        window.history.back();
    };
    ResourceTypeDetailsComponent = __decorate([
        core_1.Component({
            selector: 'resource-type-detail',
            templateUrl: 'app/resourcetype/resource-type-detail.component.html',
        }), 
        __metadata('design:paramtypes', [resource_type_service_1.ResourceTypeService, router_deprecated_1.RouteParams])
    ], ResourceTypeDetailsComponent);
    return ResourceTypeDetailsComponent;
}());
exports.ResourceTypeDetailsComponent = ResourceTypeDetailsComponent;
//# sourceMappingURL=resource-type-detail.component.js.map