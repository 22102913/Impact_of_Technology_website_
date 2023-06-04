import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation }
    from 'react-router-dom';

import Home from './pages/Home';
import ComputersInTheWorkForce from './pages/ComputersInTheWorkForce';
import AboutUs from './pages/AboutUs';
import AutomatedDecisionMaking from './pages/AutomatedDecisionMaking';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import EnvironmentalEffects from './pages/EnvironmentalEffects';
import EthicalIssues from './pages/EthicalIssues';

import Account from './pages/Account';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

export default class App extends Component {
    static displayName = App.name;
    static PrevScrollY = 0;
    static MINUTE_MS = 600;

    constructor(props) {
        super(props);

        this.state = { forecasts: [], loading: true };
        

        /*window.onscroll = function (e) {
            var bg = document.getElementById("html-background");

            var scrollSpeed = (Math.abs(window.scrollY - App.PrevScrollY) / window.innerHeight) * 100;
            if (scrollSpeed > 1) { scrollSpeed = 1; }

            var r = scrollSpeed * (27 * 1);
            var g = scrollSpeed * (207 * 1);
            var b = scrollSpeed * (171 * 1);
            console.log(r,g,b);

            var backgroundColor = `rgba(${r},${g},${b},255)`;

            bg.style.setProperty("--bgColour", backgroundColor);

            bg.style.animation = 'html-bg-onScroll 50s forwards';


            App.PrevScrollY = window.scrollY;
            
        }*/


    }
    

    


    componentDidMount() {
        const pageTitle = document.getElementsByClassName('page-title');
        if (pageTitle.length > 0) {
            pageTitle[0].style.top = document.getElementById('nav').offsetTop + "px";
            console.log(document.getElementById('nav').offsetTop + "px");
        }

        


    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderForecastsTable(this.state.forecasts);

        return (

            <>
            <Router>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/about-us" Component={AboutUs} />
                        <Route path="/computers-in-the-work-force" Component={ComputersInTheWorkForce} />
                        <Route path="/automated-decision-making" Component={AutomatedDecisionMaking} />
                        <Route path="/artificial-intelligence" Component={ArtificialIntelligence} />
                        <Route path="/environmental-effects" Component={EnvironmentalEffects }/>
                        <Route path="/ethical-issues" Component={EthicalIssues }/>

                        <Route exact path="/account" Component={() => <Account signedIn={false} />} />

                    </Routes>
                
                </Router>

                <NavBar />
                
                <Footer />
                </>
        );
    }

}
