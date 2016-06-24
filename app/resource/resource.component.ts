/**
 * Created by stefania on 4/11/16.
 */

import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import { ResourceListComponent } from "./resource-list.component";
import { ResourceDetailsComponent } from "./resource-detail.component";
import { NewResourceComponent } from "./new-resource.component";

@Component({
    selector: 'resource',
    templateUrl: 'app/resource/resource.component.html',
    directives: [RouterOutlet],
})

@RouteConfig([
    {
        path: '/',
        name: 'ResourceList',
        component: ResourceListComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:resourceType/:id',
        name: 'ResourceDetails',
        component: ResourceDetailsComponent,
    },
    {
        path: '/new',
        name: 'NewResource',
        component: NewResourceComponent,
    },
])

export class ResourceComponent {

}