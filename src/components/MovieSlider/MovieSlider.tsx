import {FC, useEffect} from "react";

import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import scss from './MovieSlider.module.scss'
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const MovieSlider: FC = () => {

    const {trendingMovies} = useAppSelector(state => state.movieReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getTrendingMovies())
    }, [])

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


                    {trendingMovies.map(movie => <SwiperSlide key={movie.id}>
                        <MovieListCard key={movie.id} movie={movie}/>
                    </SwiperSlide>)}

                </Swiper>
            </div>
        </div>
    );
};

export {MovieSlider};
