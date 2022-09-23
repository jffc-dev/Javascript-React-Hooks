import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to='/about'>About</Link></li>
        //         <li>
        //             <Link to='/'>Home</Link></li>
        //         <li>
        //             <Link to='/login'>Login</Link></li>
        //     </ul>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to='/'>UseContext</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" aria-current="page" to='/' end>Home</NavLink>
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                    <NavLink className="nav-link" to='/login'>Login</NavLink>
                </div>
            </div>
            </div>
        </nav>
    )
}
