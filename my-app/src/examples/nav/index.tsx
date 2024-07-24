import React, { useState } from 'react';
import './style.css';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('menu1')}
          onMouseLeave={handleMouseLeave}
        >
          Menu 1
          {activeMenu === 'menu1' && (
            <ul className="dropdown">
              <li>Submenu 1-1</li>
              <li>Submenu 1-2</li>
              <li>Submenu 1-3</li>
            </ul>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('menu2')}
          onMouseLeave={handleMouseLeave}
        >
          Menu 2
          {activeMenu === 'menu2' && (
            <ul className="dropdown">
              <li>Submenu 2-1</li>
              <li>Submenu 2-2</li>
              <li>Submenu 2-3</li>
            </ul>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('menu3')}
          onMouseLeave={handleMouseLeave}
        >
          Menu 3
          {activeMenu === 'menu3' && (
            <ul className="dropdown">
              <li>Submenu 3-1</li>
              <li>Submenu 3-2</li>
              <li>Submenu 3-3</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
