import React, {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {Pagination} from "@mui/material";

import scss from './MovieList.module.scss'


const MovieList: FC = () => {

    const {movies, currentPage, total_pages} = useAppSelector(state => state.movieReducer)
    const {genresSelected, sortBy} = useAppSelector(state => state.searchReducer)

    const dispatch = useAppDispatch()


    useEffect(() => {
        console.log(genresSelected)
        dispatch(movieActions.getMovies({currentPage, genresSelected, sortBy}))


        return () => {
            dispatch(movieActions.resetPage())
        }
    }, [dispatch, genresSelected, sortBy])


    return (
        <div className={scss.movie__container}>
            <h1>Movie List</h1>
            <div className={scss.movie__list}>
                {!movies.length && <h1>No such movies were found</h1>}
                {movies.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <Pagination
                className={scss.movie__pagination}
                color={"standard"}
                count={total_pages}
                variant="outlined"
                page={currentPage}
                shape="rounded"
                onChange={(_, currentPage) => {
                    dispatch(movieActions.setPage(currentPage))
                    dispatch(movieActions.getMovies({currentPage, genresSelected, sortBy}))
                }}
            />
        </div>
    );
};

export {MovieList};
