import {FC} from "react";


import {IGenres} from "../../interfaces";
import {pngUrl} from "../../configs";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {convertTime, moneyConverter} from "../../utils";
import {StarsRating} from "../StarsRating/StarsRating";
import {useAppSelector} from "../../hooks";
import {accountService} from "../../services";

import scss from './MovieInfo.module.scss'

export interface IMovieInfo {
    id: number,
    title: string,
    original_title: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    runtime: number
    genres: IGenres[],
    budget: number,
    revenue: number,
    vote_average: number,
    overview: string
}


const MovieInfo: FC<IMovieInfo> = ({
                                       id,
                                       budget,
                                       revenue,
                                       original_title,
                                       overview,
                                       backdrop_path,
                                       vote_average,
                                       runtime,
                                       genres,
                                       title,
                                       poster_path,
                                       release_date
                                   }) => {


    const {session_id, account_id} = useAppSelector(state => state.authReducer)

    const addToWatchList = async () => {
        if (session_id && account_id) {
            const {data} = await accountService.addToWatchList("movie", id, true, session_id, account_id)
            alert(data.status_message+'  Look at your profile on the bottom left')
        } else {
            alert('pls login')
        }

    }

    const markAsFavorite = async () => {
        if (session_id && account_id) {
            const {data} = await accountService.markAsFavorite("movie", id, true, session_id, account_id)
            alert(data.status_message+'  Look at your profile on the bottom left')
        } else {
            alert('pls login')
        }

    }

    return (
        <div className={scss.movie} style={{backgroundImage: `url(${pngUrl + backdrop_path})`}}>
            <div className={scss.movie__info}>
                <img src={poster_path ? pngUrl + poster_path
                    : 'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'}
                     alt={title}/>
                <div className={scss.movie__info__description}>
                    <span>
                       <h1>{title}</h1>
                        <p>({original_title})</p>
                    </span>

                    <p>Release data: {release_date}</p>

                    <GenreBadge type={"movie"} genresIds={genres.map(genre => genre.id)}/>
                    <p>Viewing time: {convertTime(runtime)}</p>
                    <span>
                        {!!budget && <p>Budget: ${moneyConverter(budget)} / </p>}
                        {!!revenue && <p>/ Revenue: ${moneyConverter(revenue)}</p>}
                    </span>

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

export {MovieInfo};
