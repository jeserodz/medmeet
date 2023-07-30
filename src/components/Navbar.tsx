import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark osahan-nav-mid">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-home" />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events">
              <i className="fas fa-fw fa-glass-cheers" />
              <span>Events</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
