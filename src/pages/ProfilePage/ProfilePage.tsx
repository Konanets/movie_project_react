import {FC, useEffect, useState} from "react";

import {IAccountDetail, IResultsMovie, IResultsTv, ITvService} from "../../interfaces";
import {accountService} from "../../services";
import {useAppSelector} from "../../hooks";
import {pngUrl} from "../../configs";
import {MovieListShortCard, TvListCard} from "../../components";

import scss from './ProfilePage.module.scss'

const ProfilePage: FC = () => {

    const {session_id, account_id} = useAppSelector(state => state.authReducer)

    const [user, setUser] = useState<IAccountDetail>()
    const [movieWatchList, setMovieWatchList] = useState<IResultsMovie[]>()
    const [movieFavoriteList, setMovieFavoriteList] = useState<IResultsMovie[]>()
    const [tvWatchList, setTvWatchList] = useState<IResultsTv[]>()
    const [tvFavoriteList, setTvFavoriteList] = useState<IResultsTv[]>()

    useEffect(() => {
        accountService.getDetails(session_id).then(({data}) => {
            setUser(data)
        })
        accountService.getMovieWatchlist(account_id, session_id).then(({data}) => {
            setMovieWatchList(data.results)
        })
        accountService.getFavoriteMovies(account_id, session_id).then(({data}) => {
            setMovieFavoriteList(data.results)
        })
        accountService.getTvWatchlist(account_id, session_id).then(({data}) => {
            setTvWatchList(data.results)
        })
        accountService.getFavoriteTv(account_id, session_id).then(({data}) => {
            setTvFavoriteList(data.results)
        })
    }, [])

    const removeFromWatchList = async (id: number, type: 'movie' | 'tv') => {
        const {data} = await accountService.addToWatchList(type, id, false, session_id, account_id)
        alert(data.status_message)
        if (type === 'movie') {
            setMovieWatchList(prevState => prevState?.filter(movie => movie.id !== id))
        }

    }

    const removeFromFavoriteList = async (id: number, type: 'movie' | 'tv') => {
        const {data} = await accountService.markAsFavorite(type, id, false, session_id, account_id)
        alert(data.status_message)
        if (type === 'movie') {
            setMovieFavoriteList(prevState => prevState?.filter(movie => movie.id !== id))
        }

    }

    const avatarImg = user?.avatar?.tmdb.avatar_path ? pngUrl + user.avatar.tmdb.avatar_path
        : 'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'

    return (
        <div>
            <div className={scss.profile}>
                <div className={scss.profile__info}>
                    <img src={avatarImg} alt={user?.name}/>
                    <div className={scss.profile__info_data}>
                        {user?.name && <h1>name:{user?.name}</h1>}
                        <h2>User Name: {user?.username}</h2>
                        <p>Country: {user?.iso_3166_1}</p>
                        <p>Language: {user?.iso_639_1}</p>
                    </div>
                </div>
            </div>

            <div className={scss.profile__list}>
                <h1>Movie Watch List</h1>
                <div className={scss.profile__list__cards}>
                    {movieWatchList?.length ? movieWatchList.map(movie =>
                        <div key={movie.id}>
                            <MovieListShortCard movie={movie}/>
                            <button className={scss.btn} onClick={() => removeFromWatchList(movie.id, 'movie')}>Remove
                            </button>
                        </div>
                    ) : <h1>Nothing here...</h1>}
                </div>
            </div>

            <div className={scss.profile__list}>
                <h1>Movie Favorite List</h1>
                <div className={scss.profile__list__cards}>
                    {movieFavoriteList?.length ? movieFavoriteList.map(movie =>
                        <div key={movie.id}>
                            <MovieListShortCard movie={movie}/>
                            <button className={scss.btn}
                                    onClick={() => removeFromFavoriteList(movie.id, 'movie')}>Remove
                            </button>
                        </div>
                    ) : <h1>Nothing here...</h1>}
                </div>
            </div>

            <div className={scss.profile__list}>
                <h1>Tv Favorite List</h1>
                <div className={scss.profile__list__cards}>
                    {tvFavoriteList?.length ? tvFavoriteList.map(tv =>
                        <div key={tv.id}>
                            <TvListCard
                                first_air_date={tv.first_air_date}
                                id={tv.id}
                                genre_ids={tv.genre_ids}
                                poster_path={tv.poster_path}
                                title={tv.name}
                                vote_average={tv.vote_average}/>
                            <button className={scss.btn}
                                    onClick={() => removeFromFavoriteList(tv.id, 'tv')}>Remove
                            </button>
                        </div>
                    ) : <h1>Nothing here...</h1>}
                </div>
            </div>


            <div className={scss.profile__list}>
                <h1>Tv Watch List</h1>
                <div className={scss.profile__list__cards}>
                    {tvWatchList?.length ? tvWatchList.map(tv =>
                        <div key={tv.id}>
                            <TvListCard
                                first_air_date={tv.first_air_date}
                                id={tv.id}
                                genre_ids={tv.genre_ids}
                                poster_path={tv.poster_path}
                                title={tv.name}
                                vote_average={tv.vote_average}/>
                            <button className={scss.btn}
                                    onClick={() => removeFromWatchList(tv.id, 'tv')}>Remove
                            </button>
                        </div>
                    ) : <h1>Nothing here...</h1>}
                </div>
            </div>


        </div>

    );
};

export {ProfilePage};
