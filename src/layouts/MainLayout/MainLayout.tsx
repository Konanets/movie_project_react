import scss from './MainLayout.module.scss'
import {NavBar} from "../../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className={scss.container}>
                <NavBar/>
        </div>
    );
};

export {MainLayout};
