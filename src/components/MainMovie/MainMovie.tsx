import {FC} from "react";

import {useAppSelector} from "../../hooks";
import {randomizer} from "../../utils";

import scss from './MainMovie.module.scss'
import {pngUrl} from "../../configs";

const MainMovie: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer)

    const movie = movies[randomizer(movies.length)]

    console.log(movie)


    if (movie) {
        return (
            <div className={scss.container}>
            <h1>Your Recommendation</h1>
                <div className={scss.content}>
                    <img src={`${pngUrl}${movie.poster_path}`}  alt=""/>
                </div>
            </div>
        );
    }
    return null
};

export {MainMovie};
