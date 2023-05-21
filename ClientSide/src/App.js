import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation }
    from 'react-router-dom';

import Home from './pages/Home';
import ComputersInTheWorkForce from './pages/ComputersInTheWorkForce';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';

import NavBar from './Components/NavBar';


export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);

        this.state = { forecasts: [], loading: true};
    }

    componentDidMount() {
    }

    static renderForecastsTable(forecasts) {

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

                        <Route exact path="/account" Component={() => <Account signedIn={false} />} />
                    </Routes>
                
                </Router>

                <NavBar />
                </>

            //<div>
            //    <h1 id="tabelLabel" >Weather forecast</h1>
            //    <p>This component demonstrates fetching data from the server.</p>
            //    {contents}
            //</div></>
        );
    }

}
