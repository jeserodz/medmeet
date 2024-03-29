'use client';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useUser } from '../providers/UserProvider';
import Image from 'next/image';

export function Header() {
  const router = useRouter();
  const { user } = useUser();

  async function handleLogout() {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
    if (!error) router.push('/login');
  }

  return (
    <nav className="navbar navbar-expand navbar-dark topbar static-top shadow-sm bg-dark osahan-nav-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image width={152} height={27} src="/img/logo.png" alt="logo" />
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

          <li className="nav-item dropdown no-arrow">
            {user ? (
              <>
                <a
                  className="nav-link dropdown-toggle pr-0"
                  href="/profiles/me"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline small">
                    Hi {user?.first_name}!
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src={user?.avatar_url || '/img/s4.png'}
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow-sm animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="/profiles/me">
                    <i className="fas fa-user-circle fa-sm fa-fw mr-2 ri" />
                    Profile
                  </a>
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
              </>
            ) : (
              <a className="nav-link dropdown-toggle pr-0" href="/login">
                <span className="mr-2 d-none d-lg-inline small text-primary">
                  Login / Sign up <i className="fas fa-sign-in-alt ml-1" />
                </span>
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
