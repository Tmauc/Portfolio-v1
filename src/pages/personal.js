import React from 'react';
import Navbar from "../components/Navbar"
import "../styles/personal.css"

function Personal() {
    return (
        <div className="personalPageDiv">
            <Navbar />
            <div>
                <h1>Personal</h1>
                <p>This is Personal page</p>
            </div>
        </div>
    );
};
export default Personal;