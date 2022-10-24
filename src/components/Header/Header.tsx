import {GenreMovieList} from "./GenreMovieList/GenreMovieList";

import {GenreTvList} from "./GenreTvList/GenreTvList";
import {HeaderSearch} from "./HeaderSearch/HeaderSearch";

import scss from './Header.module.scss'


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
                        <HeaderSearch/>
                    </div>

                </div>
            </header>
        </>

    );
};

export {Header};
