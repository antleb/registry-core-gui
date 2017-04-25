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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var ResourceService = (function () {
    function ResourceService(http) {
        this.http = http;
        // private _resourcesUrl = 'http://83.212.98.33:8080/RegistryService/resources/';
        this._resourcesUrl = 'http://83.212.101.85:8080/omtd-registry/resources/';
    }
    ResourceService.prototype.getResources = function () {
        return this.http.get(this._resourcesUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ResourceService.prototype.getResource = function (resourceType, id) {
        return this.http.get(this._resourcesUrl + resourceType + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ResourceService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    ResourceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ResourceService);
    return ResourceService;
}());
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map