import React, {FC, useEffect} from "react";
import {Pagination} from "@mui/material";


import {useAppDispatch, useAppSelector} from "../../../hooks";
import {searchAction, tvActions} from "../../../redux";
import {TvListCard} from "../TvListCard/TvListCard";

import scss from '../../MovieList/MovieList.module.scss'

const TvList: FC = () => {

    const {tvs, currentPage, total_pages} = useAppSelector(state => state.tvReducer)
    const {genresSelected, sortBy} = useAppSelector(state => state.searchReducer)

    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(tvActions.getTvs({currentPage, genresSelected, sortBy}))


        return () => {
            dispatch(tvActions.resetPage())
            dispatch(searchAction.resetFilter())
        }
    }, [dispatch, genresSelected, sortBy])


    return (
        <div className={scss.movie__container}>
            <h1>TV List</h1>
            <div className={scss.movie__list}>
                {!tvs.length && <h1>No such movies were found</h1>}
                {tvs.map((tv) => <TvListCard key={tv.id}
                                             id={tv.id}
                                             vote_average={tv.vote_average}
                                             title={tv.name}
                                             poster_path={tv.poster_path}
                                             genre_ids={tv.genre_ids}
                                             first_air_date={tv.first_air_date}/>)}
            </div>
            <Pagination
                className={scss.movie__pagination}
                color={"standard"}
                count={total_pages}
                variant="outlined"
                page={currentPage}
                shape="rounded"
                onChange={(_, currentPage) => {
                    dispatch(tvActions.setPage(currentPage))
                    dispatch(tvActions.getTvs({currentPage, genresSelected, sortBy}))
                }}
            />
        </div>
    );
};

export {TvList};
