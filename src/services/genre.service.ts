import {axiosInstance, AxiosRes} from "./axios.service";

import {IGenresService} from "../interfaces";
import {_urls} from "../configs";


const genreService={
    getAllMovieGenre:():AxiosRes<IGenresService>=>axiosInstance.get(`${_urls.genre}${_urls.movie}${_urls.list}`),

    getAllTvGenre:():AxiosRes<IGenresService>=>axiosInstance.get(`${_urls.genre}${_urls.tv}${_urls.list}`)
}

export {
    genreService
}
