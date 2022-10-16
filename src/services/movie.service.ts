import {axiosInstance, AxiosRes} from "./axios.service";

import {_urls} from "../configs";
import {IMoviesService} from "../interfaces";


const movieService={
    getAll:():AxiosRes<IMoviesService>=>axiosInstance.get(_urls.discover+_urls.movie),
    getTrendingMovies:():AxiosRes<IMoviesService>=>axiosInstance.get(_urls.trending+_urls.movie+_urls.day)
}

export {
    movieService
}
