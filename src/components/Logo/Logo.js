import React from 'react';
import burgerLogo from '../../assets/images/burger_logo.png';
import './Logo.css';

const Logo = () => (
  <div className="Logo">
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;