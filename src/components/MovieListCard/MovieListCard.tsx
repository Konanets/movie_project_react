import {FC} from "react";

import {Link} from "react-router-dom";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";

import scss from './MovieListCard.module.scss'

export interface ICardsProps {
    movie: {
        id: number,
        title: string,
        vote_average: number,
        poster_path: string,
        genre_ids: number[],
        release_date: string,
        backdrop_path: string,
        overview: string

    }
}


const MovieListCard: FC<ICardsProps> = ({movie}) => {
    return (
        <Link to={''}>
            <div className={scss.card}>
                <PosterPreview alt={movie.title} genre_ids={movie.genre_ids} url={movie.poster_path}/>
                <div className={scss.card__info}>
                    <h1>{movie.title}</h1>
                    <StarsRating rating={movie.vote_average} color={"yellow"}/>
                    <p>Release date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                </div>
            </div>

        </Link>
    );
};

export {MovieListCard};
