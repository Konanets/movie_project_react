import {useLocation, Location} from 'react-router-dom';

interface IState<T> extends Location {
    state: T
}

const useAppLocations = <State>(): IState<State> => useLocation();

export {
    useAppLocations
}
