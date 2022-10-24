import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";


import {ITv, IVideos} from "../interfaces";
import {tvService} from "../services";
import {TvInfo, VideoView} from "../components";

const TvPage: FC = () => {

    const {id} = useParams<{ id: string }>()

    const [tv, setTv] = useState<ITv>()
    const [video, setVideo] = useState<IVideos | null>(null)

    useEffect(() => {
        if (id) {
            tvService.getTvById(id).then(({data}) => {
                setTv(data)
            })
            tvService.getVideosById(id).then(({data}) => {
                setVideo(data)
            })

        }
    }, [id])

    if (!tv) {
        return <h1>Loading......</h1>
    }

    return (
        <>
            <TvInfo id={tv.id} name={tv.name} original_title={tv.original_name} poster_path={tv.poster_path}
                    backdrop_path={tv.backdrop_path} release_date={tv.first_air_date} genres={tv.genres}
                    vote_average={tv.vote_average} overview={tv.overview} number_of_seasons={tv.number_of_seasons}
                    number_of_episodes={tv.number_of_episodes}/>
             {video?.results.length ? <VideoView url={video.results[0].key}/>:null}
        </>
    );
};

export {TvPage};
