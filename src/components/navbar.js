import React from 'react'
import '../css/nav.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="opt">
                    <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "20px" }} >Home</Link>
                    <Link to="/Contact" style={{ textDecoration: "none", color: "black", fontSize: "20px" }} >Contact</Link>
                    <Link to="Setting" style={{ textDecoration: "none", color: "black", fontSize: "20px" }}>Setting</Link>
                    <Link to="/cart"><img width="30px" src="./cart-shopping-solid.svg" alt="" /></Link>
                </div>
                <div className="sear">
                    <input type="search" name="search" id="sirn" />
                </div>
                <div className="logo">
                    <img src="../rock-1_0.png" alt="im" width="50px" />
                </div>
            </div>




        </>
    )
}
