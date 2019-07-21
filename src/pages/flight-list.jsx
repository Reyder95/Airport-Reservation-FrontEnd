import React from 'react';
import './css/flight-list.css';
import { Link } from 'react-router-dom'
import FlightCard from '../components/flight-card.jsx'

class FlightList extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      filterVisible: false
    }
    
    this.setFilterVisible = this.setFilterVisible.bind(this);
  }
  
  setFilterVisible(e) {
    
    if (this.state.filterVisible == false) {
      this.setState({
        filterVisible: true
      })
    } else {
      this.setState({
        filterVisible: false
      })
    }
  }
  
  render() {
    return(
      <div className="component-flight-list">
        <div className="main-list mt-3">
          <div className="flight-list-header rounded">
            <h2>Flight List</h2>
            
            <hr className="border-secondary"/>
            
            <p>
              <strong>Departing From: </strong> Newark International Airport <br />
              <strong>Arriving At: </strong> O'Hare International Airport
            </p>
          </div>
          
          <hr className="border-secondary" />
          
          <button onClick={this.setFilterVisible} className="btn btn-secondary mb-3 filter-and-sort-button">Filter and Sort</button>
          
          <div className="row">
          
            <div className="col-md-3 col-sm-12 flight-card-filter">
              <div className="filter-and-sort-header">
                <h4 className="pt-2">Filter and Sort</h4>
                <hr className="border-secondary" />
              </div>
              
              <form className={`filter-and-sort-form ${this.state.filterVisible ? 'd-block' : ''}`}>
                <div className="form-group">
                <label className="sortLabel" for="sort-select"><strong>Sort By</strong></label>
                  <select className="form-control" id="sort-select">
                    <option value="price-low">Price (Lowest)</option>
                    <option value="price-high">Price (Highest)</option>
                    <option value="numstops-low">Number of Stops (Lowest)</option>
                    <option value="numstops-high">Number of Stops (Highest)</option>
                    <option value="depart-low">Departure Time (Lowest)</option>
                    <option value="depart-high">Departure Time (Highest)</option>
                    <option value="arrive-low">Arrival Time (Lowest)</option>
                    <option value="arrive-high">Arrival Time (Highest)</option>
                  </select>
                </div>
                
                <div className="row">
                  
                  <div className="col">
                    <p className="mb-2 mt-4"><strong>Number of Stops</strong></p>
                    
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="numstops-checkbox1"/>
                      <label className="form-check-label" for="numstops-checkbox1">Nonstop</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="numstops-checkbox2"/>
                      <label className="form-check-label" for="numstops-checkbox2">2 Stops</label>
                    </div>
                  </div>
                  
                  <div className="col col-md-12">
                    <p className="mb-2 mt-4"><strong>Company</strong></p>
                    
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="company-checkbox1"/>
                      <label className="form-check-label" for="company-checkbox1">United Airlines</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="company-checkbox2"/>
                      <label className="form-check-label" for="company-checkbox2">American Airlines</label>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col col-md-12">
                    <p className="mb-2 mt-4"><strong>Departure Time</strong></p>
                    
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="depart-checkbox1"/>
                      <label className="form-check-label" for="depart-checkbox1">Morning (5:00 AM - 11:59 AM)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="depart-checkbox2"/>
                      <label className="form-check-label" for="depart-checkbox2">Afternoon (12:00 PM - 5:59 PM)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="depart-checkbox3"/>
                      <label className="form-check-label" for="depart-checkbox3">Evening (6:00 PM - 11:59 PM)</label>
                    </div>
                  </div>
                  
                  <div className="col col-md-12 mb-4">
                    <p className="mb-2 mt-4"><strong>Arrival Time</strong></p>
                    
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="arrive-checkbox1"/>
                      <label className="form-check-label" for="arrive-checkbox1">Morning (5:00 AM - 11:59 AM)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="arrive-checkbox2"/>
                      <label className="form-check-label" for="arrive-checkbox2">Afternoon (12:00 PM - 5:59 PM)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="arrive-checkbox3"/>
                      <label className="form-check-label" for="arrive-checkbox3">Evening (6:00 PM - 11:59 PM)</label>
                    </div>
                  </div>
                </div>
              </form>
              
            </div>
          
            <div className="col-md-9 col-sm-12">
              <FlightCard 
                depart="4:30pm"
                arrive="8:00pm"
                length="3h 30m"
                stops="Nonstop"
                company="United Airlines"
                price="700"
              />
            
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
    
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
            
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
              
              <FlightCard 
                depart="4:30pm"
                arrive="8:00pm"
                length="3h 30m"
                stops="Nonstop"
                company="United Airlines"
                price="430"
              />
            
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
    
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
            
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
              
              <FlightCard 
                depart="4:30pm"
                arrive="8:00pm"
                length="3h 30m"
                stops="Nonstop"
                company="United Airlines"
                price="430"
              />
            
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
    
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
            
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
              
              <FlightCard 
                depart="4:30pm"
                arrive="8:00pm"
                length="3h 30m"
                stops="Nonstop"
                company="United Airlines"
                price="430"
              />
            
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
    
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
            
              <FlightCard 
                depart="8:00am"
                arrive="9:00am"
                length="1h 00m"
                stops="2 Stops"
                company="American Airlines"
                price="800"
              />
          </div>
        </div>

        </div>
      </div>
    );
  }
}

export default FlightList;