import {FC} from "react";

import {Rating} from "@mui/material";

 interface IStarsProps {
    rating: number,
    color: 'white' | 'yellow'
}

import scss from './StarsRating.module.scss'


const StarsRating: FC<IStarsProps> = ({rating, color}) => {
    return (
        <div className={scss[`rating__${color}`]}>
            <Rating name="read-only" value={rating / 2} readOnly precision={0.5}/>
        </div>
    );
};

export {StarsRating};
