import {useEffect} from "react";

import {useAppDispatch} from "../hooks";
import {movieActions} from "../redux";
import {BigMovieSlider, MainMovie, MovieSlider} from "../components";

const MainPage = () => {

    const dispatch=useAppDispatch()

    useEffect(()=>{
        dispatch(movieActions.getMovies())
    },[])




    return (
        <main>
            <BigMovieSlider/>
            <MainMovie/>
            <MovieSlider/>
        </main>
    );
};

export {MainPage};
