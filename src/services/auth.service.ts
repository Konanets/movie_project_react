import {axiosInstance, AxiosRes} from "./axios.service";

import {IRequestToken, ISession} from "../interfaces";
import {_urls} from "../configs";

const authService = {
    createRequestToken: ():AxiosRes<IRequestToken> =>
        axiosInstance.get(_urls.auth.authentication+_urls.auth.token+_urls.auth.new),

    createSessionWithLogin: (request_token:string,username:string,password:string):AxiosRes<IRequestToken> =>
        axiosInstance.post(_urls.auth.authentication+_urls.auth.token+_urls.auth.validate_with_login, {
        username,
        password,
        request_token
    }),

    createSession:(request_token:string):AxiosRes<ISession>=>
        axiosInstance.post(_urls.auth.authentication+_urls.auth.session+_urls.auth.new,{
        request_token
    })
}

export {authService}
