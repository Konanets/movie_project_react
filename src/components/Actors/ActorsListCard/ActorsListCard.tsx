import {FC} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

import scss from './ActorsListCard.module.scss'
import {pngUrl} from "../../../configs";


export interface IActorsListCardProps{
    profile_path:string,
    name:string,
    gender:number
}



const ActorsListCard:FC<IActorsListCardProps> = ({gender,profile_path,name}) => {
    return (
        <div className={scss.card}>
            <LazyLoadImage src={profile_path?pngUrl+profile_path:'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'} alt={name}/>
            <h3>{name}</h3>
            <p>{gender===1?'Female':'Male'}</p>
        </div>
    );
};

export {ActorsListCard};
