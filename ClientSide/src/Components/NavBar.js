import React, { useEffect } from 'react';
import { accountLogo } from "../Content/user-icon.svg";

export default function NavBar() {

    const UrlPagePairs = { '': 'Home', 'about-us': 'About us', 'computers-in-the-work-force': 'Computers in the work force' }

    const pages = ['', 'about-us', 'computers-in-the-work-force', 'automated-decision-making', 'artificial-intelligence', 'environmental-effects','ethical-issues', 'account' ]

    //const currentPage = UrlPagePairs[ window.location.href.split('/')[3]];

    function ChangeBg() {
        var htmlBg = document.getElementById("html-background");
       
        htmlBg.classList.toggle("with-mask");

    }

    

    useEffect(() => {
        // code to run after render goes here
        const linkindex = pages.indexOf(window.location.href.split('/')[3]);
        var highlight = document.querySelector('#nav-highlight');
        var navbarLinks = document.getElementById('navbar-container').children;
        var currentLink = navbarLinks.item(linkindex).firstChild;

        highlight.style.setProperty('--l', currentLink.offsetLeft + 10 + "px");
        highlight.style.setProperty('--w', currentLink.offsetWidth - 20 + "px");

        highlight.style.animation = "show 1s cubic-bezier(0.495, 0.010, 0.595, 1.000) forwards";

        //highlight.style.left = currentLink.offsetLeft + "px";
        //highlight.style.width = currentLink.offsetWidth + "px";
        console.log(currentLink.offsetLeft);
        console.log(currentLink.offsetWidth);

    }, []);

    return <nav id="nav">

        <ul id="navbar-container" onMouseLeave={(e) => {ReSetunderlinePos(e)}}>
            <li><a href="/" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>TechEthix</a></li>
            <li><a href="/about-us" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>About us</a></li>
            <li><a href="/computers-in-the-work-force" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Computers in the work force</a></li>
            <li><a href="/automated-decision-making" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Automated Decision Making</a></li>
            <li><a href="/artificial-intelligence" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Artificial Intelligence</a></li>
            <li><a href="/environmental-effects" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Environmental Effects</a></li>
            <li><a href="/ethical-issues" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Ethical issues</a></li>
            <li style={{ float: "right", height: "75%" }}><a href="/account" onMouseEnter={(e) => { SetUnderlinePos(e.target) }} style={{ padding: ".2em", height: "100%", aspectRatio: "1/1" }}><img></img></a></li>
            <li style={{ float: "right", marginTop: "0.1%", height: "75%", aspectRatio: "1/1" }}><button style={{ width: "100%", height: "100%" }} onClick={ChangeBg }></button></li>
        </ul>
        <div id="nav-underline" />
        <div id="nav-highlight" />
    </nav>
}

function SetUnderlinePos(e) {
    var underline = document.querySelector('#nav-underline');
    underline.style.left = e.offsetLeft + 5 + "px";
    document.cookie = e.offsetLeft + "px";
    underline.style.width = e.offsetWidth - 10 + "px";
}
function ReSetunderlinePos() {
    var underline = document.querySelector('#nav-underline');
    underline.style.left = "5px";
    underline.style.width = document.getElementById("nav").offsetWidth - 10 + "px";
    console.log(":" +  - 10 + "px");
    //underline.style.width = underline.offsetWidth - 10 + "px";
}

