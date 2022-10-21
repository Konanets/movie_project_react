import {Outlet} from "react-router-dom";

import {Header, NavBar} from "../../components";

import scss from './MainLayout.module.scss'

const MainLayout = () => {
    return (
        <div className={scss.container}>
            <NavBar/>
            <div className={scss.container__main}>
            <Outlet/>
            </div>

        </div>
    );
};

export {MainLayout};
