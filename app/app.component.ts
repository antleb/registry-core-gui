/**
 * Created by stefania on 3/21/16.
 */

import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { ResourceTypeComponent } from "./resourcetype/resource-type.component";
import { ResourceComponent } from "./resource/resource.component";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { APIOverviewComponent } from "./api/api-overview.component";
import { APIResourcesComponent } from "./api/api-resources.component";
import { APIResourceTypesComponent } from "./api/api-resource-types.component";
import { APISearchComponent } from "./api/api-search.component";
import { APIVersionsComponent } from "./api/api-versions.component";
import { ResourceTypeDetailsComponent } from "./resourcetype/resource-type-detail.component";

@Component({
  selector: 'metadata-registry-service',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  // providers: [
  //     HeroService
  // ],
  /*styleUrls: ['app/app.component.css']*/
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/configuration',
    name: 'Configuration',
    component: ConfigurationComponent,
  },
  {
    path: '/resourceType/...',
    name: 'ResourceType',
    component: ResourceTypeComponent,
  },
  {
    path: '/resource',
    name: 'Resource',
    component: ResourceComponent,
  },
  {
    path: '/api/overview',
    name: 'APIOverview',
    component: APIOverviewComponent,
  },
  {
    path: '/api/resourceTypes',
    name: 'APIResourceTypesDocumentation',
    component: APIResourceTypesComponent,
  },
  {
    path: '/api/resources',
    name: 'APIResourcesDocumentation',
    component: APIResourcesComponent,
  },
  {
    path: '/api/search',
    name: 'APISearchDocumentation',
    component: APISearchComponent,
  },
  {
    path: '/api/versions',
    name: 'APIVersionsDocumentation',
    component: APIVersionsComponent,
  },
  // {
  //     path: '/detail/:name',
  //     name: 'ResourceTypeDetails',
  //     component: ResourceTypeDetailsComponent,
  // },
  // {
  //   path: '/resourceType/detail/:name',
  //   name: 'ResourceTypeDetails',
  //   component: ResourceTypeDetailsComponent
  // },
  /*{
   path: '/detail/:id',
   name: 'HeroDetail',
   component: HeroDetailComponent
   },*/
  {
    path: '/**',
    redirectTo: ['Dashboard']
  }
])

export class AppComponent {

  title = 'Metadata Registry Service';
}

