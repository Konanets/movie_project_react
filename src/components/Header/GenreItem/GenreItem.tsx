import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../../interfaces";

export interface IGenreItemPros {
    genre: IGenre,
    type: 'movies' | 'tv'
}


const GenreItem: FC<IGenreItemPros> = ({genre, type}) => {

    return (
        <li>
            <Link to={`/${type}?genre=${genre.id}`}>{genre.name}</Link>
        </li>
    );
};

export {GenreItem};
