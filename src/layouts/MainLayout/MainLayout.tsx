import {Outlet} from "react-router-dom";

import {Header, NavBar} from "../../components";

import scss from './MainLayout.module.scss'

const MainLayout = () => {
    return (
        <div className={scss.container}>
            <NavBar/>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
