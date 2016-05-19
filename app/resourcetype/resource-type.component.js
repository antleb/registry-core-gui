System.register(['angular2/core', "./resource-type.service", "angular2/http", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, resource_type_service_1, http_1, router_1;
    var ResourceTypeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resource_type_service_1_1) {
                resource_type_service_1 = resource_type_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ResourceTypeComponent = (function () {
                function ResourceTypeComponent(router, _resourceTypeService) {
                    this.router = router;
                    this._resourceTypeService = _resourceTypeService;
                }
                ResourceTypeComponent.prototype.ngOnInit = function () {
                    this.getResourceTypes();
                };
                ResourceTypeComponent.prototype.getResourceTypes = function () {
                    var _this = this;
                    this._resourceTypeService.getResourceTypes().subscribe(function (resourceTypePage) { return _this.resourceTypePage = resourceTypePage; }, 
                    // resourceTypes => this.resourceTypes = resourceTypes,
                    function (error) { return _this.errorMessage = error; });
                    // console.log(this.resourceTypePage);
                };
                ResourceTypeComponent = __decorate([
                    core_1.Component({
                        selector: 'resource-type',
                        templateUrl: 'app/resourcetype/resource-type.component.html',
                        providers: [resource_type_service_1.ResourceTypeService,
                            http_1.HTTP_PROVIDERS,
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, resource_type_service_1.ResourceTypeService])
                ], ResourceTypeComponent);
                return ResourceTypeComponent;
            }());
            exports_1("ResourceTypeComponent", ResourceTypeComponent);
        }
    }
});
//# sourceMappingURL=resource-type.component.js.map