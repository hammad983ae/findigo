import React from 'react';
import profile from "../assets/profile.png";
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="menu">
                <div className="menu-icon"></div>
                <button className="menu-toggle">☰</button>
            </div>
            <div className="dashboard-title">
                Dashboard
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="user-info">
                <div className="user-name">Maham Javed</div>
                <div className="user-email">mahisheikh64008@gmail.com</div>
                <img src={profile} alt="admin" className="user-image" />
            </div>
        </div>
    );
};

export default Header;
