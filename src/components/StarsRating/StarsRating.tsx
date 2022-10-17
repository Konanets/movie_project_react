import {FC} from "react";

import {Rating} from "@mui/material";

import scss from './StarsRating.module.scss'
import {IStarsProps} from "../../interfaces";

const StarsRating:FC<IStarsProps> = ({rating}) => {
    return (
        <div className={scss.rating}>
            <Rating name="read-only" value={rating/2} readOnly precision={0.5}/>
        </div>
    );
};

export {StarsRating};
