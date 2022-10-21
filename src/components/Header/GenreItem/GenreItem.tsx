import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks";
import {searchAction} from "../../../redux";

export interface IGenreItemPros{
    genre:IGenre
}


const GenreItem:FC<IGenreItemPros> = ({genre}) => {

    const dispatch = useAppDispatch()

    return (
        <li>
           <Link to={`/movies?genre=${genre.id}`}>{genre.name}</Link>
        </li>
    );
};

export {GenreItem};
