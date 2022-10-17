import React from 'react';

import './styles/index.sass'
import {MainLayout} from "./layouts";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages";
import {MovieSlider} from "./components";

function App() {
  return (
    <Routes>
        <Route path={''} element={<MainLayout/>}>
            <Route index element={<MainPage/>}></Route>
        </Route>
    </Routes>
  );
}

export default App;
