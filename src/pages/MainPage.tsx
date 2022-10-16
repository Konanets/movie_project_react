import {useEffect} from "react";

import {useAppDispatch} from "../hooks";
import {movieActions} from "../redux";
import {MainMovie} from "../components";

const MainPage = () => {

    const dispatch=useAppDispatch()

    useEffect(()=>{
        dispatch(movieActions.getMovies())
    },[])




    return (
        <main>
            <MainMovie/>
        </main>
    );
};

export {MainPage};
