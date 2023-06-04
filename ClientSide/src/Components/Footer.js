import React, { useEffect } from 'react';
import { accountLogo } from "../Content/user-icon.svg";

import ToggleSwitch from "./ToggleSwitch";

export default function NavBar() {


    useEffect(() => {
        document.addEventListener("scroll", () => {

            let h = document.documentElement;
            let scrollPercent = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;

            let scrollIndicator = document.getElementById('footer-scroll-indicator');
            scrollIndicator.style.width = scrollPercent + "%";



        })
    }, []);






    return <>
        <div id="footer-preview">
            For more infomation:  &#8595; Scroll down &#8595;
            <span style={{width:"100%", backgroundColor:"#222222", borderRadius:"999px", height:"5px",} }>
            <div id="footer-scroll-indicator" style={{ position: "relative", height: "4px", backgroundColor:"#1BCFAB", borderRadius:"99999px", width:"0"}} />
</span>

        </div>
        <footer>
            <div>
            Copyright &copy; 2023 TechEthix
            <br/>
                All rights reserved

                <br/>
                Phone number: +44 220993</div>
            <div className="show-on-hover">
               Source of infomation: OpenAI

            </div>
            <div>
                Socials: 
                <br/>
                <span><img src={"https://isaaccomputerscience.org/assets/youtube_icon.svg"} /></span>
                <span><img src={"https://isaaccomputerscience.org/assets/twitter_icon.svg"} /></span>
                <span><img src={"https://isaaccomputerscience.org/assets/facebook_icon.svg"} /></span>
                <span><img src={"https://isaaccomputerscience.org/assets/instagram_icon.svg"} /></span>
            </div>
        </footer>

    </>



}

