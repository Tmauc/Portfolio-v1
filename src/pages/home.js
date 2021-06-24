import React from 'react';
import { Button } from 'react-bootstrap'
import pro from '../assets/pro.png';
import perso from '../assets/perso.png';
import "../styles/home.css";

function Home() {
    return (
        <div className="homeDiv">
            <section className="main-wrapper-home">
                <div className="PDiv proDiv">
                    <div className="container">
                        <div className="row rotate5">
                            <div className="col-lg-6 col-xs-12 colBtnHomePro paddingL250">
                                <div className="text-wrapper-home">
                                    <hr className="line-perso backColorWhite"></hr>
                                    <Button className="btnHome" variant="light" href="/professional">PRO</Button>
                                    <hr className="line-perso backColorWhite"></hr>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-xs-12">
                                <div className="img-wrap-home paddingR50">
                                    <div className="colImgHome">
                                        <img src={pro} className="imgHome" alt="about images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="PDiv persoDiv">
                    <div className="container">
                        <div className="row rotate5">
                        <div className="col-lg-6 col-xs-12 colBtnHome2 paddingR300">
                                <div className="text-wrapper-home">
                                    <hr className="line-perso backColorBlack"></hr>
                                    <Button className="btnHome" variant="dark" href="/personal">PERSO</Button>
                                    <hr className="line-perso backColorBlack"></hr>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-xs-12">
                                <div className="img-wrap-home paddingL20">
                                    <div className="colImgHome">
                                        <img src={perso} className="imgHome" alt="about images" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xs-12 colBtnHome paddingR300">
                                <div className="text-wrapper-home">
                                    <hr className="line-perso backColorBlack"></hr>
                                    <Button className="btnHome" variant="dark" href="/personal">PERSO</Button>
                                    <hr className="line-perso backColorBlack"></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="PDiv proDiv">
                <Row className="rowHome rotate5">
                    <Col xs lg="3" className="colBtnHome jcEnd">
                        <Button className="btnHome" variant="light" href="/professional">Professional</Button>
                    </Col>
                    <Col className="colImgHome">
                        <img src={pro} className="imgHome marginR5" alt="logo" />
                    </Col>
                </Row>
            </div>
            <div className="PDiv persoDiv">
                <Row className="rowHome rotate5">
                    <Col className="colImgHome">
                        <img src={perso} className="imgHome" alt="logo" />
                    </Col>
                    <Col xs lg="3" className="colBtnHome jsStart">
                        <Button className="btnHome" variant="dark" href="/personal">Personal</Button>
                    </Col>
                </Row>
            </div> */}
        </div>
    );
}
export default Home;
