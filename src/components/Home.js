import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-parallax" />
                <div className="container-fluid welcomeBanner">
                    <h1>Welcome Back!</h1>
                    <h3>We missed you</h3>
                </div>
                <div className="container-fluid homeInfo">
                    <div className="row">
                        <div className="col">
                            <p>643 W Foodie Ave <br /> <br />
                            Grillsville, WI 55555 <br /> <br />
                            AllFiredUp@wildfiregrill.com</p>
                        </div>
                        <div className="col d-lg-inline-block d-none">
                            <p className="p-1 pt-4">
                            Ready for a night out? <br />
                            Don't worry.
                            We'll always be here. <br />
                            After all, what are friends for? <br />
                            Take a look at our menu or reservation section <br />
                            to get 
                            this party started.
                            </p>
                        </div>
                        <div className="col">
                            <p className="p-1 pt-4">
                            Mon-Fri: <br />
                            2:00PM-11:00PM <br />
                            Sat: <br />
                            11:00AM-12:00PM <br />
                            Sun: <br />
                            4:00PM-11:00PM <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid email-banner mt-3">
                    <h1>Get Special Offers</h1>
                    <div className="row">
                        <div className="col-lg-4 col" />
                        <div className="col-4">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-lg-4 col" />
                    </div>
                    <button className="cateringBtn btn">Yes, please!</button>
                </div>
            </div>
        )
    }
}

export default Home;
