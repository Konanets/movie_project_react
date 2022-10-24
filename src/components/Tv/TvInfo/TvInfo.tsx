import {FC} from "react";

import {pngUrl} from "../../../configs";
import {GenreBadge} from "../../GenreBadge/GenreBadge";
import {StarsRating} from "../../StarsRating/StarsRating";
import {useAppSelector} from "../../../hooks";
import {accountService} from "../../../services";
import {IGenres} from "../../../interfaces";

import scss from "../../MovieInfo/MovieInfo.module.scss";

export interface ITvInfo {
    id: number,
    name: string,
    original_title: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    genres: IGenres[],
    vote_average: number,
    overview: string,
    number_of_seasons: number,
    number_of_episodes: number
}


const TvInfo: FC<ITvInfo> = ({
                                 number_of_episodes,
                                 number_of_seasons,
                                 original_title,
                                 overview,
                                 backdrop_path,
                                 vote_average,
                                 genres,
                                 name,
                                 release_date,
                                 poster_path,
                                 id
                             }) => {


    const {session_id, account_id} = useAppSelector(state => state.authReducer)

    const addToWatchList = async () => {
        if (session_id && account_id) {
            const {data} = await accountService.addToWatchList("tv", id, true, session_id, account_id)
            alert(data.status_message)
        } else {
            alert('pls login')
        }

    }

    const markAsFavorite = async () => {
        if (session_id && account_id) {
            const {data} = await accountService.markAsFavorite("tv", id, true, session_id, account_id)
            alert(data.status_message)
        } else {
            alert('pls login')
        }

    }


    return (
        <div className={scss.movie} style={{backgroundImage: `url(${pngUrl + backdrop_path})`}}>
            <div className={scss.movie__info}>
                <img src={poster_path ? pngUrl + poster_path
                    :'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'}
                     alt={name}/>
                <div className={scss.movie__info__description}>
                    <span>
                       <h1>{name}</h1>
                        <p>({original_title})</p>
                    </span>

                    <p>Release data: {release_date}</p>

                    <GenreBadge type={"movie"} genresIds={genres.map(genre => genre.id)}/>
                    <p>Number of seasons: {number_of_seasons}</p>

                    <p>Number of episodes: {number_of_episodes}</p>

                    <StarsRating rating={vote_average} color={"white"}/>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <div className={scss.movie__actions}>
                        <button className={scss.movie__actions_btn} onClick={() => addToWatchList()}>Add to Watch list
                        </button>
                        <button className={scss.movie__actions_btn} onClick={() => markAsFavorite()}>Mark as Favorite
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {TvInfo};
