import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const links = [
    { to: '/', name: 'Home' },
    { to: '/likes', name: 'Likes' },
  ];

  return (
    <header className="bg-gray-800 text-white">
      <section className="container mx-auto">
        <nav className="flex space-x-3">
          {links?.map(({ to, name }) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'text-white/50' : '')}>
              <div className="py-3">{name}</div>
            </NavLink>
          ))}
        </nav>
      </section>
    </header>
  );
}
