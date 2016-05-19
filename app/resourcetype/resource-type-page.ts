import {ResourceType} from "./resource-type";
/**
 * Created by stefania on 5/16/16.
 */
export interface ResourceTypePage {
    total: number;
    from: number;
    to: number;
    results: ResourceType[];
}