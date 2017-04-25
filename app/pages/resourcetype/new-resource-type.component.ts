/**
 * Created by stefania on 9/26/16.
 */
import { Component } from '@angular/core';
import { ResourceType } from "../../domain/resource-type";

@Component({
    selector: 'new-resource-type',
    templateUrl: 'app/pages/resourcetype/new-resource-type.component.html',
    styleUrls:  ['app/pages/resourcetype/new-resource-type.component.css'],
})

export class NewResourceTypeComponent {

    public resource: ResourceType;
    public errorMessage: string;


    // constructor(
    //     private resourceService: ResourceService,
    //     private routeParams: RouteParams) {
    // }

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