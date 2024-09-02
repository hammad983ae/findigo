// src/components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
