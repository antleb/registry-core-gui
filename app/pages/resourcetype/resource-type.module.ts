/**
 * Created by stefania on 9/16/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ResourceTypeListComponent }    from './resource-type-list.component';
import { ResourceTypeDetailsComponent }  from './resource-type-detail.component';

import { ResourceTypeService } from './../../services/resource-type.service';
import { resourceTypesRouting } from "./resource-type.routing";
import { NewResourceTypeComponent } from "./new-resource-type.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        resourceTypesRouting
    ],
    declarations: [
        ResourceTypeListComponent,
        ResourceTypeDetailsComponent, 
        NewResourceTypeComponent
    ],
    providers: [
        ResourceTypeService
    ]
})

export class ResourceTypesModule {}