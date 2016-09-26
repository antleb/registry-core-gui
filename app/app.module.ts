/**
 * Created by stefania on 9/16/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { routing, appRoutingProviders } from "./app.routing";
import { DashboardComponent } from "./dashboard.component";
import { ConfigurationComponent } from "./pages/configuration/configuration.component";
import { ResourceTypeComponent } from "./pages/resourcetype/resource-type.component";
import { ResourceComponent } from "./pages/resource/resource.component";
import { APIOverviewComponent } from "./pages/api/api-overview.component";
import { APIResourcesComponent } from "./pages/api/api-resources.component";
import { APIResourceTypesComponent } from "./pages/api/api-resource-types.component";
import { APISearchComponent } from "./pages/api/api-search.component";
import { APIVersionsComponent } from "./pages/api/api-versions.component";
import { ResourcesModule } from "./pages/resource/resource.module";
import { ResourceTypesModule } from "./pages/resourcetype/resource-type.module";

@NgModule({

    imports: [
        BrowserModule,
        routing,
        ResourcesModule, 
        ResourceTypesModule,
        HttpModule,
        JsonpModule,
    ],

    declarations: [
        AppComponent,
        DashboardComponent,
        ConfigurationComponent,
        ResourceTypeComponent,
        ResourceComponent,
        APIOverviewComponent,
        APIResourcesComponent,
        APIResourceTypesComponent,
        APISearchComponent,
        APIVersionsComponent
    ],

    providers: [
        appRoutingProviders
    ],

    bootstrap: [ AppComponent ]
})

export class AppModule { }