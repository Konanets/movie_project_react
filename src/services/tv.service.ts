import {axiosInstance, AxiosRes} from "./axios.service";

import {ITv, ITvService, IVideos} from "../interfaces";
import {_urls} from "../configs";


const tvService = {
    getAll: (page: number = 1, sortBy: string, genres: string): AxiosRes<ITvService> =>
        axiosInstance.get(_urls.discover + _urls.tv + '?page=' + page + '&sort_by=' + sortBy + '&with_genres='
            + genres),

    getTvById: (id: string): AxiosRes<ITv> => axiosInstance.get(_urls.tv + '/' + id),

    getVideosById: (id: string): AxiosRes<IVideos> => axiosInstance.get(_urls.tv + `/${id}` + _urls.videos)
}

export {
    tvService
}
