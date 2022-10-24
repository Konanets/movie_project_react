import {axiosInstance, AxiosRes} from "./axios.service";
import {ITvService} from "../interfaces";
import {_urls} from "../configs";


const tvService = {
    getAll: (page: number = 1, sortBy: string, genres: string): AxiosRes<ITvService> =>
        axiosInstance.get(_urls.discover + _urls.tv + '?page=' + page + '&sort_by=' + sortBy + '&with_genres='
            + genres + '&primary_release_year=2022'),
}

export {
    tvService
}
