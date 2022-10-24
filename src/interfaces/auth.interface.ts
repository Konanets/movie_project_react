export interface IRequestToken {
    success: boolean,
    expires_at: string,
    request_token: string
}

export interface ISession {
    success: boolean,
    session_id: string
}

export interface IAuthInitialState {
    account_id: number
    session_id: string,
    error: string
}

export interface ILoginForm {
    username: string,
    password: string
}
