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
var NewResourceComponent = (function () {
    function NewResourceComponent() {
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
    NewResourceComponent.prototype.goBack = function () {
        window.history.back();
    };
    NewResourceComponent = __decorate([
        core_1.Component({
            selector: 'new-resource',
            templateUrl: 'app/pages/resource/new-resource.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], NewResourceComponent);
    return NewResourceComponent;
}());
exports.NewResourceComponent = NewResourceComponent;
//# sourceMappingURL=new-resource.component.js.map