/**
 * Created by stefania on 5/17/16.
 */
import { Component, Input } from '@angular/core';
import {ResourceType} from "./resource-type";
import {RouteParams} from "angular2/router";
import {ResourceTypeService} from "./resource-type.service";
import {OnInit} from "angular2/core";

@Component({
    selector: 'resource-type-detail',
  //   template: `
  //   <div *ngIf="resourceType">
  //     <h2>{{resourceType.name}} details</h2>
  //     <div>
  //       <label>id: </label>{{resourceType.id}}
  //     </div>
  //     <button (click)="goBack()">Back</button>
  //   </div>
  // `
})

export class ResourceTypeDetailsComponent implements OnInit {

    // public resourceType: ResourceType;
    // public errorMessage: string;
    //
    // ngOnInit() {
    //     let name = this.routeParams.get('name');
    //
    //     this._resourceTypeService.getResourceType(name).subscribe(
    //         resourceType => this.resourceType = resourceType,
    //         // resourceTypes => this.resourceTypes = resourceTypes,
    //         error =>  this.errorMessage = <any>error);
    // }
    //
    // constructor(
    //     private resourceTypeService: ResourceTypeService,
    //     private routeParams: RouteParams) {
    // }
    //
    // goBack() {
    //     window.history.back();
    // }

    // @Input() resourceType: ResourceType;
}