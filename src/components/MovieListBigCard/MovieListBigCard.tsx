import {FC} from "react";
import {Link} from "react-router-dom";

import {pngUrl} from "../../configs";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import {truncateString} from "../../utils";

import scss from './MovieListBigCard.module.scss'


interface ICardsProps {
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

const MovieListBigCard: FC<ICardsProps> = ({movie}) => {

    return (
        <div className={scss.bigCard__background}
             style={{backgroundColor: "blue", backgroundImage: `url(${pngUrl + movie.backdrop_path})`}}>
            <div className={scss.bigCard__info_container}>
                <div className={scss.bigCard__info}>
                    <h1>{movie.title}</h1>
                    <GenreBadge type={"movie"} genresIds={movie.genre_ids}/>
                    <StarsRating rating={movie.vote_average} color={"white"}/>
                    <p>Release data: {movie.release_date}</p>
                    <p>Movie Rating: {movie.vote_average}</p>
                    <p>{truncateString(movie.overview, 150)}</p>
                    <Link className={scss.square_btn} to={`/movie/${movie.id}`}>More Info</Link>
                </div>
            </div>
        </div>
    );
};

export {MovieListBigCard};
