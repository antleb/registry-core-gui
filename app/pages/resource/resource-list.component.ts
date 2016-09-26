/**
 * Created by stefania on 5/26/16.
 */

import { Component, OnInit } from '@angular/core';
import { ResourcePage } from "./../../domain/resource-page";
import { Router } from '@angular/router';
import { ResourceService } from "./../../services/resource.service";
import { Resource } from "./../../domain/resource";

@Component({
    selector: 'resource-list',
    templateUrl: 'app/pages/resource/resource-list.component.html',
})

export class ResourceListComponent implements OnInit {

    ngOnInit() {
        this.getResources();
    }

    public resourcePage: ResourcePage;
    public errorMessage: string;

    constructor(private _router: Router,
                private _resourceService: ResourceService) {}

    getResources() {
        this._resourceService.getResources().subscribe(
            resourcePage => this.resourcePage = resourcePage,
            error =>  this.errorMessage = <any>error);
    }

    gotoDetail(resource: Resource) {
        this._router.navigate(['/resource/detail', resource.resourceType, resource.id ]);
    }

    addNewResource() {
        this._router.navigate(['/resource/new']);
    }
}