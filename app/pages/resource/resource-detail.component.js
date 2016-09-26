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
var resource_service_1 = require('./../../services/resource.service');
var ResourceDetailsComponent = (function () {
    function ResourceDetailsComponent(_route, _router, _resourceService) {
        this._route = _route;
        this._router = _router;
        this._resourceService = _resourceService;
    }
    ResourceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var resourceType = params['resourceType'];
            var id = params['id'];
            _this._resourceService.getResource(resourceType, id).subscribe(function (resource) { return _this.resource = resource; }, function (error) { return _this.errorMessage = error; });
        });
        // let resourceType = this.routeParams.get('resourceType');
        // let id = this.routeParams.get('id');
        //
        // this._resourceService.getResource(resourceType, id).subscribe(
        //     resource => this.resource = resource,
        //     error =>  this.errorMessage = <any>error);
    };
    ResourceDetailsComponent.prototype.goBack = function () {
        window.history.back();
    };
    ResourceDetailsComponent = __decorate([
        core_1.Component({
            selector: 'resource-type-detail',
            templateUrl: 'app/pages/resource/resource-detail.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, resource_service_1.ResourceService])
    ], ResourceDetailsComponent);
    return ResourceDetailsComponent;
}());
exports.ResourceDetailsComponent = ResourceDetailsComponent;
//# sourceMappingURL=resource-detail.component.js.map