import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  console.log('Header rendered, current path:', location.pathname);

  const navItems = [
    { path: '/', label: 'Books' },
    { path: '/merch', label: 'Merch' },
    { path: '/3d', label: '3D' },
    { path: '/aigc', label: 'AIGC' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header data-cmp="Header" className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="max-w-[1440px] mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="editorial-heading text-2xl tracking-tight">
            Hi！I'm Crystal Jupiter！
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm uppercase tracking-wider transition-all ${
                  isActive(path)
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;