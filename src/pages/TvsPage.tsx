import {FC} from "react";
import {TvFilter, TvList} from "../components";

const TvsPage: FC = () => {
    return (
        <>
            <TvFilter/>
            <TvList/>
        </>
    );
};

export {TvsPage};
