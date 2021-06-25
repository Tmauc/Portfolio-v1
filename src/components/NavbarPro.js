import React from "react"
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import "../styles/NavbarPro.css"

function NavbarProComponent() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <a className="navbar-brand" href="/home">PRO
        <div className="tooltip">Back home</div>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i className="fa fa-navicon white"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#header">
              HOME
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              ABOUT ME
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              SKILLS
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume">
              RESUME
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link isDisabled" href="#projects">
              PROJECTS
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              CONTACT
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="bottom-info">
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
export default NavbarProComponent;