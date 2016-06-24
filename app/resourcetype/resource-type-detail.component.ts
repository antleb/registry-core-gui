/**
 * Created by stefania on 5/17/16.
 */

import { Component, OnInit } from '@angular/core';
import { ResourceType } from './resource-type';
import { RouteParams } from '@angular/router-deprecated';
import { ResourceTypeService } from './resource-type.service';

@Component({
    selector: 'resource-type-detail',
    templateUrl: 'app/resourcetype/resource-type-detail.component.html'
})

export class ResourceTypeDetailsComponent implements OnInit {

    public resourceType: ResourceType;
    public errorMessage: string;


    constructor(
        private resourceTypeService: ResourceTypeService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let name = this.routeParams.get('name');

        this.resourceTypeService.getResourceType(name).subscribe(
            resourceType => this.resourceType = resourceType,
            error =>  this.errorMessage = <any>error);
    }


    goBack() {
        window.history.back();
    }
}