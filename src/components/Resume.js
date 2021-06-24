import React from "react";
import { Button } from 'react-bootstrap'

const ResumeSection = (props) => {
    const { id, date, title, where, desc } = props;

    const h5Styles = {
        color: "#dad8d8",
        fontSize: "15pt",
        letterSpacing: "1pt",
        margin: 0
    }

    const pStyles = {
        color: "#ffffff",
        fontSize: "10pt",
        letterSpacing: "1pt",
        margin: 0,
        marginTop: 8,
        display: 'none'
    }

    const spanStyles = {
        color: "white",
        backgroundColor: '#3d3d3d',
        height: '100%',
        width: '20%',
        padding: 8,
        borderRadius: "3%",
        fontWeight: "600",
        alignSelf: "left"
    }

    const boxStyles = {
        display: 'flex',
        flexDirection: 'column',
        border: "1px solid white",
        padding: 10,
        paddingLeft: 15,
        width: "60%",
        textAlign: "left",
        alignSelf: "right"
    }

    const btnStyles = {
        height: '100%',
        backgroundColor: 'white',
        color: "black",
        marginRight: 20,
        marginLeft: 20,
    }

    const mainDivStyles = {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 50,
        padding: 0,
        justifyContent: 'center'
    }

    function click(id) {
        var para = document.getElementById(id);
        para.style.display === 'inline-block' ? para.style.display = 'none' : para.style.display = 'inline-block';
    }

    return (
        <div style={mainDivStyles}>
            <span style={spanStyles}>{date}</span>
            <Button style={btnStyles} variant="dark" onClick={() => click(id + "pID")}>+</Button>
            <div style={boxStyles}>
                <h5 style={h5Styles}>{title} - {where}</h5>
                <p id={id + "pID"} style={pStyles}>{desc}</p>
            </div>
        </div>
    );
};

export default ResumeSection;