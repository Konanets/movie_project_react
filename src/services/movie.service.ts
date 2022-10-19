import {axiosInstance, AxiosRes} from "./axios.service";

import {_urls} from "../configs";
import {IMoviesService} from "../interfaces";


const movieService={
    getAll:(page:number=1):AxiosRes<IMoviesService>=>axiosInstance.get(_urls.discover+_urls.movie+'?page='+page),
    getTrendingMovies:():AxiosRes<IMoviesService>=>axiosInstance.get(_urls.trending+_urls.movie+_urls.day),
    getNow_playingMovies:():AxiosRes<IMoviesService>=>axiosInstance.get(_urls.movie+_urls.now_playing+'?language=en-US&page=2')
}

export {
    movieService
}
