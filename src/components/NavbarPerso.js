import React from "react"
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import "../styles/NavbarPerso.css"

function NavbarPersoComponent() {
  return (
    <nav className="navbar-perso navbar-expand-lg">
      <a className="navbar-brand-perso " href="/home">PERSO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i className="fa fa-navicon white"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav-perso">
          <li className="nav-item-perso">
            <a className="nav-link-perso" href="#header">
              HOME
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item-perso">
            <a className="nav-link-perso" href="#about">
              ABOUT ME
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item-perso">
            <a className="nav-link-perso isDisabled" href="#twitch">
              TWITCH
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item-perso">
            <a className="nav-link-perso isDisabled" href="#youtube" disabled>
              YOUTUBE
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item-perso">
            <a className="nav-link-perso isDisabled" href="#photography">
              PHOTOGRAPHY
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item-perso">
            <a className="nav-link-perso" href="#contact">
              CONTACT
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-perso">
        <div className="bottom-info-perso">
          <p>
            Email
            <a href="#header"> mauc.thomas@gmail.com</a>
          </p>
          <p>Copyright © 2021 Mauc.</p>
        </div>
      </div>
    </nav>
  )
}
export default NavbarPersoComponent;