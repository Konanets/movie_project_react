import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMovie, IResultsMovie, IVideos} from "../interfaces";
import {movieService} from "../services";
import {MovieInfo, MovieSlider, VideoView} from "../components";

const MovieDetailsPage = () => {

    const {id} = useParams<{ id: string }>()

    const [movie, setMovie] = useState<IMovie>()
    const [video, setVideo] = useState<IVideos|null>(null)
    const [similar, setSimilar] = useState<IResultsMovie[]>()

    useEffect(() => {
        if (id) {
            movieService.getMovieById(id).then(({data}) => {
                setMovie(data)
            })
            movieService.getVideosById(id).then(({data}) => {
                setVideo(data)
            }).catch(reason => reason)
            movieService.getSimilarMovies(id).then(({data})=>{
                setSimilar(data.results)
            })
        }
    }, [id])
    if (!movie) {
        return <div>Loading......</div>
    }

    return (
        <>
            <MovieInfo
                title={movie.title}
                original_title={movie.original_title}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                release_date={movie.release_date}
                runtime={movie.runtime}
                genres={movie.genres}
                budget={movie.budget}
                revenue={movie.revenue}
                vote_average={movie.vote_average}
                overview={movie.overview}/>
            {!!video && <VideoView url={video.results[0].key}/>}
            {similar&&<MovieSlider categoryName={'Similar movies'} movie={similar}/>}
        </>
    );
};

export {MovieDetailsPage};
