/**
 * Created by stefania on 5/26/16.
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
var router_1 = require('@angular/router');
var resource_service_1 = require("./../../services/resource.service");
var ResourceListComponent = (function () {
    function ResourceListComponent(_router, _resourceService) {
        this._router = _router;
        this._resourceService = _resourceService;
    }
    ResourceListComponent.prototype.ngOnInit = function () {
        this.getResources();
    };
    ResourceListComponent.prototype.getResources = function () {
        var _this = this;
        this._resourceService.getResources().subscribe(function (resourcePage) { return _this.resourcePage = resourcePage; }, function (error) { return _this.errorMessage = error; });
    };
    ResourceListComponent.prototype.gotoDetail = function (resource) {
        this._router.navigate(['/resource/detail', resource.resourceType, resource.id]);
    };
    ResourceListComponent.prototype.addNewResource = function () {
        this._router.navigate(['/resource/new']);
    };
    ResourceListComponent = __decorate([
        core_1.Component({
            selector: 'resource-list',
            templateUrl: 'app/pages/resource/resource-list.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, resource_service_1.ResourceService])
    ], ResourceListComponent);
    return ResourceListComponent;
}());
exports.ResourceListComponent = ResourceListComponent;
//# sourceMappingURL=resource-list.component.js.map