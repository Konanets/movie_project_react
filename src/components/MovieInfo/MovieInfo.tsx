import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";


import scss from './MovieInfo.module.scss'
import {IGenres, IMovie, IVideoResults} from "../../interfaces";
import {pngUrl} from "../../configs";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {convertTime, moneyConverter} from "../../utils";
import {StarsRating} from "../StarsRating/StarsRating";

export interface IMovieInfo {
    title: string,
    original_title: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    runtime: number
    genres: IGenres[],
    budget: number,
    revenue: number,
    vote_average: number,
    overview: string
}


const MovieInfo: FC<IMovieInfo> = ({
                                       budget,
                                       revenue,
                                       original_title,
                                       overview,
                                       backdrop_path,
                                       vote_average,
                                       runtime,
                                       genres,
                                       title,
                                       poster_path,
                                       release_date
                                   }) => {

    return (
        <div className={scss.movie} style={{backgroundImage: `url(${pngUrl + backdrop_path})`}}>
            <div className={scss.movie__info}>
                <img src={poster_path?pngUrl + poster_path
                    :'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'} alt={title}/>
                <div className={scss.movie__info__description}>
                    <span>
                       <h1>{title}</h1>
                        <p>({original_title})</p>
                    </span>

                    <p>Release data: {release_date}</p>

                    <GenreBadge genresIds={genres.map(genre => genre.id)}/>
                    <p>Viewing time: {convertTime(runtime)}</p>
                    <span>
                        {!!budget && <p>Budget: ${moneyConverter(budget)} / </p>}
                        {!!revenue && <p>/ Revenue: ${moneyConverter(revenue)}</p>}
                    </span>

                    <StarsRating rating={vote_average} color={"white"}/>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};
