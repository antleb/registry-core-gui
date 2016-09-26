/**
 * Created by stefania on 5/17/16.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ResourceType } from './../../domain/resource-type';
import { ResourceTypeService } from './../../services/resource-type.service';

@Component({
    selector: 'resource-type-detail',
    templateUrl: 'app/pages/resourcetype/resource-type-detail.component.html', 
    styleUrls:  ['app/pages/resourcetype/resource-type-detail.component.css'],
})

export class ResourceTypeDetailsComponent implements OnInit {

    public resourceType: ResourceType;
    public errorMessage: string;


    constructor( private _route: ActivatedRoute,
                 private _router: Router,
                 private _resourceTypeService: ResourceTypeService) {}

    ngOnInit() {

        this._route.params.forEach((params: Params) => {

            let name = params['name'];

            this._resourceTypeService.getResourceType(name).subscribe(
                resourceType => this.resourceType = resourceType,
                error =>  this.errorMessage = <any>error);
        });
    }


    goBack() {
        window.history.back();
    }
}