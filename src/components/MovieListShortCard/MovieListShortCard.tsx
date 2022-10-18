import {FC} from "react";

import {IMovieCardProps} from "../../interfaces";

import scss from './MovieListShortCard.module.scss'
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Link} from "react-router-dom";
import {pngUrl} from "../../configs";
import {StarsRating} from "../StarsRating/StarsRating";

const MovieListShortCard:FC<IMovieCardProps> = ({movie}) => {
    return (
        <div className={scss.card}>
            <img src={pngUrl+movie.poster_path} alt={movie.title}/>
            <Link to={''}>
                           <div className={scss.card__content}>
                <div className={scss.card__content__banges}><GenreBadge genresIds={movie.genre_ids}/></div>
                               <div className={scss.card__content__contrast}>
                               </div>
                <div className={scss.card__content__info}>
                    <h2>{movie.title}</h2>
                    <p>Release data:{movie.release_date}</p>
                    <StarsRating rating={movie.vote_average}/>
                </div>
            </div>
            </Link>

        </div>
    );
};

export {MovieListShortCard};
