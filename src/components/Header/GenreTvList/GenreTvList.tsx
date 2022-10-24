import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genreActions} from "../../../redux";
import {GenreItem} from "../GenreItem/GenreItem";

import scss from '../Header.module.scss'


const GenreTvList:FC = () => {


    const {tvGenres, error} = useAppSelector(state => state.genreReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getTvGenes())
    }, [])

    return (
        <li>
            <span>All Tv▼</span>
            <div className={scss.mega_box}>
                <div className={scss.content}>
                    <div className={scss.row}>
                        <h1>Tv Genres</h1>
                        <ul className={scss.mega_links}>
                            {error ? (<h1>'Error'</h1>) : tvGenres.map(genre => <GenreItem  type={"tv"} key={genre.id} genre={genre}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};

export {GenreTvList};
