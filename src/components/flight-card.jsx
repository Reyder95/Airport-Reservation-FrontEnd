import React from 'react'
import { Link } from 'react-router-dom'

class FlightCard extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className="component-flight-card mb-3 shadow rounded">
        <div className="row m-0 w-100">
          <div className="col">
            <h6 className="flight-card-time mb-1">{`${this.props.depart} - ${this.props.arrive}`}</h6>
          </div>
          
          <div className="col">
            <p className="flight-card-length mb-1">{`${this.props.length} (${this.props.stops})`}</p>
          </div>
        </div>
        
        <div className="row m-0 w-100">
          <div className="col">
            <p className="flight-card-company">{this.props.company}</p>
          </div>
        </div>
        
        <div className="row m-0">
          <div className="col">
            <p className="flight-card-reviews text-success pb-2">This company has an 8.5 / 10 review score!</p>
          </div>
        </div>
        <h5 className="flight-card-price">${this.props.price}</h5>
      </div>
    );
  }
}

export default FlightCard;