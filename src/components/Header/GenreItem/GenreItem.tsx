import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenreItemPros} from "../../../interfaces";



const GenreItem:FC<IGenreItemPros> = ({genre}) => {
    return (
        <li>
           <Link to={'/'}>{genre.name}</Link>
        </li>
    );
};

export {GenreItem};
