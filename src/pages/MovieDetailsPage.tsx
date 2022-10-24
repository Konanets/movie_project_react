import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMovie, IResultsMovie, IVideos} from "../interfaces";
import {movieService} from "../services";
import {MovieInfo, MovieSlider, VideoView} from "../components";
import {AxiosError} from "axios";

const MovieDetailsPage = () => {

    const {id} = useParams<{ id: string }>()
    const [error,setError]=useState<string>('')

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
                })
                movieService.getSimilarMovies(id).then(({data}) => {
                    setSimilar(data.results)
                })

        }
    }, [id])
    if (!movie) {
        return <div>Loading......</div>
    }
    console.log(video)
    return (
        <>
            <MovieInfo
                id={movie.id}
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
            {video?.results.length ? <VideoView url={video.results[0].key}/>:null}
            {similar?.length?<MovieSlider categoryName={'Similar movies'} movie={similar}/>:null}
        </>
    );
};

export {MovieDetailsPage};
