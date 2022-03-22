import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "util/auth";

function Navbar(props) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={
        "navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <a>
                <img className="image" src={props.logo} alt="Logo" />
              </a>
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link href="/">
                  <a className="navbar-link">Account</a>
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link href="/dashboard">
                    <a className="navbar-item">Dashboard</a>
                  </Link>
                  <Link href="/settings/general">
                    <a className="navbar-item">Settings</a>
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link href="/auth/signout">
                    <a
                      className="navbar-item"
                      onClick={(e) => {
                        e.preventDefault();
                        auth.signout();
                      }}
                    >
                      Sign out
                    </a>
                  </Link>
                </div>
              </div>
            )}

            {!auth.user && (
              <Link href="/auth/signin">
                <a className="navbar-item">Sign in</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
