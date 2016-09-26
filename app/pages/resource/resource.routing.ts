/**
 * Created by stefania on 9/16/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceListComponent } from "./resource-list.component";
import { ResourceDetailsComponent } from "./resource-detail.component";
import { NewResourceComponent } from "./new-resource.component";

const resourcesRoutes: Routes = [
    {
        path: 'resource',
        component: ResourceListComponent
    },
    {
        path: 'resource/detail/:resourceType/:id',
        component: ResourceDetailsComponent
    },
    {
        path: 'resource/new',
        component: NewResourceComponent,
    },
];

export const resourcesRouting: ModuleWithProviders = RouterModule.forChild(resourcesRoutes);