import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Careers from './Careers';
import Events from './Events';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

class Main extends Component {
    constructor(props){
        super(props)


    }
    render() {

        const HomePage = () => {
            return(
                <Home />
            );
        }

        const MenuPage = () => {
            return(
                <Menu />
            );
        }

        const EventsPage = () => {
            return(
                <Events />
            );
        }

        const CareersPage = () => {
            return(
                <Careers />
            );
        }


        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/menu' component={MenuPage} />
                    <Route path='/events' component={EventsPage} />
                    <Route path='/careers' component={CareersPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;