/**
 * Created by stefania on 5/26/16.
 */
import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { ResourceService } from './resource.service';
import { Resource } from "./resource";
import { ResourceFormComponent } from "./resource-form.component";

@Component({
    selector: 'new-resource',
    templateUrl: 'app/resource/new-resource.component.html',
    directives: [ResourceFormComponent]
})

export class NewResourceComponent {

    public resource: Resource;
    public errorMessage: string;


    constructor(
        private resourceService: ResourceService,
        private routeParams: RouteParams) {
    }

    // ngOnInit() {
    //
    //     let resourceType = this.routeParams.get('resourceType');
    //     let id = this.routeParams.get('id');
    //
    //     this.resourceService.getResource(resourceType, id).subscribe(
    //         resource => this.resource = resource,
    //         error =>  this.errorMessage = <any>error);
    // }


    goBack() {
        window.history.back();
    }
}