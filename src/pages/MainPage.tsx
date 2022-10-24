import {FC, useEffect} from "react";

import {BigMovieSlider, Header, MainMovie, MovieList, MovieSlider} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";


const MainPage: FC = () => {


    const {nowPlayingMovies, trendingMovies} = useAppSelector(state => state.movieReducer)

    const playingMovie = nowPlayingMovies[nowPlayingMovies.length - 1]

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getNowPlaying())
        dispatch(movieActions.getTrendingMovies())
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [dispatch])

    if(!nowPlayingMovies.length || !trendingMovies.length){
        return <h1 className={'loading'}>Loading...</h1>
    }

    return (
        <main>
            {playingMovie &&
                <>
                    <Header/>
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
                trendingMovies && <MovieSlider movie={trendingMovies} categoryName={'Trending'}/>
            }


            <MovieList/>
        </main>
    );
};

export {MainPage};
