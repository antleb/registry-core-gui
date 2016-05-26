/**
 * Created by stefania on 5/26/16.
 */

import { Component, OnInit } from '@angular/core';
import { ResourceType } from './resource-type';
import { Router } from '@angular/router-deprecated';
import { ResourceTypeService } from './resource-type.service';
import { ResourceTypePage } from "./resource-type-page";

@Component({
    selector: 'resource-type-list',
    templateUrl: 'app/resourcetype/resource-type-list.component.html',
})

export class ResourceTypeListComponent implements OnInit {

    ngOnInit() {
        this.getResourceTypes();
    }

    public resourceTypePage: ResourceTypePage;
    public errorMessage: string;

    constructor(private router: Router,
                private _resourceTypeService: ResourceTypeService) {}

    getResourceTypes() {
        this._resourceTypeService.getResourceTypes().subscribe(
            resourceTypePage => this.resourceTypePage = resourceTypePage,
            error =>  this.errorMessage = <any>error);
    }

    public selectedResourceType: ResourceType;

    gotoDetail(resourceType: ResourceType) {
        this.selectedResourceType = resourceType;
        let link = ['ResourceTypeDetails', { name: resourceType.name }];
        this.router.navigate(link);
    }
}