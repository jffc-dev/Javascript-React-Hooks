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

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/about' element={<AboutScreen/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                </Switch>
            </div>
        </Router>
    )
}
