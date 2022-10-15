import {GenreMovieList} from "./GenreMovieList/GenreMovieList";

import scss from './Header.module.scss'
import {GenreTvList} from "./GenreTvList/GenreTvList";

const Header = () => {
    return (
        <>
            <header className={scss.main_header}>
                <div className={scss.main_header_nav}>
                    <div className={scss.wrapper}>
                        <ul className={scss.nav_links}>
                            <GenreMovieList/>
                            <GenreTvList/>
                        </ul>
                    </div>
                </div>
            </header>
            <hr/>
        </>

    );
};

export {Header};
