import {Outlet} from "react-router-dom";

import {NavBar} from "../../components";

import scss from './MainLayout.module.scss'

const MainLayout = () => {
    return (
        <div className={scss.container}>
                <NavBar/>
                <Outlet/>
        </div>
    );
};

export {MainLayout};
