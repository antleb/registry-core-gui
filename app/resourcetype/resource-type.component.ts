/**
 * Created by stefania on 4/8/16.
 */

import { Component, OnInit } from '@angular/core';
import { ResourceType } from './resource-type';
import { ResourceTypeService } from './resource-type.service';
import { ResourceTypePage } from './resource-type-page';
import { RouteConfig, Router, RouterOutlet } from '@angular/router-deprecated';
import { ResourceTypeDetailsComponent } from "./resource-type-detail.component";
import { ResourceTypeListComponent } from "./resource-type-list.component";

@Component({
    selector: 'resource-type',
    templateUrl: 'app/resourcetype/resource-type.component.html',
    directives: [RouterOutlet],
    // providers: [
    //     // ResourceTypeService,
    //     HTTP_PROVIDERS,
    // ],
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