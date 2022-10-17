import {FC} from "react";

import {IBadgePros} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";

import scss from './GenreBadge.module.scss'



const GenreBadge: FC<IBadgePros> = ({genresIds}) => {

    const {movieGenres}=useAppSelector(state => state.genreReducer)

    const dispatch=useAppDispatch()

         if(!movieGenres.length){
            dispatch(genreActions.getMovieGenes)
        }

    const filtered=movieGenres.filter(genre=>genresIds.includes(genre.id))

    return (
        <div className={scss.badge}>
            {genresIds.length>0?filtered.map(genre=><div key={genre.id} className={scss.badge__info}>{genre.name}</div>):null}
        </div>
    );
};

export {GenreBadge};
