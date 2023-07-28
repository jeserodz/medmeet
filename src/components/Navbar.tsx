export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark osahan-nav-mid">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="movies.html">
              <i className="fas fa-fw fa-film" />
              <span>Movies</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="events.html">
              <i className="fas fa-fw fa-glass-cheers" />
              <span>Events</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="people.html">
              <i className="fas fa-fw fa-users" />
              <span>People</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sports.html">
              <i className="fas fa-fw fa-futbol" />
              <span>Sports</span>
            </a>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="offers.html">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownPortfolio"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownPortfolio"
              >
                <a className="dropdown-item" href="movies.html">
                  Movies
                </a>
                <a className="dropdown-item" href="movies-detail.html">
                  Movie Detail
                </a>
                <a className="dropdown-item" href="events.html">
                  Events
                </a>
                <a className="dropdown-item" href="events-detail.html">
                  Event Detail
                </a>
                <a className="dropdown-item" href="people.html">
                  People
                </a>
                <a className="dropdown-item" href="people-detail.html">
                  People Detail
                </a>
                <a className="dropdown-item" href="sports.html">
                  Sports
                </a>
                <a className="dropdown-item" href="sports-detail.html">
                  Sport Detail
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownBlog"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other Pages
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownBlog"
              >
                <a className="dropdown-item" href="login.html">
                  Login
                </a>
                <a className="dropdown-item" href="register.html">
                  Register
                </a>
                <a className="dropdown-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <a className="dropdown-item" href="faq.html">
                  FAQ
                </a>
                <a className="dropdown-item" href="404.html">
                  404 Page
                </a>
                <a className="dropdown-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
