/**
 * Created by stefania on 9/16/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceTypeListComponent } from "./resource-type-list.component";
import { ResourceTypeDetailsComponent } from "./resource-type-detail.component";
import { NewResourceTypeComponent } from "./new-resource-type.component";



const resourceTypesRoutes: Routes = [
    {
        path: 'resourceType',
        component: ResourceTypeListComponent
    },
    {
        path: 'resourceType/detail/:name',
        component: ResourceTypeDetailsComponent
    },
    {
        path: 'resourceType/new',
        component: NewResourceTypeComponent,
    },
];

export const resourceTypesRouting: ModuleWithProviders = RouterModule.forChild(resourceTypesRoutes);