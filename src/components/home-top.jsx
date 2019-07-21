import React from 'react'
import { Redirect } from 'react-router-dom';

class HomeTop extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      origin: '',
      destination: '',
      type: '',
      departing: '',
      returning: '',
      isReturnVisible: false,
      link: ''
    }
    
    this.setOrigin = this.setOrigin.bind(this);
    this.setDestination = this.setDestination.bind(this);
    this.setType = this.setType.bind(this);
    this.setDepartDate = this.setDepartDate.bind(this);
    this.setReturnDate = this.setReturnDate.bind(this);
    
    this.buildLink = this.buildLink.bind(this);
  }
  
  setOrigin(e) {
    this.setState({
      origin: e.target.value
    });
  }
  
  setDestination(e) {
    this.setState({
      destination: e.target.value
    });
  }
  
  setType(e) {
    this.setState({
      type: e.target.value
    });
    
    if (e.target.value === 'oneway') {
      this.setState({
        isReturnVisible: false
      });
    } else {
      this.setState({
        isReturnVisible: true
      });
    }
  }
  
  setDepartDate(e) {
    this.setState({
      departing: e.target.value
    });
  }
  
  setReturnDate(e) {
    this.setState({
      returning: e.target.value
    })
  }
  
  buildLink(e) {
    e.preventDefault();
    let link = '/flight-list';
    
    if(this.state.origin && this.state.destination && this.state.departing && this.state.type) {
      if ((this.state.type === 'roundtrip' && this.state.returning) || (this.state.type === 'oneway' && !(this.state.returning))) {
        link += `?origin=${this.state.origin}&destination=${this.state.destination}&departing=${this.state.departing}&type=${this.state.type}`;
        
        if (this.state.returning) {
          link += `&returning=${this.state.returning}`;
        }
        
        this.setState({
          redirect: true,
          link: link
        });
      } else {
        console.log('PLEASE FILL IN ALL THE VALUES');
      }
    } else {
      console.log('PLEASE FILL IN ALL THE VALUES');
    }
    
    
    
  }
  
  render() {
  
    if (this.state.redirect) {
      return <Redirect push to={this.state.link} />;
    }
    else {
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
                      <label className="text-light" htmlFor="origin-airport">Origin:</label>
                      <input onChange={this.setOrigin} value={this.state.origin} type="text" className="form-control" id="origin-airport" placeholder="Enter Origin"/>
                    </div>
                  </div>
                  
                  <div className="col-sm">
                    <div className="form-group destination">
                      <label className="text-light" htmlFor="destination-airport">Destination:</label>
                      <input onChange={this.setDestination} value={this.state.destination} type="text" className="form-control" id="destination-airport" placeholder="Enter Destination"/>
                    </div>
                  </div>
                </div>
                
                <div className="form-group type">
                  <label className="text-light" htmlFor="type">Type:</label>
                  <select onChange={this.setType} value={this.state.type} className="form-control" id="type">
                    <option disabled value="">Roundtrip or One Way</option>
                    <option value="roundtrip">Roundtrip</option>
                    <option value="oneway">One Way</option>
                  </select>
                </div>
                
                <div className="row">
                  <div className="col-sm">
                    <div className="form-group departing-date">
                      <label className="text-light" htmlFor="departing-date">Departing:</label>
                      <input onChange={this.setDepartDate} value={this.state.departing} type="date" className="form-control" id="departing-date"/>
                    </div>
                  </div>
                  
                  <div className="col-sm">
                    <div className={`form-group returning-date ${this.state.isReturnVisible ? 'd-block' : 'd-none'}`}>
                      <label className="text-light" htmlFor="returning-date">Returning:</label>
                      <input onChange={this.setReturnDate} value={this.state.returning} type="date" className="form-control" id="departing-date" />
                    </div>
                  </div>
                </div>
                <div className="form-group submit">
                <button onClick={this.buildLink} type="submit" className="btn btn-primary btn-block mt-3">Find Flights!</button>
                </div>
              </div>
  
            </form>
          </div>
        </div>
      );
    }
  }
}

export default HomeTop;