import React from 'react';

import {MainLayout} from "./layouts";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages";

import './styles/index.sass'

function App() {
  return (
    <Routes>
        <Route path={''} element={<MainLayout/>}>
            <Route index element={<MainPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
