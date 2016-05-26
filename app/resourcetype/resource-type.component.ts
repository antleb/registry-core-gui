/**
 * Created by stefania on 4/8/16.
 */

import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import { ResourceTypeDetailsComponent } from "./resource-type-detail.component";
import { ResourceTypeListComponent } from "./resource-type-list.component";

@Component({
    selector: 'resource-type',
    templateUrl: 'app/resourcetype/resource-type.component.html',
    directives: [RouterOutlet],
})

@RouteConfig([
    {
        path: '/',
        name: 'ResourceTypeList',
        component: ResourceTypeListComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:name',
        name: 'ResourceTypeDetails',
        component: ResourceTypeDetailsComponent,
    },
])

export class ResourceTypeComponent {
    
}