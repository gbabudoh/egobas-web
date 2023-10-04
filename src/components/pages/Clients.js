import React from 'react';
import './Clients.css'; // Import the CSS file
import Footer from '../../components/Footer'
import clientLogo1 from '../../assets/client-logos/neurophet.png'
import clientLogo2 from '../../assets/client-logos/hamiltons-elebe.png'
import clientLogo3 from '../../assets/client-logos/gen-a-consultansy.png'
import clientLogo4 from '../../assets/client-logos/bayelsa-state.png'
import clientLogo5 from '../../assets/client-logos/delta-state.png'
import clientLogo6 from '../../assets/client-logos/dongbu-hydraulic.png'
import clientLogo7 from '../../assets/client-logos/elebe-institute.png'
import clientLogo8 from '../../assets/client-logos/mulawear.png'


const Client = () => {
  return (
    <div className="client-container">
      <header className="client-banner-bar">OUR CLIENTS</header>
      <div className="message-container">
        <div className="message-box">
          <p>Helping our clients reach their potential.</p>
        </div>
      </div>
      <div className="client-grid">
        {/* Repeat this section for each client */}
        <div className="client-item">
          <img src={clientLogo1} alt="Client Logo" className="client-logo" />
          <p className="client-name">Neurophet<br/>Industry: Medical AI Solutions</p>
        </div>
        <div className="client-item">
          <img src={clientLogo2} alt="Client Logo" className="client-logo" />
          <p className="client-name">Hamiltons Elebe<br/>Industry: Recruitment Agency</p>
          <br/>
        </div>
        <div className="client-item">
          <img src={clientLogo3} alt="Client Logo" className="client-logo" />
          <p className="client-name">Gen A Consultansy<br/>Industry: Services & Training</p>
        </div>
        <div className="client-item">
          <img src={clientLogo4} alt="Client Logo" className="client-logo" />
          <p className="client-name">Bayelsa State Government<br/>Industry: State Government</p>
        </div>
        <div className="client-item">
          <img src={clientLogo5} alt="Client Logo" className="client-logo" />
          <p className="client-name">Delta State Government<br/>Industry: State Government</p>
        </div>
        <div className="client-item">
          <img src={clientLogo6} alt="Client Logo" className="client-logo" />
          <p className="client-name">Dongbu Hydraulic<br/>Industry: Manufacturing</p>
        </div>
        <div className="client-item">
          <img src={clientLogo7} alt="Client Logo" className="client-logo" />
          <p className="client-name">Elebe Institute<br/>Industry: Global Services & Media</p>
        </div>
        <div className="client-item">
          <img src={clientLogo8} alt="Client Logo" className="client-logo" />
          <p className="client-name">Mulawear<br/>Industry: Fashion</p>
        </div>
        {/* Repeat for other clients */}
      </div>

        <Footer/>

    </div>
  );
};

export default Client;
