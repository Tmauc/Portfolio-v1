import React from 'react';
import {Button, Row, Col} from 'react-bootstrap'
import pro from '../assets/pro.png';
import perso from '../assets/perso.png';
import "../styles/home.css";

function Home() {
return (
    <div className="homeDiv">
        <div className="PDiv proDiv">
            <Row className="rowHome rotate5">
                <Col></Col>
                <Col xs lg="3" className="colBtnHome jcEnd">
                    <Button sm className="btnHome" variant="light" href="/professional">Professional</Button>
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
                <Col xs lg="3" className="colBtnHome">
                    <Button sm className="btnHome" variant="dark" href="/personal">Personal</Button>
                </Col>
                <Col></Col>
            </Row>
        </div>
    </div>
);
}
export default Home;
