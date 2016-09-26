/**
 * Created by stefania on 5/26/16.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceType } from './../../domain/resource-type';
import { ResourceTypeService } from './../../services/resource-type.service';
import { ResourceTypePage } from "./../../domain/resource-type-page";

@Component({
    selector: 'resource-type-list',
    templateUrl: 'app/pages/resourcetype/resource-type-list.component.html',
    styleUrls:  ['app/pages/resourcetype/resource-type-list.component.css'],
})

export class ResourceTypeListComponent implements OnInit {

    ngOnInit() {
        this.getResourceTypes();
    }

    public resourceTypePage: ResourceTypePage;
    public errorMessage: string;

    constructor(private _router: Router,
                private _resourceTypeService: ResourceTypeService) {}

    getResourceTypes() {
        this._resourceTypeService.getResourceTypes().subscribe(
            resourceTypePage => this.resourceTypePage = resourceTypePage,
            error =>  this.errorMessage = <any>error);
    }

    public selectedResourceType: ResourceType;

    gotoDetail(resourceType: ResourceType) {

        this._router.navigate(['/resourceType/detail', resourceType.name ]);
        // this.selectedResourceType = resourceType;
        // let link = ['ResourceTypeDetails', { name: resourceType.name }];
        // this._router.navigate(link);
    }
    
    addNewResourceType() {
        // let link = ['NewResource'];
        // this.router.navigate(link);
        this._router.navigate(['/resourceType/new']);
    }
}