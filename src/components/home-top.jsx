import React from 'react'

class HomeTop extends React.Component {
  render() {
    return (
      <div className="component-home-top">
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4 text-light text-center">Aviator Springs</h1>
          <p className="lead text-light text-center mb-3">Find your flight in seconds.</p>
          <form className="flight-form">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="form-group origin">
                    <label className="text-light" for="origin-airport">Origin:</label>
                    <input type="text" className="form-control" id="origin-airport" placeholder="Enter Origin"/>
                  </div>
                </div>
                
                <div className="col-sm">
                  <div className="form-group destination">
                    <label className="text-light" for="destination-airport">Destination:</label>
                    <input type="text" className="form-control" id="destination-airport" placeholder="Enter Destination"/>
                  </div>
                </div>
              </div>
              
              <div className="form-group type">
                <label className="text-light" for="type">Type:</label>
                <select className="form-control" id="type">
                  <option disabled selected value="">Roundtrip or One Way</option>
                  <option value="roundtrip">Roundtrip</option>
                  <option value="oneway">One Way</option>
                </select>
              </div>
              
              <div className="row">
                <div className="col-sm">
                  <div className="form-group departing-date">
                    <label className="text-light" for="departing-date">Departing:</label>
                    <input type="date" className="form-control" id="departing-date"/>
                  </div>
                </div>
                
                <div className="col-sm">
                  <div className="form-group returning-date">
                    <label className="text-light" for="returning-date">Returning:</label>
                    <input type="date" className="form-control" id="departing-date" />
                  </div>
                </div>
              </div>
              <div className="form-group submit">
                <button type="submit" className="btn btn-primary btn-block mt-3">Find Flights!</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default HomeTop;