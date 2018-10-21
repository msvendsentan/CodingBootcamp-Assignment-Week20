import React from "react";

const style = {
    header: {
        height: "70px",
    },
    h2fix: {
        margin: 0,
        textAlign: "center",
        lineHeight: "70px"
    }
}

const Header = () => (
    <header>
        <div className="light-blue lighten-1 z-depth-2" style={style.header}>
            <h3 className="white-text" style={style.h2fix}>NYT Article Scraper</h3>
        </div>
    </header>
);

export default Header;