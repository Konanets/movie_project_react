import {FC, memo, useEffect} from "react";

import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import {MovieListShortCard} from "../MovieListShortCard/MovieListShortCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {IResultsMovie} from "../../interfaces";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import scss from './MovieSlider.module.scss'


interface IMovieSliderProps {
    movie: IResultsMovie[]
}

const MovieSlider: FC<IMovieSliderProps> = memo(
    ({movie}) => {


        console.log('movieSlider')

        return (
            <div className={scss.trending}>
                <h1>Trending</h1>
                <div className={scss.trending__movies}>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={20}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                        }}
                        modules={[Navigation, Autoplay]}>


                        {movie.map(movie => <SwiperSlide key={movie.id}>
                            <MovieListShortCard key={movie.id} movie={movie}/>
                        </SwiperSlide>)}

                    </Swiper>
                </div>
            </div>
        );
    }
)


export {MovieSlider};
