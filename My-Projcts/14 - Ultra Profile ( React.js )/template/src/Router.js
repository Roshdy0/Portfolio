import React , { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Counter from './Component/Home'
import Work from './Component/Work'
import Profile from './Component/Profile'
import Portfolio from './Component/Portfolio'
import Drop from './Component/Drop'
import Creative from './Component/Creative'

class RouterCom extends Component {
    render () {
        return (
            <BrowserRouter>
                <NavBarCom />
                <div className="">
                    <Routes>
                        <Route exact path="/" element={<Counter />} />
                        <Route path="/" element={<Counter />} />
                        <Route path="Work" element={<Work />} />
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Portfolio" element={<Portfolio />} />
                        <Route path="Drop" element={<Drop />} />
                        <Route path="Creative" element={<Creative />} />
                    </Routes>
                </div>
            </BrowserRouter>
            )
    }
}

export default RouterCom