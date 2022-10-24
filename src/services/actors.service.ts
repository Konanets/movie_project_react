import {axiosInstance, AxiosRes} from "./axios.service";

import {_urls} from "../configs";
import {IActorsById} from "../interfaces";

const actorsService={
    getActorsById:(id:string,type:'tv'|'movie'):AxiosRes<IActorsById>=>axiosInstance.get(_urls[type]+'/'+id+_urls.credits)
}

export {actorsService}
