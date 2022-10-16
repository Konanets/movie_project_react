import {IResultsMovie, IResultsTv} from "../slicesInterfaces";

export type CompareType=IResultsMovie&IResultsTv

export interface simpleSearchRes{
    results:CompareType[]
}
