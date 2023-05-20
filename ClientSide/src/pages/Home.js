import React from "react";

const Home = () => {
    return (
        <>
            <div id="title-container">
                <h1 id = "title" style={{ gridArea: "title" }}><span>Impact of Technology</span></h1>
                <h2 style={{gridArea:"logo",top:"0"} }>TechEthix</h2>
                <a href="/about-us" class="title-link" style={{gridArea:"link1"} }><button id="title-btn">About us</button></a>
                <a href="/account" class="title-link" style={{ gridArea: "link2" }}><button id="title-btn">Sign up</button></a>
            </div>
        </>);  
}

export default Home;