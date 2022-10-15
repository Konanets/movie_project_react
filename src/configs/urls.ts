const baseURL = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;
const pngUrl = process.env.REACT_APP_PNG;

const _urls = {
    discover: '/discover',
    movie: '/movie',
    genre: '/genre',
    list: '/list',
    tv: '/tv',
    trending: '/trending',
}

export {
    baseURL,
    token,
    pngUrl,
    _urls
}
