import {axiosInstance, AxiosRes} from "./axios.service";

import {IAccountDetail, IMarkFavoriteRes, IMoviesService} from "../interfaces";
import {_urls} from "../configs";

const accountService = {
    getDetails: (session_id: string): AxiosRes<IAccountDetail> => axiosInstance.get(_urls.account + '?session_id=' + session_id),

    addToWatchList: (media_type: 'tv' | 'movie', media_id: number, watchlist: boolean, session_id: string, account_id: number): AxiosRes<IMarkFavoriteRes> =>
        axiosInstance.post(_urls.account + '/' + account_id + _urls.watchlist + '?session_id=' + session_id, {
            media_type,
            media_id,
            watchlist
        }),
    markAsFavorite: (media_type: 'tv' | 'movie', media_id: number, favorite: boolean, session_id: string, account_id: number): AxiosRes<IMarkFavoriteRes> =>
        axiosInstance.post(_urls.account + '/' + account_id + _urls.favorite + '?session_id=' + session_id, {
            media_type,
            media_id,
            favorite
        }),
    getMovieWatchlist: (account_id: number, session_id: string): AxiosRes<IMoviesService> =>
        axiosInstance.get(_urls.account + '/' + account_id + _urls.watchlist + _urls.movies + '?session_id=' + session_id),
    getFavoriteMovies: (account_id: number, session_id: string): AxiosRes<IMoviesService> =>
        axiosInstance.get(_urls.account + '/' + account_id + _urls.favorite + _urls.movies + '?session_id=' + session_id)
}

export {accountService}
