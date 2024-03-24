import React , { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBarCom from './Component/NavBar'
import Home from './Component/Home'
import WorkComponent from './Component/Work'
import Portfolio from './Component/Portfolio'
import Profile from './Component/Profile'
import Creative from './Component/Creative'
import Drop from './Component/Drop'

class Template extends Component {
    render () {
        return (
            <BrowserRouter>
                <NavBarCom />
                <div className="">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="Portfolio" element={<Portfolio />} />
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Work" element={<WorkComponent />} />
                        <Route path="Creative" element={<Creative />} />
                        <Route path="Drop" element={<Drop />} />
                    </Routes>
                </div>
            </BrowserRouter>
            )
    }
}

export default Template