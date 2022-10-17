import {useEffect} from "react";

import {useAppDispatch} from "../hooks";
import {movieActions} from "../redux";
import {MainMovie, MovieSlider} from "../components";

const MainPage = () => {

    const dispatch=useAppDispatch()

    useEffect(()=>{
        dispatch(movieActions.getMovies())
    },[])




    return (
        <main>
            <MainMovie/>

            <MovieSlider/>
        </main>
    );
};

export {MainPage};
