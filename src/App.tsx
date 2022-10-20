import React from 'react';

import {MainLayout} from "./layouts";
import {Route, Routes} from "react-router-dom";
import {MainPage, MovieDetailsPage, MoviesPage} from "./pages";

import './styles/index.sass';

function App() {
  return (
    <Routes>
        <Route path={''} element={<MainLayout/>}>
            <Route index element={<MainPage/>}/>
            <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>
            <Route path={'movies'} element={<MoviesPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
