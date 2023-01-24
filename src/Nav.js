import React from 'react'
import './AuthCss.css';
import {Link} from 'react-router-dom'
export const Nav = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Nameform'>One</Link></li>
                <li><Link to='/AuthEmailPass'>Two</Link></li>
                <li><Link to='/DiffWayAuth'>Three</Link></li>
            </ul>
        </div>
    )
}
