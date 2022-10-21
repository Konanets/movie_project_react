import {axiosInstance, AxiosRes} from "./axios.service";

import {_urls} from "../configs";
import {IMovie, IMoviesService, IVideos} from "../interfaces";


const movieService = {
    getAll: (page: number = 1, sortBy: string , genres: string ): AxiosRes<IMoviesService> =>
        axiosInstance.get(_urls.discover + _urls.movie + '?page=' + page + '&sort_by=' + sortBy + '&with_genres=' + genres),
    getTrendingMovies: (): AxiosRes<IMoviesService> => axiosInstance.get(_urls.trending + _urls.movie + _urls.day),
    getNow_playingMovies: (): AxiosRes<IMoviesService> => axiosInstance.get(_urls.movie + _urls.now_playing + '?language=en-US&page=2'),
    getSimilarMovies: (id: string): AxiosRes<IMoviesService> => axiosInstance.get(_urls.movie + '/' + id + _urls.similar),
    getMovieById: (id: string): AxiosRes<IMovie> => axiosInstance.get(_urls.movie + '/' + id),
    getVideosById: (id: string): AxiosRes<IVideos> => axiosInstance.get(_urls.movie + `/${id}` + _urls.videos)
}

export {
    movieService
}
