'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
    if (!error) router.push('/login');
  }

  return (
    <nav className="navbar navbar-expand navbar-dark topbar static-top shadow-sm bg-dark osahan-nav-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="/img/logo.png" alt="logo" />
        </a>

        <form className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-white border-0 small"
              placeholder="Search for Movies, Events, Plays, Sports and Activities..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn bg-white" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </form>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw" />
            </a>

            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item no-arrow mx-1">
            <a className="nav-link" href="offers.html">
              <i className="fas fa-fire fa-fw" />

              <span className="badge badge-danger bg-gradient-danger">NEW</span>
            </a>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw" />

              <span className="badge badge-danger badge-counter">8+</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow-sm animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary text-white">KN</div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle w-60" src="/img/s1.png" />
                  <div className="status-indicator bg-success" />
                </div>
                <div>
                  <div className="text-truncate">
                    Duis vel est sit amet ipsum egestas efficitur.
                  </div>
                  <div className="small text-gray-500">
                    Gurdeep Osahan · 58m
                  </div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle w-60" src="/img/s2.png" />
                  <div className="status-indicator" />
                </div>
                <div>
                  <div className="text-truncate">
                    Pellentesque euismod diam sit amet nibh molestie, imperdiet
                    feugiat mi feugiat.
                  </div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle w-60" src="/img/s3.png" />
                  <div className="status-indicator bg-warning" />
                </div>
                <div>
                  <div className="text-truncate">
                    Quisque ac justo bibendum nunc fringilla pharetra nec sit
                    amet mauris.
                  </div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  Sed aliquet nibh nec odio congue, in condimentum massa
                  dapibus.
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Pellentesque sit amet nunc consectetur, porta sapien a,
                  bibendum dolor.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Show All Alerts
              </a>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle pr-0"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline small">
                askbootstrap
              </span>
              <img className="img-profile rounded-circle" src="/img/s4.png" />
            </a>

            <div
              className="dropdown-menu dropdown-menu-right shadow-sm animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="profile.html">
                <i className="fas fa-user-circle fa-sm fa-fw mr-2 ri" />
                Profile
              </a>
              <a className="dropdown-item" href="profile.html">
                <i className="fas fa-heart fa-sm fa-fw mr-2 ri" />
                Watchlist
              </a>
              <a className="dropdown-item" href="profile.html">
                <i className="fas fa-list-alt fa-sm fa-fw mr-2 ri" />
                Your Lists
              </a>
              <a className="dropdown-item" href="profile.html">
                <i className="fas fa-cog fa-sm fa-fw mr-2 ri" />
                Account Settings
              </a>
              <div className="dropdown-divider" />
              <div
                className="dropdown-item"
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 ri" />
                Logout
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
