import {FC} from "react";

import scss from './VideoView.module.scss'

export interface IVideoView{
    url:string
}


const VideoView: FC<IVideoView> = ({url}) => {
    return (
        <div className={scss.video}>
            <h2>Trailer</h2>
            <div className={scss.trailer}>
                <iframe
                    className={scss.iframe}
                    width="560"
                    title="Trailer"
                    height="315"
                    src={`https://www.youtube-nocookie.com/embed/${url}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export {VideoView};
