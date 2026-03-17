import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { path: '/', label: 'Books' },
      { path: '/merch', label: 'Merch' },
      { path: '/3d', label: '3D' },
      { path: '/aigc', label: 'AIGC' },
      { path: '/about', label: 'About' },
    ],
    []
  );

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const mobileMenuOpenRef = useRef(mobileMenuOpen);
  useEffect(() => {
    mobileMenuOpenRef.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  // Auto-close on navigation change (pathname/search/hash) (async to satisfy lint rule)
  useEffect(() => {
    if (!mobileMenuOpenRef.current) return;
    const t = window.setTimeout(() => setMobileMenuOpen(false), 0);
    return () => window.clearTimeout(t);
  }, [location.key]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastY;
          const nearTop = currentY < 16;

          if (nearTop) {
            setHeaderVisible(true);
          } else if (Math.abs(delta) >= 8) {
            setHeaderVisible(delta < 0);
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        data-cmp="Header"
        className={[
          'sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70',
          'transition-transform duration-300 ease-out',
          headerVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none',
        ].join(' ')}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="editorial-heading text-xl sm:text-2xl tracking-tight">
              Hi！I'm Crystal Jupiter！
            </Link>

            {/* Desktop nav (>=768px) */}
            <div className="hidden md:flex items-center space-x-8">
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

            {/* Mobile hamburger (<768px) */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-border bg-background/80 w-11 h-11 hover:bg-muted transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="relative block w-5 h-4">
                <span
                  className={[
                    'absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-transform duration-200 ease-out',
                    mobileMenuOpen ? 'translate-y-1.5 rotate-45' : 'translate-y-0 rotate-0',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-1.5 h-0.5 w-5 bg-foreground transition-opacity duration-200 ease-out',
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-3 h-0.5 w-5 bg-foreground transition-transform duration-200 ease-out',
                    mobileMenuOpen ? 'translate-y-[-6px] -rotate-45' : 'translate-y-0 rotate-0',
                  ].join(' ')}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={[
          'md:hidden fixed inset-0 z-[60] transition-opacity duration-200 ease-out',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={[
            'absolute inset-0 bg-background/70 backdrop-blur-sm',
            mobileMenuOpen ? 'animate-in fade-in duration-200' : 'animate-out fade-out duration-200',
          ].join(' ')}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={[
            'absolute inset-x-0 top-0 bottom-0 bg-background border-l border-border shadow-custom',
            'transition-transform duration-300 ease-out',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
          style={{ width: 'min(88vw, 360px)', marginLeft: 'auto' }}
          role="dialog"
          aria-modal="true"
        >
          <div className="px-6 py-6 flex items-center justify-between border-b border-border">
            <span className="editorial-heading text-lg tracking-tight">Menu</span>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background w-11 h-11 hover:bg-muted transition-colors"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-xl leading-none">×</span>
            </button>
          </div>

          <div className="px-4 py-3">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={[
                  'flex items-center justify-between rounded-md px-4',
                  'min-h-11 py-3',
                  'text-base tracking-wide',
                  isActive(path)
                    ? 'bg-muted text-foreground font-medium'
                    : 'text-foreground hover:bg-muted/70',
                  'transition-colors',
                ].join(' ')}
              >
                <span>{label}</span>
                <span className="text-muted-foreground">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;