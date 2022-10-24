import {FC, memo, useEffect} from "react";
import {Autoplay, Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import {MovieListBigCard} from "../MovieListBigCard/MovieListBigCard";
import {IResultsMovie} from "../../interfaces";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import scss from './BigMovieSlider.module.scss'


interface IBigMovieSliderProps {
    movies: IResultsMovie[]
}

const BigMovieSlider: FC<IBigMovieSliderProps> = memo(
    ({movies}) => {

        const shortMovieList = movies.slice(0, 8)

        return (
            <div className={scss.scene}>
                <div>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}>

                        {
                            shortMovieList && shortMovieList.map(movie => <SwiperSlide key={movie.id}><MovieListBigCard
                                movie={movie}/></SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>
        );
    }
)

export {BigMovieSlider};
