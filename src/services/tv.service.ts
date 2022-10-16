import {axiosInstance, AxiosRes} from "./axios.service";


const tvService={
    getAll:():AxiosRes<any>=>axiosInstance.get(''),
    getTrendingTvs:():AxiosRes<any>=>axiosInstance.get('')
}

export {
    tvService
}
