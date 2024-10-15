import React from "react";

// @ts-ignore
function Menubar({ onMenuClick }) {
    return (
        <nav className="bg-dark text-white p-1 w-100 d-flex justify-content-start text-left ps-4">
            <button
                type="button"
                className="btn text-white"
                onClick={() => onMenuClick("home")}
            >
                <h1>Babybet</h1>
            </button>
            <button
                type="button"
                className="btn text-white"
                onClick={() => onMenuClick("champagnes")}
            >
                <h2>Champagnes</h2>
            </button>
            <button
                type="button"
                className="btn text-white"
                onClick={() => onMenuClick("champagnes")}
            >
                <h2>Rules</h2>
            </button>
        </nav>
    );
}

export default Menubar;

//todo*
