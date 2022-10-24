import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions, searchAction} from "../../redux";
import {IFilter} from "../../interfaces";

import scss from './MovieFilter.module.scss'



const MovieFilter: FC = () => {

    const {movieGenres} = useAppSelector(state => state.genreReducer)

    const {register, handleSubmit} = useForm<IFilter>()

    const [query, _] = useSearchParams()

    const dispatch = useAppDispatch()


    let queryGenre = query.get('genre')

    useEffect(() => {
        if (!!queryGenre) {
            dispatch(searchAction.setGenresSelected(queryGenre))
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        dispatch(genreActions.getMovieGenes())
    }, [])

    useEffect(() => {
        return () => {
            dispatch(searchAction.resetFilter())
        }
    }, [])

    const onSubmit: SubmitHandler<IFilter> = (data) => {
        dispatch(searchAction.setFilter(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
            <div className={scss.form__check_box}>
                <h1>Genres</h1>
                {movieGenres.map(genre => <div key={genre.id}>
                    <input id={genre.name} type="checkbox" {...register('genresSelected')} value={genre.id}
                           defaultChecked={genre.id.toString() === queryGenre}/>
                    <label htmlFor={genre.name}>{genre.name}</label>
                </div>)}
            </div>
            <div>
                <label className={scss.form__select__label}>Sort By : </label>
                <select className={scss.form__select} {...register('sortBy')}>
                    <option value={''}>Please chose</option>
                    <option value={'popularity.asc'}> popularity ascending</option>
                    <option value={'popularity.desc'}> popularity descending</option>
                    <option value={'release_date.asc'}>release date ascending</option>
                    <option value={'release_date.desc'}>release date descending</option>
                </select>
                <button className={scss.btn}>SEnd</button>
            </div>

        </form>
    );
};

export {MovieFilter};
