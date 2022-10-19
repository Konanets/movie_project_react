import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../../interfaces";

export interface IGenreItemPros{
    genre:IGenre
}


const GenreItem:FC<IGenreItemPros> = ({genre}) => {
    return (
        <li>
           <Link to={'/'}>{genre.name}</Link>
        </li>
    );
};

export {GenreItem};
