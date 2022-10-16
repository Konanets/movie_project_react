import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";

import scss from './HeaderSearch.module.scss'
import {optionsAction} from "../../../redux";
import {SearchItem} from "../SearchItem/SearchItem";
import {checkLimit} from "../../../utils";


const HeaderSearch = () => {

    const {register, watch} = useForm<{ search: string }>()

    const {searched} = useAppSelector(state => state.optionsReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (checkLimit(watch('search'))) {
            dispatch(optionsAction.getSimilar({
                name: watch('search')
            }))
        } else {
            dispatch(optionsAction.getSimilar({
                name: ''
            }))
        }


    }, [watch('search')])

    return (
        <div className={scss.search_container}>
            <form className={scss.search_element}>
                <input
                    type="text"
                    className={scss.form_control}
                    placeholder="Search Movie Title ..."
                    {...register('search')}
                />

                <div className={scss.search_list} id="search-list">
                    {searched.map(tape => <SearchItem key={tape.id} tape={tape}/>)}
                </div>
            </form>
        </div>
    )

}

export
{
    HeaderSearch
}
