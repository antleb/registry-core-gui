/**
 * Created by stefania on 4/8/16.
 */
import {Component, OnInit} from 'angular2/core';
import { ResourceType } from "./resource-type";
import { ResourceTypeService } from "./resource-type.service";
import { HTTP_PROVIDERS } from "angular2/http";

// import {provide}           from 'angular2/core';
// import {XHRBackend}        from 'angular2/http';
//
// import {InMemoryBackendService, SEED_DATA}         from 'a2-in-memory-web-api/core';
// import {ResourceTypeData}          from './resource-types-data';
import {ResourceTypePage} from "./resource-type-page";
import {RouteConfig, Router} from "angular2/router";
import {ResourceTypeDetailsComponent} from "./resource-type-detail.component";

@Component({
    selector: 'resource-type',
    templateUrl: 'app/resourcetype/resource-type.component.html',
    providers: [ResourceTypeService,
        HTTP_PROVIDERS,
        // provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
        // provide(SEED_DATA,  { useClass: ResourceTypeData }) // in-mem server data
    ],
})

/*@RouteConfig([
    {
        path: '/resourceType/detail/:name',
        name: 'ResourceTypeDetails',
        component: ResourceTypeDetailsComponent,
    },
])*/

export class ResourceTypeComponent implements OnInit {

    ngOnInit() {
        this.getResourceTypes();
    }

    // public resourceTypes: ResourceType[];
    public resourceTypePage: ResourceTypePage;
    public errorMessage: string;

    constructor(private router: Router,
                private _resourceTypeService: ResourceTypeService) {}

    getResourceTypes() {
        this._resourceTypeService.getResourceTypes().subscribe(
            resourceTypePage => this.resourceTypePage = resourceTypePage,
            // resourceTypes => this.resourceTypes = resourceTypes,
            error =>  this.errorMessage = <any>error);

        // console.log(this.resourceTypePage);
    }

    // gotoDetail(resourceType: ResourceType) {
    //     let link = ['ResourceTypeDetails', { name: resourceType.name }];
    //     this.router.navigate(link);
    // }
}