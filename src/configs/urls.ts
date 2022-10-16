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
    search:'/search',
    multi:'/multi',
    day:'/day'
}

export {
    baseURL,
    token,
    pngUrl,
    _urls
}
