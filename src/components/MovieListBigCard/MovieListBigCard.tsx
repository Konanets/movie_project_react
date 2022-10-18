import {FC} from "react";

import {IMovieListBigCardProps} from "../../interfaces";
import {pngUrl} from "../../configs";

import scss from './MovieListBigCard.module.scss'
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import {truncateString} from "../../utils";

const MovieListBigCard: FC<IMovieListBigCardProps> = ({movie}) => {
    return (
        <div className={scss.bigCard__background}
             style={{backgroundColor: "blue", backgroundImage: `url(${pngUrl + movie.backdrop_path})`}}>
            <div className={scss.bigCard__info_container}>
                <div className={scss.bigCard__info}>
                    <h1>{movie.title}</h1>
                    <GenreBadge genresIds={movie.genre_ids}/>
                    <StarsRating rating={movie.vote_average}/>
                    <p>Release data: {movie.release_date}</p>
                    <p>Movie Rating: {movie.vote_average}</p>
                    <p>{truncateString(movie.overview,150)}</p>
                     <a className={scss.square_btn} href={''}>More Info</a>
                </div>
            </div>
        </div>
    );
};

export {MovieListBigCard};
