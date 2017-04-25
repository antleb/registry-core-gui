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
 * Created by stefania on 9/26/16.
 */
var core_1 = require('@angular/core');
var NewResourceTypeComponent = (function () {
    function NewResourceTypeComponent() {
    }
    // constructor(
    //     private resourceService: ResourceService,
    //     private routeParams: RouteParams) {
    // }
    // ngOnInit() {
    //
    //     let resourceType = this.routeParams.get('resourceType');
    //     let id = this.routeParams.get('id');
    //
    //     this.resourceService.getResource(resourceType, id).subscribe(
    //         resource => this.resource = resource,
    //         error =>  this.errorMessage = <any>error);
    // }
    NewResourceTypeComponent.prototype.goBack = function () {
        window.history.back();
    };
    NewResourceTypeComponent = __decorate([
        core_1.Component({
            selector: 'new-resource-type',
            templateUrl: 'app/pages/resourcetype/new-resource-type.component.html',
            styleUrls: ['app/pages/resourcetype/new-resource-type.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], NewResourceTypeComponent);
    return NewResourceTypeComponent;
}());
exports.NewResourceTypeComponent = NewResourceTypeComponent;
//# sourceMappingURL=new-resource-type.component.js.map