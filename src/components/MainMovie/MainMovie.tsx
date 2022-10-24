import {FC, memo} from "react";
import {Link} from "react-router-dom";

import {truncateString} from "../../utils";
import {pngUrl} from "../../configs";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";


import scss from './MainMovie.module.scss'

interface IMainMovieProps {
    id: number,
    title: string,
    poster_path: string,
    genre_ids: number[],
    overview: string,
    vote_average: number,
    release_date: string
}

const MainMovie: FC<IMainMovieProps> = memo(({
                                                 id,
                                                 genre_ids,
                                                 overview,
                                                 poster_path,
                                                 title,
                                                 release_date,
                                                 vote_average
                                             }) => {
    return (
        <div className={scss.container}>
            <h1>Our recommendation</h1>
            <div className={scss.content}>
                <img src={`${pngUrl}${poster_path}`} alt=""/>
                <div className={scss.content__info}>
                    <h1>{title}</h1>
                    <GenreBadge genresIds={genre_ids} type={"movie"}/>
                    <div>
                        <h2>Overview</h2>
                        <p>{truncateString(overview, 150)}</p>
                    </div>
                    <StarsRating rating={vote_average} color={"white"}/>
                    <p>Release data: {release_date}</p>
                    <Link className={scss.square_btn} to={`/movie/${id}`}>More Info</Link>
                </div>
            </div>
        </div>
    );
})

export {MainMovie};
