import { Link } from 'react-router-dom';
import { path } from '../../const/links';

export default function Header() {
  const links = [
    { to: path.home, name: 'Home' },
    { to: path.likes, name: 'Favorites' },
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
