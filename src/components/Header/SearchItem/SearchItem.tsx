import {FC} from "react";
import {UseFormReset} from "react-hook-form";
import {Link} from "react-router-dom";

import {pngUrl} from "../../../configs";
import {ISearched} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks";
import {searchAction} from "../../../redux";

import scss from '../HeaderSearch/HeaderSearch.module.scss'


export interface ISearchItemProps {
    tape: ISearched,
    reset: UseFormReset<{ search: string }>
}


const SearchItem: FC<ISearchItemProps> = ({tape, reset}) => {

    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(searchAction.resetHeaderSearch())
        reset()
    }

    return (
        <Link onClick={onClick} to={`/movie/${tape.id}`} className={scss.search_list_item}>
            <div className={scss.search_item_thumbnail}>

                <img
                    src={tape.poster_path ? `${pngUrl}${tape.poster_path}` : 'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'}
                    alt={tape.name}/>
            </div>
            <div className={scss.search_item_info}>
                <h3>{tape.name}{tape.title}</h3>
                <p>{tape.release_date}{tape.first_air_date}</p>
            </div>
        </Link>
    );
};

export {SearchItem};
