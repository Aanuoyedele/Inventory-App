import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                    <Link to="/">Home</Link> 
                    </li>
                    <li>

                    <Link to="/About">About</Link> 
                    </li>
                    <li>
                    <Link to="/Contact">Contact US</Link>
                    </li>
                    <li>

                    <Link to="/Inventory">Admin</Link>
                    </li>
                    <li>
                    <Link to="/Displayitem">User</Link> 

                    </li>
                    <li>
                    <Link to="/Checkout">Checkout</Link>
                    </li>
                </ul>
                
            </div>
        )
    }
}
