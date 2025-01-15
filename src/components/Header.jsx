import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyConext from '../context/context';
import {
  headerStyle,
  linkStyle,
  navStyle,
  logoStyle,
  linkHoverStyle,
} from '../css/heaerCss';
import { IconShoppingCart } from '@tabler/icons-react';

function Header() {
  const [hoveredLink, setHoveredLink] = useState(null); // מזהה של הלינק שנמצא במצב hover
  const navigate = useNavigate();
  const { currentUser, logOut } = useContext(MyConext);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  const handleLogOut = () => {
    logOut();
    navigate('/home');
  };

  const links = [
    { to: '/myCart', label: <IconShoppingCart size={30} stroke={1.5} /> },
    { to: '/usersManager', label: 'לניהול משתמשים', condition: currentUser?.role === 'manager' },
    { to: '/logIn', label: 'התחברות', condition: !currentUser },
    { to: '/contactUs', label: 'צור קשר' },
    { to: '/products', label: 'מוצרים' },
    { to: '/about', label: 'אודות' },
    { to: '/home', label: 'דף הבית' },
  ];

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {links.map(
          ({ to, label, condition = true }) =>
            condition && (
              <Link
                key={to}
                to={to}
                style={{
                  ...linkStyle,
                  ...(hoveredLink === to ? linkHoverStyle : {}),
                }}
                onMouseEnter={() => handleMouseEnter(to)}
                onMouseLeave={handleMouseLeave}
              >
                {label}
              </Link>
            )
        )}

        {currentUser && (
          <>
            <span>שלום, {currentUser.username}</span>
            <button
              onClick={handleLogOut}
              style={{
                ...linkStyle,
                ...(hoveredLink === 'logout' ? linkHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter('logout')}
              onMouseLeave={handleMouseLeave}
            >
              התנתקות
            </button>
          </>
        )}

        <Link to="/home">
          <img src="/images/logo.png" alt="Logo" style={logoStyle} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
