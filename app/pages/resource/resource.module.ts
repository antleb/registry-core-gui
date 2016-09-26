/**
 * Created by stefania on 9/16/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ResourceListComponent }    from './resource-list.component';
import { ResourceDetailsComponent }  from './resource-detail.component';

import { ResourceService } from './../../services/resource.service';
import {resourcesRouting} from "./resource.routing";
import { NewResourceComponent } from "./new-resource.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        resourcesRouting
    ],
    declarations: [
        ResourceListComponent,
        ResourceDetailsComponent, 
        NewResourceComponent
    ],
    providers: [
        ResourceService
    ]
})

export class ResourcesModule {}