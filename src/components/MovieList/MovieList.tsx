import React, {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {Pagination} from "@mui/material";

import scss from './MovieList.module.scss'


const MovieList: FC = () => {

    const {movies, current_page, total_pages} = useAppSelector(state => state.movieReducer)

    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(movieActions.getMovies({current_page}))
        return () => {
            dispatch(movieActions.resetPage())
        }
    }, [dispatch])


    return (
        <div className={scss.movie__container}>
            <h1>Movie List</h1>
            <div className={scss.movie__list}>
                {movies.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <Pagination
                className={scss.movie__pagination}
                color={"standard"}
                count={total_pages}
                variant="outlined"
                page={current_page}
                shape="rounded"
                onChange={(_, current_page) => {
                    dispatch(movieActions.setPage(current_page))
                    dispatch(movieActions.getMovies({current_page}))
                    console.log(current_page)
                }}
            />
        </div>
    );
};

export {MovieList};
