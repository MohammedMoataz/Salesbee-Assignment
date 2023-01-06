import React from "react"
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom"

import { Login } from "./screens/login"
import { Home } from "./screens/home"


export const Main = () =>
    <Router>
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={() => "404 NOT FOUND"} />
        </Routes>
    </Router>
