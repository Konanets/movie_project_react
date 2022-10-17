import {FC} from "react";

import {useAppSelector} from "../../hooks";
import {randomizer, truncateString} from "../../utils";

import scss from './MainMovie.module.scss'
import {pngUrl} from "../../configs";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";

const MainMovie: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer)

    const movie = movies[randomizer(movies.length)]

    console.log(movie)


    if (movie) {
        return (
            <div className={scss.container}>
                <h1>Our recommendation</h1>
                <div className={scss.content}>
                    <img src={`${pngUrl}${movie.poster_path}`} alt=""/>
                    <div className={scss.content__info}>
                        <h1>{movie.title}</h1>
                        <GenreBadge genresIds={movie.genre_ids}/>
                        <div>
                            <h2>Overview</h2>
                            <p>{truncateString(movie.overview, 150)}</p>
                        </div>
                        <StarsRating rating={movie.vote_average}/>
                        <p>Release data: {movie.release_date}</p>
                        <a className={scss.square_btn} href={''}>More Info</a>
                    </div>
                </div>
            </div>
        );
    }
    return null
};

export {MainMovie};
