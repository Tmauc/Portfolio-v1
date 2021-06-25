import React from 'react';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from "../components/NavbarPro"
import ProgressBar from "../components/ProgressBar"
import ContactForm from "../components/ContactForm"
import Resume from "../components/Resume"
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

const education = [
    { date: "2020 - NOW", title: "Master 2", where: "EPITECH Lyon", desc: "The Grande Ecole program is Epitech's historical curriculum. It lasts 5 years and trains experts in computer science. It offers a dense and varied technical content, including a diversity of programming projects, and covering many languages that will allow the student to approach all new technologies with serenity." },
    { date: "2017 - 2020", title: "Bachelor", where: "EPITECH Lyon", desc: "The Grande Ecole program is Epitech's historical curriculum. It lasts 5 years and trains experts in computer science. It offers a dense and varied technical content, including a diversity of programming projects, and covering many languages that will allow the student to approach all new technologies with serenity." },
    { date: "2014 - 2017", title: "Baccalauréat Scientifique", where: "Saint-Joseph High School Thônes", desc: "Pretty good awarded" },
];

const workExperience = [
    { date: "JUN 2021 - NOW", title: "Front developer", where: "Maskott", desc: "Recreate a webapp in react." },
    { date: "NOV 2020 - DEC 2020", title: "Freelance", where: "Inattendu", desc: "Event enterprise in presence and virtual.\n\n.\tSite management (Vue.js).\n.\tZOOM master.\n.\tSound, video and light management." },
    { date: "OCT 2019 - JAN 2021", title: "Front developer (Trainee)", where: "Ibani - MtPelerin", desc: "Ibani: Company managing the exchange of money.\nMtPelerin: Company (future bank) which aims at the creation of digital account safe, free, fast.\n\n.\tImprovement of the admin site.\n.\tUpdate of the mobile application.\n\nTools: Vue.js / React Native, Javascript / MacOS" },
    { date: "JUL 2018 - DEC 2018", title: "Back Office developer", where: "New access", desc: "Multinational editor of banking software for private banks.\n\n.\tCreation of a web application allowing to view a project as a node and a link (Force Layout).\n.\tAutomated log manager (several thousands of logs, parsed, then compiled into a single log according to the user's parameters).\n\nTools : C, JavaScript (angular, d3.js), Html / Css, VisualStudio" },
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
                                    <h3>Hello I'm Thomas</h3>
                                    <h5>Developer student</h5>
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
                            <div className="col-md-12 col-xs-12">
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
                <div className="resume" id="resume">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-xs-12">
                                <h2 className="title">RESUME</h2>
                                <hr className="line"></hr>
                                <div className="titleDiv">
                                    <h2 className="titlev2">Educations :</h2>
                                </div>
                                {education.map((item, idx) => (
                                    <Resume key={idx} id={idx + 'edu'} date={item.date} title={item.title} where={item.where} desc={item.desc} />
                                ))}
                                <div className="titleDiv">
                                    <h2 className="titlev2">Experiences :</h2>
                                </div>
                                {workExperience.map((item, idx) => (
                                    <Resume key={idx} id={idx + 'wor'} date={item.date} title={item.title} where={item.where} desc={item.desc} />
                                ))}
                            </div>
                            <div className="col-lg-12">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects" id="projects">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h2 className="title">PROJECTS</h2>
                                <hr className="line"></hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 item-center">
                                <h2 className="title">CONTACT</h2>
                                <hr className="line"></hr>
                                <ContactForm theme='light'></ContactForm>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="socialL fixed-bottom" id="social">
                    <div className="container">
                        <div className="row">
                            <div className="wrapper">
                                <div onClick={()=> window.open("https://www.facebook.com/mauc74/", "_blank")} className="icon facebook">
                                    <div className="tooltip">Facebook</div>
                                    <span><i className="fa fa-facebook-f"></i></span>
                                </div>
                                <div onClick={()=> window.open("https://twitter.com/MaucSama", "_blank")} className="icon twitter">
                                    <div className="tooltip">Twitter</div>
                                    <span><i className="fa fa-twitter"></i></span>
                                </div>
                                <div onClick={()=> window.open("https://www.instagram.com/t.mauc/", "_blank")} className="icon instagram">
                                    <div className="tooltip">Instagram</div>
                                    <span><i className="fa fa-instagram"></i></span>
                                </div>
                                <div onClick={()=> window.open("https://www.linkedin.com/in/tmauc/", "_blank")} className="icon linkedin">
                                    <div className="tooltip">Linkedin</div>
                                    <span><i className="fa fa-linkedin"></i></span>
                                </div>
                                <div onClick={()=> window.open("https://github.com/Tmauc", "_blank")} className="icon github">
                                    <div className="tooltip">Github</div>
                                    <span><i className="fa fa-github"></i></span>
                                </div>
                                <div onClick={()=> window.open("https://www.youtube.com/channel/UCLoRQsaPSD1QFqoHbxxX-CA", "_blank")} className="icon youtube">
                                    <div className="tooltip">Youtube</div>
                                    <span><i className="fa fa-youtube"></i></span>
                                </div>
                                <div onClick={()=> window.open("https://www.twitch.tv/maucsama", "_blank")} className="icon twitch">
                                    <div className="tooltip">Twitch</div>
                                    <span><i className="fa fa-twitch"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Professional;