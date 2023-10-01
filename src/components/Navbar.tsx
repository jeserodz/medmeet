'use client';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark osahan-nav-mid">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li
            className={classNames('nav-item', {
              'font-weight-bolder': pathname === '/',
            })}
          >
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-home" />
              <span>Home</span>
            </a>
          </li>
          <li
            className={classNames('nav-item', {
              'font-weight-bolder': pathname.startsWith('/events'),
            })}
          >
            <a className="nav-link" href="/events">
              <i className="fas fa-fw fa-glass-cheers" />
              <span>Events</span>
            </a>
          </li>
          <li
            className={classNames('nav-item', {
              'font-weight-bolder': pathname.startsWith('/venues'),
            })}
          >
            <a className="nav-link" href="/venues">
              <i className="fas fa-fw fa-map-pin" />
              <span>Venues</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
