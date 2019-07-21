import React from 'react'

class Footer extends React.Component {
  render() {
    return(
      <div className="component-footer border-top border-secondary">
        <div className="footer-header">
          <h3 className="text-center mt-2">
            This is a website for showcase and practice by Konstantinos Houtas.
          </h3>
        </div>
        
        <hr className="border-secondary ml-4 mr-4"/>
        
        <div className="row">
           <div className="col text-center">
             <h4>Github Repositories</h4>
             <p>
              <a href="https://github.com/Reyder95/Airport-Reservation-FrontEnd">Front End (Website Design)</a>
             </p>
             
             <p>
              <a href="https://github.com/Reyder95/Airport-Reservation-API">Back End (API)</a>
             </p>
           </div>
            
          <div className="col text-center">
             <h4>Azure DevOps Project</h4>
             <p>
              Full List of Projects (Currently Unavailable)
             </p>
             
             <p>
              <a href="https://dev.azure.com/khoutas98/Airport%20Reservation%20System">Current Project</a>
             </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;