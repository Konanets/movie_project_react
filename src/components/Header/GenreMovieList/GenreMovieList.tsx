import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genreActions} from "../../../redux";
import {GenreItem} from "../GenreItem/GenreItem";

import scss from '../Header.module.scss'


const GenreMovieList:FC = () => {


    const {movieGenres, error} = useAppSelector(state => state.genreReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getMovieGenes())
    }, [])

    return (
        <li>
            <span>All Movie▼</span>
            <div className={scss.mega_box}>
                <div className={scss.content}>
                    <div className={scss.row}>
                        <h1>Movie Genres</h1>
                        <ul className={scss.mega_links}>
                            {error ? (<h1>'Error'</h1>) : movieGenres.map(genre => <GenreItem key={genre.id} genre={genre}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};

export {GenreMovieList};
