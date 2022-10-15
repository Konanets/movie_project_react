import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genreActions} from "../../../redux/slices";
import {GenreItem} from "../GenreItem/GenreItem";

import scss from '../Header.module.scss'


const GenreTvList:FC = () => {


    const {tvGenres, error} = useAppSelector(state => state.genreReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getTvGenes())
        console.log(tvGenres)
    }, [])

    return (
        <li>
            <a href="#" >All Tv</a>
            <label htmlFor="showMega" className={scss.mobile_item}>Movie</label>
            <div className={scss.mega_box}>
                <div className={scss.content}>
                    <div className={scss.row}>
                        <h1>Movie Genres</h1>
                        <ul className={scss.mega_links}>
                            {error ? (<h1>'Error'</h1>) : tvGenres.map(genre => <GenreItem key={genre.id} genre={genre}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};

export {GenreTvList};
