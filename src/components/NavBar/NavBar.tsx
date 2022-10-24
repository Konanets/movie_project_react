import {Link} from "react-router-dom";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import scss from './NavBar.module.scss';
import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {accountService} from "../../services";
import {IAccountDetail} from "../../interfaces";
import {pngUrl} from "../../configs";
import {authActions} from "../../redux";

export interface INavBar {
    theme: string,
    switchTheme: () => void
}

const NavBar: FC<INavBar> = ({switchTheme, theme}) => {

    const {session_id} = useAppSelector(state => state.authReducer)


    const dispatch = useAppDispatch()

    const [user, setUser] = useState<IAccountDetail|null>(null)

    useEffect(() => {
        if (session_id) {
            accountService.getDetails(session_id).then(({data}) => {
                setUser(data)
                dispatch(authActions.setAccountId(data.id))
            })
        }

    }, [session_id])

    const logOut = () => {
        dispatch(authActions.logOut())
        setUser(null)
    }
    console.log(user)
    const avatarImg = user?.avatar?.tmdb.avatar_path ? pngUrl + user.avatar.tmdb.avatar_path : 'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'

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
                            <input onClick={() => switchTheme()} type="checkbox" className={scss.checkbox}
                                   id={"checkbox"}
                                   defaultChecked={theme === 'dark'}/>
                            <label htmlFor="checkbox" className={scss.label}>
                                <ModeNightIcon fontSize={"inherit"} color={"info"}/>
                                <WbSunnyIcon fontSize={"inherit"} color={"warning"}/>
                                <div className={scss.ball}/>
                            </label>
                        </div>
                        {user && session_id ?
                            <div className={scss.mini_profile}>
                                <img
                                    src={avatarImg} alt={user?.name}/>
                                <h1>{user?.username}</h1>
                                <Link to={'profile'}>Profile</Link>
                                <p onClick={() => logOut()}>Log out</p>
                            </div> :
                            <Link className={scss.auth_btn} to={'/login'}>Log In</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export {NavBar};
