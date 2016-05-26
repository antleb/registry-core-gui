"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var router_deprecated_1 = require('@angular/router-deprecated');
require('rxjs/Rx');
var resource_type_service_1 = require('./resourcetype/resource-type.service');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, resource_type_service_1.ResourceTypeService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map