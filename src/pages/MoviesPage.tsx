import {FC} from "react";

import {MovieFilter, MovieList} from "../components";

const MoviesPage:FC = () => {
    return (
        <>
            <MovieFilter/>
            <MovieList/>
        </>
    );
};

export {MoviesPage};
