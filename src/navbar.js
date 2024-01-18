import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src="../rock-1_0.png" alt="im" width="50px" />
                </div>
                <div className="sear">
                    <input type="search" name="search" id="sirn" />
                </div>
                <div className="opt">
                    <div className='op' ><Link to="/" >Home</Link></div>
                    <div className='op'><Link to="/Contact" >Contact</Link></div>
                    <div className='op'><Link to="Setting" >Setting</Link></div>

                </div>
            </div>



        </>
    )
}
