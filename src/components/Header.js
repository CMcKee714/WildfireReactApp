import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(
            <React.Fragment>
                <header className="toolbar">
                    <nav className="toolbar_navigation navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toolbar-items"
                            aria-controls="toolbar-items" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        <a href="/"><img src="/assets/images/logo.png" height="160" width="160" /></a>
                        <div className="spacer d-lg-flex d-none"></div>
                        <div className="toolbar_navigation-items" id="toolbar-items">
                            <ul className="navbar-nav mr-auto nav-links">
                                <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li>
                                <li className="nav-item"><a className="nav-link" href="/events">Events</a></li>
                                <li className="nav-item"><a className="nav-link" href="/careers">Careers</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;