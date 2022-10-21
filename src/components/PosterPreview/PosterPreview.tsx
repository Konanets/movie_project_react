import {FC} from "react";

import {pngUrl} from "../../configs";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import scss from './PosterPreview.module.scss'

export interface IPosterPreviewProps {
    url: string,
    genre_ids: number[],
    alt: string
}

const PosterPreview: FC<IPosterPreviewProps> = ({url, genre_ids, alt}) => {
    return (
        <div className={scss.poster}>
            <img
                src={url ? pngUrl + url
                    : 'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'}
                alt={alt}/>
            <div className={scss.poster__badges}>
                <GenreBadge genresIds={genre_ids}/>
            </div>
        </div>
    );
};

export {PosterPreview};
