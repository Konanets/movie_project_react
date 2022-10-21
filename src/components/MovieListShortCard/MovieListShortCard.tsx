import {FC, memo} from "react";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Link} from "react-router-dom";
import {pngUrl} from "../../configs";
import {StarsRating} from "../StarsRating/StarsRating";

import scss from './MovieListShortCard.module.scss'

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

const MovieListShortCard: FC<ICardsProps> = memo(
    ({movie}) => {
        console.log('shortCard')
        return (
            <div className={scss.card}>
                <img
                    src={movie.poster_path
                        ? pngUrl + movie.poster_path
                        : 'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'}
                    alt={movie.title}/>
                <Link to={`/movie/${movie.id}`}>
                    <div className={scss.card__content}>
                        <div className={scss.card__content__banges}><GenreBadge genresIds={movie.genre_ids}/></div>
                        <div className={scss.card__content__contrast}>
                        </div>
                        <div className={scss.card__content__info}>
                            <h2>{movie.title}</h2>
                            <p>Release data:{movie.release_date}</p>
                            <p>Rating: {movie.vote_average}</p>
                            <StarsRating rating={movie.vote_average} color={"white"}/>
                        </div>
                    </div>
                </Link>

            </div>
        );
    }
)

export {MovieListShortCard};
