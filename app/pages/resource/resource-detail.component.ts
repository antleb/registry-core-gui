/**
 * Created by stefania on 5/26/16.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ResourceService } from './../../services/resource.service';
import { Resource } from "./../../domain/resource";
import { ResourceFormComponent } from "./resource-form.component";

@Component({
    selector: 'resource-type-detail',
    templateUrl: 'app/pages/resource/resource-detail.component.html',
    // directives: [ResourceFormComponent]
})

export class ResourceDetailsComponent implements OnInit {

    public resource: Resource;
    public errorMessage: string;


    constructor( private _route: ActivatedRoute,
                 private _router: Router,
                 private _resourceService: ResourceService) {}

    ngOnInit() {

        this._route.params.forEach((params: Params) => {

            let resourceType = params['resourceType'];
            let id = params['id'];

            this._resourceService.getResource(resourceType, id).subscribe(
                resource => this.resource = resource,
                error =>  this.errorMessage = <any>error);
        });
        
        // let resourceType = this.routeParams.get('resourceType');
        // let id = this.routeParams.get('id');
        //
        // this._resourceService.getResource(resourceType, id).subscribe(
        //     resource => this.resource = resource,
        //     error =>  this.errorMessage = <any>error);
    }


    goBack() {
        window.history.back();
    }
}