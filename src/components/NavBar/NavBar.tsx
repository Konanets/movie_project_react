import {Link} from "react-router-dom";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import scss from './NavBar.module.scss';
import {FC} from "react";

const NavBar:FC = () => {

    const changeTheme=()=>{

    }

    return (
        <nav className={scss.nav}>
            <div className={scss.side_navbar}>
                 <div className={scss.side_navbar_info}>

                <div className={scss.side_header_logo}>
                    <div className={scss.side_navbar_logo}></div>
                </div>
                <hr/>
                <div className={scss.side_navbar_links}>
                    <ul>
                        <li><Link to={'/'}>Home page</Link></li>
                        <li><Link to={'/movies'}>Movies</Link></li>
                        <li><Link to={'/tv'}>Tv-Shows</Link></li>
                    </ul>
                </div>
                <hr/>
                <div className={scss.footer}>
                    <div className={scss.switcher}>
                        <input type="checkbox" className={scss.checkbox} onChange={changeTheme} id={"checkbox"}/>
                        <label htmlFor="checkbox" className={scss.label}>
                            <ModeNightIcon fontSize={"inherit"} color={"info"}/>
                            <WbSunnyIcon fontSize={"inherit"} color={"warning"}/>
                            <div className={scss.ball}/>
                        </label>
                    </div>
                    <Link className={scss.auth_btn} to={'/'}>Log In</Link>
                </div>
            </div>
            </div>

        </nav>
    );
};

export {NavBar};
