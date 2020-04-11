import React, { Component } from 'react'

export class Careers extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center my-2 careersHeader">Careers</h1>
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <img src="/assets/images/bartender-smiling.jpg" className="img-fluid" style={{borderRadius: "4px"}} />
                        <h2 className="text-center mt-4" style={{fontFamily: 'Lato'}}>We like people</h2>
                        <h3 className="text-center" style={{fontFamily: 'Lato'}}>Join us!</h3>
                    </div>
                    <div className="col-md-6 mt-4 text-center">
                        <div className="careersPrimary mb-4">
                            <h2>
                            We're always looking for inspiring talent to bring our customers nothing
                            but the best
                            </h2>
                            <img src="/assets/images/sitting-at-bar.jpg" className="mb-4 d-xl-inline-block d-none" width="400px" style={{borderRadius: "4px"}} />
                        </div>
                        <div className="careersSecondary mt-4"><h2>
                            Attach your resume below:</h2> <br /> <br />
                            <input type="file" className="align-center" /> <br /> <br /> <br />
                        <button className="resumeSubmitBtn btn btn-lg">Submit</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Careers;
