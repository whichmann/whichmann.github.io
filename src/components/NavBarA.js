
import React from "react";
import Home from "./Home";
import Terminarz from "./Terminarz";
import ONas from "./ONas";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Rozmaturzeni
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="onas">
                O NAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="terminarz">
                TERMINARZ
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="oferta">
                OFERTA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="cennik">
                CENNIK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="kontakt">
                KONTAKT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.facebook.com/Rozmaturzeni-1172005829635509/"
              >
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="online">
                ONLINE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="uslugi">
                INNE USŁUGI
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            ></input>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="pages">
        <Route exact path="/" component={Home} />
        <Route path="/onas" component={ONas} />
        <Route path="/terminarz" component={Terminarz} />
        <Route path="/oferta" component={Terminarz} />
        <Route path="/cennik" component={Terminarz} />
        <Route path="/kontakt" component={Terminarz} />
        <Route path="/online" component={Terminarz} />
        <Route path="/uslugi" component={Terminarz} />
      </div>
    </Router>
  );
};

export default NavBar;
