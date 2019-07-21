import React from 'react';
import './css/home.css'
import HomeTop from '../components/home-top.jsx';
import HomeAlert from '../components/home-alert.jsx';
import HomeAbout from '../components/home-about.jsx';
import Footer from '../components/footer.jsx';

class Home extends React.Component {
  render() {
    return(
      <div className="component-home">
        <HomeTop />
        <HomeAlert />
        <HomeAbout />
        <Footer />
      </div>
    );
  }
}

export default Home;