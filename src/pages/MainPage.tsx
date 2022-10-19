import {FC, useEffect} from "react";

import {BigMovieSlider, MainMovie, MovieList, MovieSlider} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";


const MainPage: FC = () => {


    const {nowPlayingMovies, trendingMovies} = useAppSelector(state => state.movieReducer)

    const playingMovie = nowPlayingMovies[nowPlayingMovies.length - 1]

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getNowPlaying())
        dispatch(movieActions.getTrendingMovies())

    }, [dispatch])

    return (
        <main>
            {playingMovie &&
                <>
                    <BigMovieSlider movies={nowPlayingMovies}/>
                    <MainMovie
                        id={playingMovie.id}
                        genre_ids={playingMovie.genre_ids}
                        overview={playingMovie.overview}
                        release_date={playingMovie.release_date}
                        poster_path={playingMovie.poster_path}
                        title={playingMovie.title}
                        vote_average={playingMovie.vote_average}/>
                </>
            }
            {
                trendingMovies && <MovieSlider movie={trendingMovies}/>
            }


            <MovieList/>
        </main>
    );
};

export {MainPage};
