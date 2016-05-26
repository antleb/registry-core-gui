/**
 * Created by stefania on 4/11/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ResourceType } from './resource-type';
import { Observable } from 'rxjs/Observable';
import { ResourceTypePage } from './resource-type-page';


@Injectable()
export class ResourceTypeService {

    constructor (private http: Http) {}

    private _resourceTypesUrl = 'http://83.212.96.150:8080/RegistryService/resourceType/';
    // private _resourceTypesUrl = 'app/resourceTypePage';
    // private _resourceTypesUrl = 'app/resourceTypes';
    // private _resourceTypesUrl = 'app/resourcetype/mock-resource-types.json';

    getResourceTypes () {
        return this.http.get(this._resourceTypesUrl)
            // .map(res => <ResourceType[]> res.json().data)
            .map(res => <ResourceTypePage> res.json())
            // .map(this.extractData)
            // .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);
    }

    getResourceType(name: string) {
        return this.http.get(this._resourceTypesUrl + name)
            .map(res => <ResourceType> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    // getResourceTypes() {
    //     return Promise.resolve(RESOURCE_TYPES);
    // }
}