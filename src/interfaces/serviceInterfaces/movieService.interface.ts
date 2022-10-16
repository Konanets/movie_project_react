import {IResultsMovie} from "../slicesInterfaces";

export interface IMoviesService{
    page:number,
    results:IResultsMovie[],
    total_results:number,
    total_pages:number
}
