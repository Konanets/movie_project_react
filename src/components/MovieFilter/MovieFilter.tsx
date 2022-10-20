import {FC, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";

import scss from './MovieFilter.module.scss'

const MovieFilter: FC = () => {

    const {movieGenres} = useAppSelector(state => state.genreReducer)

    const {register, handleSubmit} = useForm()

    const dispatch =useAppDispatch()

    useEffect(()=>{
        if(!movieGenres){
             dispatch(genreActions.getMovieGenes)
        }

    },[movieGenres])


    return (
        <form>
            <label>Genres</label>
            <div className={
                ''
            }>
                            <select className={scss.form__select} {...register('genre')} multiple>
                {movieGenres.map(genre=><option value={genre.id}>{genre.name}</option>)}
            </select>
            </div>

        </form>
    );
};

export {MovieFilter};
