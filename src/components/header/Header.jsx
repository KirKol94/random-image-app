import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const links = [
    { to: '/', name: 'Home' },
    { to: '/likes', name: 'Likes' },
  ];

  return (
    <header className="bg-gray-800 text-white">
      <section className="container mx-auto">
        <nav className="flex space-x-3">
          {links.length > 0 && links.map(({ to, name }) => (
            <Link key={to} to={to}>
              <div className="py-3">{name}</div>
            </Link>
          ))}
        </nav>
      </section>
    </header>
  );
}
