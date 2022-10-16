import {FC} from "react";

import {ISearchItemProps} from "../../../interfaces";

import scss from '../HeaderSearch/HeaderSearch.module.scss'
import {pngUrl} from "../../../configs";


const SearchItem:FC<ISearchItemProps> = ({tape}) => {
    return (
        <div className={scss.search_list_item}>
            <div className={scss.search_item_thumbnail}>

                <img src={ tape.poster_path?`${pngUrl}${tape.poster_path}`:'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'}alt={tape.name}/>
            </div>
            <div className={scss.search_item_info}>
                <h3>{tape.name}{tape.title}</h3>
                <p>{tape.release_date}{tape.first_air_date}</p>
            </div>
        </div>
    );
};

export {SearchItem};
