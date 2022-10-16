import {axiosInstance, AxiosRes} from "./axios.service";

import {simpleSearchRes} from "../interfaces";
import {_urls} from "../configs";


const searchService={
    search:(name:string=''):AxiosRes<simpleSearchRes>=>axiosInstance.get(`${_urls.search}${_urls.multi}?query=${name}`)
}

export {
    searchService
}
