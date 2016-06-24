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
 * Created by stefania on 5/26/16.
 */
var core_1 = require('@angular/core');
var resource_type_service_1 = require("../resourcetype/resource-type.service");
var router_deprecated_1 = require('@angular/router-deprecated');
var ResourceFormComponent = (function () {
    function ResourceFormComponent(router, _resourceTypeService) {
        this.router = router;
        this._resourceTypeService = _resourceTypeService;
        // powers = ['Really Smart', 'Super Flexible',
        //     'Super Hot', 'Weather Changer'];
        //
        // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    ResourceFormComponent.prototype.ngOnInit = function () {
        this.getResourceTypes();
    };
    ResourceFormComponent.prototype.getResourceTypes = function () {
        var _this = this;
        this._resourceTypeService.getResourceTypes().subscribe(function (resourceTypePage) { return _this.resourceTypes = resourceTypePage.results; }, function (error) { return _this.errorMessage = error; });
    };
    ResourceFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    // TODO: Remove this when we're done
    // get diagnostic() { return JSON.stringify(this.model); }
    ResourceFormComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ResourceFormComponent.prototype, "resource", void 0);
    ResourceFormComponent = __decorate([
        core_1.Component({
            selector: 'resource-form',
            templateUrl: 'app/resource/resource-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, resource_type_service_1.ResourceTypeService])
    ], ResourceFormComponent);
    return ResourceFormComponent;
}());
exports.ResourceFormComponent = ResourceFormComponent;
//# sourceMappingURL=resource-form.component.js.map