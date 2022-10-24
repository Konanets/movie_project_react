import {useAppSelector} from "../hooks";
import {FC, ReactNode} from "react";
import {Navigate} from "react-router-dom";

export interface IPrivateRoute{
    children?:ReactNode
}

const PrivateRoute:FC<IPrivateRoute> = ({children}) => {

    const {session_id}=useAppSelector(state => state.authReducer)

    return (
        <>
            {session_id?children:<Navigate to={'/login'}/>}
        </>
    );
};

export {PrivateRoute};
