import React from "react";

const ProgressBar = (props) => {
    const { skill, desc, bgcolor, completed } = props;
    const containerStyles = {
        height: 10,
        width: '90%',
        backgroundColor: "#494949",
        borderRadius: 50,
        alignSelf: 'center'
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        transition: 'width 1s ease-in-out',
    }

    const h5Styles = {
        color: "#dad8d8",
        fontSize: "10pt",
        letterSpacing: "1pt"
    }

    const pStyles = {
        color: "#ffffff",
        fontSize: "8pt",
        letterSpacing: "1pt"
    }

    const mainDivStyles = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 50,
        marginBottom: 50,
        padding: 0,
        textAlign: 'center',
        justifyItem: 'center'
    }

    return (
        <div style={mainDivStyles}>
            <div>
                <h5 style={h5Styles}>{skill} - {completed}%</h5>
                <p style={pStyles}> ({desc}) </p>
            </div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;