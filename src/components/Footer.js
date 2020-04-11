import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="site-footer mt-4 py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Grab a beer, grab a friend, and remember:</h5>
                                <blockquote><p className="mb-0"><span>You don't need a silver fork to eat good food.</span></p>
                                    <footer className="blockquote-footer">Paul Purdhomme</footer>
                                </blockquote>
                            </div>
                            <div className="col col-md-3">
                                <ul className="list-unstyled m-lg-0">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/menu">Menu</a></li>
                                    <li><a href="/events">Events</a></li>
                                    <li><a href="/careers">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col col-md-3">
                                <a className="navbar-brand" href="/">
                                    <img src="/assets/images/logo.png" width="125" height="125" />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
