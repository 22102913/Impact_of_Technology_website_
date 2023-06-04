import React, { useEffect } from 'react';
import { accountLogo } from "../Content/user-icon.svg";

import ToggleSwitch from "./ToggleSwitch";

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

        var underline = document.querySelector('#nav-underline');

        var navbar = document.getElementById('navbar-container');
        underline.style.top = navbar.offsetTop + navbar.offsetHeight + "px";

        const linkindex = pages.indexOf(window.location.href.split('/')[3]);
        if (linkindex == -1) {
            return;
        }
        var highlight = document.querySelector('#nav-highlight');
        var navbarLinks = document.getElementById('navbar-container').children;
        var currentLink = navbarLinks.item(linkindex).firstChild;

        highlight.style.setProperty('--l', currentLink.offsetLeft + "px");
        highlight.style.setProperty('--w', currentLink.offsetWidth + "px");

        highlight.classList.add("show");

        highlight.style.top = currentLink.offsetTop + currentLink.offsetHeight - 8 + "px";

        //highlight.style.animation = "show 1s cubic-bezier(0.495, 0.010, 0.595, 1.000) forwards";

       //highlight.style.left = currentLink.offsetLeft + "px";
        //highlight.style.width = currentLink.offsetWidth + "px";

        //console.log(currentLink.offsetLeft);
        //console.log(currentLink.offsetWidth);

        const pageTitle = document.getElementsByClassName('page-title');
        if (pageTitle.length > 0) {
            pageTitle[0].style.top = navbar.offsetHeight + "px";
            console.log(navbar.offsetHeight + "px");
        }








    }, []);

    return <>
        <nav id="nav">

        <ul id="navbar-container" onMouseLeave={(e) => {ReSetunderlinePos(e)}}>
            <li style={{ width: "100px" }}><a href="/" onMouseEnter={(e) => { SetUnderlinePos(e.target) }} style={{ margin: "0", width: "fit-content" }} >
                <svg xmlns="http://www.w3.org/2000/svg" width="%" height="25%" viewBox="0 0 54 10" fill="none" stroke="white" >
                <path class="path" style={{"--length": "304", "--end":"205"} } d="M7.116 1.224H4.08V9H3.24V1.224H0.204V0.48H7.116V1.224ZM9.57656 9.12C9.12856 9.12 8.71256 9.036 8.32856 8.868C7.94456 8.692 7.61256 8.456 7.33256 8.16C7.05256 7.856 6.83256 7.508 6.67256 7.116C6.52056 6.724 6.44456 6.304 6.44456 5.856C6.44456 5.272 6.57656 4.736 6.84056 4.248C7.11256 3.76 7.48456 3.372 7.95656 3.084C8.42856 2.788 8.96456 2.64 9.56456 2.64C10.1806 2.64 10.7166 2.788 11.1726 3.084C11.6366 3.38 12.0006 3.772 12.2646 4.26C12.5286 4.74 12.6606 5.268 12.6606 5.844C12.6606 5.908 12.6606 5.972 12.6606 6.036C12.6606 6.092 12.6566 6.136 12.6486 6.168H7.29656C7.33656 6.616 7.46056 7.016 7.66856 7.368C7.88456 7.712 8.16056 7.988 8.49656 8.196C8.84056 8.396 9.21256 8.496 9.61256 8.496C10.0206 8.496 10.4046 8.392 10.7646 8.184C11.1326 7.976 11.3886 7.704 11.5326 7.368L12.2406 7.56C12.1126 7.856 11.9166 8.124 11.6526 8.364C11.3886 8.604 11.0766 8.792 10.7166 8.928C10.3646 9.056 9.98456 9.12 9.57656 9.12ZM7.27256 5.58H11.8926C11.8606 5.124 11.7366 4.724 11.5206 4.38C11.3126 4.036 11.0366 3.768 10.6926 3.576C10.3566 3.376 9.98456 3.276 9.57656 3.276C9.16856 3.276 8.79656 3.376 8.46056 3.576C8.12456 3.768 7.84856 4.04 7.63256 4.392C7.42456 4.736 7.30456 5.132 7.27256 5.58ZM16.6315 9.12C16.1755 9.12 15.7555 9.036 15.3715 8.868C14.9955 8.692 14.6635 8.452 14.3755 8.148C14.0955 7.844 13.8755 7.496 13.7155 7.104C13.5635 6.712 13.4875 6.296 13.4875 5.856C13.4875 5.264 13.6195 4.724 13.8835 4.236C14.1475 3.748 14.5155 3.36 14.9875 3.072C15.4595 2.784 16.0035 2.64 16.6195 2.64C17.2035 2.64 17.7195 2.776 18.1675 3.048C18.6155 3.312 18.9475 3.672 19.1635 4.128L18.3715 4.38C18.1955 4.06 17.9475 3.812 17.6275 3.636C17.3155 3.452 16.9675 3.36 16.5835 3.36C16.1675 3.36 15.7875 3.468 15.4435 3.684C15.0995 3.9 14.8235 4.196 14.6155 4.572C14.4155 4.948 14.3155 5.376 14.3155 5.856C14.3155 6.328 14.4195 6.756 14.6275 7.14C14.8355 7.524 15.1115 7.832 15.4555 8.064C15.7995 8.288 16.1795 8.4 16.5955 8.4C16.8675 8.4 17.1275 8.352 17.3755 8.256C17.6315 8.16 17.8515 8.032 18.0355 7.872C18.2275 7.704 18.3555 7.524 18.4195 7.332L19.2235 7.572C19.1115 7.868 18.9235 8.136 18.6595 8.376C18.4035 8.608 18.0995 8.792 17.7475 8.928C17.4035 9.056 17.0315 9.12 16.6315 9.12ZM25.7615 9H24.9455V5.508C24.9455 4.804 24.8215 4.276 24.5735 3.924C24.3255 3.564 23.9695 3.384 23.5055 3.384C23.2015 3.384 22.8975 3.464 22.5935 3.624C22.2975 3.776 22.0335 3.988 21.8015 4.26C21.5775 4.524 21.4175 4.828 21.3215 5.172V9H20.5055V0.24H21.3215V4.164C21.5695 3.7 21.9135 3.332 22.3535 3.06C22.8015 2.78 23.2775 2.64 23.7815 2.64C24.1415 2.64 24.4455 2.704 24.6935 2.832C24.9495 2.96 25.1535 3.148 25.3055 3.396C25.4655 3.636 25.5815 3.92 25.6535 4.248C25.7255 4.568 25.7615 4.932 25.7615 5.34V9ZM33.3936 8.256V9H27.6696V0.48H33.2856V1.224H28.5096V4.296H32.6736V5.004H28.5096V8.256H33.3936ZM37.732 8.7C37.668 8.724 37.568 8.768 37.432 8.832C37.296 8.896 37.132 8.952 36.94 9C36.748 9.048 36.54 9.072 36.316 9.072C36.084 9.072 35.864 9.028 35.656 8.94C35.456 8.852 35.296 8.72 35.176 8.544C35.056 8.36 34.996 8.136 34.996 7.872V3.396H34.132V2.748H34.996V0.636H35.812V2.748H37.252V3.396H35.812V7.644C35.828 7.868 35.908 8.036 36.052 8.148C36.204 8.26 36.376 8.316 36.568 8.316C36.792 8.316 36.996 8.28 37.18 8.208C37.364 8.128 37.476 8.072 37.516 8.04L37.732 8.7ZM44.0076 9H43.1916V5.508C43.1916 4.804 43.0676 4.276 42.8196 3.924C42.5716 3.564 42.2156 3.384 41.7516 3.384C41.4476 3.384 41.1436 3.464 40.8396 3.624C40.5436 3.776 40.2796 3.988 40.0476 4.26C39.8236 4.524 39.6636 4.828 39.5676 5.172V9H38.7516V0.24H39.5676V4.164C39.8156 3.7 40.1596 3.332 40.5996 3.06C41.0476 2.78 41.5236 2.64 42.0276 2.64C42.3876 2.64 42.6916 2.704 42.9396 2.832C43.1956 2.96 43.3996 3.148 43.5516 3.396C43.7116 3.636 43.8276 3.92 43.8996 4.248C43.9716 4.568 44.0076 4.932 44.0076 5.34V9ZM45.7477 9V2.748H46.5637V9H45.7477ZM45.7477 1.44V0.24H46.5637V1.44H45.7477ZM48.5529 2.748L50.3889 5.196L50.4849 5.376L50.5809 5.196L52.4049 2.748H53.3289L50.9529 5.892L53.3289 9H52.4049L50.5809 6.564L50.4849 6.396L50.3889 6.564L48.5649 9H47.6409L50.0049 5.892L47.6409 2.748H48.5529Z" />
                </svg>
            </a>
            </li>
            <li><a href="/about-us" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>About us</a></li>
            <li><a href="/computers-in-the-work-force" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Computers in the work force</a></li>
            <li><a href="/automated-decision-making" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Automated Decision Making</a></li>
            <li><a href="/artificial-intelligence" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Artificial Intelligence</a></li>
            <li><a href="/environmental-effects" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Environmental Effects</a></li>
            <li><a href="/ethical-issues" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Ethical issues</a></li>
            <li style={{ float: "right", marginLeft: "auto" }}><ToggleSwitch offCommand={ChangeBg} onCommand={() => { alert("Warning may reduce frame rates"); ChangeBg(); }}></ToggleSwitch></li>
            <li style={{ height: "auto",  aspectRatio:"1/1", transform:"translateX(-200%)"  }}><a href="/account" onMouseEnter={(e) => { SetUnderlinePos(e.target) }} style={{ padding: ".0", height: "100%", aspectRatio: "1/1" }}><img class="account-icon"></img></a></li>
        </ul>
        <div id="nav-underline" />
        <div id="nav-highlight" />
    </>
}

function SetUnderlinePos(e) {
    var underline = document.querySelector('#nav-underline');
    underline.style.left = e.offsetLeft + 5 + "px";
    document.cookie = e.offsetLeft + "px";
    underline.style.width = e.offsetWidth - 10 + "px";
    underline.style.top = e.offsetTop + e.offsetHeight + "px";
    console.log(e.offsetTop);
}
function ReSetunderlinePos() {
    var underline = document.querySelector('#nav-underline');
    underline.style.left = "5px";
    underline.style.width = document.getElementById("nav").offsetWidth - 10 + "px";

    var navbar = document.getElementById('navbar-container');
    underline.style.top = navbar.offsetTop + navbar.offsetHeight -4 + "px";

    //console.log(":" +  - 10 + "px");
    //underline.style.width = underline.offsetWidth - 10 + "px";
}

