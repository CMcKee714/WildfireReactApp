import React, { Component } from 'react';

export class Events extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container form">
                    <form>
                        <h1 className="my-3 eventsHeader">Catering and Reservations</h1>
                        <div className="form-group row">
                            <label htmlFor="firstName" className="col col-form-label">Name</label>
                                <div className="col-md-5">
                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                </div>
                                <div class="col-md-5">
                                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="dateTime" class="col col-form-label">Date and Time</label>
                                <div className="col-md-10">
                                    <input type="datetime-local" className="form-control" id="dateTime" name="dateTime" />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="numGuests" className="col col-form-label">Number of Guests</label>
                            <div class="col-md-10">
                                <input type="number" className="form-control" id="numGuests" name="numGuests" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="location" className="col col-form-label">Event Address (Catering Only)</label>
                            <div className="col-md-10">
                                <input type="address" className="form-control" id="location" name="location" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="comments" class="col col-form-label">Anything else we should know?</label>
                            <div class="col-md-10">
                                <textarea id="comments" name="comments" class="form-control" placeholder="Comments" />
                            </div>
                        </div>
                        <div className="text-center">
                            <button role="button" type="submit" className="btn btn-lg cateringBtn">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="catering-parallax" />
            </React.Fragment>
        )
    }
}

export default Events;
