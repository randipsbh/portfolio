import React from 'react';
import "./styles.css";

function Header() {
    return (
        <div className="header-container" id="fart">
            <div className="flex-child box">
                <span className="text">
                    home
                </span>
            </div>
            <div className="flex-child box">
                <span className="text">
                    about me
                </span>
            </div>
            <div className="flex-child box">
                <span className="text">
                    portfolio
                </span>
            </div>
            <div className="flex-child box">
                <span className="text">
                    contact
                </span>
            </div>
        </div>
    )
}

export default Header;
