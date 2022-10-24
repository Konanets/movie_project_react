import {FC} from "react";
import {Link} from "react-router-dom";

import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StarsRating} from "../../StarsRating/StarsRating";

import scss from '../../MovieListCard/MovieListCard.module.scss'

export interface ITvsProps {
    id: number,
    title: string,
    vote_average: number,
    poster_path: string,
    genre_ids: number[],
    first_air_date: string,


}


const TvListCard: FC<ITvsProps> = ({
                                       id,
                                       first_air_date,
                                       title,
                                       vote_average,
                                       poster_path,
                                       genre_ids
                                   }) => {
    return (
        <Link to={`/tv/${id}`}>
            <div className={scss.card}>
                <PosterPreview alt={title} genre_ids={genre_ids} url={poster_path} type={"tv"}/>
                <div className={scss.card__info}>
                    <h1>{title}</h1>
                    <StarsRating rating={vote_average} color={"yellow"}/>
                    <p>First air date: {first_air_date}</p>
                    <p>Rating: {vote_average}</p>
                </div>
            </div>

        </Link>
    );
};

export {TvListCard};
