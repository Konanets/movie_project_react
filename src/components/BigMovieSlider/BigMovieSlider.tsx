import {FC} from "react";
import {Autoplay, Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import {useAppSelector} from "../../hooks";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import scss from './BigMovieSlider.module.scss'
import {MovieListBigCard} from "../MovieListBigCard/MovieListBigCard";




const BigMovieSlider: FC = () => {



const {movies}=useAppSelector(state => state.movieReducer)



    const shotMovieList=movies.slice(1,7)



    return (
        <div className={scss.scene}>
            <div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                >

                    {
                        shotMovieList&&shotMovieList.map(movie=><SwiperSlide key={movie.id}><MovieListBigCard movie={movie}/></SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export {BigMovieSlider};
