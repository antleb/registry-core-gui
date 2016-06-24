/**
 * Created by stefania on 5/26/16.
 */

import { Component, OnInit } from '@angular/core';
import { ResourcePage } from "./resource-page";
import { Router } from '@angular/router-deprecated';
import { ResourceService } from "./resource.service";
import { Resource } from "./resource";

@Component({
    selector: 'resource-list',
    templateUrl: 'app/resource/resource-list.component.html',
})

export class ResourceListComponent implements OnInit {

    ngOnInit() {
        this.getResources();
    }

    public resourcePage: ResourcePage;
    public errorMessage: string;

    constructor(private router: Router,
                private _resourceService: ResourceService) {}

    getResources() {
        this._resourceService.getResources().subscribe(
            resourcePage => this.resourcePage = resourcePage,
            error =>  this.errorMessage = <any>error);
    }

    public selectedResource: Resource;

    gotoDetail(resource: Resource) {
        this.selectedResource = resource;
        let link = ['ResourceDetails', {resourceType: resource.resourceType, id: resource.id }];
        this.router.navigate(link);
    }

    addNewResource() {
        let link = ['NewResource'];
        this.router.navigate(link);
    }
}