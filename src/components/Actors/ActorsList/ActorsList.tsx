import {FC, useEffect, useState} from "react";

import {cast} from "../../../interfaces";
import {actorsService} from "../../../services";
import {ActorsListCard} from "../ActorsListCard/ActorsListCard";

import scss from './ActorsList.module.scss'

export interface IActorsListProps {
    id: string,
    type: 'tv' | 'movie'
}

const ActorsList: FC<IActorsListProps> = ({type, id}) => {

    const [actors, setActors] = useState<cast[]>()

    useEffect(() => {
        actorsService.getActorsById(id, type).then(({data}) => {
            setActors(data.cast)
        })
    }, [])

    if (!actors?.length) {
        return null
    }

    return (
        <div className={scss.actors}>
             <h1>Actors</h1>
            <div className={scss.actors__list}>
                {actors?.length && actors.map(actor =>
                    <ActorsListCard key={actor.id} profile_path={actor.profile_path} name={actor.name}
                                    gender={actor.gender}/>)}
            </div>
        </div>

    );
};

export {ActorsList};
