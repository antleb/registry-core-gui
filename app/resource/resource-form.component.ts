/**
 * Created by stefania on 5/26/16.
 */
import { Component, OnInit, Input } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Resource }    from './resource';
import { ResourceType } from "../resourcetype/resource-type";
import { ResourceTypeService } from "../resourcetype/resource-type.service";
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'resource-form',
    templateUrl: 'app/resource/resource-form.component.html'
})
export class ResourceFormComponent implements OnInit {

    ngOnInit() {
        this.getResourceTypes();
    }

    @Input() resource : Resource;

    // private resource : Resource;
    private resourceTypes : ResourceType[];
    public errorMessage: string;

    constructor(private router: Router,
                private _resourceTypeService: ResourceTypeService) {
    }

    getResourceTypes() {
        this._resourceTypeService.getResourceTypes().subscribe(
            resourceTypePage => this.resourceTypes = resourceTypePage.results,
            error =>  this.errorMessage = <any>error);
    }


    // powers = ['Really Smart', 'Super Flexible',
    //     'Super Hot', 'Weather Changer'];
    //
    // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    // get diagnostic() { return JSON.stringify(this.model); }

    goBack() {
        window.history.back();
    }
}