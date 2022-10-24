import {Outlet} from "react-router-dom";
import useLocalStorage from "use-local-storage";

import {NavBar} from "../../components";

import scss from './MainLayout.module.scss'



const MainLayout = () => {
    const [theme, setTheme] = useLocalStorage<string>('theme','light');

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }


    return (
            <div className={scss.container}  data-theme={theme}>
                <NavBar switchTheme={switchTheme} theme={theme}/>
                <div className={scss.container__main}>
                    <Outlet/>
                </div>

            </div>

    );
};

export {MainLayout};
