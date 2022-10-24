import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {ILoginForm} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../redux";

import scss from './LoginPage.module.scss'


const LoginPage: FC = () => {

    const {session_id, error} = useAppSelector(state => state.authReducer)

    const {register, handleSubmit} = useForm<ILoginForm>()

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        await dispatch(authActions.login(data))

    }

    useEffect(() => {
        if (session_id) {
            navigate('/')
        }
    },[session_id])


    return (
        <div className={scss.login}>
            <h2>{error && error}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1>Login to your account</h1>
                <p>Before logging in, please register an account on the official <a target="_blank"
                                                                                    href={'https://www.themoviedb.org/signup'}>TMDB
                    website</a> and then enter your username and password here</p>
                <label className={scss.input}>
                    <input className={scss.input__field} type={"text"} {...register('username')}
                    />
                    <span className={scss.input__label}>Input user name</span>
                </label>

                <label className={scss.input}>
                    <input className={scss.input__field} type={"text"} {...register('password')}
                    />
                    <span className={scss.input__label}>Input password</span>
                </label>
                <button className={scss.btn}>Login</button>
            </form>
        </div>
    );
};

export {LoginPage};
