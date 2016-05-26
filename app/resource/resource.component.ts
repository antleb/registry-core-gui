/**
 * Created by stefania on 4/11/16.
 */
import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import { ResourceListComponent } from "./resource-list.component";
import { ResourceDetailsComponent } from "./resource-detail.component";

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
])

export class ResourceComponent {

}