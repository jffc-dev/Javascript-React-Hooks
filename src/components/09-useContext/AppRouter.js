import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    // Link
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar.js';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/about' element={<AboutScreen/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path="*" element={<HomeScreen/>}/>
                </Switch>
            </div>
        </Router>
    )
}
