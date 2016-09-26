/**
 * Created by stefania on 9/16/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";
import { ConfigurationComponent } from "./pages/configuration/configuration.component";
import { APIOverviewComponent } from "./pages/api/api-overview.component";
import { APIResourceTypesComponent } from "./pages/api/api-resource-types.component";
import { APIResourcesComponent } from "./pages/api/api-resources.component";
import { APISearchComponent } from "./pages/api/api-search.component";
import { APIVersionsComponent } from "./pages/api/api-versions.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'configuration',
        component: ConfigurationComponent,
    },
    {
        path: 'api/overview',
        component: APIOverviewComponent,
    },
    {
        path: 'api/resourceTypes',
        component: APIResourceTypesComponent,
    },
    {
        path: 'api/resources',
        component: APIResourcesComponent,
    },
    {
        path: 'api/search',
        component: APISearchComponent,
    },
    {
        path: 'api/versions',
        component: APIVersionsComponent,
    }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);