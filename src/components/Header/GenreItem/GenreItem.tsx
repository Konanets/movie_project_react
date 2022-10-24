import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks";

export interface IGenreItemPros{
    genre:IGenre,
    type:'movies'|'tv'
}


const GenreItem:FC<IGenreItemPros> = ({genre,type}) => {

    const dispatch = useAppDispatch()

    return (
        <li>
           <Link to={`/${type}?genre=${genre.id}`}>{genre.name}</Link>
        </li>
    );
};

export {GenreItem};
