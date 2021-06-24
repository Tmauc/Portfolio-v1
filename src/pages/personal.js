import React from 'react';
import Navbar from "../components/NavbarPerso"
import Pic from "../assets/aboutPerso1.png"

function Personal() {
    return (
        <div className="personalPageDiv">
            <Navbar />
            <section className="main-wrapper-perso">
                <div className="header-perso" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="header-wrapper-perso">
                                <div className="col-md-12 col-xs-12">
                                    <h1 className="header-title colorBlack">GAMER</h1>
                                    <p className="header-para colorBlack">THOMAS MAUCONDUIT</p>
                                    <hr className="line backColorBlack"></hr>
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
                                    <h3 className="colorBlack">Hello I'm Thomas</h3>
                                    <h5 className="colorBlack">A gamer</h5>
                                    <hr className="line backColorBlack"></hr>
                                    <p className="about-text-black">It's been about ten years since I discovered video games, photography and video and I love it.</p>
                                    <p className="about-text-black">And as I like to share my passions:</p>
                                    <p className="about-text-black">- I broadcast lives on twitch.</p>
                                    <p className="about-text-black">- I do video editing and post my videos on youtube.</p>
                                    <p className="about-text-black">- I take pictures and share them on instagram.</p>
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
                <div className="twitch" id="twitch">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 text-center">
                                <h2 className="title colorBlack">TWITCH</h2>
                                <hr className="line backColorBlack"></hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="youtube" id="youtube">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 text-center">
                                <h2 className="title colorBlack">YOUTUBE</h2>
                                <hr className="line backColorBlack"></hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photography" id="photography">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 text-center">
                                <h2 className="title colorBlack">PHOTOGRAPHY</h2>
                                <hr className="line backColorBlack"></hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 text-center">
                                <h2 className="title colorBlack">CONTACT</h2>
                                <hr className="line backColorBlack"></hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="socialR fixed-bottom" id="social">
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
};
export default Personal;