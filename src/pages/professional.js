import React from 'react';
import 'normalize.css';
import Navbar from "../components/NavbarPro"
import ProgressBar from "../components/ProgressBar"
import "../styles/professional.css"
import Pic from "../assets/about.png"

const skill1 = [
    { skill: "FUNCTIONAL", desc: "C", bgcolor: "#dadada", completed: 70 },
    { skill: "OBJECTS", desc: "C++ / BLUEPRINT / PYTHON", bgcolor: "#dadada", completed: 60 },
    { skill: "OS", desc: "LINUX / WINDOWS / MACOS", bgcolor: "#dadada", completed: 90 },
];

const skill2 = [
    { skill: "WEB", desc: "HTML / CSS / JS / TS / VUE.JS / REACT / ANGULAR", bgcolor: "#dadada", completed: 90 },
    { skill: "MOBILE", desc: "REACT NATIVE / SWIFTUI", bgcolor: "#dadada", completed: 50 },
    { skill: "OTHERS", desc: "OBS / PS / PP", bgcolor: "#dadada", completed: 70 },
];

function Professional() {
    return (
        <div className="professionalPageDiv">
            <Navbar />
            <section className="main-wrapper">
                <div className="header" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="header-wrapper">
                                <div className="col-md-12 col-xs-12">
                                    <h1 className="header-title">DEVELOPER</h1>
                                    <p className="header-para">THOMAS MAUCONDUIT</p>
                                    <hr className="line"></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="no-padding col-lg-6 col-md-12 col-xs-12">
                                <div className="text-wrapper">
                                    <h3>Hello I'am Thomas</h3>
                                    <h5>Developer studient</h5>
                                    <hr className="line"></hr>
                                    <p className="about-text">As a 4th year student at Epitech Lyon, I have been developing my technical skills in development for 4 years.</p>
                                    <p className="about-text">Whether at school on individual and group projects<br></br> (about 50), or in the corporate world (2 years of professional experience), I always give my all to what I do.</p>
                                    <p className="about-text">I am someone who does not hesitate to search the internet to understand and solve the different problems I encounter.</p>
                                    <p className="about-text">At Epitech, I learned to learn and never give up. I am persistent and always finish what I start.<br></br> My main qualities: autonomy, rigor and curiosity.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <div className="img-wrap">
                                    <div className="about-me-img">
                                        <img src={Pic} className="img-fluid" alt="about images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills" id="skills">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 text-center">
                                <h2 className="title">SKILLS</h2>
                                <hr className="line"></hr>
                            </div>
                            <div className="col-md-6 col-xs-12 center">
                                {skill1.map((item, idx) => (
                                    <ProgressBar key={idx} skill={item.skill} desc={item.desc} bgcolor={item.bgcolor} completed={item.completed} />
                                ))}
                            </div>
                            <div className="col-md-6 col-xs-12 center">
                                {skill2.map((item, idx) => (
                                    <ProgressBar key={idx} skill={item.skill} desc={item.desc} bgcolor={item.bgcolor} completed={item.completed} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experiences" id="experiences">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-xs-12 text-center">
                                <h2 className="title">EXPERIENCES</h2>
                                <hr className="line"></hr>
                            </div>
                            <div className="col-lg-12">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio" id="portfolio">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <div className="contact" id="contact">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Professional;