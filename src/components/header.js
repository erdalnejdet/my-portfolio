import React, { useState } from 'react';
import './header.scss';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChildMenuToggle = (e) => {
    e.preventDefault();
    const parentElement = e.currentTarget.parentElement;
    const childMenu = parentElement.querySelector('.desktop-menu-child');
    childMenu.classList.toggle('child-menu-open');
  };

  return (
    <header>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-lg-2 col-xl-2">
            <a href="/">
              Logo
            </a>
          </div>
          <div className="col-6 col-lg-10 col-xl-10 col-xxl-9">
            <div className="desktop-menu d-none d-lg-flex flex-row justify-content-end">
              <nav>
                <ul>
                <li className="single-column">
                                    <a href="" className="has-child">About</a>
                                    <div className="desktop-menu-child">
                                        <ul>
                                            <li>
                                                <a href="reatil.html"><span>Retail</span></a>
                                            </li>
                                           
                                
                                        </ul>
                                    </div>
                 </li>
                 <li>
                 <a href="" className="has-child">Services</a>
                 </li>
                 <li>
                    <a href='#'>Portfolio</a>
                 </li>
                <li>
                    <a  href='#'>
                        Contact
                    </a>
                </li>
                </ul>
              </nav>
            </div>
            <div className="mobile-menu-burger d-flex d-lg-none" onClick={handleMobileMenuToggle}>
              <div className={`mobile-menu-burger-container ${isMobileMenuOpen ? 'burger-active' : ''}`}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-header-menu ${isMobileMenuOpen ? 'mobile-header-menu-active' : ''}`}>
        <ul>
          <li className="has-child">
            <a href="#!" onClick={handleChildMenuToggle}>
              SERVICES
            </a>
            <ul className="desktop-menu-child">
              <li>
                <a href="">
                  <span>DAM Services</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Salesforce Services</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="has-child">
            <a href="#!" onClick={handleChildMenuToggle}>
              SERVICES
            </a>
            <ul className="desktop-menu-child">
              <li>
                <a href="">
                  <span>DAM Services</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Salesforce Services</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
