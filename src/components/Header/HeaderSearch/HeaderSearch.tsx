import {useForm} from "react-hook-form";
import React from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {searchAction} from "../../../redux";
import {SearchItem} from "../SearchItem/SearchItem";
import {checkLimit} from "../../../utils";

import scss from './HeaderSearch.module.scss'



const HeaderSearch = () => {

    const {register,reset} = useForm<{ search: string }>()

    const {searched} = useAppSelector(state => state.searchReducer)

    const dispatch = useAppDispatch()


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (checkLimit(e.target.value)) {
            dispatch(searchAction.getSimilar({
                name: e.target.value.trim()
            }))
        } else {
            dispatch(searchAction.getSimilar({
                name: ''
            }))
        }
    }

    return (
        <div className={scss.search_container}>
            <form className={scss.search_element}>
                <input
                    type="text"
                    className={scss.form_control}
                    placeholder="Search Movie Title ..."
                    {...register('search')}
                    onChange={onChange}
                />

                <div className={scss.search_list} id="search-list">
                    {searched.map(tape => <SearchItem key={tape.id} tape={tape} reset={reset}/>)}
                </div>
            </form>
        </div>
    )

}

export
{
    HeaderSearch
}
