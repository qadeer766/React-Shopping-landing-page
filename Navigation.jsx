import React from "react"
import zara from "./Zara_(retailer)-Logo.wine.png"
export default  function Navigation() {
    return (
        <nav className="container">
        <div className="logo">
            <img src={zara} alt="logo" className="zara"/>
        </div>
        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Login</button>
    </nav>
    )
}