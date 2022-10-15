import React from 'react';

import {NavBar} from "./components/NavBar/NavBar";

import './styles/index.sass'
import {MainLayout} from "./layouts";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path={''} element={<MainLayout/>}>

        </Route>
    </Routes>
  );
}

export default App;
